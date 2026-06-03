/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";

const app = express();
const PORT = 3000;

// Database Types
interface UserRecord {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: "student" | " teacher" | "student" | "teacher";
  createdAt: string;
}

interface BillingRecord {
  id: string;
  userId: string;
  plan: string;
  amount: number;
  status: "paid" | "pending" | "unpaid";
  createdAt: string;
}

interface ChatRecord {
  id: string;
  userId: string;
  sessionTitle: string;
  messages: Array<{
    sender: "user" | "assistant";
    text: string;
    timestamp: string;
  }>;
  createdAt: string;
}

interface DatabaseSchema {
  users: UserRecord[];
  billing: BillingRecord[];
  chats: ChatRecord[];
}

// Locate or initialize JSON database in root context
const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "db.json");

// Ensure data folder and empty db exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DB_FILE)) {
  const initialDb: DatabaseSchema = {
    users: [
      {
        id: "demo-user-id",
        name: "Mavlonbek",
        email: "demo@mindsphere.uz",
        passwordHash: crypto.createHash("sha256").update("password123").digest("hex"),
        role: "student",
        createdAt: new Date().toISOString()
      }
    ],
    billing: [
      {
        id: "bill-1",
        userId: "demo-user-id",
        plan: "Premium Access",
        amount: 150000,
        status: "paid",
        createdAt: new Date().toISOString()
      }
    ],
    chats: [
      {
        id: "chat-1",
        userId: "demo-user-id",
        sessionTitle: "Matematika bo'yicha yordam",
        messages: [
          { sender: "user", text: "Salom! Menga hosila topishni tushuntiring.", timestamp: new Date().toISOString() },
          { sender: "assistant", text: "Salom! Albatta, hosila funksiyaning o'zgarish tezligini ko'rsatadi...", timestamp: new Date().toISOString() }
        ],
        createdAt: new Date().toISOString()
      }
    ]
  };
  fs.writeFileSync(DB_FILE, JSON.stringify(initialDb, null, 2), "utf8");
}

// Atomic file system database helpers
function readDb(): DatabaseSchema {
  try {
    const data = fs.readFileSync(DB_FILE, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading database file, returning empty scheme", err);
    return { users: [], billing: [], chats: [] };
  }
}

function writeDb(db: DatabaseSchema) {
  try {
    // Write to a temporary file first then rename to guarantee atomicity and prevent corruption on crash
    const tempFile = DB_FILE + ".tmp";
    fs.writeFileSync(tempFile, JSON.stringify(db, null, 2), "utf8");
    fs.renameSync(tempFile, DB_FILE);
  } catch (err) {
    console.error("Error saving database file", err);
  }
}

// Request parsers & CORS support for mindsphere.space and other testing domains
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }
  next();
});

// Custom authorization handler (Tokens are signed in a simple, fast key-value structure)
const ACTIVE_SESSIONS = new Map<string, string>(); // Token -> UserId

function generateToken(userId: string): string {
  const token = crypto.randomBytes(32).toString("hex");
  ACTIVE_SESSIONS.set(token, userId);
  return token;
}

// Middleware to protect routes and verify the session token
function authenticate(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Avtorizatsiyadan o'tilmagan. Ro'yxatdan o'ting." });
  }
  const token = authHeader.split(" ")[1];
  const userId = ACTIVE_SESSIONS.get(token);
  if (!userId) {
    return res.status(401).json({ error: "Sessiya muddati tugadi yoki yaroqsiz." });
  }
  const db = readDb();
  const user = db.users.find((u) => u.id === userId);
  if (!user) {
    return res.status(401).json({ error: "Foydalanuvchi topilmadi." });
  }
  req.user = user;
  req.token = token;
  next();
}

/**
 * =========================================================================
 * DATABASE API ENDPOINTS
 * =========================================================================
 */

// 1. SIGNUP USER on mindsphere.uz (Auth database storage)
app.post("/api/auth/signup", (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Barcha maydonlarni to'ldiring." });
  }

  const db = readDb();
  const existingUser = db.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existingUser) {
    return res.status(400).json({ error: "Ushbu elektron pochta allaqachon foydalanilmoqda." });
  }

  // Securely hash password using node native crypto to keep compiled package lightweight and error-free
  const passwordHash = crypto.createHash("sha256").update(password).digest("hex");
  const newUser: UserRecord = {
    id: "user-" + crypto.randomUUID(),
    name,
    email: email.toLowerCase(),
    passwordHash,
    role: role === "teacher" ? "teacher" : "student",
    createdAt: new Date().toISOString()
  };

  db.users.push(newUser);
  writeDb(db);

  // Auto-generate session token
  const token = generateToken(newUser.id);

  res.status(201).json({
    message: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
    token,
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    }
  });
});

// 2. SIGNIN USER on mindsphere.uz (Auth database validation)
app.post("/api/auth/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email va parolni kiriting." });
  }

  const db = readDb();
  const user = db.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return res.status(400).json({ error: "Foydalanuvchi topilmadi yoki parol noto'g'ri." });
  }

  const passwordHash = crypto.createHash("sha256").update(password).digest("hex");
  if (user.passwordHash !== passwordHash) {
    return res.status(400).json({ error: "Foydalanuvchi topilmadi yoki parol noto'g'ri." });
  }

  // Generate session token
  const token = generateToken(user.id);

  res.json({
    message: "Tizimga muvaffaqiyatli kirdingiz!",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
});

// 3. RETRIEVE CURRENT USER SESSION DATA
app.get("/api/auth/me", authenticate, (req: any, res) => {
  res.json({
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      createdAt: req.user.createdAt
    }
  });
});

// 4. RETRIEVE USER BILLING DETAILS (To be queried from mindsphere.space)
app.get("/api/billing/user/:userId", (req, res) => {
  const { userId } = req.params;
  const db = readDb();
  const userBills = db.billing.filter((b) => b.userId === userId);
  res.json({ billing: userBills });
});

// Create billing record (Triggered inside mindsphere.space subscription system)
app.post("/api/billing/create", (req, res) => {
  const { userId, plan, amount } = req.body;
  if (!userId || !plan || !amount) {
    return res.status(400).json({ error: "Ma'lumotlar to'liq emas." });
  }

  const db = readDb();
  const newBill: BillingRecord = {
    id: "bill-" + crypto.randomUUID(),
    userId,
    plan,
    amount,
    status: "paid", // Instantly simulated as paid
    createdAt: new Date().toISOString()
  };

  db.billing.push(newBill);
  writeDb(db);

  res.status(201).json({ message: "Billing muvaffaqiyatli yaratildi", billing: newBill });
});

// 5. RETRIEVE USER CHAT HISTORY (To be loaded by mindsphere.space AI interface)
app.get("/api/chats/user/:userId", (req, res) => {
  const { userId } = req.params;
  const db = readDb();
  const userChats = db.chats.filter((c) => c.userId === userId);
  res.json({ chats: userChats });
});

// Save or append chat sequence (Forwarded from mindsphere.space AI workspace interactions)
app.post("/api/chats/save", (req, res) => {
  const { userId, sessionTitle, messages } = req.body;
  if (!userId || !sessionTitle || !messages) {
    return res.status(400).json({ error: "Suhbat tafsilotlari yetishmayapti" });
  }

  const db = readDb();
  const newChat: ChatRecord = {
    id: "chat-" + crypto.randomUUID(),
    userId,
    sessionTitle,
    messages,
    createdAt: new Date().toISOString()
  };

  db.chats.push(newChat);
  writeDb(db);

  res.status(201).json({ message: "Suhbat muvaffaqiyatli saqlandi", chat: newChat });
});

// 6. HEALTH & TESTING SUMMARY ENDPOINT (To verify current data stats)
app.get("/api/admin/info", (req, res) => {
  const db = readDb();
  res.json({
    status: "healthy",
    counts: {
      users: db.users.length,
      billing: db.billing.length,
      chats: db.chats.length
    },
    activeSessions: ACTIVE_SESSIONS.size
  });
});

/**
 * =========================================================================
 * VITE MULTI-STAGE MIDDLEWARE INTENTIONS
 * =========================================================================
 */

async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    // Dynamic import to allow Vite dev dependencies omission in production start commands
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    // Production serving of bundled asset folder
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[MindSphere Server] Running on http://localhost:${PORT}`);
  });
}

bootstrap().catch((err) => {
  console.error("Critical server bootstrap failure", err);
});
