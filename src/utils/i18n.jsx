import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
    meta: {
      title: "Oussama — Full-Stack Developer",
      description:
        "Portfolio of Oussama, a full-stack developer building web, mobile, and desktop software with React, Laravel, Flutter, and Electron.",
      locale: "en_US",
    },
    nav: {
      skip: "Skip to content",
      primary: "Primary navigation",
      home: "Back to top",
      about: "About",
      skills: "Skills",
      experience: "Work",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      newTab: "Opens in a new tab",
    },
    hero: {
      eyebrow: "Full-stack developer",
      name: "Oussama",
      headline: "Web, mobile, and desktop software for real operations.",
      description:
        "I build inventory and point-of-sale tools, wholesale marketplaces, and management platforms with React, Laravel, Flutter, and Electron.",
      viewProjects: "View my projects",
      contactMe: "Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
    about: {
      eyebrow: "About",
      title: "Practical software across web, mobile, and desktop.",
      description:
        "I am a full-stack developer. The work in this portfolio is software for running operations: wholesale inventory, marketplaces, clinic and store administration, and messaging. I use React and Vue for interfaces, Laravel and Node.js for servers, Flutter for mobile, and Electron and Tauri for desktop, with PostgreSQL, MySQL, and Firebase for data.",
      areas: {
        web: {
          title: "Web applications",
          text: "Interfaces and APIs with React, Vue, Laravel, and Node.js.",
        },
        platforms: {
          title: "Mobile and desktop",
          text: "Flutter apps, plus desktop software with Electron and Tauri.",
        },
        systems: {
          title: "Business systems",
          text: "Point of sale, wholesale marketplaces, and management tools.",
        },
      },
    },
    skills: {
      eyebrow: "Technologies",
      title: "What I use to build.",
      description:
        "Languages and tools already used in the projects on this site, grouped by where they sit in the stack.",
      categories: {
        languages: "Languages",
        frontend: "Web interfaces",
        backend: "Backend and APIs",
        platforms: "Mobile and desktop",
        data: "Databases and services",
      },
    },
    experience: {
      eyebrow: "Selected work",
      title: "Systems I have built.",
      description:
        "Project work across wholesale systems, marketplaces, and independent builds.",
      items: {
        item1: {
          title: "Wholesale POS and inventory",
          context: "AgroAlim",
          points: [
            "Built a web dashboard and a desktop point-of-sale application for wholesale inventory.",
            "Connected the applications to backend APIs and used Firebase for data synchronization.",
            "Covered inventory and transaction workflows for wholesale operations.",
          ],
        },
        item2: {
          title: "Wholesale marketplace",
          context: "Web and mobile",
          points: [
            "Built the web platform with React and Laravel for wholesale product distribution.",
            "Built a Flutter application for buyers using the marketplace remotely.",
            "Integrated order tracking and payment gateways, with data shared across web and mobile.",
          ],
        },
        item3: {
          title: "Independent client work",
          context: "Web and desktop",
          points: [
            "Built interactive web interfaces with React and Three.js.",
            "Built desktop applications with Electron and Tauri.",
            "Delivered custom software for specific business needs.",
          ],
        },
      },
    },
    works: {
      eyebrow: "Projects",
      title: "Selected systems.",
      description:
        "The projects with the widest technical scope, with the problem and the part I built.",
      moreLabel: "Additional projects",
      problemLabel: "Problem",
      builtLabel: "What I built",
      source: "Source code",
      demo: "Live demo",
      preview: "Preview",
      items: {
        proj1: {
          name: "AgroAlim POS",
          summary:
            "Web dashboard and desktop point-of-sale application for wholesale inventory, built with React, Electron, and Firebase.",
          problem:
            "Wholesale inventory had to be managed from both a web dashboard and a desktop point of sale.",
          built:
            "I built the web dashboard and the desktop POS with React and Electron, and used Firebase for data synchronization.",
          highlights: [
            "Web dashboard and desktop point-of-sale application",
            "Firebase for data synchronization",
            "Inventory and transaction workflows for wholesale",
          ],
        },
        proj2: {
          name: "Wholesale Marketplace",
          summary:
            "Web platform and Flutter app connecting wholesale distributors with remote buyers, built with React, Laravel, and PostgreSQL.",
          problem:
            "Distributors and remote buyers needed a shared way to browse products and place orders.",
          built:
            "I built the web platform with React and Laravel and a Flutter app for remote buyers, including order tracking and payment gateway integration.",
          highlights: [
            "React and Laravel web platform, with PostgreSQL",
            "Flutter application for remote buyers",
            "Order tracking and payment gateway integration",
          ],
        },
        proj3: {
          name: "Portfolio Experiments",
          summary: "Interactive 3D web experiments built with React Three Fiber.",
        },
        proj4: {
          name: "BDL Banque Sponsoring",
          summary: "Sponsorship management platform built with Laravel and MySQL.",
        },
        proj5: {
          name: "Pet Shop",
          summary: "Pet shop management and sales site built with PHP and jQuery.",
        },
        proj6: {
          name: "DzShield",
          summary: "Public site for cybersecurity services, built with PHP MVC and Tailwind CSS.",
          problem: "A cybersecurity service needed a public site to present what it offers.",
          built: "I built the site with PHP MVC and Tailwind CSS.",
          highlights: [
            "Marketing site for cybersecurity services",
            "PHP MVC and Tailwind CSS",
          ],
        },
        proj7: {
          name: "Clinics and Hospitals Platform",
          summary: "Management platform for clinics and hospitals, built with Laravel and Vue.",
          problem:
            "Clinics and hospitals needed software to organize day-to-day facility operations.",
          built: "I built the management platform with Laravel and Vue.",
          highlights: [
            "Operations platform for clinics and hospitals",
            "Laravel and Vue",
          ],
        },
        proj8: {
          name: "School Events App",
          summary: "Mobile app for coordinating school events, built with Flutter and Firebase.",
        },
        proj9: {
          name: "Interactive 3D Portfolio",
          summary: "Interactive portfolio built with React and Three.js.",
        },
        proj10: {
          name: "Marketing Pages",
          summary: "Marketing pages built with PHP and Bootstrap.",
        },
        proj11: {
          name: "Furniture Hardware Store",
          summary:
            "Inventory and sales tool for a furniture hardware store, built with Laravel and Vue.",
        },
        proj12: {
          name: "Ecommerce Store",
          summary: "Online store with checkout, built with Laravel and MySQL.",
        },
        proj13: {
          name: "Chat AI Tool",
          summary: "Chat interface connected to a language-model API, built with Laravel.",
        },
        proj14: {
          name: "Tech Company Website",
          summary: "Company website built with Laravel and Tailwind CSS.",
        },
        proj15: {
          name: "Messaging App",
          summary: "Messaging application with real-time delivery, built with Laravel and Pusher.",
          problem: "The product needed conversations to update as messages were sent.",
          built: "I built the messaging application with Laravel and Pusher.",
          highlights: ["Real-time message delivery with Pusher", "Laravel application"],
        },
        proj16: {
          name: "Multi-Vendor Marketplace",
          summary:
            "Marketplace where several sellers each have a storefront, built with Laravel and Stripe.",
          problem: "Multiple sellers needed separate storefronts inside one marketplace.",
          built: "I built the marketplace with Laravel and Stripe.",
          highlights: ["Storefronts for multiple sellers", "Stripe payment integration"],
        },
        proj17: {
          name: "Restaurant Website",
          summary: "Digital menu and reservation site built with Laravel and Vue.",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell me about the work.",
      description: "Send a message, or email me directly.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message",
      messagePlaceholder: "What would you like to talk about?",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent. I will reply by email.",
      error: "The message could not be sent. Please email me directly.",
      nameRequired: "Enter your name.",
      emailRequired: "Enter your email.",
      emailInvalid: "Enter a valid email address.",
      messageRequired: "Enter a message.",
      profiles: "Profiles",
      rights: "All rights reserved.",
    },
  },
  fr: {
    meta: {
      title: "Oussama — Développeur full-stack",
      description:
        "Portfolio d'Oussama, développeur full-stack. Logiciels web, mobile et desktop avec React, Laravel, Flutter et Electron.",
      locale: "fr_FR",
    },
    nav: {
      skip: "Aller au contenu",
      primary: "Navigation principale",
      home: "Retour en haut",
      about: "Profil",
      skills: "Compétences",
      experience: "Travaux",
      projects: "Projets",
      contact: "Contact",
      language: "Langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      newTab: "S'ouvre dans un nouvel onglet",
    },
    hero: {
      eyebrow: "Développeur full-stack",
      name: "Oussama",
      headline: "Des logiciels web, mobile et desktop pour des opérations concrètes.",
      description:
        "Je développe des outils d'inventaire et de point de vente, des places de marché de gros et des plateformes de gestion avec React, Laravel, Flutter et Electron.",
      viewProjects: "Voir mes projets",
      contactMe: "Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
    },
    about: {
      eyebrow: "Profil",
      title: "Des logiciels concrets, sur le web, le mobile et le bureau.",
      description:
        "Je suis développeur full-stack. Les projets de ce portfolio sont des logiciels pour les opérations : inventaire de gros, places de marché, administration de cliniques et de commerces, et messagerie. J'utilise React et Vue pour les interfaces, Laravel et Node.js pour les serveurs, Flutter pour le mobile, et Electron et Tauri pour le bureau, avec PostgreSQL, MySQL et Firebase pour les données.",
      areas: {
        web: {
          title: "Applications web",
          text: "Interfaces et API avec React, Vue, Laravel et Node.js.",
        },
        platforms: {
          title: "Mobile et bureau",
          text: "Applications Flutter, et logiciels de bureau avec Electron et Tauri.",
        },
        systems: {
          title: "Systèmes métier",
          text: "Point de vente, places de marché de gros et outils de gestion.",
        },
      },
    },
    skills: {
      eyebrow: "Technologies",
      title: "Ce que j'utilise pour construire.",
      description:
        "Langages et outils déjà utilisés dans les projets de ce site, regroupés selon leur place dans la pile technique.",
      categories: {
        languages: "Langages",
        frontend: "Interfaces web",
        backend: "Backend et API",
        platforms: "Mobile et bureau",
        data: "Bases de données et services",
      },
    },
    experience: {
      eyebrow: "Travaux choisis",
      title: "Systèmes que j'ai construits.",
      description:
        "Travaux de projet sur des systèmes de gros, des places de marché et des réalisations indépendantes.",
      items: {
        item1: {
          title: "Point de vente et inventaire de gros",
          context: "AgroAlim",
          points: [
            "Création d'un tableau de bord web et d'une application de point de vente pour l'inventaire de gros.",
            "Connexion des applications aux API, avec Firebase pour la synchronisation des données.",
            "Prise en charge des flux d'inventaire et de transaction pour la vente en gros.",
          ],
        },
        item2: {
          title: "Place de marché de gros",
          context: "Web et mobile",
          points: [
            "Création de la plateforme web avec React et Laravel pour la distribution de produits de gros.",
            "Création d'une application Flutter pour les acheteurs à distance.",
            "Intégration du suivi des commandes et des passerelles de paiement, avec des données partagées entre le web et le mobile.",
          ],
        },
        item3: {
          title: "Travaux indépendants",
          context: "Web et bureau",
          points: [
            "Création d'interfaces web interactives avec React et Three.js.",
            "Création d'applications de bureau avec Electron et Tauri.",
            "Livraison de logiciels adaptés à des besoins métier précis.",
          ],
        },
      },
    },
    works: {
      eyebrow: "Projets",
      title: "Systèmes choisis.",
      description:
        "Les projets au périmètre technique le plus large, avec le problème traité et la partie que j'ai construite.",
      moreLabel: "Autres projets",
      problemLabel: "Problème",
      builtLabel: "Ce que j'ai construit",
      source: "Code source",
      demo: "Démo en ligne",
      preview: "Aperçu",
      items: {
        proj1: {
          name: "POS AgroAlim",
          summary:
            "Tableau de bord web et application de point de vente pour l'inventaire de gros, avec React, Electron et Firebase.",
          problem:
            "L'inventaire de gros devait être géré à la fois depuis un tableau de bord web et un point de vente de bureau.",
          built:
            "J'ai construit le tableau de bord web et le POS de bureau avec React et Electron, et utilisé Firebase pour la synchronisation des données.",
          highlights: [
            "Tableau de bord web et application de point de vente",
            "Firebase pour la synchronisation des données",
            "Flux d'inventaire et de transaction pour le gros",
          ],
        },
        proj2: {
          name: "Place de marché de gros",
          summary:
            "Plateforme web et application Flutter reliant distributeurs et acheteurs distants, avec React, Laravel et PostgreSQL.",
          problem:
            "Les distributeurs et les acheteurs distants avaient besoin d'un moyen commun pour consulter les produits et passer commande.",
          built:
            "J'ai construit la plateforme web avec React et Laravel et une application Flutter pour les acheteurs distants, avec le suivi des commandes et l'intégration d'une passerelle de paiement.",
          highlights: [
            "Plateforme web React et Laravel, avec PostgreSQL",
            "Application Flutter pour les acheteurs distants",
            "Suivi des commandes et passerelle de paiement",
          ],
        },
        proj3: {
          name: "Expériences de portfolio",
          summary: "Expériences web 3D interactives construites avec React Three Fiber.",
        },
        proj4: {
          name: "Sponsoring BDL Banque",
          summary: "Plateforme de gestion des parrainages, construite avec Laravel et MySQL.",
        },
        proj5: {
          name: "Animalerie",
          summary: "Site de gestion et de vente pour une animalerie, construit avec PHP et jQuery.",
        },
        proj6: {
          name: "DzShield",
          summary: "Site public pour des services de cybersécurité, construit avec PHP MVC et Tailwind CSS.",
          problem:
            "Un service de cybersécurité avait besoin d'un site public pour présenter son offre.",
          built: "J'ai construit le site avec PHP MVC et Tailwind CSS.",
          highlights: [
            "Site de présentation pour des services de cybersécurité",
            "PHP MVC et Tailwind CSS",
          ],
        },
        proj7: {
          name: "Plateforme cliniques et hôpitaux",
          summary: "Plateforme de gestion pour cliniques et hôpitaux, construite avec Laravel et Vue.",
          problem:
            "Des cliniques et des hôpitaux avaient besoin d'un logiciel pour organiser le fonctionnement quotidien.",
          built: "J'ai construit la plateforme de gestion avec Laravel et Vue.",
          highlights: [
            "Plateforme d'exploitation pour cliniques et hôpitaux",
            "Laravel et Vue",
          ],
        },
        proj8: {
          name: "Application d'événements scolaires",
          summary:
            "Application mobile pour coordonner des événements scolaires, construite avec Flutter et Firebase.",
        },
        proj9: {
          name: "Portfolio 3D interactif",
          summary: "Portfolio interactif construit avec React et Three.js.",
        },
        proj10: {
          name: "Pages marketing",
          summary: "Pages marketing construites avec PHP et Bootstrap.",
        },
        proj11: {
          name: "Quincaillerie de mobilier",
          summary:
            "Outil d'inventaire et de vente pour une quincaillerie de mobilier, construit avec Laravel et Vue.",
        },
        proj12: {
          name: "Boutique en ligne",
          summary: "Boutique en ligne avec paiement, construite avec Laravel et MySQL.",
        },
        proj13: {
          name: "Outil de chat IA",
          summary: "Interface de chat reliée à une API de modèle de langage, construite avec Laravel.",
        },
        proj14: {
          name: "Site d'entreprise tech",
          summary: "Site d'entreprise construit avec Laravel et Tailwind CSS.",
        },
        proj15: {
          name: "Application de messagerie",
          summary:
            "Application de messagerie avec livraison en temps réel, construite avec Laravel et Pusher.",
          problem: "Le produit devait mettre les conversations à jour à mesure que les messages partaient.",
          built: "J'ai construit l'application de messagerie avec Laravel et Pusher.",
          highlights: ["Livraison des messages en temps réel avec Pusher", "Application Laravel"],
        },
        proj16: {
          name: "Place de marché multi-vendeurs",
          summary:
            "Place de marché où plusieurs vendeurs ont chacun une boutique, construite avec Laravel et Stripe.",
          problem:
            "Plusieurs vendeurs avaient besoin de boutiques distinctes dans une même place de marché.",
          built: "J'ai construit la place de marché avec Laravel et Stripe.",
          highlights: ["Boutiques pour plusieurs vendeurs", "Intégration de paiement Stripe"],
        },
        proj17: {
          name: "Site de restaurant",
          summary: "Site de menu numérique et de réservation, construit avec Laravel et Vue.",
        },
      },
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlez-moi du besoin.",
      description: "Envoyez un message, ou écrivez-moi directement.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "E-mail",
      emailPlaceholder: "vous@entreprise.com",
      messageLabel: "Message",
      messagePlaceholder: "De quoi souhaitez-vous parler ?",
      send: "Envoyer",
      sending: "Envoi…",
      success: "Message envoyé. Je répondrai par e-mail.",
      error: "Le message n'a pas pu être envoyé. Écrivez-moi directement par e-mail.",
      nameRequired: "Indiquez votre nom.",
      emailRequired: "Indiquez votre e-mail.",
      emailInvalid: "Indiquez une adresse e-mail valide.",
      messageRequired: "Écrivez un message.",
      profiles: "Profils",
      rights: "Tous droits réservés.",
    },
  },
  ar: {
    meta: {
      title: "أسامة — مطور برمجيات متكامل",
      description:
        "معرض أعمال أسامة، مطور برمجيات متكامل يبني برامج للويب والهاتف وسطح المكتب باستخدام React وLaravel وFlutter وElectron.",
      locale: "ar_AR",
    },
    nav: {
      skip: "تخطي إلى المحتوى",
      primary: "التنقل الرئيسي",
      home: "العودة إلى الأعلى",
      about: "نبذة",
      skills: "المهارات",
      experience: "الأعمال",
      projects: "المشاريع",
      contact: "تواصل",
      language: "اللغة",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      newTab: "يفتح في علامة تبويب جديدة",
    },
    hero: {
      eyebrow: "مطور برمجيات متكامل",
      name: "أسامة",
      headline: "برمجيات للويب والهاتف وسطح المكتب، لعمليات فعلية.",
      description:
        "أبني أدوات للمخزون ونقاط البيع، وأسواق الجملة، ومنصات الإدارة باستخدام React وLaravel وFlutter وElectron.",
      viewProjects: "عرض المشاريع",
      contactMe: "تواصل",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "البريد",
    },
    about: {
      eyebrow: "نبذة",
      title: "برمجيات عملية للويب والهاتف وسطح المكتب.",
      description:
        "أنا مطور برمجيات متكامل. الأعمال في هذا الموقع برمجيات لإدارة العمليات: مخزون الجملة، والأسواق، وإدارة العيادات والمتاجر، والمراسلة. أستخدم React وVue للواجهات، وLaravel وNode.js للخوادم، وFlutter للهاتف، وElectron وTauri لسطح المكتب، مع PostgreSQL وMySQL وFirebase للبيانات.",
      areas: {
        web: {
          title: "تطبيقات الويب",
          text: "واجهات وتطبيقات مع React وVue وLaravel وNode.js.",
        },
        platforms: {
          title: "الهاتف وسطح المكتب",
          text: "تطبيقات Flutter، وبرامج سطح مكتب مع Electron وTauri.",
        },
        systems: {
          title: "أنظمة الأعمال",
          text: "نقاط البيع، وأسواق الجملة، وأدوات الإدارة.",
        },
      },
    },
    skills: {
      eyebrow: "التقنيات",
      title: "ما أستخدمه في البناء.",
      description: "لغات وأدوات مستخدمة فعلًا في مشاريع هذا الموقع، مرتبة حسب موضعها في البنية.",
      categories: {
        languages: "اللغات",
        frontend: "واجهات الويب",
        backend: "الخادم وواجهات البرمجة",
        platforms: "الهاتف وسطح المكتب",
        data: "قواعد البيانات والخدمات",
      },
    },
    experience: {
      eyebrow: "أعمال مختارة",
      title: "أنظمة بنيتها.",
      description: "أعمال مشاريع في أنظمة الجملة والأسواق والتطوير المستقل.",
      items: {
        item1: {
          title: "نقطة بيع ومخزون للجملة",
          context: "AgroAlim",
          points: [
            "بناء لوحة ويب وتطبيق نقطة بيع لسطح المكتب لإدارة مخزون الجملة.",
            "ربط التطبيقات بواجهات البرمجة واستخدام Firebase لمزامنة البيانات.",
            "تغطية مسارات المخزون والمعاملات في عمليات الجملة.",
          ],
        },
        item2: {
          title: "سوق الجملة",
          context: "ويب وهاتف",
          points: [
            "بناء منصة الويب باستخدام React وLaravel لتوزيع منتجات الجملة.",
            "بناء تطبيق Flutter للمشترين الذين يستخدمون السوق عن بعد.",
            "دمج تتبع الطلبات وبوابات الدفع، مع بيانات مشتركة بين الويب والهاتف.",
          ],
        },
        item3: {
          title: "أعمال مستقلة",
          context: "ويب وسطح مكتب",
          points: [
            "بناء واجهات ويب تفاعلية باستخدام React وThree.js.",
            "بناء تطبيقات سطح مكتب باستخدام Electron وTauri.",
            "تسليم برمجيات مخصصة لاحتياجات عمل محددة.",
          ],
        },
      },
    },
    works: {
      eyebrow: "المشاريع",
      title: "أنظمة مختارة.",
      description: "المشاريع الأوسع من حيث النطاق التقني، مع المشكلة والجزء الذي بنيته.",
      moreLabel: "مشاريع إضافية",
      problemLabel: "المشكلة",
      builtLabel: "ما بنيته",
      source: "الشيفرة المصدرية",
      demo: "عرض مباشر",
      preview: "معاينة",
      items: {
        proj1: {
          name: "نقطة بيع AgroAlim",
          summary:
            "لوحة ويب وتطبيق نقطة بيع لسطح المكتب لمخزون الجملة، باستخدام React وElectron وFirebase.",
          problem: "كان مخزون الجملة بحاجة إلى إدارة من لوحة ويب ومن نقطة بيع على سطح المكتب معًا.",
          built:
            "بنيت لوحة الويب وتطبيق نقطة البيع باستخدام React وElectron، واستخدمت Firebase لمزامنة البيانات.",
          highlights: [
            "لوحة ويب وتطبيق نقطة بيع لسطح المكتب",
            "Firebase لمزامنة البيانات",
            "مسارات المخزون والمعاملات للجملة",
          ],
        },
        proj2: {
          name: "سوق الجملة",
          summary:
            "منصة ويب وتطبيق Flutter يربطان موزعي الجملة بالمشترين عن بعد، باستخدام React وLaravel وPostgreSQL.",
          problem: "احتاج الموزعون والمشترون عن بعد إلى طريقة مشتركة لاستعراض المنتجات وإرسال الطلبات.",
          built:
            "بنيت منصة الويب باستخدام React وLaravel وتطبيق Flutter للمشترين عن بعد، مع تتبع الطلبات ودمج بوابة الدفع.",
          highlights: [
            "منصة ويب بـ React وLaravel مع PostgreSQL",
            "تطبيق Flutter للمشترين عن بعد",
            "تتبع الطلبات وبوابة الدفع",
          ],
        },
        proj3: {
          name: "تجارب المعرض",
          summary: "تجارب ويب ثلاثية الأبعاد تفاعلية مبنية بـ React Three Fiber.",
        },
        proj4: {
          name: "رعاية بنك BDL",
          summary: "منصة لإدارة رعايات بنك BDL، مبنية بـ Laravel وMySQL.",
        },
        proj5: {
          name: "متجر الحيوانات",
          summary: "موقع لإدارة متجر حيوانات ومبيعاته، مبني بـ PHP وjQuery.",
        },
        proj6: {
          name: "DzShield",
          summary: "موقع عام لخدمات الأمن السيبراني، مبني بـ PHP MVC وTailwind CSS.",
          problem: "احتاجت خدمة أمن سيبراني إلى موقع عام يعرض ما تقدمه.",
          built: "بنيت الموقع باستخدام PHP MVC وTailwind CSS.",
          highlights: ["موقع تعريفي لخدمات الأمن السيبراني", "PHP MVC وTailwind CSS"],
        },
        proj7: {
          name: "منصة العيادات والمستشفيات",
          summary: "منصة إدارة للعيادات والمستشفيات، مبنية بـ Laravel وVue.",
          problem: "احتاجت عيادات ومستشفيات إلى برنامج لتنظيم التشغيل اليومي.",
          built: "بنيت منصة الإدارة باستخدام Laravel وVue.",
          highlights: ["منصة تشغيل للعيادات والمستشفيات", "Laravel وVue"],
        },
        proj8: {
          name: "تطبيق الفعاليات المدرسية",
          summary: "تطبيق هاتف لتنسيق الفعاليات المدرسية، مبني بـ Flutter وFirebase.",
        },
        proj9: {
          name: "معرض أعمال ثلاثي الأبعاد",
          summary: "معرض أعمال تفاعلي مبني بـ React وThree.js.",
        },
        proj10: {
          name: "صفحات تسويقية",
          summary: "صفحات تسويقية مبنية بـ PHP وBootstrap.",
        },
        proj11: {
          name: "متجر أدوات الأثاث",
          summary: "أداة مخزون ومبيعات لمتجر أدوات أثاث، مبنية بـ Laravel وVue.",
        },
        proj12: {
          name: "متجر إلكتروني",
          summary: "متجر إلكتروني مع إتمام الشراء، مبني بـ Laravel وMySQL.",
        },
        proj13: {
          name: "أداة دردشة بالذكاء الاصطناعي",
          summary: "واجهة دردشة متصلة بواجهة نموذج لغوي، مبنية بـ Laravel.",
        },
        proj14: {
          name: "موقع شركة تقنية",
          summary: "موقع شركة مبني بـ Laravel وTailwind CSS.",
        },
        proj15: {
          name: "تطبيق مراسلة",
          summary: "تطبيق مراسلة مع تسليم فوري، مبني بـ Laravel وPusher.",
          problem: "احتاج المنتج إلى تحديث المحادثات أثناء إرسال الرسائل.",
          built: "بنيت تطبيق المراسلة باستخدام Laravel وPusher.",
          highlights: ["تسليم فوري للرسائل عبر Pusher", "تطبيق Laravel"],
        },
        proj16: {
          name: "سوق متعدد البائعين",
          summary: "سوق يملك فيه عدة بائعين متاجرهم الخاصة، مبني بـ Laravel وStripe.",
          problem: "احتاج عدة بائعين إلى متاجر منفصلة داخل سوق واحد.",
          built: "بنيت السوق باستخدام Laravel وStripe.",
          highlights: ["متاجر لعدة بائعين", "دمج الدفع عبر Stripe"],
        },
        proj17: {
          name: "موقع مطعم",
          summary: "موقع قائمة رقمية وحجوزات، مبني بـ Laravel وVue.",
        },
      },
    },
    contact: {
      eyebrow: "تواصل",
      title: "أخبرني عن العمل.",
      description: "أرسل رسالة، أو راسلني مباشرة.",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@company.com",
      messageLabel: "الرسالة",
      messagePlaceholder: "ما الذي تود الحديث عنه؟",
      send: "إرسال الرسالة",
      sending: "جارٍ الإرسال…",
      success: "أُرسلت الرسالة. سأرد عبر البريد الإلكتروني.",
      error: "تعذر إرسال الرسالة. راسلني مباشرة عبر البريد الإلكتروني.",
      nameRequired: "أدخل اسمك.",
      emailRequired: "أدخل بريدك الإلكتروني.",
      emailInvalid: "أدخل بريدًا إلكترونيًا صالحًا.",
      messageRequired: "اكتب رسالة.",
      profiles: "الحسابات",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};

const locales = ["en", "fr", "ar"];

const LanguageContext = createContext();

const setMetaContent = (selector, content) => {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", content);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const stored = localStorage.getItem("appLang");
    return locales.includes(stored) ? stored : "en";
  });

  useEffect(() => {
    const copy = translations[language].meta;
    localStorage.setItem("appLang", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.title = copy.title;
    setMetaContent('meta[name="description"]', copy.description);
    setMetaContent('meta[property="og:title"]', copy.title);
    setMetaContent('meta[property="og:description"]', copy.description);
    setMetaContent('meta[property="og:locale"]', copy.locale);
    setMetaContent('meta[name="twitter:title"]', copy.title);
    setMetaContent('meta[name="twitter:description"]', copy.description);
  }, [language]);

  const setLanguage = (nextLanguage) => {
    if (!locales.includes(nextLanguage) || nextLanguage === language) return;
    setLanguageState(nextLanguage);
  };

  const t = (keyString) => {
    const keys = keyString.split(".");
    let result = translations[language];
    for (const key of keys) {
      if (result && Object.prototype.hasOwnProperty.call(result, key)) {
        result = result[key];
      } else {
        return keyString;
      }
    }
    return result;
  };

  const isRtl = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
