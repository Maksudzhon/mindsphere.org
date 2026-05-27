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
      subtitle: "MindSphere is an open-source, AI-powered learning ecosystem where you can learn anything for free, build personalized programs, and publish courses with 90% revenue share.",
      ctaPrimary: "Get Started — It's Free →",
      ctaSecondary: "How It Works",
      socialProof: "2.4 million learners worldwide",
      mockup: {
        url: "mindsphere.com",
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
      studentBullet5: "Join or create local learning squads",
      teacherTitle: "Teachers & Creators",
      teacherBadge: "Publishing & Hosting",
      teacherBullet1: "Create and deploy unlimited learning paths",
      teacherBullet2: "Publish for free or set custom pricing",
      teacherBullet3: "Keep 90% of course revenue (lowest fee in industry)",
      teacherBullet4: "Rich dashboard with in-depth analytics",
      teacherBullet5: "Get verified teacher status on MindSphere",
      teacherRevenueCallout: "Revenue model: You earn 90% of every paid course sale. MindSphere takes 10% to keep the platform free for learners. Free courses have zero commission.",
      teamTitle: "Teams & Organisations",
      teamBadge: "Enterprise & Sync",
      teamBullet1: "Establish multi-member co-learning teams",
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
        freeTitle: "Free Learner & Teacher",
        freePrice: "$0",
        freeSub: "Being a teacher is 100% free!",
        freeFeatures: [
          "Access to 48,000+ courses",
          "Personal AI tutor (standard)",
          "Create & teach courses completely free (0% fee)",
          "Join squads & leaderboards",
        ],
        proTitle: "Creator & Teacher",
        proPrice: "$15",
        proSub: "Billed annually at $11.25/mo",
        proFeatures: [
          "Publish infinite course streams",
          "10% discount on all course purchases (Annual plan)",
          "Advanced AI (uncapped token bounds)",
          "Elite Creator badge on profile",
        ],
        teamTitle: "Elite Pass",
        teamPrice: "$43",
        teamSub: "Billed annually at $32.25/mo",
        teamFeatures: [
          "25% discount on all course purchases!",
          "Neon glowing colored nickname (Discord Nitro style)",
          "Custom avatar decorations & cyber brain rings",
          "Ad-free VIP streaming and exclusive card themes",
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
      title: "Open Education Costs Zero",
      subtitle: "Learning and teaching on MindSphere is completely free. Boost your profile with premium passes.",
      callout: "Creating courses is free for everyone. Premium passes provide system scaling, course price discounts, and custom Nitro-style decorations.",
      c1Title: "Free Learner & Teacher",
      c1Price: "$0",
      c1Sub: "For active scholars and teachers",
      c1Features: [
        "Unrestricted access to 48K+ paths",
        "Publish & teach courses completely free (0% fee)",
        "Basic AI tutor access (Gemini)",
        "Local and Global leaderboards",
      ],
      c2Title: "Creator & Teacher",
      c2Price: "$15/mo",
      c2Sub: "Annual: $11.25/mo (Save 25%)",
      c2Features: [
        "Create unlimited course paths",
        "10% discount on all courses (Annual only)",
        "AI Automatic Syllabus generator",
        "Verified Educator badge on profile",
      ],
      c3Title: "Elite Pass",
      c3Price: "$43/mo",
      c3Sub: "Annual: $32.25/mo",
      c3Features: [
        "25% discount on all courses platform-wide!",
        "Discord Nitro style custom neon nickname colors",
        "Custom avatar decorations, profiles & borders",
        "Priority VIP server streaming and chat perks",
      ],
      btnLearner: "Current Plan",
      btnContributor: "Upgrade to Creator",
      btnSupporter: "Get Elite Pass",
    },
    guide: {
      title: "Three Simple Steps to Mastery",
      subtitle: "The user journey is minimal and high-efficiency. Go from zero to structured learning in under a minute.",
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
      portalDesc: "You are currently here. This is our marketing, guide, news portal and onboarding station. No registration required.",
      lmsTitle: "mindsphere.com",
      lmsDesc: "Our actual learning platform hosting 48K courses, video rooms, exercises, live testing, and databases.",
      visit: "Launch mindSphere.com →",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common queries regarding the platform structure, fees, and security layers.",
      q1: "Is MindSphere really free?",
      a1: "Yes. All core learning, text materials, standard AI assistance, leaderboards, and certifications are 100% free of charge forever.",
      q2: "What subjects does MindSphere cover?",
      a2: "Currently pathways cover 142 major disciplines. We offer extensive modules in Medicine, Advanced Law, STEM, Economics, Fine Arts, and software languages.",
      q3: "How does Teacher revenue work?",
      a3: "When a creator publishes a paid course, they receive 90% of all student purchases. MindSphere maps out a standard 10% utility commission to support databases and text rendering. For free courses, commission is 0%.",
      q4: "What is the difference between mindsphere.org and mindsphere.com?",
      a4: "mindsphere.org (this site) is our community guide, open source catalog, and promotion hub. mindsphere.com is our actual web application and LMS dashboard where interactive courses take place.",
      q5: "How do Teams and Leaderboards work?",
      a5: "Learners can assemble teams of up to 100 members. Teams earn weekly scores by completing quizzes together and can win cash handouts shown in the active prize console.",
      q6: "What are Profile Passes?",
      a6: "Core education remains free. Profile passes are optional voluntary tools. Pro Pass ($9) funds system scale and delivers custom badges, priority support, and uncapped AI bounds.",
      q7: "Which languages are supported?",
      a7: "Phase 1 is live right now with perfect localized translations in English, Russian, and Uzbek. Additional languages are scheduled for rollout through 2026.",
      q8: "Do I need to install an app on my device?",
      a8: "No. MindSphere is fully web-based and lightweight, functioning beautifully on all browsers. You can toggle offline caching to save bandwidth directly inside chrome or safari.",
      q9: "Will there be Android and iOS applications?",
      a9: "Yes! We are currently working on dedicated Android and iOS applications to deliver seamless on-the-go offline interactive learning. They will be launched on the official Play Store and App Store later this year.",
      q10: "How does the AI Tutor help me?",
      a10: "The AI acts as an active companion. Rather than just giving answers, it breaks concepts into simple terms, creates custom exercises, and reviews incorrect submissions.",
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
      orLink: "Continue directly to mindsphere.com →",
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
      subtitle: "MindSphere — это открытая образовательная экосистема на базе ИИ, где можно учиться бесплатно, создавать индивидуальные программы и публиковать курсы с долей автора 90%.",
      ctaPrimary: "Начать Бесплатно →",
      ctaSecondary: "Как это устроено",
      socialProof: "2.4 миллиона учащихся по всему миру",
      mockup: {
        url: "mindsphere.com",
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
      studentBullet5: "Создавайте локальные учебные отряды (squads)",
      teacherTitle: "Преподавателям & Авторам",
      teacherBadge: "Публикация и Хостинг",
      teacherBullet1: "Создавайте безграничные планы обучения",
      teacherBullet2: "Публикуйте бесплатно или установите свою цену",
      teacherBullet3: "Забирайте 90% дохода от курсов (минимальная комиссия в индустрии)",
      teacherBullet4: "Панель преподавателя с глубокой аналитикой кликов",
      teacherBullet5: "Получите проверенный статус учителя на MindSphere",
      teacherRevenueCallout: "Модель доходов: Вы получаете 90% от продаж курсов. Платформа берет 10% только для оплаты серверов и поддержки бесплатного обучения. На бесплатные курсы комиссия составляет 0%.",
      teamTitle: "Командам & Организациям",
      teamBadge: "Бизнес и Синхронизация",
      teamBullet1: "Создавайте совместные ко-обучающиеся группы",
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
        freeTitle: "Бесплатный Студент и Лектор",
        freePrice: "$0",
        freeSub: "Преподавание на 100% бесплатно!",
        freeFeatures: [
          "Доступ к 48,000+ курсам",
          "Персональный ИИ-тьютор (стандарт)",
          "Создавайте и ведите курсы бесплатно (0% комиссия)",
          "Командные лиги и лидерборды",
        ],
        proTitle: "Создатель и Учитель",
        proPrice: "$15",
        proSub: "При годовой подписке: $11.25/мес",
        proFeatures: [
          "Публикация бесконечных курсов",
          "Скидка 10% на все курсы любых авторов (при годовой оплате)",
          "Усиленный ИИ без ограничений токенов",
          "Особый значок автора в профиле",
        ],
        teamTitle: "Элитный билет (Elite)",
        teamPrice: "$43",
        teamSub: "При годовой подписке: $32.25/мес",
        teamFeatures: [
          "Скидка 25% на все курсы любых авторов на платформе!",
          "Стиль «Discord Nitro»: неоновое свечение никнеймов",
          "Кастомные аватары, рамки и украшения профиля",
          "VIP трансляции без задержек и премиум-темы",
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
      title: "Обучение стоит ноль",
      subtitle: "Знания и преподавание доступны бесплатно. Получите больше возможностей с премиальными билетами.",
      callout: "Создание курсов абсолютно бесплатно. Премиальные билеты обеспечивают масштабирование серверов, скидки на курсы авторов и косметику в стиле Nitro.",
      c1Title: "Бесплатный Студент и Лектор",
      c1Price: "$0",
      c1Sub: "Для авторов и учащихся",
      c1Features: [
        "Неограниченный доступ к 48К+ курсам",
        "Создание и публикация курсов бесплатно (0% комиссия)",
        "Базовый ИИ-тьютор на базе Gemini",
        "Участие в мировых и локальных рейтингах",
      ],
      c2Title: "Создатель и Учитель",
      c2Price: "$15/мес",
      c2Sub: "При годовой: $11.25/мес (Скидка 25%)",
      c2Features: [
        "Публикация бесконечных курсов",
        "Скидка 10% на все курсы (только при годовой оплате)",
        "Автоматический генератор планов лекций от ИИ",
        "Подтвержденный статус преподавателя в профиле",
      ],
      c3Title: "Элитный билет (Elite Pass)",
      c3Price: "$43/мес",
      c3Sub: "При годовой: $32.25/мес",
      c3Features: [
        "Скидка 25% на абсолютно любые платные курсы всех авторов!",
        "Стиль «Discord Nitro»: неоновое свечение имени",
        "Кастомные аватары, анимированные рамки профиля",
        "Приоритетный стриминг лекций и эксклюзивные темы чата",
      ],
      btnLearner: "Текущий тариф",
      btnContributor: "Стать Создателем",
      btnSupporter: "Получить Elite Pass",
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
      portalDesc: "Вы находитесь здесь. Это информационный путеводитель, новости и гид. Профиль не нужен.",
      lmsTitle: "mindsphere.com",
      lmsDesc: "Действующая платформа обучения. 48К курсов, тесты, базы данных, видео и групповые созвоны.",
      visit: "Запустить mindSphere.com →",
    },
    faq: {
      title: "Частые Вопросы",
      subtitle: "Ответы на популярные вопросы о комиссиях, темах и безопасности данных.",
      q1: "Правда ли обучение бесплатно?",
      a1: "Да. Все курсы, конспекты, ИИ-тьюторы, участие в турнирах и выдача цифровых знаков бесплатны навсегда.",
      q2: "Какие направления наук представлены?",
      a2: "Сейчас платформа охватывает 142 направления — от хирургии и гражданского права до физики элементарных частиц и джазовой гармонии.",
      q3: "Как рассчитывается прибыль преподавателей?",
      a3: "Мы отдаем 90% заработка автору. Платформа MindSphere удерживает 10% для оплаты серверов. За бесплатные материалы никаких сборов нет.",
      q4: "Чем отличаются сайты .org и .com?",
      a4: "Сайт mindsphere.org — это публичный гид и промо-страница проекта. На mindsphere.com запущена сама СУО (LMS), где проходят интерактивные занятия.",
      q5: "Как работают команды и рейтинги?",
      a5: "Вы можете объединяться в клубы до 100 человек. Каждую неделю команды выполняют интеллектуальные квизы, зарабатывая очки и призы.",
      q6: "Что дают билеты (Profile Passes)?",
      a6: "Они не являются обязательными. Билет Pro за $9 дает элитный значок, приоритетное получение призов Игры и больший лимит запросов к ИИ.",
      q7: "Какие языки поддерживаются?",
      a7: "В Фазе 1 полностью переведены русский, узбекский и английский. Остальные языки будут развернуты в течение 2026-2027 годов.",
      q8: "Нужно ли скачивать приложение?",
      a8: "Нет, сервис работает прямо в браузере мобильного или ПК. Можно включить офлайн-кэш для автономной работы.",
      q9: "Будут ли мобильные приложения для Android и iOS?",
      a9: "Да! В настоящее время мы активно работаем над выпуском мобильных приложений для Android и iOS, чтобы вы могли интерактивно учиться в офлайн-режиме в любое время. Релиз в App Store и Google Play запланирован на этот год.",
      q10: "В чем реальная польза ИИ-Тьютора?",
      a10: "Он не дает готовое решение, а задает наводящие вопросы, выявляет пробелы и адаптирует сложность задач индивидуально под вас.",
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
      orLink: "Продолжить сразу на mindsphere.com →",
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
      subtitle: "MindSphere — bu sun'iy intellektga asoslangan ochiq ta'lim ekotizimi bo'lib, bu yerda mutlaqo bepul o'rganishingiz, guruhlarga qo'shilishingiz va 90% ulush bilan o'z kurslaringizni nashr qilishingiz mumkin.",
      ctaPrimary: "Bepul Boshlash →",
      ctaSecondary: "Qanday ishlaydi",
      socialProof: "Butun dunyo bo'ylab 2.4 million faol o'quvchi",
      mockup: {
        url: "mindsphere.com",
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
      studentBullet5: "Mahalliy o'quv guruhlarini (squads) tuzish",
      teacherTitle: "O'qituvchilar & Mualliflar",
      teacherBadge: "Nashr va Server",
      teacherBullet1: "Cheklanmagan miqdorda darsliklar yaratish",
      teacherBullet2: "Bepul yoki pulli kirish narxini o'rnatish",
      teacherBullet3: "Har bir sotuvdan 90% daromad saqlab qolish (eng past komissiya)",
      teacherBullet4: "To'liq interaktiv o'quvchilar tahlili paneli",
      teacherBullet5: "MindSphere platformasida rasmiy o'qituvchi maqomini olish",
      teacherRevenueCallout: "Daromad modeli: Siz pullik darsingizning 90% daromadini olasiz. Platforma bepul o'quvchilarni qo'llab-quvvatlash uchun faqat 10% ushlab qoladi. Bepul kurslarda komissiya 0%.",
      teamTitle: "Jamoalar & Tashkilotlar",
      teamBadge: "Tashkilot & Sinxr",
      teamBullet1: "Ko'p a'zolik o'quv guruhlarini shakllantirish",
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
        freeTitle: "Bepul O'quvchi va O'qituvchi",
        freePrice: "$0",
        freeSub: "O'qituvchi bo'lish mutlaqo bepul!",
        freeFeatures: [
          "48,000 dan ortiq kurslarni cheksiz o'rganish",
          "AI professor (standart hajmda)",
          "Kurslar yaratish va dars berish mutlaqo bepul (0% to'lov)",
          "Global liderlar va jamoalar ligasi",
        ],
        proTitle: "Yaratuvchi va O'qituvchi",
        proPrice: "$15",
        proSub: "Yillik to'lovda: $11.25/oyiga",
        proFeatures: [
          "Cheksiz interaktiv kurslar yaratish",
          "Barcha o'qituvchilar kurslariga 10% chegirma (yillik reja)",
          "Cheklovsiz yuqori quvvatli sun'iy intellekt",
          "Profilda maxsus tasdiqlangan o'qituvchi belgisi",
        ],
        teamTitle: "Elite Pass (Elite Chiptasi)",
        teamPrice: "$43",
        teamSub: "Yillik to'lovda: $32.25/oyiga",
        teamFeatures: [
          "Platformadagi barcha kurslar uchun 25% chegirma!",
          "Discord Nitro uslubi: neon rangda yonuvchi niklar",
          "Profil uchun kiber-ramkalar va animatsiyali avatar bezaklari",
          "VIP tezkor translyatsiyalar va cheksiz premium mavzular",
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
      title: "O'qish mutlaqo bepul",
      subtitle: "Bilim olish va dars berish mutlaqo bepul. Premium chiptalar bilan imkoniyatlaringizni oshiring.",
      callout: "Kurs yaratish mutlaqo bepul. Premium chiptalar darslarga chegirmalar, Nitro uslubidagi bezaklar va serverlarni quvvatlash xarajatlarini qoplaydi.",
      c1Title: "Bepul O'quvchi va O'qituvchi",
      c1Price: "$0",
      c1Sub: "Mualliflar va talabalar uchun",
      c1Features: [
        "48K+ kurslarni cheksiz o'rganish",
        "Kurslar yaratish va dars berish mutlaqo bepul (0% komissiya)",
        "Gemini tizimidagi bepul AI professor",
        "Lokal va global reytinglarda qatnashish",
      ],
      c2Title: "Yaratuvchi va O'qituvchi",
      c2Price: "$15/oyiga",
      c2Sub: "Yillik: $11.25/oyiga (25% tejang)",
      c2Features: [
        "Cheksiz interaktiv kurslar yaratish",
        "Barcha kurslar uchun 10% chegirma (faqat yillik tarifda)",
        "Sun'iy intellekt hisoblagichli reja generatori",
        "Tasdiqlangan o'qituvchi belgisi profilda",
      ],
      c3Title: "Elite Pass (Elite Chiptasi)",
      c3Price: "$43/oyiga",
      c3Sub: "Yillik: $32.25/oyiga",
      c3Features: [
        "Platformadagi har qanday o'qituvchi kursiga 25% chegirma!",
        "Discord Nitro uslubi: neon rangda yonuvchi niklar",
        "Maxsus kiber karkasli avatar bezaklari va kadrlar",
        "VIP uzluksiz video uzatish va maxsus chat mavzulari",
      ],
      btnLearner: "O'qishni boshlash",
      btnContributor: "Yaratuvchiga o'tish",
      btnSupporter: "Elite Pass",
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
      portalDesc: "Siz ayni paytda shu yerdasiz. Bu bizning qo'llanma, yangilik, ommaviy xizmat portalimiz. Kirish shart emas.",
      lmsTitle: "mindsphere.com",
      lmsDesc: "Haqiqiy o'quv darslari joylashgan tizim (LMS). 48K kurslar, videoxonalar, testlar va ma'lumotlar bazasi.",
      visit: "mindSphere.com saytini ochish →",
    },
    faq: {
      title: "Tez-Tez beriladigan Savollar",
      subtitle: "Komissiyalar, fanlar va xavfsizlik to'g'risida asosiy javoblar.",
      q1: "MindSphere haqiqatan ham bepulmi?",
      a1: "Ha. Barcha darsliklar, matnlar, standart AI yordamchi, chempionatlar va sertifikatlar 100% bepul.",
      q2: "Qanday fan yo'nalishlari mavjud?",
      a2: "Hozirda 142 yo'nalish bor: Tibbiyot, Huquq, STEM, Iqtisodiyot, Tasviriy San'at va Dasturlash tillari.",
      q3: "O'qituvchi daromadi qanday hisoblanadi?",
      a3: "O'qituvchi daromadining 90% ini o'zi oladi. Platforma server xarajatlarini qoplash uchun 10% ushlab qoladi. Bepul kurslar uchun to'lov mutlaqo 0%.",
      q4: "mindsphere.org va mindsphere.com farqi nima?",
      a4: "mindsphere.org (bu sayt) — ochiq hid, reja, targ'ibot maydoni. mindsphere.com — darslar haqiqiy interaktiv o'tkaziladigan tizim.",
      q5: "Jamoa va Liderlar jadvali qanday ishlaydi?",
      a5: "O'quvchilar 100 nafargacha jamoa tuzishlari mumkin. Jamoalar haftalik savollarni yechib sovrinlar panellarida pul mukofoti yutib boradi.",
      q6: "Profil chiptalari nima?",
      a6: "Ular ixtiyoriy. Pro chipta ($9) homiylik uchun bo'lib, egasiga premium belgisi, cheksiz AI va kross-sovrinlarda ustuvorlik beradi.",
      q7: "Qaysi tillar qo'llab-quvvatlanadi?",
      a7: "1-bosqichda ingliz, rus va o'zbek tillari to'liq lokalizatsiya qilingan. Boshqa tillar 2026 yilda ishga tushiriladi.",
      q8: "Dasturni o'rnatish shartmi?",
      a8: "Yo'q. MindSphere to'liq mobil va kompyuter veb brauzerida ishlaydi. Oflyayn ishlash uchun lokal kesh yoqilsa kifoya.",
      q9: "Android va iOS mobil ilovalari chiqariladimi?",
      a9: "Ha! Biz hozirda yo'lda ham oflayn rejimda uzluksiz bilim olishingiz uchun maxsus Android va iOS mobil ilovalari ustida ishlayapmiz. Ilovalar joriy yilning oxirigacha rasmiy App Store va Google Play do'konlarida taqdim etiladi.",
      q10: "AI Tutor qanday yordam bera oladi?",
      a10: "U tayyor javobni bermasdan, sizga mavzuni oddiy tushuntiradi, testlar tuzib beradi va xatolaringizni birgalikda tahlil qiladi.",
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
      orLink: "To'g'ridan-to'g'ri mindsphere.com ga o'tish →",
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
