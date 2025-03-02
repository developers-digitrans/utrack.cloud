import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translations
const resources = {
  en: {
    translation: {
      // Navbar
      features: "Features",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      login: "Login",
      signup: "Sign Up",
      dashboard: "Dashboard",
      profile: "Profile",
      logout: "Logout",

      // Hero Section
      hero_title: "Streamline Your Projects with Powerful Management Tools",
      hero_subtitle:
        "Boost productivity, enhance collaboration, and deliver projects on time with our intuitive project management platform designed for modern teams.",
      get_started: "Get Started Free",
      see_how: "See How It Works",
      scroll_explore: "Scroll to explore",

      // Features Section
      features_title: "Powerful Features for Modern Teams",
      features_subtitle:
        "Our platform provides everything you need to manage projects efficiently and collaborate seamlessly with your team.",
      explore_features: "Explore All Features",

      // Pricing Section
      pricing_title: "Simple, transparent pricing",
      pricing_description:
        "Choose the plan that's right for you and your team. All plans include a 14-day free trial.",
      monthly: "Monthly",
      annual: "Annual",
      save: "Save 20%",
      pricing_footer:
        "All plans include unlimited storage, 24/7 support, and our 30-day money-back guarantee. Need a custom solution?",
      contact_sales: "Contact our sales team",

      // Footer
      quick_links: "Quick Links",
      contact_us: "Contact Us",
      stay_updated: "Stay Updated",
      newsletter_text:
        "Subscribe to our newsletter for the latest updates and offers.",
      subscribe: "Subscribe",
      rights_reserved: "All rights reserved.",
      privacy_policy: "Privacy Policy",
      terms: "Terms of Service",
      cookie_policy: "Cookie Policy",

      // Auth Modal
      welcome_back: "Welcome back",
      create_account: "Create an account",
      enter_credentials: "Enter your credentials to access your account",
      sign_up_start: "Sign up to get started with our platform",
      full_name: "Full Name",
      email: "Email",
      password: "Password",
      forgot_password: "Forgot password?",
      cancel: "Cancel",
      or_continue: "OR CONTINUE WITH",

      // Feature Card
      boost_productivity: "Boost Productivity",
      streamline_workflow: "Streamline Workflow",
      feature_description:
        "Streamline your workflow and get more done in less time with our intuitive project management tools.",
      learn_more: "Learn more",
      easy_to_implement: "Easy to implement",
      seamless_integration: "Seamless integration",
      real_time_updates: "Real-time updates",

      // Feature Section Items
      streamlined_workflow: "Streamlined Workflow",
      streamlined_workflow_desc:
        "Automate repetitive tasks and focus on what matters most with our intelligent workflow tools.",
      goal_tracking: "Goal Tracking",
      goal_tracking_desc:
        "Set clear objectives and track progress with visual dashboards and real-time updates.",
      ai_powered_insights: "AI-Powered Insights",
      ai_powered_insights_desc:
        "Leverage machine learning to identify patterns and get actionable recommendations for your projects.",
      collaborative_workspace: "Collaborative Workspace",
      collaborative_workspace_desc:
        "Bring your team together in a shared space designed for seamless communication and idea sharing.",

      // Pricing Card
      basic: "Basic",
      starter: "Starter",
      pro: "Pro",
      enterprise: "Enterprise",
      perfect_for_individuals: "Perfect for individuals and small teams",
      ideal_for_growing: "Ideal for growing teams and businesses",
      for_large_organizations: "For large organizations with complex needs",
      per_month: "/month",
      per_year: "/year",
      save_annually: "Save annually",
      get_started: "Get Started",
      start_free_trial: "Start Free Trial",
      contact_sales: "Contact Sales",
      popular: "Popular",

      // Pricing Features
      up_to_5_projects: "Up to 5 projects",
      basic_analytics: "Basic analytics",
      support_247: "24/7 support",
      custom_domains: "Custom domains",
      advanced_security: "Advanced security",
      team_collaboration: "Team collaboration",
      unlimited_projects: "Unlimited projects",
      advanced_analytics: "Advanced analytics",
      priority_support: "24/7 priority support",
      enterprise_analytics: "Enterprise analytics",
      dedicated_support: "24/7 dedicated support",

      // Navbar Features
      task_management: "Task Management",
      task_management_desc: "Create, assign, and track tasks with ease",
      team_collaboration_feature: "Team Collaboration",
      team_collaboration_desc: "Work together seamlessly with your team",
      time_tracking: "Time Tracking",
      time_tracking_desc: "Monitor time spent on projects and tasks",
      analytics_reports: "Analytics & Reports",
      analytics_reports_desc: "Gain insights with powerful reporting tools",
      resource_management: "Resource Management",
      resource_management_desc: "Optimize resource allocation across projects",
      integrations: "Integrations",
      integrations_desc: "Connect with your favorite tools and services",

      // Hero Section Elements
      task_completed: "Task completed",
      just_now: "Just now",
      time_saved: "Time saved: 4 hours",

      // Auth Modal Elements
      logging_in: "Logging in...",
      creating_account: "Creating account...",
      google: "Google",
      github: "GitHub",
      preferences: "Preferences",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      language: "Language",
      project_management: "Project Management",

      // Footer specific
      company_description:
        "Modern project management platform designed to streamline your workflow and boost team productivity.",
      home: "Home",
      blog: "Blog",
      your_email_address: "Your email address",

      // Contact Page
      contact_subtitle:
        "We'd love to hear from you. Get in touch with our team.",
      our_offices: "Our Global Offices",
      view_on_map: "View on map",
      get_in_touch: "Get in Touch",
      contact_form_subtitle:
        "Have questions about our products or services? Fill out the form and our team will get back to you shortly.",
      email_us: "Email Us",
      call_us: "Call Us",
      subject: "Subject",
      message: "Message",
      send_message: "Send Message",

      // About Page
      about_digitrans: "About DIGITRANS.AI",
      about_subtitle:
        "Pioneering digital transformation solutions for a sustainable future",
      visit_digitrans: "Visit DIGITRANS.AI",
      our_company: "Our Company",
      company_overview:
        "DIGITRANS.AI is at the forefront of digital transformation, providing innovative technological solutions for businesses across Southeastern Europe.",
      our_vision: "Our Vision",
      our_mission: "Our Mission",
      vision_text:
        "DIGITRANS.AI envisions supporting Southeastern European industry with new technological systems and digital tools. We are committed to fostering sustainability, innovation, and research & development to create a more efficient and environmentally friendly industrial landscape.",
      mission_text:
        "DIGITRANS.AI is dedicated to representing future-oriented technologies and serving customers throughout the entire product lifecycle. We drive innovation for a sustainable and carbon-neutral industry, providing comprehensive solutions that address the evolving needs of businesses in the digital age.",
      our_approach: "Our Approach to Digital Transformation",
      approach_subtitle:
        "We combine cutting-edge technology with industry expertise to deliver comprehensive digital transformation solutions.",
      leadership_team: "Our Leadership Team",
      leadership_subtitle:
        "Meet the experts driving innovation and excellence at DIGITRANS.AI",
      partners: "Partners & Collaborations",
      partners_subtitle:
        "We work with leading organizations across Southeastern Europe to drive digital innovation",
      transform_business: "Ready to Transform Your Business?",
      transform_subtitle:
        "Partner with DIGITRANS.AI to unlock the full potential of digital transformation for your organization.",
    },
  },
  fr: {
    translation: {
      // Navbar
      features: "Fonctionnalités",
      pricing: "Tarification",
      about: "À propos",
      contact: "Contact",
      login: "Connexion",
      signup: "S'inscrire",
      dashboard: "Tableau de bord",
      profile: "Profil",
      logout: "Déconnexion",

      // Hero Section
      hero_title: "Simplifiez vos projets avec des outils de gestion puissants",
      hero_subtitle:
        "Augmentez la productivité, améliorez la collaboration et livrez vos projets à temps grâce à notre plateforme intuitive de gestion de projet conçue pour les équipes modernes.",
      get_started: "Commencer gratuitement",
      see_how: "Voir comment ça marche",
      scroll_explore: "Défiler pour explorer",

      // Features Section
      features_title: "Fonctionnalités puissantes pour les équipes modernes",
      features_subtitle:
        "Notre plateforme fournit tout ce dont vous avez besoin pour gérer efficacement les projets et collaborer de manière transparente avec votre équipe.",
      explore_features: "Explorer toutes les fonctionnalités",

      // Pricing Section
      pricing_title: "Tarification simple et transparente",
      pricing_description:
        "Choisissez le forfait qui convient à vous et votre équipe. Tous les forfaits incluent un essai gratuit de 14 jours.",
      monthly: "Mensuel",
      annual: "Annuel",
      save: "Économisez 20%",
      pricing_footer:
        "Tous les forfaits comprennent un stockage illimité, un support 24/7 et notre garantie de remboursement de 30 jours. Besoin d'une solution personnalisée?",
      contact_sales: "Contactez notre équipe commerciale",

      // Footer
      quick_links: "Liens rapides",
      contact_us: "Contactez-nous",
      stay_updated: "Restez informé",
      newsletter_text:
        "Abonnez-vous à notre newsletter pour les dernières mises à jour et offres.",
      subscribe: "S'abonner",
      rights_reserved: "Tous droits réservés.",
      privacy_policy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      cookie_policy: "Politique des cookies",

      // Auth Modal
      welcome_back: "Bon retour",
      create_account: "Créer un compte",
      enter_credentials: "Entrez vos identifiants pour accéder à votre compte",
      sign_up_start: "Inscrivez-vous pour commencer avec notre plateforme",
      full_name: "Nom complet",
      email: "Email",
      password: "Mot de passe",
      forgot_password: "Mot de passe oublié?",
      cancel: "Annuler",
      or_continue: "OU CONTINUER AVEC",

      // Feature Card
      boost_productivity: "Augmenter la productivité",
      streamline_workflow: "Simplifier le flux de travail",
      feature_description:
        "Simplifiez votre flux de travail et accomplissez plus en moins de temps avec nos outils intuitifs de gestion de projet.",
      learn_more: "En savoir plus",
      easy_to_implement: "Facile à mettre en œuvre",
      seamless_integration: "Intégration transparente",
      real_time_updates: "Mises à jour en temps réel",

      // Feature Section Items
      streamlined_workflow: "Flux de travail simplifié",
      streamlined_workflow_desc:
        "Automatisez les tâches répétitives et concentrez-vous sur ce qui compte le plus avec nos outils de flux de travail intelligents.",
      goal_tracking: "Suivi des objectifs",
      goal_tracking_desc:
        "Définissez des objectifs clairs et suivez les progrès avec des tableaux de bord visuels et des mises à jour en temps réel.",
      ai_powered_insights: "Analyses alimentées par l'IA",
      ai_powered_insights_desc:
        "Utilisez l'apprentissage automatique pour identifier les modèles et obtenir des recommandations exploitables pour vos projets.",
      collaborative_workspace: "Espace de travail collaboratif",
      collaborative_workspace_desc:
        "Réunissez votre équipe dans un espace partagé conçu pour une communication fluide et un partage d'idées.",

      // Pricing Card
      basic: "Basique",
      starter: "Débutant",
      pro: "Pro",
      enterprise: "Entreprise",
      perfect_for_individuals:
        "Parfait pour les individus et les petites équipes",
      ideal_for_growing: "Idéal pour les équipes et entreprises en croissance",
      for_large_organizations:
        "Pour les grandes organisations avec des besoins complexes",
      per_month: "/mois",
      per_year: "/an",
      save_annually: "Économisez annuellement",
      get_started: "Commencer",
      start_free_trial: "Démarrer l'essai gratuit",
      contact_sales: "Contacter les ventes",
      popular: "Populaire",

      // Pricing Features
      up_to_5_projects: "Jusqu'à 5 projets",
      basic_analytics: "Analyses de base",
      support_247: "Support 24/7",
      custom_domains: "Domaines personnalisés",
      advanced_security: "Sécurité avancée",
      team_collaboration: "Collaboration d'équipe",
      unlimited_projects: "Projets illimités",
      advanced_analytics: "Analyses avancées",
      priority_support: "Support prioritaire 24/7",
      enterprise_analytics: "Analyses d'entreprise",
      dedicated_support: "Support dédié 24/7",

      // Navbar Features
      task_management: "Gestion des tâches",
      task_management_desc: "Créer, assigner et suivre les tâches facilement",
      team_collaboration_feature: "Collaboration d'équipe",
      team_collaboration_desc:
        "Travaillez ensemble de manière transparente avec votre équipe",
      time_tracking: "Suivi du temps",
      time_tracking_desc:
        "Surveillez le temps passé sur les projets et les tâches",
      analytics_reports: "Analyses et rapports",
      analytics_reports_desc:
        "Obtenez des insights avec des outils de rapport puissants",
      resource_management: "Gestion des ressources",
      resource_management_desc:
        "Optimisez l'allocation des ressources entre les projets",
      integrations: "Intégrations",
      integrations_desc: "Connectez-vous à vos outils et services préférés",

      // Hero Section Elements
      task_completed: "Tâche terminée",
      just_now: "À l'instant",
      time_saved: "Temps économisé: 4 heures",

      // Auth Modal Elements
      logging_in: "Connexion en cours...",
      creating_account: "Création du compte...",
      google: "Google",
      github: "GitHub",
      preferences: "Préférences",
      theme: "Thème",
      light: "Clair",
      dark: "Sombre",
      language: "Langue",
      project_management: "Gestion de Projet",

      // Footer specific
      company_description:
        "Plateforme moderne de gestion de projet conçue pour simplifier votre flux de travail et augmenter la productivité de l'équipe.",
      home: "Accueil",
      blog: "Blog",
      your_email_address: "Votre adresse email",

      // Contact Page
      contact_subtitle:
        "Nous aimerions avoir de vos nouvelles. Contactez notre équipe.",
      our_offices: "Nos Bureaux Mondiaux",
      view_on_map: "Voir sur la carte",
      get_in_touch: "Entrer en Contact",
      contact_form_subtitle:
        "Vous avez des questions sur nos produits ou services? Remplissez le formulaire et notre équipe vous répondra dans les plus brefs délais.",
      email_us: "Envoyez-nous un email",
      call_us: "Appelez-nous",
      subject: "Sujet",
      message: "Message",
      send_message: "Envoyer le message",

      // About Page
      about_digitrans: "À propos de DIGITRANS.AI",
      about_subtitle:
        "Solutions pionnières de transformation numérique pour un avenir durable",
      visit_digitrans: "Visiter DIGITRANS.AI",
      our_company: "Notre Entreprise",
      company_overview:
        "DIGITRANS.AI est à l'avant-garde de la transformation numérique, fournissant des solutions technologiques innovantes pour les entreprises à travers l'Europe du Sud-Est.",
      our_vision: "Notre Vision",
      our_mission: "Notre Mission",
      vision_text:
        "DIGITRANS.AI envisage de soutenir l'industrie de l'Europe du Sud-Est avec de nouveaux systèmes technologiques et des outils numériques. Nous nous engageons à favoriser la durabilité, l'innovation et la recherche et développement pour créer un paysage industriel plus efficace et respectueux de l'environnement.",
      mission_text:
        "DIGITRANS.AI se consacre à représenter des technologies orientées vers l'avenir et à servir les clients tout au long du cycle de vie du produit. Nous stimulons l'innovation pour une industrie durable et neutre en carbone, fournissant des solutions complètes qui répondent aux besoins évolutifs des entreprises à l'ère numérique.",
      our_approach: "Notre Approche de la Transformation Numérique",
      approach_subtitle:
        "Nous combinons une technologie de pointe avec une expertise industrielle pour fournir des solutions complètes de transformation numérique.",
      leadership_team: "Notre Équipe de Direction",
      leadership_subtitle:
        "Rencontrez les experts qui stimulent l'innovation et l'excellence chez DIGITRANS.AI",
      partners: "Partenaires et Collaborations",
      partners_subtitle:
        "Nous travaillons avec des organisations de premier plan à travers l'Europe du Sud-Est pour stimuler l'innovation numérique",
      transform_business: "Prêt à Transformer Votre Entreprise?",
      transform_subtitle:
        "Associez-vous à DIGITRANS.AI pour libérer tout le potentiel de la transformation numérique pour votre organisation.",
    },
  },
  ar: {
    translation: {
      // Navbar
      features: "المميزات",
      pricing: "التسعير",
      about: "حول",
      contact: "اتصل بنا",
      login: "تسجيل الدخول",
      signup: "إنشاء حساب",
      dashboard: "لوحة التحكم",
      profile: "الملف الشخصي",
      logout: "تسجيل الخروج",

      // Hero Section
      hero_title: "تبسيط مشاريعك بأدوات إدارة قوية",
      hero_subtitle:
        "زيادة الإنتاجية، وتعزيز التعاون، وتسليم المشاريع في الوقت المحدد مع منصة إدارة المشاريع البديهية المصممة للفرق الحديثة.",
      get_started: "ابدأ مجانًا",
      see_how: "شاهد كيف يعمل",
      scroll_explore: "مرر للاستكشاف",

      // Features Section
      features_title: "ميزات قوية للفرق الحديثة",
      features_subtitle:
        "توفر منصتنا كل ما تحتاجه لإدارة المشاريع بكفاءة والتعاون بسلاسة مع فريقك.",
      explore_features: "استكشاف جميع الميزات",

      // Pricing Section
      pricing_title: "تسعير بسيط وشفاف",
      pricing_description:
        "اختر الخطة المناسبة لك ولفريقك. تشمل جميع الخطط فترة تجريبية مجانية لمدة 14 يومًا.",
      monthly: "شهري",
      annual: "سنوي",
      save: "وفر 20%",
      pricing_footer:
        "تشمل جميع الخطط تخزينًا غير محدود، ودعمًا على مدار الساعة طوال أيام الأسبوع، وضمان استرداد الأموال لمدة 30 يومًا. هل تحتاج إلى حل مخصص؟",
      contact_sales: "اتصل بفريق المبيعات لدينا",

      // Footer
      quick_links: "روابط سريعة",
      contact_us: "اتصل بنا",
      stay_updated: "ابق على اطلاع",
      newsletter_text:
        "اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والعروض.",
      subscribe: "اشترك",
      rights_reserved: "جميع الحقوق محفوظة.",
      privacy_policy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      cookie_policy: "سياسة ملفات تعريف الارتباط",

      // Auth Modal
      welcome_back: "مرحبًا بعودتك",
      create_account: "إنشاء حساب",
      enter_credentials: "أدخل بيانات اعتماد للوصول إلى حسابك",
      sign_up_start: "قم بالتسجيل للبدء في استخدام منصتنا",
      full_name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      forgot_password: "نسيت كلمة المرور؟",
      cancel: "إلغاء",
      or_continue: "أو المتابعة باستخدام",

      // Feature Card
      boost_productivity: "تعزيز الإنتاجية",
      streamline_workflow: "تبسيط سير العمل",
      feature_description:
        "قم بتبسيط سير عملك وإنجاز المزيد في وقت أقل مع أدوات إدارة المشاريع البديهية لدينا.",
      learn_more: "اعرف المزيد",
      easy_to_implement: "سهل التنفيذ",
      seamless_integration: "تكامل سلس",
      real_time_updates: "تحديثات في الوقت الحقيقي",

      // Feature Section Items
      streamlined_workflow: "سير عمل مبسط",
      streamlined_workflow_desc:
        "أتمتة المهام المتكررة والتركيز على ما يهم أكثر مع أدوات سير العمل الذكية لدينا.",
      goal_tracking: "تتبع الأهداف",
      goal_tracking_desc:
        "حدد أهدافًا واضحة وتتبع التقدم باستخدام لوحات المعلومات المرئية والتحديثات في الوقت الحقيقي.",
      ai_powered_insights: "رؤى مدعومة بالذكاء الاصطناعي",
      ai_powered_insights_desc:
        "استفد من التعلم الآلي لتحديد الأنماط والحصول على توصيات قابلة للتنفيذ لمشاريعك.",
      collaborative_workspace: "مساحة عمل تعاونية",
      collaborative_workspace_desc:
        "اجمع فريقك في مساحة مشتركة مصممة للتواصل السلس وتبادل الأفكار.",

      // Pricing Card
      basic: "الأساسي",
      pro: "الاحترافي",
      starter: "المبتدئ",
      enterprise: "المؤسسات",
      perfect_for_individuals: "مثالي للأفراد والفرق الصغيرة",
      ideal_for_growing: "مثالي للفرق والشركات النامية",
      for_large_organizations: "للمؤسسات الكبيرة ذات الاحتياجات المعقدة",
      per_month: "/شهر",
      per_year: "/سنة",
      save_annually: "وفر سنويًا",
      get_started: "ابدأ الآن",
      start_free_trial: "ابدأ تجربة مجانية",
      contact_sales: "اتصل بالمبيعات",
      popular: "الأكثر شعبية",

      // Pricing Features
      up_to_5_projects: "ما يصل إلى 5 مشاريع",
      basic_analytics: "تحليلات أساسية",
      support_247: "دعم على مدار الساعة",
      custom_domains: "نطاقات مخصصة",
      advanced_security: "أمان متقدم",
      team_collaboration: "تعاون الفريق",
      unlimited_projects: "مشاريع غير محدودة",
      advanced_analytics: "تحليلات متقدمة",
      priority_support: "دعم ذو أولوية على مدار الساعة",
      enterprise_analytics: "تحليلات للمؤسسات",
      dedicated_support: "دعم مخصص على مدار الساعة",

      // Navbar Features
      task_management: "إدارة المهام",
      task_management_desc: "إنشاء وتعيين وتتبع المهام بسهولة",
      team_collaboration_feature: "تعاون الفريق",
      team_collaboration_desc: "العمل معًا بسلاسة مع فريقك",
      time_tracking: "تتبع الوقت",
      time_tracking_desc: "مراقبة الوقت المستغرق في المشاريع والمهام",
      analytics_reports: "التحليلات والتقارير",
      analytics_reports_desc: "الحصول على رؤى مع أدوات تقارير قوية",
      resource_management: "إدارة الموارد",
      resource_management_desc: "تحسين تخصيص الموارد عبر المشاريع",
      integrations: "التكاملات",
      integrations_desc: "الاتصال بأدواتك وخدماتك المفضلة",

      // Hero Section Elements
      task_completed: "تم إكمال المهمة",
      just_now: "الآن",
      time_saved: "الوقت الموفر: 4 ساعات",

      // Auth Modal Elements
      logging_in: "جاري تسجيل الدخول...",
      creating_account: "جاري إنشاء الحساب...",
      google: "جوجل",
      github: "جيثب",
      preferences: "التفضيلات",
      theme: "المظهر",
      light: "فاتح",
      dark: "داكن",
      language: "اللغة",
      project_management: "إدارة المشاريع",

      // Footer specific
      company_description:
        "منصة إدارة مشاريع حديثة مصممة لتبسيط سير العمل وتعزيز إنتاجية الفريق.",
      home: "الرئيسية",
      about: "حول",
      blog: "المدونة",
      your_email_address: "عنوان بريدك الإلكتروني",

      // Contact Page
      contact_subtitle: "نود أن نسمع منك. تواصل مع فريقنا.",
      our_offices: "مكاتبنا العالمية",
      view_on_map: "عرض على الخريطة",
      get_in_touch: "ابق على تواصل",
      contact_form_subtitle:
        "هل لديك أسئلة حول منتجاتنا أو خدماتنا؟ املأ النموذج وسيرد عليك فريقنا قريبًا.",
      email_us: "راسلنا عبر البريد الإلكتروني",
      call_us: "اتصل بنا",
      subject: "الموضوع",
      message: "الرسالة",
      send_message: "إرسال الرسالة",

      // About Page
      about_digitrans: "حول DIGITRANS.AI",
      about_subtitle: "حلول رائدة للتحول الرقمي من أجل مستقبل مستدام",
      visit_digitrans: "زيارة DIGITRANS.AI",
      our_company: "شركتنا",
      company_overview:
        "DIGITRANS.AI في طليعة التحول الرقمي، وتوفر حلولًا تكنولوجية مبتكرة للشركات في جميع أنحاء جنوب شرق أوروبا.",
      our_vision: "رؤيتنا",
      our_mission: "مهمتنا",
      vision_text:
        "تتصور DIGITRANS.AI دعم صناعة جنوب شرق أوروبا بأنظمة تكنولوجية جديدة وأدوات رقمية. نحن ملتزمون بتعزيز الاستدامة والابتكار والبحث والتطوير لخلق مشهد صناعي أكثر كفاءة وصديق للبيئة.",
      mission_text:
        "تكرس DIGITRANS.AI نفسها لتمثيل التقنيات الموجهة نحو المستقبل وخدمة العملاء طوال دورة حياة المنتج بأكملها. نحن ندفع الابتكار من أجل صناعة مستدامة ومحايدة للكربون، ونقدم حلولًا شاملة تلبي الاحتياجات المتطورة للشركات في العصر الرقمي.",
      our_approach: "نهجنا في التحول الرقمي",
      approach_subtitle:
        "نجمع بين التكنولوجيا المتطورة والخبرة الصناعية لتقديم حلول شاملة للتحول الرقمي.",
      leadership_team: "فريق القيادة لدينا",
      leadership_subtitle:
        "تعرف على الخبراء الذين يقودون الابتكار والتميز في DIGITRANS.AI",
      partners: "الشركاء والتعاون",
      partners_subtitle:
        "نعمل مع منظمات رائدة في جميع أنحاء جنوب شرق أوروبا لدفع الابتكار الرقمي",
      transform_business: "هل أنت مستعد لتحويل عملك؟",
      transform_subtitle:
        "تعاون مع DIGITRANS.AI لإطلاق الإمكانات الكاملة للتحول الرقمي لمؤسستك.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
