/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { uz } from "./locales/uz";

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
    headerBadge: string;
    headerTitle: string;
    headerSubtitle: string;
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
    errorInvalidEmail: string;
    errorShortPassword: string;
    errorRequiredName: string;
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
    timelineSteps: {
      step1Year: string;
      step1Title: string;
      step1Desc: string;
      step2Year: string;
      step2Title: string;
      step2Desc: string;
      step3Year: string;
      step3Title: string;
      step3Desc: string;
      step4Year: string;
      step4Title: string;
      step4Desc: string;
    };
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

// Statically bundle 'uz' so Uzbek is synchronously available and default
export function toUzCyr(text: string): string {
  if (typeof text !== "string") return text;

  let res = text;

  // Protect specific brand and technical terms
  const protectList = [
    /mindsphere\.space/gi,
    /mindsphere\.org/gi,
    /vymdrix@gmail\.com/gi,
    /gmail\.com/gi,
    /mindsphere/gi,
    /MindSphere/gi,
    /Aether Pass/g,
    /Aether/g,
    /Premium Pass/g,
    /Educator Pro/g,
    /Discord/g,
    /IT-akademiyalar/g,
    /IT-академиялар/g,
    /XP Boosts/g,
    /XP Boost/g,
    /XP/g,
    /CV/g,
    /LLM/g,
    /LMS/g,
    /API/g,
    /3D/g,
    /VR/g,
    /FUP/g,
    /STEM/g,
    /UTC/g,
    /Telegram/g,
  ];

  const placeholders: string[] = [];
  protectList.forEach((regex, idx) => {
    res = res.replace(regex, (match) => {
      const placeholder = `__PROT_VAL_${idx}_${placeholders.length}__`;
      placeholders.push(match);
      return placeholder;
    });
  });

  // Dual or multi-letter combinations
  res = res.replace(/Sh/g, "Ш").replace(/SH/g, "Ш").replace(/sh/g, "ш");
  res = res.replace(/Ch/g, "Ч").replace(/CH/g, "Ч").replace(/ch/g, "ч");
  res = res.replace(/Yo/g, "Ё").replace(/YO/g, "Ё").replace(/yo/g, "ё");
  res = res.replace(/Yu/g, "Ю").replace(/YU/g, "Ю").replace(/yu/g, "ю");
  res = res.replace(/Ya/g, "Я").replace(/YA/g, "Я").replace(/ya/g, "я");

  // o' and g' mapped to Ў/ў and Ғ/ғ
  res = res.replace(/O'/g, "Ў").replace(/o'/g, "ў")
           .replace(/O’/g, "Ў").replace(/o’/g, "ў")
           .replace(/Oʻ/g, "Ў").replace(/oʻ/g, "ў")
           .replace(/O`/g, "Ў").replace(/o`/g, "ў")
           .replace(/G'/g, "Ғ").replace(/g'/g, "ғ")
           .replace(/G’/g, "Ғ").replace(/g’/g, "ғ")
           .replace(/Gʻ/g, "Ғ").replace(/gʻ/g, "ғ")
           .replace(/G`/g, "Ғ").replace(/g`/g, "ғ");

  const map: { [key: string]: string } = {
    "A": "А", "a": "а",
    "B": "Б", "b": "б",
    "D": "Д", "d": "д",
    "F": "Ф", "f": "ф",
    "G": "Г", "g": "г",
    "H": "Ҳ", "h": "ҳ",
    "I": "И", "i": "и",
    "J": "Ж", "j": "ж",
    "K": "К", "k": "к",
    "L": "Л", "l": "л",
    "M": "М", "m": "м",
    "N": "Н", "n": "н",
    "O": "О", "o": "о",
    "P": "П", "p": "п",
    "Q": "Қ", "q": "қ",
    "R": "Р", "r": "р",
    "S": "С", "s": "с",
    "T": "Т", "t": "т",
    "U": "У", "u": "у",
    "V": "В", "v": "в",
    "X": "Х", "x": "х",
    "Y": "Й", "y": "й",
    "Z": "З", "z": "з",
    "E": "Е", "e": "е"
  };

  let finalRes = "";
  for (let i = 0; i < res.length; i++) {
    const char = res[i];
    // "E"/"e" at the beginning of words or after spaces/punctuation
    if ((char === "E" || char === "e") && (i === 0 || /\s|[.,\/#!$%\^&\*;:{}=\-_`~()?"']/.test(res[i - 1]))) {
      finalRes += char === "E" ? "Э" : "э";
    } else if (map[char] !== undefined) {
      finalRes += map[char];
    } else {
      finalRes += char;
    }
  }

  // Restore protected values and localize proper nouns
  placeholders.forEach((originalVal, idx) => {
    const placeholderRegex = new RegExp(`__PROT_VAL_\\d+_${idx}__`, "g");
    let restoredVal = originalVal;
    
    // Convert proper nouns specifically if match
    if (/O['’ʻ`]zbekiston/i.test(restoredVal)) {
      restoredVal = restoredVal.replace(/O['’ʻ`]zbekiston/i, "Ўзбекистон");
    } else if (/Toshkent/i.test(restoredVal)) {
      restoredVal = restoredVal.replace(/Toshkent/i, "Тошкент");
    } else if (/Samarqand|Samarkand/i.test(restoredVal)) {
      restoredVal = restoredVal.replace(/Samarqand|Samarkand/i, "Самарқанд");
    } else if (/Kokand/i.test(restoredVal)) {
      restoredVal = restoredVal.replace(/Kokand/i, "Қўқон");
    } else if (/Qo['’ʻ`]qon/i.test(restoredVal)) {
      restoredVal = restoredVal.replace(/Qo['’ʻ`]qon/i, "Қўқон");
    }
    
    finalRes = finalRes.replace(placeholderRegex, restoredVal);
  });

  return finalRes;
}

export function transliterateUzCyr(val: any): any {
  if (typeof val === "string") {
    return toUzCyr(val);
  } else if (Array.isArray(val)) {
    return val.map((v) => transliterateUzCyr(v));
  } else if (val && typeof val === "object") {
    const res: any = {};
    for (const key of Object.keys(val)) {
      res[key] = transliterateUzCyr(val[key]);
    }
    return res;
  }
  return val;
}

export const i18n: { [key: string]: Translations } = {
  uz,
};
