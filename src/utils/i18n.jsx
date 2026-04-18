import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      work: "Work",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Oussama",
      subtitle: "Building modern, high-performance",
      subtitleBr: "applications for web, mobile, and desktop",
      viewProjects: "View Projects",
      contactMe: "Contact Me"
    },
    about: {
      intro: "Introduction",
      title1: "Designing ",
      title2: "Experiences.",
      description: "I am a full-stack developer with experience in web, mobile, and desktop applications. I specialize in creating high-performance, scalable, and modern software solutions. My work includes enterprise-level POS systems, wholesale marketplaces, and interactive applications for multiple platforms.",
      services: {
        web: "Web Development",
        mobile: "Mobile Development",
        desktop: "Desktop Applications",
        fullstack: "Full Stack Solutions"
      }
    },
    skills: {
      subtitle: "Technical Expertise",
      title: "Skills.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile & Desktop"
      }
    },
    experience: {
      subtitle: "What I have done so far",
      title: "Work Experience.",
      items: {
        item1: {
          title: "Full-stack Developer",
          company: "AgroAlim POS System",
          date: "Enterprise Project",
          points: [
            "Built cross-platform web and desktop applications for wholesale inventory management.",
            "Integrated complex backend APIs with Firebase for real-time data synchronization.",
            "Automated critical business workflows, improving efficiency for enterprise-level operations.",
            "Optimized system performance for handling large-scale POS transactions."
          ]
        },
        item2: {
          title: "Full-stack Developer",
          company: "Wholesale Marketplace Platform",
          date: "E-commerce Project",
          points: [
            "Developed a robust web platform using React and Laravel for wholesale product distribution.",
            "Created a high-performance mobile application using Flutter for remote buyers.",
            "Implemented seamless payment gateways and order tracking systems.",
            "Ensured multi-platform synchronization and high-availability architecture."
          ]
        },
        item3: {
          title: "Freelance Developer",
          company: "Self-Employed",
          date: "Past - Present",
          points: [
            "Developed numerous interactive web applications and portfolio experiments using Three.js.",
            "Built custom desktop applications for niche business needs using Electron and Tauri.",
            "Collaborated with clients to deliver high-performance, modern software solutions."
          ]
        }
      }
    },
    works: {
      subtitle: "My work",
      title: "Projects.",
      description: "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.",
      items: {
        proj1: {
          name: "AgroAlim POS System",
          desc: "Comprehensive enterprise wholesale management suite featuring a web dashboard and desktop POS integration developed with React and Electron."
        },
        proj2: {
          name: "Wholesale Marketplace",
          desc: "Multi-platform e-commerce ecosystem connecting distributors and buyers with real-time synchronization developed using Laravel and Flutter."
        },
        proj3: {
          name: "Portfolio Experiments",
          desc: "Collection of high-performance interactive 3D web applications and UI experiments showcased using React Three Fiber."
        },
        proj4: {
          name: "BDL Banque Sponsoring",
          desc: "Professional financial sponsorship management platform developed with Laravel to streamline institutional sponsorship workflows."
        },
        proj5: {
          name: "Pet Shop Portal",
          desc: "Full-stack e-commerce solution for pet products and services developed using PHP to optimize retail operations."
        },
        proj6: {
          name: "Cybersecurity Website",
          desc: "Professional corporate portal for cybersecurity services developed with PHP MVC to showcase advanced security solutions."
        },
        proj7: {
          name: "Clinics Management Platform",
          desc: "Advanced healthcare management system developed using Laravel and Vue.js to digitize clinical and hospital operations."
        },
        proj8: {
          name: "School Events App",
          desc: "Cross-platform mobile application developed with Flutter and Firebase for efficient academic event coordination."
        },
        proj9: {
          name: "Advanced 3D Portfolio",
          desc: "Highly interactive 3D portfolio showcase developed using React and Three.js for a premium digital experience."
        },
        proj10: {
          name: "Strategic Landing Pages",
          desc: "Collection of high-converting, performance-optimized marketing landing pages developed using PHP."
        },
        proj11: {
          name: "Furniture Hardware Store",
          desc: "Specialized inventory and B2B sales platform developed with Laravel and Vue.js for furniture hardware retailers."
        },
        proj12: {
          name: "Ecommerce Enterprise",
          desc: "Scalable enterprise-grade e-commerce platform with comprehensive management tools developed using Laravel."
        },
        proj13: {
          name: "Intelligent Chat AI",
          desc: "Advanced AI conversational platform integrated with state-of-the-art language models developed using Laravel."
        },
        proj14: {
          name: "Digital Tech Agency",
          desc: "Professional corporate portal for a technology startup developed with Laravel and Tailwind CSS."
        },
        proj15: {
          name: "Real-time Messaging App",
          desc: "Scalable instant communication platform with real-time synchronization developed using Laravel and Pusher."
        },
        proj16: {
          name: "SaaS Multi-Vendor Marketplace",
          desc: "Comprehensive multi-tenant SaaS marketplace developed with Laravel to support multiple vendors and storefronts."
        },
        proj17: {
          name: "Restaurant Digital Suite",
          desc: "Modern digital menu and reservation system developed using Laravel and Vue.js to enhance restaurant services."
        }
      }
    },
    contact: {
      subtitle: "Get in touch",
      title: "Contact.",
      nameLabel: "Your Name",
      namePlaceholder: "What's your good name?",
      emailLabel: "Your email",
      emailPlaceholder: "What's your web address?",
      messageLabel: "Your Message",
      messagePlaceholder: "What do you want to say?",
      send: "Send",
      sending: "Sending...",
      success: "Thank you. I will get back to you as soon as possible.",
      error: "Something went wrong. Please try again."
    }
  },
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      projects: "Projets",
      work: "Projets",
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Oussama",
      subtitle: "Création d'applications modernes et",
      subtitleBr: "performantes pour web, mobile et bureau",
      viewProjects: "Voir les projets",
      contactMe: "Contactez-moi"
    },
    about: {
      intro: "Introduction",
      title1: "Conception d'",
      title2: "Expériences.",
      description: "Je suis un développeur full-stack avec de l'expérience dans les applications web, mobiles et de bureau. Je me spécialise dans la création de solutions logicielles modernes, évolutives et performantes. Mon travail comprend des systèmes de point de vente d'entreprise, des places de marché de gros et des applications interactives multiplateformes.",
      services: {
        web: "Développement Web",
        mobile: "Développement Mobile",
        desktop: "Applications de Bureau",
        fullstack: "Solutions Full Stack"
      }
    },
    skills: {
      subtitle: "Expertise Technique",
      title: "Compétences.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile & Bureau"
      }
    },
    experience: {
      subtitle: "Ce que j'ai fait jusqu'à présent",
      title: "Expérience Pro.",
      items: {
        item1: {
          title: "Développeur Full-stack",
          company: "Système POS AgroAlim",
          date: "Projet d'Entreprise",
          points: [
            "Création d'applications web et de bureau multiplateformes pour la gestion des stocks en gros.",
            "Intégration d'API backend complexes avec Firebase pour la synchronisation des données en temps réel.",
            "Automatisation de flux de travail commerciaux critiques, améliorant l'efficacité des opérations.",
            "Optimisation des performances du système pour le traitement à grande échelle."
          ]
        },
        item2: {
          title: "Développeur Full-stack",
          company: "Place de Marché de Gros",
          date: "Projet E-commerce",
          points: [
            "Développement d'une plateforme web robuste utilisant React et Laravel pour la distribution de produits de gros.",
            "Création d'une application mobile haute performance utilisant Flutter pour les acheteurs à distance.",
            "Mise en œuvre de passerelles de paiement transparentes et de systèmes de suivi des commandes.",
            "Assurance de la synchronisation multiplateforme et de l'architecture haute disponibilité."
          ]
        },
        item3: {
          title: "Développeur Indépendant",
          company: "Indépendant",
          date: "Passé - Présent",
          points: [
            "Développement de nombreuses applications web interactives et expériences de portfolio utilisant Three.js.",
            "Création d'applications de bureau personnalisées pour des besoins spécifiques en utilisant Electron et Tauri.",
            "Collaboration avec les clients pour fournir des solutions logicielles modernes et performantes."
          ]
        }
      }
    },
    works: {
      subtitle: "Mon travail",
      title: "Projets.",
      description: "Les projets suivants illustrent mes compétences et mon expérience à travers des exemples concrets de mon travail. Chaque projet est brièvement décrit avec des liens vers les dépôts de code et des démos en direct. Cela reflète ma capacité à résoudre des problèmes complexes et à gérer des projets efficacement.",
      items: {
        proj1: {
          name: "Système POS AgroAlim",
          desc: "Suite complète de gestion de gros pour entreprises comprenant un tableau de bord web et une intégration POS développée avec React et Electron."
        },
        proj2: {
          name: "Place de Marché de Gros",
          desc: "Écosystème e-commerce multiplateforme reliant distributeurs et acheteurs avec synchronisation en temps réel via Laravel et Flutter."
        },
        proj3: {
          name: "Expériences Portfolio",
          desc: "Collection d'applications web 3D interactives haute performance et d'expériences UI présentées avec React Three Fiber."
        },
        proj4: {
          name: "Sponsoring BDL Banque",
          desc: "Plateforme professionnelle de gestion des parrainages financiers développée avec Laravel pour optimiser les flux institutionnels."
        },
        proj5: {
          name: "Portail Pet Shop",
          desc: "Solution e-commerce complète pour produits et services animaliers développée avec PHP pour optimiser la vente au détail."
        },
        proj6: {
          name: "Site de Cybersécurité",
          desc: "Portail d'entreprise professionnel pour services de cybersécurité développé avec PHP MVC pour exposer des solutions de sécurité avancées."
        },
        proj7: {
          name: "Plateforme de Gestion de Cliniques",
          desc: "Système de gestion de santé avancé développé avec Laravel et Vue.js pour numériser les opérations cliniques et hospitalières."
        },
        proj8: {
          name: "App d'Événements Scolaires",
          desc: "Application mobile multiplateforme développée avec Flutter et Firebase pour une coordination efficace des événements académiques."
        },
        proj9: {
          name: "Portfolio 3D Avancé",
          desc: "Vitrine de portfolio 3D hautement interactive développée avec React et Three.js pour une expérience numérique premium."
        },
        proj10: {
          name: "Landing Pages Stratégiques",
          desc: "Collection de pages de destination marketing optimisées pour la conversion et la performance développées avec PHP."
        },
        proj11: {
          name: "Quincaillerie de Meubles",
          desc: "Plateforme spécialisée d'inventaire et de vente B2B développée avec Laravel et Vue.js pour les détaillants de matériel de mobilier."
        },
        proj12: {
          name: "Entreprise E-commerce",
          desc: "Plateforme e-commerce évolutive de qualité entreprise avec outils de gestion complets développée avec Laravel."
        },
        proj13: {
          name: "Chat AI Intelligent",
          desc: "Plateforme de conversation IA avancée intégrée à des modèles de langage de pointe développée avec Laravel."
        },
        proj14: {
          name: "Agence Tech Digitale",
          desc: "Portail d'entreprise professionnel pour une startup technologique développé avec Laravel et Tailwind CSS."
        },
        proj15: {
          name: "App de Messagerie en Temps Réel",
          desc: "Plateforme de communication instantanée évolutive avec synchronisation en temps réel développée avec Laravel et Pusher."
        },
        proj16: {
          name: "Place de Marché Multi-Vendeurs",
          desc: "Place de marché SaaS multi-tenante complète développée avec Laravel pour supporter plusieurs vendeurs et boutiques."
        },
        proj17: {
          name: "Suite Digitale Restaurant",
          desc: "Système de menu numérique et de réservation moderne développé avec Laravel et Vue.js pour améliorer les services de restauration."
        }
      }
    },
    contact: {
      subtitle: "Gardons le contact",
      title: "Contact.",
      nameLabel: "Votre Nom",
      namePlaceholder: "Quel est votre nom ?",
      emailLabel: "Votre Adresse Email",
      emailPlaceholder: "Quelle est votre adresse web ?",
      messageLabel: "Votre Message",
      messagePlaceholder: "Que voulez-vous dire ?",
      send: "Envoyer",
      sending: "Envoi en cours...",
      success: "Merci. Je vous répondrai dans les plus brefs délais.",
      error: "Quelque chose s'est mal passé. Veuillez réessayer."
    }
  },
  ar: {
    nav: {
      about: "نبذة",
      skills: "المهارات",
      experience: "الخبرات",
      projects: "المشاريع",
      work: "الأعمال",
      contact: "تواصل"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "أسامة",
      subtitle: "بناء تطبيقات حديثة وعالية الأداء",
      subtitleBr: "للويب والموبايل وسطح المكتب",
      viewProjects: "عرض المشاريع",
      contactMe: "تواصل معي"
    },
    about: {
      intro: "مقدمة",
      title1: "تصميم ",
      title2: "التجارب.",
      description: "أنا مطور ويب شامل لدي خبرة في تطبيقات الويب والموبايل وسطح المكتب. أتخصص في إنشاء حلول برمجية حديثة وقابلة للتطوير وعالية الأداء. يتضمن عملي أنظمة نقاط البيع للمؤسسات، والأسواق بالجملة، والتطبيقات التفاعلية للمنصات المتعددة.",
      services: {
        web: "تطوير الويب",
        mobile: "تطوير الموبايل",
        desktop: "تطبيقات سطح المكتب",
        fullstack: "حلول برمجية شاملة"
      }
    },
    skills: {
      subtitle: "الخبرة التقنية",
      title: "المهارات.",
      categories: {
        frontend: "واجهة المستخدم",
        backend: "الواجهة الخلفية",
        mobile: "الموبايل وسطح المكتب"
      }
    },
    experience: {
      subtitle: "ما أنجزته حتى الآن",
      title: "الخبرات المهنية.",
      items: {
        item1: {
          title: "مطور شامل",
          company: "نظام AgroAlim نقاط البيع",
          date: "مشروع مؤسسي",
          points: [
            "بناء تطبيقات الويب وسطح المكتب متعددة المنصات لإدارة المخزون بالجملة.",
            "دمج واجهات برمجة خلفية معقدة مع Firebase لمزامنة البيانات في الوقت الفعلي.",
            "أتمتة سير العمل التجاري المهم، مما أدى إلى تحسين الكفاءة للعمليات على مستوى المؤسسة.",
            "تحسين أداء النظام للتعامل مع المعاملات واسعة النطاق لنقاط البيع."
          ]
        },
        item2: {
          title: "مطور شامل",
          company: "منصة سوق الجملة",
          date: "مشروع التجارة الإلكترونية",
          points: [
            "تطوير منصة ويب قوية باستخدام React و Laravel لتوزيع المنتجات بالجملة.",
            "إنشاء تطبيق موبايل عالي الأداء باستخدام Flutter للمشترين عن بعد.",
            "تنفيذ بوابات دفع سلسة وأنظمة تتبع للطلبات.",
            "ضمان المزامنة متعددة المنصات والبنية التحتية عالية التوفر."
          ]
        },
        item3: {
          title: "مطور حر",
          company: "عمل حر",
          date: "الماضي - الحاضر",
          points: [
            "تطوير العديد من تطبيقات الويب التفاعلية وتجارب معارض الأعمال باستخدام Three.js.",
            "بناء تطبيقات سطح مكتب مخصصة لاحتياجات الأعمال باستخدام Electron و Tauri.",
            "التعاون مع العملاء لتقديم حلول برمجية حديثة وعالية الأداء."
          ]
        }
      }
    },
    works: {
      subtitle: "أعمالي",
      title: "المشاريع.",
      description: "تعرض المشاريع التالية مهاراتي وخبراتي من خلال أمثلة واقعية لعملي. يتم وصف كل مشروع باختصار مع روابط لمستودعات التعليمات البرمجية والعروض التوضيحية الحية. إنه يعكس قدرتي على حل المشكلات المعقدة، والعمل مع تقنيات مختلفة، وإدارة المشاريع بشكل فعال.",
      items: {
        proj1: {
          name: "نظام AgroAlim نقاط البيع",
          desc: "مجموعة شاملة لإدارة البيع بالجملة للمؤسسات تتميز بلوحة تحكم ويب وتكامل مع نظام POS تم تطويره باستخدام React و Electron."
        },
        proj2: {
          name: "سوق الجملة",
          desc: "نظام تجارة إلكترونية متعدد المنصات يربط الموزعين والمشترين مع مزامنة فورية تم تطويره باستخدام Laravel و Flutter."
        },
        proj3: {
          name: "تجارب معرض الأعمال",
          desc: "مجموعة من تطبيقات الويب ثلاثية الأبعاد التفاعلية عالية الأداء وتجارب واجهة المستخدم المعروضة باستخدام React Three Fiber."
        },
        proj4: {
          name: "نظام رعاية بنك BDL",
          desc: "منصة احترافية لإدارة الرعاية المالية تم تطويرها باستخدام Laravel لتبسيط سير عمل الرعاية المؤسسية."
        },
        proj5: {
          name: "متجر مستلزمات الحيوانات",
          desc: "حل تجارة إلكترونية شامل لمنتجات وخدمات الحيوانات الأليفة تم تطويره باستخدام PHP لتحسين عمليات التجزئة."
        },
        proj6: {
          name: "موقع الأمن السيبراني",
          desc: "بوابة مؤسسية احترافية لخدمات الأمن السيبراني تم تطويرها باستخدام PHP MVC لعرض حلول أمنية متقدمة."
        },
        proj7: {
          name: "منصة إدارة العيادات",
          desc: "نظام متقدم لإدارة الرعاية الصحية تم تطويره باستخدام Laravel و Vue.js لرقمنة عمليات العيادات والمستشفيات."
        },
        proj8: {
          name: "تطبيق الفعاليات المدرسية",
          desc: "تطبيق موبايل متعدد المنصات تم تطويره باستخدام Flutter و Firebase لتنسيق الفعاليات الأكاديمية بكفاءة."
        },
        proj9: {
          name: "معرض أعمال ثلاثي الأبعاد",
          desc: "عرض تفاعلي للغاية ثلاثي الأبعاد تم تطويره باستخدام React و Three.js لتوفير تجربة رقمية متميزة."
        },
        proj10: {
          name: "صفحات هبوط استراتيجية",
          desc: "مجموعة من صفحات الهبوط التسويقية المحسنة للأداء والمحولة للزوار تم تطويرها باستخدام PHP."
        },
        proj11: {
          name: "متجر أجهزة الأثاث",
          desc: "منصة متخصصة للمخزون ومبيعات B2B تم تطويرها باستخدام Laravel و Vue.js لتجار أجهزة الأثاث."
        },
        proj12: {
          name: "مؤسسة التجارة الإلكترونية",
          desc: "منصة تجارة إلكترونية قابلة للتطوير على مستوى المؤسسات مع أدوات إدارة شاملة تم تطويرها باستخدام Laravel."
        },
        proj13: {
          name: "دردشة ذكاء اصطناعي",
          desc: "منصة محادثة متقدمة تعمل بالذكاء الاصطناعي مدمجة مع أحدث نماذج اللغة تم تطويرها باستخدام Laravel."
        },
        proj14: {
          name: "وكالة تقنية رقمية",
          desc: "بوابة مؤسسية احترافية لشركة تقنية ناشئة تم تطويرها باستخدام Laravel و Tailwind CSS."
        },
        proj15: {
          name: "تطبيق مراسلة فوري",
          desc: "منصة اتصال فورية قابلة للتطوير مع مزامنة في الوقت الفعلي تم تطويرها باستخدام Laravel و Pusher."
        },
        proj16: {
          name: "سوق SaaS متعدد البائعين",
          desc: "سوق SaaS شامل متعدد المتاجر تم تطويره باستخدام Laravel لدعم العديد من البائعين والواجهات."
        },
        proj17: {
          name: "الجناح الرقمي للمطاعم",
          desc: "نظام قائمة رقمية وحجز حديث تم تطويره باستخدام Laravel و Vue.js لتعزيز خدمات المطاعم."
        }
      }
    },
    contact: {
      subtitle: "ابق على تواصل",
      title: "اتصل.",
      nameLabel: "اسمك",
      namePlaceholder: "ما هو اسمك الكريم؟",
      emailLabel: "بريدك الإلكتروني",
      emailPlaceholder: "ما هو عنوان بريدك الإلكتروني؟",
      messageLabel: "رسالتك",
      messagePlaceholder: "ماذا تريد أن تقول؟",
      send: "إرسال",
      sending: "جاري الإرسال...",
      success: "شكراً لك. سأرد عليك في أقرب وقت ممكن.",
      error: "حدث خطأ ما. يرجى المحاولة مرة أخرى."
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('appLang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('appLang', language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.style.transition = 'opacity 0.3s ease-in-out';
  }, [language]);

  const changeLanguage = (newLang) => {
    if (newLang === language) return;
    document.body.style.opacity = '0';
    setTimeout(() => {
      setLanguage(newLang);
      document.body.style.opacity = '1';
    }, 300);
  };

  const t = (keyString) => {
    const keys = keyString.split('.');
    let result = translations[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return keyString; 
      }
    }
    return result;
  };

  const isRtl = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
