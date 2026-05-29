/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Translations {
  nav: {
    features: string;
    benefits: string;
    pricing: string;
    guide: string;
    faq: string;
    about: string;
    signIn: string;
    signUp: string;
  };
  hero: {
    badge: string;
    h1Line1: string;
    h1Line2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    socialProof: string;
    mockup: {
      url: string;
      dashboard: string;
      myCourses: string;
      explore: string;
      progress: string;
      teams: string;
      aiStatus: string;
      aiTutorTag: string;
      activeLearning: string;
      freeForever: string;
      freeForeverDesc: string;
      domains: {
        biology: string;
        law: string;
        fineArts: string;
        math: string;
        business: string;
        music: string;
      };
    };
  };
  stats: {
    learnersNum: string;
    fieldsNum: string;
    countriesNum: string;
    freePrice: string;
    learnersLabel: string;
    fieldsLabel: string;
    countriesLabel: string;
    freeLabel: string;
  };
  roles: {
    title: string;
    subtitle: string;
    studentTitle: string;
    studentBadge: string;
    studentBullet1: string;
    studentBullet2: string;
    studentBullet3: string;
    studentBullet4: string;
    studentBullet5: string;
    teacherTitle: string;
    teacherBadge: string;
    teacherBullet1: string;
    teacherBullet2: string;
    teacherBullet3: string;
    teacherBullet4: string;
    teacherBullet5: string;
    teacherRevenueCallout: string;
    teamTitle: string;
    teamBadge: string;
    teamBullet1: string;
    teamBullet2: string;
    teamBullet3: string;
    teamBullet4: string;
  };
  leaderboard: {
    title: string;
    live: string;
    footer: string;
    badgeWeek1: string;
    quizzesTitle: string;
    quizzesSubtitle: string;
    quizzesFooter: string;
    q1Title: string;
    q1Status: string;
    q1Prizes: string;
    q2Title: string;
    q2Status: string;
    q2Prizes: string;
    q3Title: string;
    q3Status: string;
    q3Prizes: string;
  };
  benefits: {
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card5Title: string;
    card5Desc: string;
    card6Title: string;
    card6Desc: string;
    passes: {
      freeTitle: string;
      freePrice: string;
      freeSub: string;
      freeFeatures: string[];
      proTitle: string;
      proPrice: string;
      proSub: string;
      proFeatures: string[];
      teamTitle: string;
      teamPrice: string;
      teamSub: string;
      teamFeatures: string[];
      getStarted: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    tabs: {
      ai: string;
      fields: string;
      lang: string;
      access: string;
    };
    ai: {
      title: string;
      desc: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      bullet4: string;
      chatHeader: string;
      chatSub: string;
      msgUser: string;
      msgAi: string;
      chatInput: string;
    };
    fields: {
      count: string;
      domains: { [key: string]: string };
    };
    lang: {
      title: string;
      p1Title: string;
      p1Desc: string;
      p2Title: string;
      p2Desc: string;
      statTitle: string;
      roadmapTitle: string;
    };
    access: {
      c1Title: string;
      c1Desc: string;
      c2Title: string;
      c2Desc: string;
      c3Title: string;
      c3Desc: string;
      c4Title: string;
      c4Desc: string;
      c5Title: string;
      c5Desc: string;
      c6Title: string;
      c6Desc: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    callout: string;
    c1Title: string;
    c1Price: string;
    c1Sub: string;
    c1Features: string[];
    c2Title: string;
    c2Price: string;
    c2Sub: string;
    c2Features: string[];
    c3Title: string;
    c3Price: string;
    c3Sub: string;
    c3Features: string[];
    btnLearner: string;
    btnContributor: string;
    btnSupporter: string;
  };
  guide: {
    title: string;
    subtitle: string;
    step1: string;
    step1Title: string;
    step1Desc: string;
    step2: string;
    step2Title: string;
    step2Desc: string;
    step3: string;
    step3Title: string;
    step3Desc: string;
    portalTitle: string;
    portalDesc: string;
    lmsTitle: string;
    lmsDesc: string;
    visit: string;
  };
  faq: {
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
    q8: string;
    a8: string;
    q9: string;
    a9: string;
    q10: string;
    a10: string;
    q11: string;
    a11: string;
  };
  cta: {
    titleMain: string;
    titleGrad: string;
    subtitle: string;
    btnCreate: string;
    btnPlatform: string;
    bullettext: string;
  };
  footer: {
    desc: string;
    platform: string;
    community: string;
    legal: string;
    c1Link1: string;
    c1Link2: string;
    c1Link3: string;
    c1Link4: string;
    c2Link1: string;
    c2Link2: string;
    c2Link3: string;
    c2Link4: string;
    c3Link1: string;
    c3Link2: string;
    c3Link3: string;
    madeWith: string;
  };
  auth: {
    signIn: string;
    signUp: string;
    email: string;
    password: string;
    fullName: string;
    roleLabel: string;
    roleStudent: string;
    roleStudentDesc: string;
    roleTeacher: string;
    roleTeacherDesc: string;
    btnSubmitIn: string;
    btnSubmitUp: string;
    orLink: string;
  };
  about: {
    heroTitle: string;
    heroSubtitle: string;
    missionTitle: string;
    missionDesc: string;
    storyTitle: string;
    storyDesc1: string;
    storyDesc2: string;
    valuesTitle: string;
    v1Title: string;
    v1Desc: string;
    v2Title: string;
    v2Desc: string;
    v3Title: string;
    v3Desc: string;
    v4Title: string;
    v4Desc: string;
    teamTitle: string;
    teamSub: string;
    t1Role: string;
    t1Bio: string;
    t2Role: string;
    t2Bio: string;
    t3Role: string;
    t3Bio: string;
    ecoTitle: string;
    ecoDesc: string;
    differentTitle: string;
    differentDesc: string;
    timelineTitle: string;
    timelineSub: string;
    joinTitle: string;
    joinDesc: string;
  };
  chat: {
    controlRoom: string;
    autoHelp: string;
    interactivePlay: string;
    typing: string;
    voiceTooltip: string;
    suggestClans: string;
    suggestTasks: string;
    listeningStatus: string;
    defaultAiResponse: string;
    welcomeMsg: string;
    sandboxMsg: string;
    autoplayMsg: string;
  };
  checkout: {
    subscribeTo: string;
    checkoutGateway: string;
    description: string;
    selectedTier: string;
    billingFrequency: string;
    dueNow: string;
    paymentDetails: string;
    cardholderName: string;
    cardNumber: string;
    expiryDate: string;
    btnCancel: string;
    btnConfirm: string;
    successToast: string;
    toastSender: string;
    pricingBadge: string;
    pricingTitle: string;
    pricingSubtitle: string;
    monthly: string;
    annually: string;
    activePlan: string;
    upgradeNow: string;
    bestBooster: string;
    forever: string;
    freeTierDesc: string;
    month: string;
  };
}

export const i18n: { [key: string]: Translations } = {
  en: {
    nav: {
      features: "Features",
      benefits: "For Who",
      pricing: "Pricing",
      guide: "Guide",
      faq: "FAQ",
      about: "About",
      signIn: "Sign In",
      signUp: "Get Started",
    },
    hero: {
      badge: "🌍 Free forever · Open source · 190+ countries",
      h1Line1: "One Platform.",
      h1Line2: "Every Field of Knowledge. For Everyone.",
      subtitle: "MindSphere is an open-source educational Super-App and universal knowledge base combining interactive coding, 142+ disciplines, community clans, wallets, and offline-ready tools inside one cohesive system.",
      ctaPrimary: "Get Started — It's Free →",
      ctaSecondary: "How It Works",
      socialProof: "2.4 million learners worldwide",
      mockup: {
        url: "mindsphere.space",
        dashboard: "Dashboard",
        myCourses: "My Courses",
        explore: "Explore",
        progress: "Progress",
        teams: "Teams",
        aiStatus: "AI Active",
        aiTutorTag: "AI Tutor",
        activeLearning: "Active & learning with you",
        freeForever: "100% Free",
        freeForeverDesc: "All core learning features",
        domains: {
          biology: "Biology",
          law: "Law & Justice",
          fineArts: "Fine Arts",
          math: "Mathematics",
          business: "Business",
          music: "Music Analysis",
        },
      },
    },
    stats: {
      learnersNum: "2.4M+",
      fieldsNum: "142+",
      countriesNum: "190+",
      freePrice: "$0",
      learnersLabel: "Active Learners",
      fieldsLabel: "Fields of Study",
      countriesLabel: "Countries Reached",
      freeLabel: "Cost to Learn",
    },
    roles: {
      title: "Optimized For Every Stage of Learning",
      subtitle: "Whether you're exploring a new hobby, sharing professional expertise, or climbing global leaderboards with a team.",
      studentTitle: "Students & Learners",
      studentBadge: "Unlimited Learner",
      studentBullet1: "Access 48,000+ courses across every discipline",
      studentBullet2: "Personal AI tutor available 24/7 to clear doubts",
      studentBullet3: "Global leaderboard and active forums",
      studentBullet4: "Earn verified micro-certificates & badges",
      studentBullet5: "Join or create local study squads with friends (strictly up to 12 people)",
      teacherTitle: "Teachers & Creators",
      teacherBadge: "Publishing & Hosting",
      teacherBullet1: "Create and deploy unlimited learning paths",
      teacherBullet2: "Publish for free or set custom pricing",
      teacherBullet3: "Keep 90% of course revenue (lowest fee in industry)",
      teacherBullet4: "Rich dashboard with in-depth analytics",
      teacherBullet5: "Get verified teacher status on MindSphere",
      teacherRevenueCallout: "Revenue model: You earn 90% of every paid course sale. MindSphere takes 10% to keep the platform free for learners. Free courses have zero commission.",
      teamTitle: "Teams & Clans (Squads)",
      teamBadge: "Enterprise & Sync",
      teamBullet1: "Establish close-knit co-learning squads (strictly up to 12 people)",
      teamBullet2: "Access private, team-wide analytics",
      teamBullet3: "Compete in weekly team science sprints",
      teamBullet4: "Custom school, university or company workspace",
    },
    leaderboard: {
      title: "Global Leaderboard",
      live: "Live",
      footer: "Updated every 5 min · 2.4M+ participants",
      badgeWeek1: "This week #1",
      quizzesTitle: "Active Quizzes & Prizes",
      quizzesSubtitle: "Weekly challenges run by administration. Completely free to enter and compete.",
      quizzesFooter: "New challenges every week · Open to all worldwide",
      q1Title: "Global Science Challenge",
      q1Status: "Live Now",
      q1Prizes: "$200 + Trophy | 2nd: $80 | 3rd: $30",
      q2Title: "Philosophy & Ethics Sprint",
      q2Status: "Starts in 2 days",
      q2Prizes: "Premium Pass + $100 Prize",
      q3Title: "Team Competition: STEM",
      q3Status: "Starts in 7 days",
      q3Prizes: "Squad Pool $500 + Badges",
    },
    benefits: {
      title: "Engineered for Universal Empowerment",
      subtitle: "A modern alternative to legacy platforms, putting students first with open code and open access.",
      card1Title: "Personal AI Tutor",
      card1Desc: "An AI buddy calibrated to your level, answering questions 24/7 in your chosen language.",
      card2Title: "142+ Disciplines",
      card2Desc: "From molecular chemistry to fine arts and administrative law, standard paths map out easily.",
      card3Title: "Weekly Squad Challenges",
      card3Desc: "Cooperate with your team in timed quizzes to earn points and claim physical trophies.",
      card4Title: "Cash Quizzes",
      card4Desc: "Admin-hosted weekly challenges with real cash distributions, open to every student.",
      card5Title: "Recognition Assets",
      card5Desc: "Showcase persistent badges, profile passes and verified performance stats on GitHub or CVs.",
      card6Title: "Entirely Open Source",
      card6Desc: "No premium paywalls blocking any core knowledge. Codebase is audit-ready and community-led.",
      passes: {
        freeTitle: "Free Tier (Student & Lecturer)",
        freePrice: "$0",
        freeSub: "Basic companion AI & zero fees",
        freeFeatures: [
          "Access to 48,000+ interactive courses",
          "50 daily companion AI tutor requests",
          "Free course creation with 0% commission",
          "Study squads of up to 12 companions",
        ],
        proTitle: "Educator Pro (Creator & Teacher)",
        proPrice: "$15",
        proSub: "Billed annually at $11.25/mo",
        proFeatures: [
          "Publish paid courses (keep 90% revenue)",
          "500 daily requests & advanced analytical dashboards",
          "AI-powered automated syllabus generator",
          "Verified Educator profiles & premium badges",
        ],
        teamTitle: "Aether Premium Pass",
        teamPrice: "$43",
        teamSub: "Billed annually at $32.25/mo",
        teamFeatures: [
          "Strictly 1,000 requests/day & 24/7 Priority Live AI (FUP)",
          "Flat 20% discount on courses (Smart Partnership Model: 0% Platform fee)",
          "+15% Clan XP Boost multiplier for studied sciences",
          "Dynamic avatar borders, chrome glows & status badges",
        ],
        getStarted: "Choose This Plan",
      },
    },
    features: {
      title: "Discover the Deep Interface",
      subtitle: "Inside MindSphere is a suite of AI and learning tools built directly into your browser.",
      tabs: {
        ai: "AI Assistant",
        fields: "All Fields",
        lang: "Languages",
        access: "Access & Tech",
      },
      ai: {
        title: "24/7 Companion AI Tutor",
        desc: "MindSphere integrates an optimized server-side LLM that understands course context, remembers your progress, and guides your curriculum step by step.",
        bullet1: "Instant explanations from basic concepts to advanced logic",
        bullet2: "Personalized practice quizzes generated dynamically",
        bullet3: "Fully integrated into secondary sidebar on the LMS",
        bullet4: "Translates and explains materials in 3 languages instantly",
        chatHeader: "MindSphere AI Tutor",
        chatSub: "Active and learning alongside you",
        msgUser: "Can you explain the cardiac cycle simply and how blood exits?",
        msgAi: "Sure! Think of the heart as a double pump. First, blood gathers in the atria. Then, in systole, the ventricles contract strongly, forcing oxygen-rich blood through the aorta to rest of body!",
        chatInput: "Ask your AI tutor anything...",
      },
      fields: {
        count: "X,XXX+ Courses",
        domains: {
          en_medicine: "Medicine & Health",
          en_law: "Law & Justice",
          en_science: "Natural Sciences",
          en_math: "Mathematics",
          en_engineering: "Engineering",
          en_cs: "Computer Science",
          en_history: "History & Archives",
          en_psychology: "Psychology",
          en_business: "Business & Econ",
          en_arts: "Arts & Design",
          en_music: "Music & Performing",
          en_geography: "Geography",
          en_literature: "Literature & Lang",
          en_physics: "Physics & Astro",
          en_chemistry: "Chemistry",
          en_biology: "Biology & Life",
          en_architecture: "Architecture",
          en_journalism: "Journalism & Media",
          en_politics: "Political Science",
          en_philosophy: "Philosophy & Ethics",
          en_stats: "Data & Statistics",
          en_linguistics: "Linguistics",
          en_sports: "Sports & Physical Ed",
          en_culinary: "Culinary Arts",
        },
      },
      lang: {
        title: "Global Languages & Roadmap",
        p1Title: "Phase 1: Live Now",
        p1Desc: "Full localization, course catalogs, AI agents, and customer support are complete in English, Russian, and Uzbek.",
        p2Title: "Phase 2: Scale (2026/2027)",
        p2Desc: "Translating entire core knowledge catalogs to German, French, Chinese, Japanese, Arabic, Spanish, Hindi, and Portuguese via automated semantic engines.",
        statTitle: "Target Languages",
        roadmapTitle: "Universal Road Expansion",
      },
      access: {
        c1Title: "Fully Responsive",
        c1Desc: "Pixel-perfect performance across mobile screens and large ultra-wide layout grids.",
        c2Title: "Keyboard + Reader",
        c2Desc: "Complies fully with WCAG 2.1 AA benchmarks for keyboard navigation & voice readers.",
        c3Title: "Dual-Theme Matrix",
        c3Desc: "Seamless switching between default dark matrix styles and light lavender pages.",
        c4Title: "Offline Local Buffering",
        c4Desc: "Progress, cached chapters, and markdown textbooks save locally to run during long flights.",
        c5Title: "Privacy First Layouts",
        c5Desc: "No tracking scripts, no ads, GDPR-proof. Your learning paths remain your personal property.",
        c6Title: "Low Bandwidth Engine",
        c6Desc: "Optimized script weights run flawlessly in remote and rural network zones.",
      },
    },
    pricing: {
      title: "Sustainable Tiers For Every Mind",
      subtitle: "Core learning is and will always remain completely free. Access advanced AI capabilities with premium tiers.",
      callout: "Course creation is completely free with 0% commission. Upgrade to higher tiers for advanced reasoning models, subsidized discounts, and extreme profile customisations.",
      c1Title: "Free Tier (Student & Lecturer)",
      c1Price: "$0",
      c1Sub: "For active learners and scholars",
      c1Features: [
        "Unrestricted access to 48,000+ courses",
        "50 daily companion AI tutor requests",
        "Publish & teach courses for free (0% fee)",
        "Study squads of up to 12 companions",
      ],
      c2Title: "Educator Pro (Creator & Teacher)",
      c2Price: "$15/mo",
      c2Sub: "Annual option: $11.25/mo (Save 25%)",
      c2Features: [
        "Publish paid courses (keep 90% revenue)",
        "500 daily requests & advanced analytical dashboards",
        "AI-powered automated syllabus generator",
        "Verified Educator profiles & premium badges",
      ],
      c3Title: "Aether Pass",
      c3Price: "$43/mo",
      c3Sub: "Annual option: $32.25/mo",
      c3Features: [
        "Strictly 1,000 requests/day & 24/7 Priority Live AI (FUP anti-abuse tracking)",
        "Flat 20% course discount (Smart Partnership model: MindSphere 0% fee, Instructor 10%)",
        "+15% Clan XP Boost multiplier for active study squads of up to 12 people",
        "Dynamic science-reactive avatar borders, glows & customizable profile card themes",
      ],
      btnLearner: "Current Plan",
      btnContributor: "Upgrade to Creator",
      btnSupporter: "Acquire Aether Pass",
    },
    guide: {
      title: "Three Simple Steps to Mastery",
      subtitle: "The user journey is minimal and highly efficient. Go from zero to structured learning in under a minute.",
      step1: "01",
      step1Title: "Configure Role",
      step1Desc: "Choose student or creator profile, specify your email and log in under 30 seconds.",
      step2: "02",
      step2Title: "Set Learning Goals",
      step2Desc: "Select subjects or upload a syllabus. Our companion AI plots an interactive custom curriculum path.",
      step3: "03",
      step3Title: "Commit and Compete",
      step3Desc: "Read textbook material, work with AI, complete quizzes with your localized team, and climb charts.",
      portalTitle: "mindsphere.org",
      portalDesc: "You are currently here. This is our community catalog, landing guide, and onboarding station. No registration required.",
      lmsTitle: "mindsphere.space",
      lmsDesc: "Our actual learning platform hosting interactive coding challenges, video lessons by mentors, and databases.",
      visit: "Launch mindSphere.space →",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common queries regarding the platform structure, fees, and security layers.",
      q1: "Is learning truly free on MindSphere?",
      a1: "Yes. All core courses, study summaries, basic AI tutoring, and tournaments are free forever. Premium passes are available for higher daily AI limits.",
      q2: "What subject disciplines are available?",
      a2: "MindSphere currently covers 142 directions — from surgery and civil law to quantum physics, computer science, and practical coding.",
      q3: "How is instructor revenue calculated?",
      a3: "Authors keep 90% of their sales. MindSphere retains a 10% commission cut exclusively to maintain high-speed servers and hosting. Free materials have a 0% platform fee.",
      q4: "What is the difference between mindsphere.org and mindsphere.space domains?",
      a4: "The mindsphere.org domain acts as our public informational guide and portal. The mindsphere.space domain hosts the actual Super-App Learning Management System (LMS) with interactive practice sandboxes.",
      q5: "How do teams, study squads, and leaderboards work?",
      a5: "You can form close-knit study squads of up to 12 people (friends, classmates). Every week, squads complete intellectual sprints to earn points, claim collective XP, and win real cash rewards from the active prize pool.",
      q6: "What does the premium Aether Pass provide?",
      a6: "It expands your daily AI limit to strictly 1,000 requests/day (protected by Fair Use Policy anti-abuse tracking), unlocks 24/7 priority live AI support, grants a flat 20% discount on participating platform courses, provides a +15% XP Boost for your entire squad, and opens up advanced profile customization: dynamic animated avatar borders, custom chrome nickname glows, holographic status badges, and custom cyber profile themes.",
      q7: "How does the Aether Pass 20% discount affect course creators?",
      a7: "It's highly beneficial! To enable this 20% user discount, MindSphere completely waives its 10% platform fee, and instructors contribute just 10% from their end. In exchange, instructors get their courses fast-track listed into the Aether Ecosystem, receiving massive traffic boosts and priority AI-tutor recommendations.",
      q8: "Which languages are supported?",
      a8: "In this phase, both the entire LMS interface and the companion AI fully support Uzbek, Russian, and English with high-quality localized accuracy.",
      q9: "Do I need to download an app on my device?",
      a9: "No, the platform runs completely inside any desktop or mobile browser with offline caching support to keep you learning during flights or when offline.",
      q10: "Will there be native mobile apps for Android and iOS?",
      a10: "Yes! We are actively developing native iOS and Android apps for highly interactive, offline-ready mobile learning. The app store release is slated for later this year.",
      q11: "What makes the Companion AI Tutor truly useful?",
      a11: "Instead of feeding you copy-pasted solutions, it acts as a real mentor: it asks guiding questions, catches logic bugs in your code, uncovers knowledge gaps, and dynamically scales difficulty. On the Aether Pass tier, it is available 24/7 as a priority personal coach.",
    },
    cta: {
      titleMain: "2.4 Million Learners.",
      titleGrad: "Join the Knowledge Sphere Today.",
      subtitle: "Register your free learning profile now and map out any curriculum tailored to your personal schedule.",
      btnCreate: "Create Free Account →",
      btnPlatform: "Go to Platform",
      bullettext: "No credit card required · 100% Free core features · Open source repository",
    },
    footer: {
      desc: "MindSphere is an open-source, non-profit knowledge cooperative empowering individuals to teach and study in a borderless digital catalog.",
      platform: "Platform",
      community: "Community",
      legal: "Legal",
      c1Link1: "Features Catalog",
      c1Link2: "Curriculums Map",
      c1Link3: "LMS Console",
      c1Link4: "Developer API",
      c2Link1: "GitHub Repo",
      c2Link2: "Discord Chat",
      c2Link3: "News Blog",
      c2Link4: "Leaderboards",
      c3Link1: "Privacy Protocol",
      c3Link2: "Terms of Service",
      c3Link3: "Brand Assets",
      madeWith: "Made with ❤️ for curious minds everywhere",
    },
    auth: {
      signIn: "Sign In",
      signUp: "Create Account",
      email: "Email Address",
      password: "Password",
      fullName: "Full Name",
      roleLabel: "Select Your Learning Role",
      roleStudent: "Student",
      roleStudentDesc: "I want to learn skills, pass challenges & climb rankings",
      roleTeacher: "Teacher",
      roleTeacherDesc: "I want to publish interactive courses & earn revenue",
      btnSubmitIn: "Sign In & Enter Dashboard",
      btnSubmitUp: "Create Account & Enter Platform",
      orLink: "Continue directly to mindsphere.space →",
    },
    about: {
      heroTitle: "About MindSphere",
      heroSubtitle: "Our story, mission, and the ecosystem built to unlock universal wisdom.",
      missionTitle: "Our Ultimate Mission",
      missionDesc: "To democratize knowledge for every human on Earth. Free. Open. Forever.",
      storyTitle: "Our Origin & Evolution",
      storyDesc1: "Founded in late 2024 as a grassroots project by an international guild of educators, MindSphere was created in response to rising subscription costs and paywalled academic textbooks.",
      storyDesc2: "We wanted a clean, fast learning matrix with a companion AI that never closes. Today, MindSphere connects 2.4 million active minds across 190+ sovereign countries, running off solar server clouds.",
      valuesTitle: "Core Operating Values",
      v1Title: "100% Free Learning",
      v1Desc: "Access to knowledge must never be locked behind credit checks or tier fees.",
      v2Title: "Open Source Auditability",
      v2Desc: "Our underlying structures are transparent. Any tutor is inspectable on public git repositories.",
      v3Title: "AI-First Pedagogy",
      v3Desc: "Empowering every human with safe, low-cost generative models that act as custom companion coaches.",
      v4Title: "Sovereign Communities",
      v4Desc: "Students study in their choice of tongue, with decentralized local squads steering weekly challenges.",
      teamTitle: "The Team",
      teamSub: "Educators, designers, and software operators coordinating from Zurich, Tashkent, and Tokyo.",
      t1Role: "Executive Director / Zurich",
      t1Bio: "Ex-CERN data specialist advocating for open learning interfaces and decentralized digital libraries.",
      t2Role: "Head of UX & Localisation / Tashkent",
      t2Bio: "Design specialist building responsive accessible grids and establishing regional multi-language engines.",
      t3Role: "AI Architect / Tokyo",
      t3Bio: "Engineering lead focused on safe, server-side semantic translation and low-bandwidth model caching.",
      ecoTitle: "MindSphere Community Hub vs Active Classroom",
      ecoDesc: "The onboarding checkpoint and informational catalog run securely under our community portal (no account required). The active course engines, video routers, and squad metrics sit under our live education platform.",
      differentTitle: "What makes us different from others?",
      differentDesc: "Traditional learning platforms are designed as business-first paywalled silos. MindSphere is built around a serverless, self-sustaining guild model. Our AI instructors explain concepts logically rather than just giving answers, our active scoreboards reward real effort with real team-clashes, we don't track or sell user meta-data, and 90% of our creator fees go straight to verified teachers. Our software runs entirely off-grid, cached locally so you can continue learning even in offline environments.",
      timelineTitle: "Progress Roadmap",
      timelineSub: "A timeline of development goals and language system integrations.",
      joinTitle: "Join Our Digital Guild",
      joinDesc: "Whether writing textbook chapters, proposing alternative UX layouts, or supporting local server charges, you are welcome here.",
    },
    chat: {
      controlRoom: "Control Room:",
      autoHelp: "Auto Help Demo",
      interactivePlay: "Interactive Sandbox (Ask / Speak)",
      typing: "typing...",
      voiceTooltip: "Speech to Text (Voice Input)",
      suggestClans: "Clans",
      suggestTasks: "Daily Tasks",
      listeningStatus: "Listening, microactive...",
      defaultAiResponse: "Amazing query! Mindsphere coordinates 48K courses with daily student clan matches, exercises from high-scored students, and structural teacher channels. Connect with your peers and learn as a cooperative community!",
      welcomeMsg: "Hello! I am MindSphere's cooperative assistant. Ask me about clans, student group chats, daily challenging exercises, or speak up!",
      sandboxMsg: "Sandbox controller activated! Type your own query about competitive clans, group chats, daily exercises, or try the Microphone input.",
      autoplayMsg: "Welcome to Mindsphere classroom! Watch this quick autoplay guide or start typing at any moment!",
    },
    checkout: {
      subscribeTo: "Subscribe to",
      checkoutGateway: "Secure Checkout Gateway",
      description: "You are subscribing to the {tier} plan billed {cycle}. Experience high-tier reasoning engines, live interactive sandboxes, and community benefits.",
      selectedTier: "Selected Tier",
      billingFrequency: "Billing Frequency",
      dueNow: "Due Now",
      paymentDetails: "Payment Details",
      cardholderName: "Cardholder Name",
      cardNumber: "Card Number",
      expiryDate: "MM/YY",
      btnCancel: "Cancel",
      btnConfirm: "Confirm & Unlock",
      successToast: "Congratulations! Your Premium Subscription is fully updated!",
      toastSender: "MindSphere Admin",
      pricingBadge: "Sustainable Pricing Models",
      pricingTitle: "Flexible Tiers for Every Mind",
      pricingSubtitle: "Core learning is and will always remain free. Boost your education or creator royalties with premium features.",
      monthly: "Monthly",
      annually: "Annually",
      activePlan: "Active Plan",
      upgradeNow: "Upgrade Now",
      bestBooster: "Best Booster",
      forever: "forever",
      freeTierDesc: "Absolute free core path limits",
      month: "mo",
    },
  },
  ru: {
    nav: {
      features: "Функции",
      benefits: "Для Кого",
      pricing: "Тарифы",
      guide: "Руководство",
      faq: "Вопросы",
      about: "О нас",
      signIn: "Войти",
      signUp: "Начать",
    },
    hero: {
      badge: "🌍 Бесплатно навсегда · Открытый код · 190+ стран",
      h1Line1: "Единая Платформа.",
      h1Line2: "Любые знания. Для Каждого.",
      subtitle: "MindSphere — это образовательное супер-приложение и универсальная база знаний с открытым кодом, объединяющая интерактивное программирование, 142+ научных направления, кланы сообществ, кошельки и офлайн-инструменты в одной системе.",
      ctaPrimary: "Начать Бесплатно →",
      ctaSecondary: "Как это устроено",
      socialProof: "2.4 миллиона учащихся по всему миру",
      mockup: {
        url: "mindsphere.space",
        dashboard: "Панель",
        myCourses: "Мои курсы",
        explore: "Обзор",
        progress: "Успеваемость",
        teams: "Команды",
        aiStatus: "ИИ Активен",
        aiTutorTag: "ИИ Тьютор",
        activeLearning: "Активен и учится с вами",
        freeForever: "100% Бесплатно",
        freeForeverDesc: "Все базовые функции обучения",
        domains: {
          biology: "Биология",
          law: "Закон и Право",
          fineArts: "Искусство",
          math: "Математика",
          business: "Бизнес",
          music: "Анализ музыки",
        },
      },
    },
    stats: {
      learnersNum: "2.4M+",
      fieldsNum: "142+",
      countriesNum: "190+",
      freePrice: "$0",
      learnersLabel: "Активных студентов",
      fieldsLabel: "Направлений науки",
      countriesLabel: "Охвачено стран",
      freeLabel: "Цена за обучение",
    },
    roles: {
      title: "Оптимизировано для любых целей",
      subtitle: "Изучайте новые дисциплины, делитесь профессиональным опытом или участвуйте в глобальных командных турнирах.",
      studentTitle: "Студентам & Ученикам",
      studentBadge: "Безграничный доступ",
      studentBullet1: "Доступ к 48,000+ курсов по всем дисциплинам",
      studentBullet2: "Персональный ИИ-тьютор круглосуточно решит любые вопросы",
      studentBullet3: "Глобальная таблица лидеров и активные форумы",
      studentBullet4: "Официальные сертифицированные микро-дипломы",
      studentBullet5: "Создавайте локальные учебные отряды (squads) с друзьями (строго до 12 человек)",
      teacherTitle: "Преподавателям & Авторам",
      teacherBadge: "Публикация и Хостинг",
      teacherBullet1: "Создавайте безграничные планы обучения",
      teacherBullet2: "Публикуйте бесплатно или установите свою цену",
      teacherBullet3: "Забирайте 90% дохода от курсов (минимальная комиссия в индустрии)",
      teacherBullet4: "Панель преподавателя с глубокой аналитикой кликов",
      teacherBullet5: "Получите проверенный статус учителя на MindSphere",
      teacherRevenueCallout: "Модель доходов: Вы получаете 90% от продаж курсов. Платформа берет 10% только для оплаты серверов и поддержки бесплатного обучения. На бесплатные курсы комиссия составляет 0%.",
      teamTitle: "Кланы & Команды (Squads)",
      teamBadge: "Бизнес и Синхронизация",
      teamBullet1: "Создавайте тесные учебные отряды со своими близкими друзьями (строго до 12 человек)",
      teamBullet2: "Просматривайте общую синхронную аналитику участников",
      teamBullet3: "Участвуйте в еженедельных научно-технических спринтах",
      teamBullet4: "Пользовательские пространства для вузов и ИТ-компаний",
    },
    leaderboard: {
      title: "Глобальный Рейтинг",
      live: "В эфире",
      footer: "Обновление каждые 5 мин · 2.4M+ участников",
      badgeWeek1: "Топ #1 недели",
      quizzesTitle: "Активные Квизы и Призы",
      quizzesSubtitle: "Еженедельные турниры от администрации. Участие и призы бесплатны.",
      quizzesFooter: "Новые квизы каждую неделю · Открыто для всех стран",
      q1Title: "Глобальный Научный Челлендж",
      q1Status: "Идет сейчас",
      q1Prizes: "$200 + Трофей | 2-й: $80 | 3-й: $30",
      q2Title: "Философия и Этика Спринт",
      q2Status: "Старт через 2 дня",
      q2Prizes: "Premium Pass + приз $100",
      q3Title: "Командный STEM Кубок",
      q3Status: "Старт через 7 дней",
      q3Prizes: "Фонд отряда $500 + Медали",
    },
    benefits: {
      title: "Спроектировано для глобального развития",
      subtitle: "Современная альтернатива закрытым платформам. Доступный код, доступные знания.",
      card1Title: "Личный ИИ-Ассистент",
      card1Desc: "Откалиброванный под ваш темп ИИ, понимающий 3 языка в любое время суток.",
      card2Title: "142+ Дисциплины",
      card2Desc: "От органической химии до истории искусств и конституционного права.",
      card3Title: "Командные забеги",
      card3Desc: "Решайте экспресс-задачи вместе с друзьями для побед в национальных сетках.",
      card4Title: "Кэш Турниры",
      card4Desc: "Каждую неделю разыгрываем денежные гранты и кубки самым активным умам.",
      card5Title: "Проверенные Значки",
      card5Desc: "Интегрируйте цифровые портфолио, профайлы и сертификаты в GitHub или резюме.",
      card6Title: "Открытый Исходный Код",
      card6Desc: "Никаких скрытых платежей за материалы. Код проекта открыт для технического аудита.",
      passes: {
        freeTitle: "Базовый уровень (Студент и Лектор)",
        freePrice: "$0",
        freeSub: "Базовый доступ и нулевая комиссия",
        freeFeatures: [
          "Доступ к 48,000+ интерактивных курсов",
          "50 ИИ-запросов в день от персонального тьютора",
          "Создание и ведение курсов с комиссией платформы 0%",
          "Учебные отряды (squads) до 12 единомышленников",
        ],
        proTitle: "Educator Pro (Преподаватель)",
        proPrice: "$15",
        proSub: "При годовой подписке: $11.25/мес",
        proFeatures: [
          "Продажа платных курсов (вы получаете 90% дохода)",
          "500 ИИ-запросов/день и расширенная аналитика",
          "Автоматический генератор учебных планов на ИИ",
          "Верифицированный профиль Educator Pro",
        ],
        teamTitle: "Aether Premium Pass",
        teamPrice: "$43",
        teamSub: "При годовой подписке: $32.25/мес",
        teamFeatures: [
          "Строго 1,000 ИИ-запросов/день & поддержка 24/7 (FUP от злоупотреблений)",
          "Скидка 20% на курсы-участники (Партнерская модель: MindSphere 0% комиссии)",
          "+15% XP буст опыта клана для всего отряда из 12 участников",
          "Интерактивные научные рамки аватара, хромовые ники, голограммы & темы",
        ],
        getStarted: "Выбрать этот план",
      },
    },
    features: {
      title: "Интерфейс будущего",
      subtitle: "Внутри MindSphere — комплекс умных сервисов, работающих прямо в веб-браузере.",
      tabs: {
        ai: "ИИ Ассистент",
        fields: "Дисциплины",
        lang: "Языки",
        access: "Доступность",
      },
      ai: {
        title: "Круглосуточный ИИ Преподаватель",
        desc: "Компонент на сервере оптимизирован для ведения диалогов, быстрого разбора терминов и создания практических тестов под ваш реальный уровень.",
        bullet1: "Мгновенные разъяснения тем любой сложности",
        bullet2: "Динамическая генерация тестов на лету",
        bullet3: "Встроен в боковую панель платформы LMS",
        bullet4: "Быстро переводит и объясняет формулы",
        chatHeader: "MindSphere ИИ Клуб",
        chatSub: "Анализирует успеваемость",
        msgUser: "Можешь просто объяснить сердечный цикл и выброс крови?",
        msgAi: "Конечно! Представь сердце как насос. Сначала кровь собирается в предсердиях. Затем, в систолу, желудочки сжимаются, с силой выталкивая насыщенную кислородом кровь в аорту ко всему телу!",
        chatInput: "Спросите у ИИ-тьютора что угодно...",
      },
      fields: {
        count: "X,XXX+ Курсов",
        domains: {
          en_medicine: "Медицина и здоровье",
          en_law: "Закон и правосудие",
          en_science: "Естественные науки",
          en_math: "Математика",
          en_engineering: "Инженерия",
          en_cs: "Компьютерные науки",
          en_history: "История и архивы",
          en_psychology: "Психология",
          en_business: "Бизнес и экономика",
          en_arts: "Искусство и дизайн",
          en_music: "Музыкальный анализ",
          en_geography: "География",
          en_literature: "Литература и языки",
          en_physics: "Физика и астрономия",
          en_chemistry: "Химия",
          en_biology: "Биологические науки",
          en_architecture: "Архитектура",
          en_journalism: "Журналистика и медиа",
          en_politics: "Политология",
          en_philosophy: "Философия и этика",
          en_stats: "Статистика и данные",
          en_linguistics: "Лингвистика",
          en_sports: "Спорт и физкультура",
          en_culinary: "Кулинарное искусство",
        },
      },
      lang: {
        title: "Локализация и Дорожная Карта",
        p1Title: "Фаза 1: Доступно уже сейчас",
        p1Desc: "Учебные базы, ИИ и поддержка полностью готовы на английском, русском и узбекском языках.",
        p2Title: "Фаза 2: Масштабирование (2026/2027)",
        p2Desc: "Перевод всех курсов на немецкий, французский, китайский, японский, арабский, испанский, хинди и португальский через авто-семантические модели.",
        statTitle: "Планируемые языки",
        roadmapTitle: "Расширение географии",
      },
      access: {
        c1Title: "Полный адаптив",
        c1Desc: "Оптимальная сетка для мобильных телефонов и ультра-широких десктопных мониторов.",
        c2Title: "Клавиатура + Чтение",
        c2Desc: "Соответствует правилам WCAG 2.1 AA для экранных дикторов и слепого ввода.",
        c3Title: "Две темы оформления",
        c3Desc: "Переключайте интерфейс между космическим темным стилем и лавандовым светлым.",
        c4Title: "Локальный кэш",
        c4Desc: "Все материалы сохраняются в локальное хранилище для чтения в самолете или поезде.",
        c5Title: "Конфиденциальность",
        c5Desc: "Без рекламного шпионажа и слива данных. Результаты тестов принадлежат только вам.",
        c6Title: "Низкий битрейт",
        c6Desc: "Работает даже в отдаленных районах с нестабильным 3G-покрытием.",
      },
    },
    pricing: {
      title: "Гибкие тарифы для каждого",
      subtitle: "Базовое обучение и создание курсов всегда остаются бесплатными. Расширьте свои ИИ-лимиты и косметику профиля.",
      callout: "Создание курсов абсолютно бесплатно с комиссией 0%. Переходите на продвинутые тарифы для работы с мощными ИИ-моделями глубокого рассуждения, субсидированными скидками и кастомизацией.",
      c1Title: "Базовый (Студент и Лектор)",
      c1Price: "$0",
      c1Sub: "Для активной учебы и ведения лекций",
      c1Features: [
        "Неограниченный доступ к 48,000+ курсам",
        "50 ИИ-запросов в день от персонального тьютора",
        "Публикация курсов бесплатно (0% комиссия)",
        "Учебные отряды (squads) до 12 человек",
      ],
      c2Title: "Educator Pro (Преподаватель)",
      c2Price: "$15/мес",
      c2Sub: "При годовой оплате: $11.25/мес (Скидка 25%)",
      c2Features: [
        "Продажа платных курсов (вы получаете 90% дохода)",
        "500 ИИ-запросов в день и глубокая аналитика",
        "Автоматический генератор силлабусов на базе ИИ",
        "Верифицированный статус и профиль Educator Pro",
      ],
      c3Title: "Aether Pass",
      c3Price: "$43/мес",
      c3Sub: "При годовой оплате: $32.25/мес",
      c3Features: [
        "Строго 1,000 ИИ-запросов/день & поддержка 24/7 (FUP с отслеживанием абуза)",
        "Скидка 20% на курсы-участники (Партнерская модель: комиссия MindSphere 0%, автора 10%)",
        "+15% XP умножитель кланового опыта для активных отрядов до 12 человек",
        "Интерактивные научные рамки аватара, хромовые ники, голограммы & темы карт",
      ],
      btnLearner: "Текущий тариф",
      btnContributor: "Стать Создателем",
      btnSupporter: "Активировать Aether Pass",
    },
    guide: {
      title: "Три простых шага",
      subtitle: "Переход от регистрации до первого ИИ-теста занимает менее минуты.",
      step1: "01",
      step1Title: "Выберите роль",
      step1Desc: "Определитесь, будете ли вы учиться или преподавать. Займет 30 секунд.",
      step2: "02",
      step2Title: "Поставьте цели",
      step2Desc: "Укажите темы. Умный помощник в миг скомпилирует интерактивный трек.",
      step3: "03",
      step3Title: "Усердие и Лидерство",
      step3Desc: "Читайте конспекты с ИИ, проходите тесты взводом и выигрывайте призы.",
      portalTitle: "mindsphere.org",
      portalDesc: "Вы находитесь здесь. Это информационный путеводитель, каталог проекта и промо-страница проекта.",
      lmsTitle: "mindsphere.space",
      lmsDesc: "Действующая образовательная платформа с интерактивными вызовами, видеоуроками и практикой.",
      visit: "Запустить mindSphere.space →",
    },
    faq: {
      title: "Частые Вопросы",
      subtitle: "Ответы на популярные вопросы о комиссиях, тамах и безопасности данных.",
      q1: "Правда ли обучение на MindSphere бесплатно?",
      a1: "Да. Все базовые интерактивные курсы, ИИ-тьютор, олимпиадные спринты и хакатоны абсолютно бесплатны навсегда. Платные подписки расширяют дневной лимит запросов к ИИ.",
      q2: "Какие направления наук представлены?",
      a2: "Платформа MindSphere охватывает 142 направления — от хирургии и гражданского права до квантовой физики, программирования и ИТ.",
      q3: "Как рассчитывается прибыль преподавателей?",
      a3: "Авторы получают 90% стоимости продаж своих курсов. Платформа MindSphere удерживает комиссию 10% только для хостинга и оплаты мощностей быстрых серверов. Для бесплатных курсов комиссия составляет 0%.",
      q4: "Чем отличаются домены mindsphere.org и mindsphere.space?",
      a4: "Домен mindsphere.org выполняет роль информационного портала проекта. На домене mindsphere.space развернуто СУО (LMS) супер-приложение с песочницами для программирования и интерактивными курсами.",
      q5: "Как работают команды, кланы и рейтинги?",
      a5: "Вы можете объединяться в тесные учебные отряды (squads) строго до 12 человек (друзья, коллеги). Каждую неделю отряды участвуют в командных спринтах, зарабатывают опыт (XP) и делят денежные призы из призового фонда.",
      q6: "Что дает премиальный Aether Pass?",
      a6: "Расширяет лимит строго до 1,000 ИИ-запросов/день (с защитой от абуза Fair Use Policy), открывает приоритетную ИИ-поддержку 24/7, дает 20% скидку на платные курсы, +15% XP буст опыта клана для всего вашего отряда из 12 человек, а также премиум-кастомизацию профиля: динамические рамки аватара, хромовые ники, голографические значки статуса и кибер-дизайн профильной карточки.",
      q7: "Как скидка 20% по подписке Aether Pass влияет на доходы авторов?",
      a7: "Это исключительно выгодно для авторов! Чтобы пользователь получил скидку 20%, MindSphere полностью обнуляет свою комиссию платформы (до 0%), а автор уступает всего 10%. За это курсы авторов продвигаются по приоритетной программе в экосистеме Aether, обретая колоссальный органический трафик от платежеспособной аудитории.",
      q8: "Какие языки поддерживаются?",
      a8: "На этом этапе вся платформа, включая интерактивного ИИ-помощника, полностью поддерживает узбекский, русский и английский языки с высоким качеством локализации.",
      q9: "Нужно ли скачивать приложение?",
      a9: "Нет, сервис работает прямо в любом современном браузере на мобильном и ПК. Для автономного обучения можно активировать локальное офлайн-кэширование.",
      q10: "Будут ли нативные мобильные приложения для Android и iOS?",
      a10: "Да! Мы ведем разработку нативных приложений для iOS и Android с поддержкой интерактивного офлайн-обучения. Релиз в маркетах запланирован на конец этого года.",
      q11: "В чем реальная польза ИИ-Тьютора?",
      a11: "Он не дает готовые скопированные ответы, а выступает в роли ментора: задает наводящие вопросы, выявляет пробелы в знаниях, находит баги в вашем коде и адаптирует сложность под ваш уровень. В подписке Aether Pass он доступен 24/7 в приоритетном режиме.",
    },
    cta: {
      titleMain: "2.4 млн пользователей.",
      titleGrad: "Присоединяйтесь к экосистеме уже сегодня.",
      subtitle: "Зарегистрируйте личный профиль за полминуты и составьте свой интерактивный план обучения.",
      btnCreate: "Создать профиль →",
      btnPlatform: "Перейти на платформу",
      bullettext: "Без кредитных карт · Нулевой порог · Открытый исходный код",
    },
    footer: {
      desc: "MindSphere — это открытый глобальный кооператив знаний, позволяющий каждому учиться и преподавать бесплатно без цифровых барьеров.",
      platform: "Платформа",
      community: "Общество",
      legal: "Инфо",
      c1Link1: "Разделы науки",
      c1Link2: "Карта дисциплин",
      c1Link3: "Консоль LMS",
      c1Link4: "API разработчиков",
      c2Link1: "Репозиторий GitHub",
      c2Link2: "Discord сервер",
      c2Link3: "Наш Блог",
      c2Link4: "Рейтинги вузов",
      c3Link1: "Политика данных",
      c3Link2: "Условия оферты",
      c3Link3: "Логотипы платформы",
      madeWith: "Разработано с ❤️ для всех любознательных умов мира",
    },
    auth: {
      signIn: "Войти в систему",
      signUp: "Создать аккаунт",
      email: "Электронная почта",
      password: "Пароль",
      fullName: "Полное имя",
      roleLabel: "Выберите вашу роль",
      roleStudent: "Студент",
      roleStudentDesc: "Хочу учиться, проходить тесты и расти в рейтинге",
      roleTeacher: "Преподаватель",
      roleTeacherDesc: "Хочу создавать курсы и получать заработок 90%",
      btnSubmitIn: "Войти в систему",
      btnSubmitUp: "Создать профиль и войти",
      orLink: "Продолжить сразу на mindsphere.space →",
    },
    about: {
      heroTitle: "О проекте MindSphere",
      heroSubtitle: "Наша история, цели и образовательная платформа будущего.",
      missionTitle: "Главная миссия",
      missionDesc: "Сделать мировые научные знания доступными каждому бесплатно. Открыто. Навсегда.",
      storyTitle: "История и Развитие",
      storyDesc1: "Запущенный в конце 2024 года группой независимых профессоров, MindSphere стал ответом на удорожание учебников и скрытые подписки в EdTech платформах.",
      storyDesc2: "Мы создали легкий и быстрый сервис с умным ИИ на базе серверов с солнечной энергией. В данный момент у нас зарегистрировано более 2.4 млн человек из 190 стран.",
      valuesTitle: "Наши принципы",
      v1Title: "Бесплатное образование",
      v1Desc: "Доступ к фундаментальной информации — право, а не платная привилегия.",
      v2Title: "Прозрачный код",
      v2Desc: "Вся логика и учебные скрипты лежат в открытом виде для всеобщей проверки.",
      v3Title: "Приоритет ИИ",
      v3Desc: "Каждому человеку на Земле должен помогать усердный круглосуточный ИИ-ассистент.",
      v4Title: "Локальные клубы",
      v4Desc: "Обучение эффективно в группах, поэтому мы инвестируем в командные соревнования.",
      teamTitle: "Наша Команда",
      teamSub: "Учителя, инженеры и дизайнеры, координирующие работу из Цюриха, Ташкента и Токио.",
      t1Role: "Исполнительный директор / Цюрих",
      t1Bio: "Бывший сотрудник CERN, борец за открытые цифровые библиотеки и архивы.",
      t2Role: "Руководитель UX / Ташкент",
      t2Bio: "Дизайнер интерфейсов, архитектор 3-языкового адаптивного портала.",
      t3Role: "ИИ-Инженер / Токио",
      t3Bio: "Разрабатывает легковесные модули кэширования для работы без интернета.",
      ecoTitle: "Информационный портал и СУО (LMS)",
      ecoDesc: "Вводный чекпойнт и информационный каталог работают безопасно на нашем открытом портале (аккаунт не требуется). Активные курсы, видеостримы и командные метрики находятся внутри нашей выделенной обучающей СУО (LMS).",
      differentTitle: "Что отличает нас от других?",
      differentDesc: "Традиционные образовательные платформы устроены как платный бизнес за закрытыми стенами. MindSphere построена по принципу самодостаточной цифровой гильдии. Наши ИИ-тьюторы логически объясняют темы, вместо того чтобы просто давать готовые ответы; наши живые рейтинги вознаграждают реальные усилия командными битвами; мы не собираем и не продаем персональные данные; а 90% авторских гонораров идут напрямую проверенным преподавателям. Кроме того, наша СУО полностью автономна и кэшируется локально — вы можете учиться даже без доступа к интернету.",
      timelineTitle: "План развития",
      timelineSub: "График интеграции новых языковых баз.",
      joinTitle: "Присоединяйтесь к гильдии",
      joinDesc: "Мы рады авторам лекций, переводчикам, дизайнерам и разработчикам со всех стран.",
    },
    chat: {
      controlRoom: "Панель управления:",
      autoHelp: "Авто-презентация",
      interactivePlay: "Интерактивная песочница",
      typing: "пишет...",
      voiceTooltip: "Голосовой ввод (Голос в Текст)",
      suggestClans: "Кланы",
      suggestTasks: "Сложные задачи",
      listeningStatus: "Слушаю, микрофон активен...",
      defaultAiResponse: "Интересный вопрос! На платформе MindSphere доступно 48 000+ бесплатных курсов, ежедневные битвы кланов, упражнения от лучших учеников и прямое общение с преподавателями.",
      welcomeMsg: "Привет! Я умный ассистент MindSphere. Спросите про кланы, групповое общение, ежедневные сложные задачи или скажите голосом!",
      sandboxMsg: "Режим песочницы включен! Напишите свой вопрос про кланы, чаты или сложные задачи, либо скажите в микрофон.",
      autoplayMsg: "Добро пожаловать в класс Mindsphere! Посмотрите авто-презентацию или начните вводить в любой момент!",
    },
    checkout: {
      subscribeTo: "Подписка на",
      checkoutGateway: "Безопасный платежный шлюз",
      description: "Вы подписываетесь на тариф {tier} с оплатой {cycle}. Получите продвинутые модели логического ИИ, интерактивные песочницы и преимущества сообщества.",
      selectedTier: "Выбранный тариф",
      billingFrequency: "Периодичность оплаты",
      dueNow: "К оплате",
      paymentDetails: "Способ оплаты",
      cardholderName: "Имя на карте",
      cardNumber: "Номер карты",
      expiryDate: "ММ/ГГ",
      btnCancel: "Отмена",
      btnConfirm: "Подтвердить оплату",
      successToast: "Поздравляем! Ваша премиум-подписка успешно активирована!",
      toastSender: "Администрация MindSphere",
      pricingBadge: "Справедливое ценообразование",
      pricingTitle: "Тарифная сетка для каждого",
      pricingSubtitle: "Базовые учебные материалы всегда бесплатны. Расширяйте свой профиль или увеличивайте авторские отчисления с премиум-аккаунтом.",
      monthly: "Ежемесячно",
      annually: "Ежегодно",
      activePlan: "Текущий тариф",
      upgradeNow: "Подключить тариф",
      bestBooster: "Лучший выбор",
      forever: "навсегда",
      freeTierDesc: "Базовый доступ без ограничений",
      month: "мес",
    },
  },
  uz: {
    nav: {
      features: "Imkoniyatlar",
      benefits: "Kim Unutilgan",
      pricing: "Narxlar",
      guide: "Qo'llanma",
      faq: "Savollar",
      about: "Biz haqimizda",
      signIn: "Kirish",
      signUp: "Boshlash",
    },
    hero: {
      badge: "🌍 Umrbod bepul · Ochiq kod · 190+ davlat",
      h1Line1: "Yagona Platforma.",
      h1Line2: "Har qanday bilim. Har bir inson uchun.",
      subtitle: "MindSphere — bu interaktiv dasturlash, 142 dan ortiq fan yo'nalishlari, jamoaviy klanlar, hamyonlar va oflayn foydalanish vositalarini yagona tizimda birlashtirgan ochiq kodli super-ilova hamda universal bilimlar bazasidir.",
      ctaPrimary: "Bepul Boshlash →",
      ctaSecondary: "Qanday ishlaydi",
      socialProof: "Butun dunyo bo'ylab 2.4 million faol o'quvchi",
      mockup: {
        url: "mindsphere.space",
        dashboard: "Boshqaruv",
        myCourses: "Kurslarim",
        explore: "Kashf etish",
        progress: "Natijalar",
        teams: "Jamoalar",
        aiStatus: "AI Faol",
        aiTutorTag: "AI Tutor",
        activeLearning: "Siz bilan birga o'rganadi",
        freeForever: "100% Bepul",
        freeForeverDesc: "Barcha asosiy o'quv funksiyalari",
        domains: {
          biology: "Biologiya",
          law: "Qonun va Huquq",
          fineArts: "Tasviriy San'at",
          math: "Matematika",
          business: "Biznes",
          music: "Musiqa tahlili",
        },
      },
    },
    stats: {
      learnersNum: "2.4M+",
      fieldsNum: "142+",
      countriesNum: "190+",
      freePrice: "$0",
      learnersLabel: "Faol talaba",
      fieldsLabel: "Fan yo'nalishlari",
      countriesLabel: "Qamrab olingan davlatlar",
      freeLabel: "O'qish narxi",
    },
    roles: {
      title: "Har Qanday Bosqich Uchun Moslashtirilgan",
      subtitle: "Yangi sohani o'rganayotgan bo'lsangiz ham, kasbiy tajriba ulashayotgan bo'lsangiz ham, yoki jamoada chempionatda qatnashsangiz ham.",
      studentTitle: "Talabalar & O'quvchilar",
      studentBadge: "Cheksiz foydalanish",
      studentBullet1: "48,000 dan ortiq bepul kurslardan foydalanish",
      studentBullet2: "24/7 ishlaydigan shaxsiy AI tutor barcha savollarga javob beradi",
      studentBullet3: "Global reyting va faol o'quvchilar forumi",
      studentBullet4: "Tasdiqlangan mikrosertifikatlarni olish imkoniyati",
      studentBullet5: "Do'stlar bilan kichik o'quv guruhlarini (squads) tuzish (qat'iyan 12 kishigacha)",
      teacherTitle: "O'qituvchilar & Mualliflar",
      teacherBadge: "Nashr va Server",
      teacherBullet1: "Cheklanmagan miqdorda darsliklar yaratish",
      teacherBullet2: "Bepul yoki pulli kirish narxini o'rnatish",
      teacherBullet3: "Har bir sotuvdan 90% daromad saqlab qolish (eng past komissiya)",
      teacherBullet4: "To'liq interaktiv o'quvchilar tahlili paneli",
      teacherBullet5: "MindSphere platformasida rasmiy o'qituvchi maqomini olish",
      teacherRevenueCallout: "Daromad modeli: Siz pullik darsingizning 90% daromadini olasiz. Platforma bepul o'quvchilarni qo'llab-quvvatlash uchun faqat 10% ushlab qoladi. Bepul kurslarda komissiya 0%.",
      teamTitle: "Klanlar & Jamoalar (Squads)",
      teamBadge: "Tashkilot & Sinxr",
      teamBullet1: "Kichik va jipslashgan o'quv klanlarini shakllantirish (qat'iyan 12 kishigacha)",
      teamBullet2: "Birgalikda guruh tahlillarini ko'rish",
      teamBullet3: "Har haftalik ilmiy baxs-munozaralarda qatnashish",
      teamBullet4: "Universitet va IT kompaniyalar uchun maxsus muhit",
    },
    leaderboard: {
      title: "Global Reyting",
      live: "Jonli efir",
      footer: "Har 5 min yangilanadi · 2.4M+ ishtirokchi",
      badgeWeek1: "Hafta #1 reytingi",
      quizzesTitle: "Faol Viktorina va Sovrinlar",
      quizzesSubtitle: "Ma'muriyat tomonidan o'tkaziladigan haftalik tanlovlar. Ishtirok etish mutlaqo bepul.",
      quizzesFooter: "Har hafta yangi baxs-savollar · Butun dunyoga ochiq",
      q1Title: "Global Ilmiy Chellenj",
      q1Status: "Hozir faol",
      q1Prizes: "$200 + Kubok | 2-chi: $80 | 3-chi: $30",
      q2Title: "Falsafa va Etika Sprint",
      q2Status: "2 kundan keyin start",
      q2Prizes: "Premium Pass + $100 mukofot",
      q3Title: "STEM Jamoaviy Kubogi",
      q3Status: "7 kundan keyin start",
      q3Prizes: "Jamoa fondi $500 + Medallar",
    },
    benefits: {
      title: "Umumiy Rivojlanish Uchun Ishlab Chiqilgan",
      subtitle: "Eski yopiq tizimlarning zamonaviy ochiq muqobili.",
      card1Title: "Shaxsiy AI Tutor",
      card1Desc: "Sizning tezligingizga moslashtirilgan, 24/7 har qanday tilda javob beruvchi yordamchi.",
      card2Title: "142+ Bilim Sohalari",
      card2Desc: "Molekulyar kimyodan tortib tarix va konstitutsiyaviy huquqgacha bo'lgan darsliklar.",
      card3Title: "Jamoaviy Musobaqalar",
      card3Desc: "Do'stlaringiz bilan birgalikda haftalik intellektual janglarda ochko yig'ing.",
      card4Title: "Pul Sovrinlari",
      card4Desc: "Faol va tirishqoq talabalar uchun har hafta pul mukofotlari va kuboklar tarqatiladi.",
      card5Title: "Tasdiqlangan Belgilar",
      card5Desc: "Profil belgilari, sertifikatlar va natijalarni GitHub yoki rezyumega ulash imkoniyati.",
      card6Title: "To'liq Ochiq Kod",
      card6Desc: "Hech qanday bosqich pulli to'siq bilan yopilmagan. Kod va tizim to'liq shaffof.",
      passes: {
        freeTitle: "Tekinga (Talaba & Ma'ruzachi)",
        freePrice: "$0",
        freeSub: "Asosiy kirish va kuniga 50 ta AI-so'rovlar",
        freeFeatures: [
          "48,000 dan ortiq interaktiv kurslar",
          "Kuniga 50 ta shaxsiy AI tutor so'rovlari",
          "0% komissiya bilan bepul kurs yaratish",
          "Yaqin do'stlar jamoasi (ko'pi bilan 12 kishi)",
        ],
        proTitle: "Educator Pro (Muallif)",
        proPrice: "$15",
        proSub: "Yillik to'lovda: $11.25/oyiga",
        proFeatures: [
          "Pullik darslarni sotish (90% daromad muallifga)",
          "Kuniga 500 ta AI so'rovi va boy tahlillar",
          "Avtomatlashtirilgan sun'ий intellektli dars rejasi",
          "Tasdiqlangan 'Educator Pro' rasmiy belgisi",
        ],
        teamTitle: "Aether Premium Pass",
        teamPrice: "$43",
        teamSub: "Yillik to'lovda: $32.25/oyiga",
        teamFeatures: [
          "Qat'iyan kuniga 1,000 so'rov + 24/7 tezkor AI yordam (FUP himoyasi)",
          "Ekotizim kurslariga 20% chegirma (Aqlli Hamkorlik: platforma 0%, muallif 10%)",
          "+15% XP klan tajribasi ko'paytirgichi (ko'pi bilan 12 kishilik guruh uchun)",
          "Fanga moslashuvchi ramkalar, porlovchi niklar va golografik belgilar",
        ],
        getStarted: "Ushbu tarifni tanlash",
      },
    },
    features: {
      title: "Kelajak Interfeysi",
      subtitle: "MindSphere ichida — brauzeringizning o'zida ishlaydigan intellektual tizim poydevori.",
      tabs: {
        ai: "AI Tutor",
        fields: "Fan Sohalari",
        lang: "Tillar",
        access: "Qulaylik",
      },
      ai: {
        title: "24/7 Shaxsiy AI Professor",
        desc: "Server darslik kontentini tushunadigan, xotira va tahlil bazasiga ega bo'lgan kuchli model bilan jihozlangan.",
        bullet1: "Murakkab mavzularni bir soniyada tushuntirish",
        bullet2: "Siz uchun maxsus amaliy savollarni yaratish",
        bullet3: "LMS tizimining yon paneliga o'rnatilgan interfeys",
        bullet4: "Matnlar va formulalarni tezda o'zbek tiliga o'giradi",
        chatHeader: "MindSphere AI Club",
        chatSub: "O'qish jarayoningizni baholaydi",
        msgUser: "Yurak qisqarishi va qon chiqishini oddiy qilib tushuntirib bera olasizmi?",
        msgAi: "Albatta! Yurakni qo'shaloq nasos deb tasavvur qiling. Avval qon bo'lmalarda yig'iladi. Keyin sistola paytida qorinchalar qattiq qisqaradi va kislorodga boy qonni aorta orqali butun tanaga yuboradi!",
        chatInput: "AI professordan so'rang...",
      },
      fields: {
        count: "X,XXX+ Kurslar",
        domains: {
          en_medicine: "Tibbiyot va Sog'liq",
          en_law: "Qonunchilik va Adliya",
          en_science: "Tabiiy Fanlar",
          en_math: "Matematika",
          en_engineering: "Muhandislik",
          en_cs: "Komppyuter Ilmlari",
          en_history: "Tarix va Arxivlar",
          en_psychology: "Psixologiya",
          en_business: "Biznes va Iqtisodiyot",
          en_arts: "San'at va Dizayn",
          en_music: "Musiqa tahlili",
          en_geography: "Geografiya",
          en_literature: "Adabiyot va Tillar",
          en_physics: "Fizika va Astronomiya",
          en_chemistry: "Kimyo",
          en_biology: "Biologiya ilmlari",
          en_architecture: "Arxitektura",
          en_journalism: "Jurnalistika va Media",
          en_politics: "Siyosatshunoslik",
          en_philosophy: "Falsafa va Etika",
          en_stats: "Statistika va Ma'lumot",
          en_linguistics: "Tilshunoslik",
          en_sports: "Sport va Jismoniy tarbiya",
          en_culinary: "Pazandachilik san'ati",
        },
      },
      lang: {
        title: "Global Tillar va Reja",
        p1Title: "1-Bosqich: Hozir ishga tushgan",
        p1Desc: "Darsliklar, AI va qo'llab-quvvatlash tizimi ingliz, rus va o'zbek tillarida to'liq ishlamoqda.",
        p2Title: "2-Bosqich: Kengayish (2026/2027)",
        p2Desc: "Barcha kurslarni nemis, fransuz, xitoy, yapon, arab, ispan va portugal tillariga avtomatik ravishda o'girish.",
        statTitle: "Mo'ljallangan tillar",
        roadmapTitle: "Universal kengayish",
      },
      access: {
        c1Title: "Moslashuvchan dizayn",
        c1Desc: "Mobil ekranlar va katta monitorlarda mukammal ishlaydigan interfeys.",
        c2Title: "Klaviatura + Ovoz",
        c2Desc: "WCAG 2.1 AA talablariga mos, ovozli o'quvchilar va ko'zi ojizlar uchun tayyorlangan.",
        c3Title: "Ikki xil mavzu",
        c3Desc: "To'q qora kosmik dizayn va ochiq lavanda ranglari o'rtasida oson o'tish.",
        c4Title: "Lokal keshlash",
        c4Desc: "Barcha darslik va matnlar internet bo'lmaganda ham foydalanish uchun lokal saqlanadi.",
        c5Title: "Maxfiylik birinchi o'rinda",
        c5Desc: "Hech qanday reklama josusligi va ma'lumotlarni sotish yo'q. Natijalar faqat sizniki bo'lib qoladi.",
        c6Title: "Past tezlikda ham tezkor",
        c6Desc: "Chekka va qishloq hududlarida ham past tarmoq tezligida mukammal muloqot.",
      },
    },
    pricing: {
      title: "Har bir ong uchun mos tariflar",
      subtitle: "Asosiy ta'lim va dars yaratish har doim mutlaqo bepul qoladi. Premium darajalar bilan AI-imkoniyatlarni kengaytiring.",
      callout: "Kurs yaratish 0% komissiya bilan mutlaqo bepul. Chuqur fikrlovchi kuchli AI-modellari bilan ishlash, platforma subsidiyasi va profil kastomizatsiyalari bilan ishlash uchun tarifni yangilang.",
      c1Title: "Tekinga (Talaba & Ma'ruzachi)",
      c1Price: "$0",
      c1Sub: "Faol dars o'tish va bilim olish uchun",
      c1Features: [
        "48,000 dan ortiq kurslarni cheksiz o'rganish",
        "Kuniga 50 ta shaxsiy AI tutor so'rovlari",
        "Darslarni mutlaqo bepul (0% to'lov) nashr etish",
        "Yaqin do'stlar jamoasi (max 12 kishi)",
      ],
      c2Title: "Educator Pro (Muallif)",
      c2Price: "$15/oy",
      c2Sub: "Yillik to'lovda: $11.25/oy (25% tejang)",
      c2Features: [
        "Pullik darslarni o'ting (sotuvdan 90% daromad sizga)",
        "Kuniga 500 ta AI so'rovi va boy tahlillar",
        "Avtomatlashtirilgan sun'iy intellektli dars rejasi",
        "Tasdiqlangan o'qituvchi statusi va profili",
      ],
      c3Title: "Aether Pass",
      c3Price: "$43/oy",
      c3Sub: "Yillik to'lovda: $32.25/oy",
      c3Features: [
        "Qat'iyan kuniga 1,000 AI so'rovi + 24/7 tezkor xizmat (FUP himoyalangan)",
        "Darslar uchun 20% mutlaq chegirma (Aqlli Hamkorlik: platforma komissiyasi 0%, muallif 10%)",
        "+15% XP klan tajribasi ko'paytirgichi (ko'pi bilan 12 kishilik faol guruhlar uchun)",
        "Fan yo'nalishiga qarab o'zgaruvchi interaktiv hoshiyalar, porlovchi nik va kiber profil",
      ],
      btnLearner: "O'qishni boshlash",
      btnContributor: "Yaratuvchiga o'tish",
      btnSupporter: "Aether Pass Olish",
    },
    guide: {
      title: "Uchta Oddiy Qadam",
      subtitle: "Kirishdan darslarni boshlashgacha o'rtacha yarim daqiqa vaqt ketadi.",
      step1: "01",
      step1Title: "Rolni sozlash",
      step1Desc: "Talaba yoki o'qituvchi bo'lishni tanlang va elektron pochtani yozing. 30 soniya.",
      step2: "02",
      step2Title: "Maqsadlarni belgilash",
      step2Desc: "Sohalarni tanlang. Sun'iy intellekt darslar rejasini darslik shakliga keltiradi.",
      step3: "03",
      step3Title: "Harakat va G'alaba",
      step3Desc: "Darslarni o'qing, kross-testlarni jamoa bilan yeching va kuboklarni yutib oling.",
      portalTitle: "mindsphere.org",
      portalDesc: "Siz ayni paytda shu yerdasiz. Bu bizning ommaviy reytingimiz, qo'llanma va boshlang'ich saytimiz.",
      lmsTitle: "mindsphere.space",
      lmsDesc: "Haqiqiy o'quv darslari, interaktiv vazifalar va amaliy kodlash qum qutilari joylashgan tizim.",
      visit: "mindSphere.space saytini ochish →",
    },
    faq: {
      title: "Tez-Tez beriladigan Savollar",
      subtitle: "Komissiyalar, fanlar va xavfsizlik to'g'risida asosiy javoblar.",
      q1: "MindSphere'da dars olish haqiqatan ham bepulmi?",
      a1: "Ha. Barcha asosiy interactive kurslar, sun'iy intellektli repetitor (tutor), olimpiada topshiriqlari va musobaqalar bepul va umrbod shunday qoladi. Pullik premium obunalar shunchaki kunlik AI so'rovlari limitini kengaytiradi.",
      q2: "Qanday fan yo'nalishlari mavjud?",
      a2: "Platforma hozirda 142 yo'nalishni qamrab olgan — jarrohlik va fuqarolik huquqidan tortib, kvant fizikasi, dasturlash va axborot texnologiyalarigacha.",
      q3: "O'qituvchilarning daromadi qanday hisoblanadi?",
      a3: "Mualliflar o'z pullik kurslari sotuvidan qat'iyan 90% daromad oladilar. MindSphere esa platformani tezkor va xavfsiz serverlarda saqlash uchun bor-yo'g'i 10% komissiya ushlab qoladi. Bepul kurslarda komissiya 0%.",
      q4: "mindsphere.org va mindsphere.space domenlarining bir-biridan farqi nima?",
      a4: "mindsphere.org loyihaning rasmiy informatsion sahifasi va yo'riqnomasidir. mindsphere.space domenida esa dasturlash qum qutilari (LMS) va interaktiv dars tizimi to'liq ishga tushirilgan.",
      q5: "Klanlar, jamoalar va haftalik musobaqalar qanday ishlaydi?",
      a5: "Siz yaqin do'stlaringiz va sinfdoshlaringiz bilan ko'pi bilan 12 kishigacha bo'lgan kichik klanlar (squads) tuzishingiz mumkin. Kadrli jamoalar haftalik baxs-sportlarda qatnashib, tajriba (XP) yig'adi va pul sovrinlarini bo'lishib oladi.",
      q6: "Premium Aether Pass nimalarni taqdim etadi?",
      a6: "Bu obuna kunlik AI limitini qat'iyan 1,000 so'rovgacha kengaytiradi (anti-abuse Fair Use Policy himoyasi bilan), 24/7 ustuvor jonli AI yordamini ochadi, kurslarga 20% doimiy chegirma beradi, butun 12 kishilik klangingizga +15% XP tajriba ko'paytirgichini taqdim etadi, shuningdek shaxsiy kastomizatsiyalarni beradi: fanga javob beruvchi hoshiyalar, lyuminestsent porlovchi niki, golografik statuslar hamda kiber profil dizayni.",
      q7: "Aether Pass'ning 20% chegirmasi dars mualliflariga qanday ta'sir qiladi?",
      a7: "Bu mualliflar uchun o'ta foydali! Foydalanuvchi 20% chegirma olishi uchun MindSphere o'zining 10% platforma komissiyasini umuman olib tashlaydi (0% qiladi), muallif esa bor-yo'g'i 10% chegirma beradi. Evaziga kurslar Aether ekotizimida yuqori o'ringa ko'tarilib, ulkan organik trafik va ustuvor AI-tutor tavsiyalariga ega bo'ladi.",
      q8: "Qaysi tillar qo'llab-quvvatlanadi?",
      a8: "Ushbu bosqichda butun LMS tizimi va interaktiv AI yordamchingiz o'zbek, rus va ingliz tillarini yuqori sifatda va to'liq qo'llab-quvvatlaydi.",
      q9: "Platformadan foydalanish uchun dasturni yuklab olish shartmi?",
      a9: "Yo'q, tizim mobil yoki kompyuter brauzerining o'zida to'liq ishlaydi. Oflyayn keshni yoqish orqali hatto internetsiz (parvoz paytida ham) o'rganishni davom ettirishingiz mumkin.",
      q10: "Android va iOS uchun rasmiy mobil ilovalar bo'ladimi?",
      a10: "Ha! Oflyayn va interaktiv mobil o'rganish uchun Android va iOS nafif ilovalarini faol tayyorlamoqdamiz. Rasmiy reliz shu yilning oxirigacha amalga oshiriladi.",
      q11: "Sun'iy intellektli repetitorning (Companion AI Tutor) asosiy foydasi nimada?",
      a11: "U shunchaki tayyor javoblarni nusxalab bermasdan, haqiqiy mentor kabi yo'naltiruvchi savollar beradi, kodingizdagi mantiqiy xatolarni fosh etadi, bo'shliqlarni aniqlaydi va qiyinchilik darajasini moslashtiradi. Aether Pass obunachilari u bilan 24/7 ustuvor rejimda muloqot qiladilar.",
    },
    cta: {
      titleMain: "2.4 million talaba.",
      titleGrad: "Bugun bilimlar sferasiga siz ham qo'shiling.",
      subtitle: "Atigi yarim daqiqada bepul profilingizni tuzing va o'zingiz xohlagan vaqtda darslarni boshlang.",
      btnCreate: "Bepul profil yaratish →",
      btnPlatform: "Platformaga o'tish",
      bullettext: "Kredit kartasiz · Umrbod bepul poydevor · Ochiq kod zanjiri",
    },
    footer: {
      desc: "MindSphere — bu har qanday chegaralarsiz odamlarga o'qish va o'rgatish imkonini beruvchi ochiq xalqaro bilim kooperatividir.",
      platform: "Platforma",
      community: "Jamiyat",
      legal: "Huquqiy",
      c1Link1: "Fanlar katalogi",
      c1Link2: "Dars rejalari",
      c1Link3: "LMS konsoli",
      c1Link4: "Tizim API",
      c2Link1: "GitHub Repozitoriy",
      c2Link2: "Discord serveri",
      c2Link3: "Bizning Blog",
      c2Link4: "Reyting guruhlari",
      c3Link1: "Maxfiylik kelishuvi",
      c3Link2: "Foydalanish shartlari",
      c3Link3: "Brend materiallari",
      madeWith: "Dunyoning barcha bilimga chalingan qalblari uchun ❤️ bilan yaratildi",
    },
    auth: {
      signIn: "Tizimga kirish",
      signUp: "Profil yaratish",
      email: "Elektron pochta manzili",
      password: "Parol",
      fullName: "To'liq ism-sharifingiz",
      roleLabel: "O'quv rolingizni tanlang",
      roleStudent: "Talaba",
      roleStudentDesc: "O'rganmoqchiman, musobaqalar yechaman, ball yig'aman",
      roleTeacher: "O'qituvchi",
      roleTeacherDesc: "Kurslar yarataman, nashr qilaman va 90% ulush olaman",
      btnSubmitIn: "Tizimga kirish",
      btnSubmitUp: "Profil yaratish va tizimga kirish",
      orLink: "To'g'ridan-to'g'ri mindsphere.space ga o'tish →",
    },
    about: {
      heroTitle: "MindSphere haqida",
      heroSubtitle: "Bizning tariximiz, maqsadimiz va bilim olish uchun yaratilgan kelajak olami.",
      missionTitle: "Bizning bosh maqsadimiz",
      missionDesc: "Yer yuzidagi har bir inson uchun bilimlardan foydalanishni umrbod bepul, ochiq va daxlsiz qilish.",
      storyTitle: "Tariximiz va o'sishimiz",
      storyDesc1: "2024-yil oxirida xalqaro kooperativ o'qituvchilar tomonidan yaratilgan MindSphere va mutlaqo ochiq kitob g'oyalaridan paydo bo'ldi.",
      storyDesc2: "Biz yopilmaydigan AI yordamchiga ega tezkor va yengil tizim tashkil qildik. Hozirda jami 190+ davlatdan 2.4 million faol talabalarimiz bor.",
      valuesTitle: "Bizning qadriyatlarimiz",
      v1Title: "100% Bepul o'qish",
      v1Desc: "Bilim olishga bo'lgan yo'l hech qachon to'lov kartalari yoki cheklovlar bilan yopilmasligi kerak.",
      v2Title: "Ochiq kod shaffofligi",
      v2Desc: "Bizning barcha tizim va tahlillarimiz jamoat ko'rigi uchun GitHubda ochiq yuklangan.",
      v3Title: "Sun'iy intellekt kuchi",
      v3Desc: "Har bir insonda unga 24/7 yordam beradigan uykusiz shaxsiy professor bo'lishi lozim.",
      v4Title: "Mustaqil Jamoalar",
      v4Desc: "Birgalikda o'rganish samarali, shuning uchun biz haftalik jamoaviy bellashuvlarni moliyalashtiramiz.",
      teamTitle: "Bizning jamoa",
      teamSub: "Zurix, Toshkent va Tokiodan turib ish olib boradigan o'qituvchilar, dizaynerlar va dasturchilar.",
      t1Role: "Ijrochi direktor / Surix",
      t1Bio: "Sobiq CERN mutaxassisi, ochiq raqamli kutubxonalar va ochiq ma'lumotlar tarafdori.",
      t2Role: "UX boshlig'i / Toshkent",
      t2Bio: "3 xil til adaptiv platformasi dizayn me'mori.",
      t3Role: "Sun'iy intellekt muhandisi / Tokio",
      t3Bio: "Internet past bo'lgan hududlar uchun keshlash va engil yuklanadigan tizim yetakchisi.",
      ecoTitle: "Ma'lumotlar portali va LMS tizimi",
      ecoDesc: "Kirish chekpointi va ma'lumotlar katalogi ochiq portalimizda xavfsiz ishlaydi (profil talab qilinmaydi). Faol darsliklar, video translyatsiyalar va jamoaviy ko'rsatkichlar maxsus LMS tizimimizda joylashgan.",
      differentTitle: "Bizni boshqalardan nima ajratib turadi?",
      differentDesc: "An'anaviy o'quv platformalari pullik va yopiq biznes modelida ishlaydi. MindSphere esa mustaqil raqamli gildiya ustiga qurilgan. Bizning AI repetitorlarimiz faqat tayyor javobni bermasdan, mavzuni mantiqiy tushuntiradi; jonli peshqadamlar jadvali haqiqiy harakat uchun jamoaviy bahslar orqali mukofotlaydi; biz shaxsiy ma'lumotlarni yig'maymiz va sotmaymiz; mualliflik to'lovlarining 90% qismi to'g'ridan-to'g'ri o'qituvchilarga o'tkaziladi. Platformamiz butunlay oflayn ishlay oladi — barcha darslar keshlanadi, shuning uchun internetsiz ham o'qishni davom ettirish mumkin.",
      timelineTitle: "Rivojlanish rejasi",
      timelineSub: "Yangi tillar tizimining joriy etilish xaritasi.",
      joinTitle: "Hamjamiyatimizga qo'shiling",
      joinDesc: "Biz darslik yozuvchilari, tarjimonlar, dizaynerlar va hamkor jamoalarni mamnuniyat bilan qarshilaymiz.",
    },
    chat: {
      controlRoom: "Boshqaruv paneli:",
      autoHelp: "Avto-qo'llanma",
      interactivePlay: "Erkin rejim (Yozing / So'rang)",
      typing: "yozmoqda...",
      voiceTooltip: "Ovozli kiritish (Ovozdan matnga)",
      suggestClans: "Klanlar",
      suggestTasks: "Qiyin mashqlar",
      listeningStatus: "Tinglanmoqda, mikrofon faol...",
      defaultAiResponse: "Ajoyib savol! MindSphere hamjamiyatida 48 000 dan ortiq bepul darslar, klanlar o'rtasidagi kunlik janglar, yuqori balli o'quvchilar mashqlari va o'qituvchi bilan muloqot tizimi mavjud.",
      welcomeMsg: "Salom! Men hamkorlikdagi MindSphere sun'iy intellekt asistentiman. Klanlar, jamoaviy bahslar yoki kunlik qiyin mashqlar haqida so'rang!",
      sandboxMsg: "Erkin rejim faollashtirildi! Sun'iy intellekt sizni eshitmoqda. Klanlar, guruh chatlari yoki qiyin mashqlar haqida yozing yoki mikrofonga ayting!",
      autoplayMsg: "Mintsphere darsxonasiga xush kelibsiz! Avtomatik qo'llanmani tomosha qiling yoki istalgan vaqtda kiritishni boshlang!",
    },
    checkout: {
      subscribeTo: "Obuna bo'lish:",
      checkoutGateway: "Xavfsiz To'lov Shlyuzi",
      description: "Siz {tier} tarifiga {cycle} to'lov bilan obuna bo'lyapsiz. Yuqori darajadagi mantiqiy AI, interaktiv sinovlar va hamjamiyat imtiyozlaridan bahramand bo'ling.",
      selectedTier: "Tanlangan tarif",
      billingFrequency: "To'lov davriyligi",
      dueNow: "Hozir to'lanadi",
      paymentDetails: "To'lov ma'lumotlari",
      cardholderName: "Karta egasining ismi",
      cardNumber: "Karta raqami",
      expiryDate: "OO/YI",
      btnCancel: "Bekor qilish",
      btnConfirm: "Tasdiqlash va faollashtirish",
      successToast: "Tabriklaymiz! Sizning Premium obunangiz to'liq yangilandi!",
      toastSender: "MindSphere Administratori",
      pricingBadge: "Barqaror narxlar tizimi",
      pricingTitle: "Har bir ong uchun mos tariflar",
      pricingSubtitle: "Asosiy bilimlarni o'rganish doim bepul bo'lib qoladi. Premium chiptalar orqali bilim hisobingizni va mualliflik daromadlaringizni oshiring.",
      monthly: "Oylik To'lov",
      annually: "Yillik To'lov",
      activePlan: "Faol Tarif",
      upgradeNow: "Obuna bo'lish",
      bestBooster: "Eng yaxshi tanlov",
      forever: "umrbod",
      freeTierDesc: "Barcha talabalar uchun mutlaqo ochiq",
      month: "oy",
    },
  },
};
