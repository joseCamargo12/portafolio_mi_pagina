const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const revealItems = document.querySelectorAll("[data-reveal]");
const navLinks = document.querySelectorAll(".navList a");
const projectModal = document.querySelector("#projectModal");
const projectButtons = document.querySelectorAll("[data-project-open]");
const projectCards = document.querySelectorAll(".projectCard[data-project-open]");
const projectModalImage = document.querySelector("#projectModalImage");
const projectModalTitle = document.querySelector("#projectModalTitle");
const projectModalRole = document.querySelector("#projectModalRole");
const projectModalDescription = document.querySelector("#projectModalDescription");
const projectModalSkills = document.querySelector("#projectModalSkills");
const projectModalThumbs = document.querySelector("#projectModalThumbs");
const projectModalMobileHint = document.querySelector("#projectModalMobileHint");
const projectModalPrev = document.querySelector("#projectModalPrev");
const projectModalNext = document.querySelector("#projectModalNext");
const projectCloseButtons = document.querySelectorAll("[data-project-close]");
const contactForm = document.querySelector("#contactForm");
const contactStatus = document.querySelector("#contactStatus");
const contactSubmitButton = document.querySelector("#contactSubmitButton");
const recaptchaMount = document.querySelector("#recaptchaMount");
const captchaNote = document.querySelector("#captchaNote");
const homeTitle = document.querySelector("[data-home-phrases-en], [data-home-title]");
const homeTitleText = document.querySelector("[data-home-title-text]");
const langButtons = document.querySelectorAll("[data-lang-button]");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const assetBase = window.location.pathname.includes("/pages/") ? "../img" : "img";
const defaultRecaptchaSiteKey = "6LchXJYsAAAAAO4X2A_4MExA_DE0tekLV_lt3rJr";
const aiChatWebhookUrl = "https://engine.marpicorp.com/webhook/0ddb45ae-d8e2-48a0-90ba-e3cbe6688c37";
let currentLanguage = "en";

const homepageTranslations = {
    en: {
        nav_about: "About",
        nav_work: "Work",
        nav_projects: "Projects",
        nav_contact: "Contact",
        hero_eyebrow: "Top Rated • 100% Job Success • $20/hr • English / Spanish",
        hero_title: "Automation systems for real operations.",
        hero_text: "n8n, GHL, AI agents, WhatsApp, CRM logic, internal tools, and deployment built around how teams actually work.",
        hero_cta_primary: "Selected work",
        hero_cta_secondary: "Start a project",
        hero_badge_1: "n8n workflows",
        hero_badge_2: "GHL systems",
        hero_badge_3: "WhatsApp operations",
        hero_badge_4: "AI agents",
        proof_earnings: "earned through live Upwork work.",
        proof_jobs: "jobs across automation, GHL, AI, and systems.",
        proof_hours: "hours delivered on client operations.",
        proof_success: "Job Success with Top Rated status.",
        about_eyebrow: "About",
        about_title: "Automation first. Full stack when the system needs it.",
        about_link: "Open full profile",
        about_card_1_title: "What I build",
        about_card_1_item_1: "Workflow automation with n8n, Make, APIs, and webhooks.",
        about_card_1_item_2: "CRM and GHL logic for leads, consent, and follow-up.",
        about_card_1_item_3: "AI agents for websites, WhatsApp, support, and internal ops.",
        about_card_1_item_4: "VPS, domains, email, and production-ready deployment.",
        about_card_2_title: "Built from operations",
        about_card_2_item_1: "U.S. logistics and transportation workflows.",
        about_card_2_item_2: "Customer support and high-volume communication systems.",
        about_card_2_item_3: "Bilingual delivery for English and Spanish teams.",
        about_card_2_item_4: "Systems designed to reduce manual work, not add more tools.",
        work_eyebrow: "Work",
        work_title: "The profile is backed by operating experience, not just code.",
        timeline_1_meta: "January 2025 · Present",
        timeline_1_title: "Director of Development · Estrategia Empresarial",
        timeline_1_item_1: "Web systems, servers, domains, and email infrastructure.",
        timeline_1_item_2: "Automation design tied to business processes and growth.",
        timeline_1_item_3: "AI adoption across workflows and decision-making.",
        timeline_2_meta: "October 2023 · October 2025",
        timeline_2_title: "Account Coordinator · Nolan Transportation Group",
        timeline_2_item_1: "Quotes, planning, dispatch, booking, and invoicing.",
        timeline_2_item_2: "Shipment tracking, client communication, and route coordination.",
        timeline_2_item_3: "Real-world logistics context behind current automation work.",
        timeline_3_meta: "September 2019 · July 2023",
        timeline_3_title: "Support Representative / Coach · Teleperformance",
        timeline_3_item_1: "Bilingual customer support through tickets, chat, phone, and email.",
        timeline_3_item_2: "Fraud prevention, identity verification, and process quality.",
        timeline_3_item_3: "Coaching, documentation, and operational consistency.",
        projects_eyebrow: "Projects",
        projects_title: "Selected cases pulled from the live Upwork portfolio.",
        projects_link: "See all 12 projects",
        project_excerpt_1: "Secure messaging architecture with queues, account handling, and centralized operations.",
        project_excerpt_2: "Research, writing, formatting, covers, and distribution automated end to end.",
        project_excerpt_3: "Multi-source lookups, profile merging, and real-time downstream automation.",
        project_excerpt_4: "Lead capture and sales-oriented website interaction with memory and prompt logic.",
        project_excerpt_5: "Automated record cleaning, KPI visibility, and live dashboards for better decisions.",
        project_excerpt_6: "A cleaner production base with security, migration planning, and deployment reliability.",
        project_button: "Open case",
        project_link: "Full gallery",
        reviews_eyebrow: "Reviews",
        reviews_title: "Live client feedback already supports the angle.",
        review_tag_1: "Clear communicator",
        review_tag_2: "Collaborative",
        review_tag_3: "Reliable",
        contact_eyebrow: "Contact",
        contact_title: "If manual work is slowing the operation down, that is usually the system to fix first.",
        contact_item_1: "More than 30 hrs/week available.",
        contact_item_2: "Average response time: 4 to 8 hours.",
        contact_item_3: "English and Spanish delivery.",
        contact_cta_primary: "Open contact form",
        contact_cta_secondary: "Open Upwork",
        contact_card_1: "Live reviews, portfolio, and availability.",
        contact_card_2: "Professional background and network.",
        contact_card_3: "Public code and technical experiments.",
        contact_card_4_title: "Portfolio",
        contact_card_4: "Twelve published Upwork project cases.",
        modal_label: "Case",
        modal_cta: "View on Upwork",
        footer_text: "Jose Camargo · Automation systems, AI workflows, and operations-first execution."
    },
    es: {
        nav_about: "Perfil",
        nav_work: "Trayectoria",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        hero_eyebrow: "Top Rated • 100% Job Success • $20/hora • Inglés / Español",
        hero_title: "Sistemas de automatización para operaciones reales.",
        hero_text: "n8n, GHL, agentes de IA, WhatsApp, lógica de CRM, herramientas internas y despliegue construidos alrededor de cómo trabaja un equipo en verdad.",
        hero_cta_primary: "Trabajo seleccionado",
        hero_cta_secondary: "Iniciar proyecto",
        hero_badge_1: "Flujos con n8n",
        hero_badge_2: "Sistemas GHL",
        hero_badge_3: "Operación por WhatsApp",
        hero_badge_4: "Agentes de IA",
        proof_earnings: "ganados en trabajo real dentro de Upwork.",
        proof_jobs: "jobs entre automatización, GHL, IA y sistemas.",
        proof_hours: "horas entregadas en operaciones de clientes.",
        proof_success: "Job Success con badge Top Rated.",
        about_eyebrow: "Perfil",
        about_title: "Primero automatización. Full stack cuando el sistema lo necesita.",
        about_link: "Abrir perfil completo",
        about_card_1_title: "Lo que construyo",
        about_card_1_item_1: "Automatización de workflows con n8n, Make, APIs y webhooks.",
        about_card_1_item_2: "Lógica de CRM y GHL para leads, consentimientos y seguimientos.",
        about_card_1_item_3: "Agentes de IA para web, WhatsApp, soporte y operaciones internas.",
        about_card_1_item_4: "VPS, dominios, correo y despliegue listo para producción.",
        about_card_2_title: "Construido desde la operación",
        about_card_2_item_1: "Workflows de logística y transporte en EE.UU.",
        about_card_2_item_2: "Soporte al cliente y sistemas de comunicación de alto volumen.",
        about_card_2_item_3: "Entrega bilingüe para equipos en inglés y español.",
        about_card_2_item_4: "Sistemas pensados para quitar trabajo manual, no para sumar herramientas.",
        work_eyebrow: "Trayectoria",
        work_title: "El perfil está respaldado por experiencia operativa, no solo por código.",
        timeline_1_meta: "Enero 2025 · Actualidad",
        timeline_1_title: "Director of Development · Estrategia Empresarial",
        timeline_1_item_1: "Sistemas web, servidores, dominios e infraestructura de correo.",
        timeline_1_item_2: "Automatización conectada a procesos y crecimiento del negocio.",
        timeline_1_item_3: "Adopción de IA dentro de flujos y toma de decisiones.",
        timeline_2_meta: "Octubre 2023 · Octubre 2025",
        timeline_2_title: "Account Coordinator · Nolan Transportation Group",
        timeline_2_item_1: "Cotizaciones, planeación, despacho, booking y facturación.",
        timeline_2_item_2: "Seguimiento de envíos, comunicación con clientes y coordinación de rutas.",
        timeline_2_item_3: "Contexto real de logística detrás del trabajo actual de automatización.",
        timeline_3_meta: "Septiembre 2019 · Julio 2023",
        timeline_3_title: "Support Representative / Coach · Teleperformance",
        timeline_3_item_1: "Soporte bilingüe por tickets, chat, teléfono y correo.",
        timeline_3_item_2: "Prevención de fraude, verificación de identidad y calidad de proceso.",
        timeline_3_item_3: "Coaching, documentación y consistencia operativa.",
        projects_eyebrow: "Proyectos",
        projects_title: "Casos seleccionados tomados del portafolio real de Upwork.",
        projects_link: "Ver los 12 proyectos",
        project_excerpt_1: "Arquitectura segura de mensajería con colas, manejo de cuentas y operación centralizada.",
        project_excerpt_2: "Investigación, redacción, formato, portadas y distribución automatizados de punta a punta.",
        project_excerpt_3: "Búsquedas en múltiples fuentes, unión de perfiles y automatización en tiempo real.",
        project_excerpt_4: "Captura de leads e interacción web orientada a ventas con memoria y lógica de prompts.",
        project_excerpt_5: "Limpieza de registros, visibilidad de KPIs y dashboards en vivo para mejores decisiones.",
        project_excerpt_6: "Base de producción más limpia con seguridad, migración y confiabilidad de despliegue.",
        project_button: "Abrir caso",
        project_link: "Galería completa",
        reviews_eyebrow: "Reviews",
        reviews_title: "El feedback real de clientes ya sostiene el enfoque.",
        review_tag_1: "Comunicación clara",
        review_tag_2: "Colaborativo",
        review_tag_3: "Confiable",
        contact_eyebrow: "Contacto",
        contact_title: "Si el trabajo manual está frenando la operación, casi siempre ese es el sistema que toca arreglar primero.",
        contact_item_1: "Disponibilidad de más de 30 horas por semana.",
        contact_item_2: "Tiempo promedio de respuesta: 4 a 8 horas.",
        contact_item_3: "Entrega en inglés y español.",
        contact_cta_primary: "Abrir formulario",
        contact_cta_secondary: "Abrir Upwork",
        contact_card_1: "Reviews, portafolio y disponibilidad en vivo.",
        contact_card_2: "Trayectoria profesional y red de contactos.",
        contact_card_3: "Código público y experimentos técnicos.",
        contact_card_4_title: "Portafolio",
        contact_card_4: "Doce casos publicados en Upwork.",
        modal_label: "Caso",
        modal_cta: "Ver en Upwork",
        footer_text: "Jose Camargo · Sistemas de automatización, flujos con IA y ejecución orientada a operaciones."
    }
};

const projectCatalog = {
    "whatsapp-platform": {
        title: "Multi-User WhatsApp Messaging Platform with Secure API Architecture",
        role: "Automation Engineer / Backend Systems Builder",
        published: "Published on Dec 31, 2025",
        description: `Built a multi-user WhatsApp messaging platform using the WhatsApp API, designed for scalable outbound and inbound communication. The system supports multiple users and accounts, manages message queues, and enforces access control and data isolation. Supabase was used as the primary database for user management, message storage, and session handling, with custom security rules to protect data integrity and prevent unauthorized access. The platform enables centralized messaging operations with high reliability and security.`,
        skills: ["Software", "CRM Software", "CRM Automation", "WhatsApp", "Supabase"],
        image: "upwork-01-whatsapp-platform.png",
        gallery: [
            "upwork-01-whatsapp-platform-1.png",
            "upwork-01-whatsapp-platform-2.png",
            "upwork-01-whatsapp-platform-3.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "ai-chatbot": {
        title: "Web-Embedded AI Strategic Chatbot for Website",
        role: "AI Automation Developer & Integration Specialist",
        published: "Published on Dec 31, 2025",
        description: `I built and embedded a "Strategic Intelligence" AI agent directly into a website. The Goal: Automate 24/7 client engagement and explain complex tech services. The solution used n8n and Google Gemini with webhooks, memory, and sales-focused prompts to turn passive visitors into qualified leads through intelligent conversation.`,
        skills: ["AI Chatbot", "Website Integration", "n8n"],
        image: "upwork-02-ai-chatbot-cover.png",
        gallery: [
            "upwork-02-ai-chatbot-cover.png",
            "upwork-02-ai-chatbot.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "newsletter-engine": {
        title: "Automated Newsletter & AI Content Engine",
        role: "Automation Engineer / AI Workflow Architect",
        published: "Published on Dec 31, 2025",
        description: `Designed and built an end-to-end automated content engine that generates a weekly cybersecurity newsletter focused on CMMC compliance. The system fetches and validates sources, curates and ranks articles, generates AI-written content, formats it into HTML, creates magazine-style covers, and distributes it via email and LinkedIn. Result: content production dropped from hours to minutes with consistent output and zero manual publishing steps.`,
        skills: ["n8n", "OpenAI API", "JavaScript", "Email Marketing"],
        image: "upwork-03-newsletter-engine.png",
        gallery: [
            "upwork-03-newsletter-engine.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "vps-deployment": {
        title: "Secure VPS Infrastructure Setup & Automated App Deployment",
        role: "DevOps Engineer & Linux System Administrator",
        published: "Published on Dec 31, 2025",
        description: `I architected a high-performance hosting environment to migrate the client’s applications to a dedicated VPS. The goal was to establish a secure, scalable server infrastructure with zero-downtime deployment capabilities and a more reliable production base.`,
        skills: ["Network Security", "Linux", "NGINX"],
        image: "upwork-04-vps-deployment.png",
        gallery: [
            "upwork-04-vps-deployment-1.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "consent-automation": {
        title: "Consent Management & Existing Contact Validation Automation",
        role: "Automation Engineer / CRM Automation Specialist",
        published: "Published on Dec 31, 2025",
        description: `Developed an automation flow to manage customer consent messaging while intelligently handling existing contacts. The system validates whether a contact already exists, prevents duplicate records, and ensures compliance by sending consent messages only when required. It integrates with CRM and messaging workflows to maintain clean data, improve compliance, and reduce redundant communication.`,
        skills: ["CRM Automation", "Automation", "WhatsApp", "Messaging System"],
        image: "upwork-05-consent-automation.png",
        gallery: [
            "upwork-05-consent-validation-1.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "customer-lookup": {
        title: "WhatsApp Customer Identification & Multi-Source Lookup Automation",
        role: "Automation Engineer / Backend Automation Specialist",
        published: "Published on Dec 31, 2025",
        description: `Built a WhatsApp-driven automation flow that processes audio, text, and image messages using a buffering system to handle high-volume conversations. It automatically identifies customers, normalizes phone numbers, retrieves data from multiple financial and institutional databases, merges the results into a unified profile, and feeds real-time data into downstream automations.`,
        skills: ["WhatsApp", "n8n", "Batch Normalization", "Chatbot"],
        image: "upwork-06-customer-lookup.png",
        gallery: [
            "upwork-06-customer-identification-1.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "ai-content-ops": {
        title: "Automated AI Content Creation System for Marketing Operations",
        role: "Automation & AI Systems Engineer",
        published: "Published on Dec 31, 2025",
        description: `I designed and deployed an end-to-end AI automation system to streamline marketing content production. The system automatically generates images and videos, processes assets, and delivers ready-to-use content without manual intervention. This reduced content creation time, removed repetitive tasks, and enabled scalable production for marketing teams.`,
        skills: ["AI Bot", "Automation Anywhere", "API Integration", "Marketing Automation"],
        image: "upwork-07-ai-content-ops.png",
        gallery: [
            "upwork-07-ai-content-system-1.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "ecohotel-platform": {
        title: "EcoHotel Villa Romana - Website & Booking-Oriented Platform",
        role: "Full-Stack Web Developer & Automation Consultant",
        published: "Published on Dec 31, 2025",
        description: `Designed and built a high-performance website for a boutique eco-hotel focused on increasing direct bookings and improving customer experience. The solution includes a clean conversion-oriented design, fast load times, mobile optimization, and clear booking flows. It was structured to reduce friction for guests, improve service visibility, and support future automation around reservations, inquiries, and CRM sync.`,
        skills: ["Web Development", "Automation", "Performance Optimization"],
        image: "upwork-08-ecohotel.png",
        gallery: [
            "upwork-08-ecohotel-1.png",
            "upwork-08-ecohotel-2.png",
            "upwork-08-ecohotel-3.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "interactive-portfolio": {
        title: "Interactive Portfolio Website",
        role: "Web Developer",
        published: "Published on Sep 13, 2025",
        description: `Created an interactive portfolio website showcasing professional projects and automation solutions. The build focused on clean UI/UX, responsive design, and fast performance. It also included server automation for form handling and email notifications, turning the site into both a personal branding tool and a live example of applied technical skills.`,
        skills: ["Responsive Design", "Automation", "Web Hosting", "UX & UI"],
        image: "upwork-09-interactive-portfolio.png",
        gallery: [
            "upwork-09-portfolio-site-1.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "analytics-system": {
        title: "Data Analytics System",
        role: "Data Automation & Full-Stack Developer",
        published: "Published on Sep 13, 2025",
        description: `Designed and implemented a data analytics system using Supabase as the real-time database. I built an automated workflow to upload and clean incoming records, then connected the data to a visual dashboard so the company could track KPIs and make faster data-driven decisions. The result reduced manual reporting and gave management a clearer view of operations.`,
        skills: ["API Integration", "Analytics Dashboard", "Data Analysis", "Automation", "PostgreSQL"],
        image: "upwork-10-analytics-system.png",
        gallery: [
            "upwork-10-analytics-system-1.png",
            "upwork-10-analytics-system-2.png",
            "upwork-10-analytics-system-3.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "business-platform": {
        title: "Business Platform with Domain, Email & Automation Setup",
        role: "Full-Stack Developer & Automation Specialist",
        published: "Published on Sep 13, 2025",
        description: `Led the full setup of a business platform on Hostinger, including the purchase and configuration of the domain and corporate email accounts. I developed the web platform as the main medium for client interaction and integrated the PINED form with an automation workflow to streamline data collection and communication. The result combined professional presence with reduced manual work.`,
        skills: ["Domain Name Research", "n8n", "Web Development", "Hosting Setup", "Automation"],
        image: "upwork-11-business-platform-diagram.svg",
        gallery: [
            "upwork-11-business-platform-diagram.svg"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "lead-generator": {
        title: "Lead Generator Automation System",
        role: "Automation Engineer / Lead Sourcing Systems Builder",
        published: "Published on Mar 23, 2026",
        description: `Built a lead generation automation that scrapes targeted business data from Google-based search results, structures it into a database, and prepares records for downstream enrichment and qualification. The system is designed to reduce manual prospecting, organize lead intake, and create a cleaner starting point for outreach and sales workflows.`,
        skills: ["Lead Generation", "Google Scraping", "Data Enrichment", "Automation", "Databases"],
        image: "upwork-12-lead-generator.png",
        gallery: [
            "upwork-12-lead-generator.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "kubernetes-n8n-cluster": {
        title: "Kubernetes Multi-Platform Setup for n8n",
        role: "DevOps Engineer / Automation Infrastructure Builder",
        published: "Published on Mar 23, 2026",
        description: `Designed and deployed a multi-platform automation environment using Azure, Kubernetes, and NGINX to run n8n at scale. The setup included 8 queue-mode n8n instances for workload distribution, a NoCoDB data layer for structured operations, and an ingress routing layer to stabilize traffic, isolate services, and keep automation flows production-ready.`,
        skills: ["Kubernetes", "Azure", "NGINX", "n8n", "NoCoDB"],
        image: "upwork-13-kubernetes-cluster.png",
        gallery: [
            "upwork-13-kubernetes-cluster.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "wifi-capture-automation": {
        title: "WiFi Portal Capture & Contact Automation",
        role: "Automation Engineer / n8n Workflow Systems Builder",
        published: "Published on Mar 23, 2026",
        description: `Built a WiFi portal capture automation using n8n and UniFi Controller to ingest guest data, normalize records, authorize access, and push contact information into structured workflows. The system has processed more than 60,000 contacts, uses over 30 n8n automation steps, and routes captured data into logs, contact creation, alerts, and qualification-ready follow-up paths.`,
        skills: ["n8n", "UniFi Controller", "Contact Capture", "Automation", "Data Workflows"],
        image: "upwork-12-wifi-capture.png",
        gallery: [
            "upwork-12-wifi-capture.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "membership-platform": {
        title: "GoHighLevel Membership Platform & Student Operations",
        role: "GoHighLevel Platform Builder & Automation Specialist",
        published: "Published on Mar 23, 2026",
        description: `Built a membership platform connected with GoHighLevel and automation workflows designed for self-management and scale. The system supports automated student journeys, certification delivery, student communities, portal access, and operational follow-up without manual admin work. It was structured around efficient results: more than 73 monthly subscriptions and an overall monthly performance of roughly $50K, while keeping onboarding, communication, and recurring operations organized through automation. The platform combines memberships, communities, credentials, and automations into a single operating system for education and recurring revenue.`,
        skills: ["GoHighLevel", "Membership Platform", "Communities", "Automation", "Student Operations"],
        image: "upwork-15-membership-platform.jpeg",
        gallery: [
            "upwork-15-membership-platform.jpeg"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "utility-data-entry-automation": {
        title: "Utility Bill Data Entry Automation",
        role: "Automation Engineer / Microsoft Workflow Builder",
        published: "Published on Mar 23, 2026",
        description: `Built a utility bill processing workflow that reduces roughly 50% of the manual work previously required to enter electricity, water, and gas invoice data into spreadsheets. The system uses Excel, Power Automate, and Microsoft API integrations to detect files, extract information, compare results, and push structured records into reporting sheets with less repetitive human input. The outcome was faster data handling, fewer copy-paste errors, and a more scalable process for recurring operational reporting.`,
        skills: ["Power Automate", "Excel", "Microsoft API", "Data Entry", "Process Automation"],
        image: "upwork-16-data-entry-1.jpeg",
        gallery: [
            "upwork-16-data-entry-1.jpeg",
            "upwork-16-data-entry-2.jpeg"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "voice-agent-qualification-system": {
        title: "AI Voice Agents for Qualification & Follow-Up",
        role: "GoHighLevel Voice Systems Builder",
        published: "Published on Mar 23, 2026",
        description: `Built and deployed more than 10 AI voice agents across GoHighLevel and complementary platforms for real business operations. These systems were designed to qualify leads, trigger follow-up logic, update CRM stages, and route conversations for clinics in Mexico, clinics in Miami, roofing businesses in Canada, and a transportation company in Colombia. Across implementations, response performance improved by roughly 47%, while qualification effectiveness reached close to 90% in the strongest cases. The work included the full stack: agent prompts, decision logic, workflow automation, follow-up sequences, and reporting layers tied to each business model.`,
        skills: ["GoHighLevel", "AI Voice Agents", "Lead Qualification", "CRM Automation", "Follow-Up Logic"],
        image: "upwork-17-voice-agents-1.jpeg",
        gallery: [
            "upwork-17-voice-agents-1.jpeg",
            "upwork-17-voice-agents-2.jpeg",
            "upwork-17-voice-agents-3.jpeg"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    },
    "mcp-enterprise-control": {
        title: "Enterprise MCP Server for Ticketing & Tenant Control",
        role: "MCP Systems Builder / Enterprise Automation Engineer",
        published: "Published on Mar 23, 2026",
        description: `Built an MCP server connected to the company's internal ticketing system so teams could interact with operational data and enterprise actions through GPT-driven interfaces such as cloud apps, OpenWebUI, and Copilot Studio. The server was designed to expose controlled access to business operations, including ticket context, email-related actions, and internal management flows from a single orchestration layer. It was also integrated with CIPP to manage Microsoft tenants, enabling customer onboarding, offboarding, tenant administration, and cross-system operations through one centralized control surface. The result was a practical enterprise bridge between AI interfaces, ticket operations, and Microsoft management workflows.`,
        skills: ["MCP Server", "Ticketing Systems", "OpenWebUI", "Copilot Studio", "CIPP", "Microsoft 365"],
        image: "upwork-18-mcp-server.png",
        gallery: [
            "upwork-18-mcp-server.png"
        ],
        upworkUrl: "https://www.upwork.com/freelancers/~014d065867a9933d2d?mp_source=share"
    }
};

Object.values(projectCatalog).forEach((project) => {
    if (!Array.isArray(project.gallery) || project.gallery.length === 0) {
        project.gallery = [project.image];
    }
});

const siteTranslations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        home_kicker: "AI automation, CRM, MCP, and operations",
        home_body: "AI automation and custom systems freelancer for LATAM and US clients. I build with GoHighLevel, n8n, MCP, voice AI, custom CRM integrations, and production-ready systems that remove manual work.",
        home_cta: "See Selected Projects",
        home_cta_secondary: "Start a Project",
        home_badge_1: "GHL implementations",
        home_badge_2: "MCP + ticketing",
        home_badge_3: "Voice AI + chatbots",
        home_badge_4: "300+ n8n workflows",
        home_what_eyebrow: "What I do",
        home_what_title: "Most of the work starts with automation, then expands into integration, CRM logic, or AI systems.",
        home_what_intro: "The goal is usually the same: reduce manual work, improve response time, and make the operation cleaner without adding unnecessary complexity.",
        home_what_item_1: "GoHighLevel implementations, snapshots, pipelines, and follow-up logic.",
        home_what_item_2: "n8n workflows for sales, marketing, support, and operations.",
        home_what_item_3: "Voice AI agents, WhatsApp systems, and website chatbots.",
        home_what_item_4: "Custom CRM integrations, MCP flows, and production-ready systems.",
        home_stack_eyebrow: "Stack I work with",
        home_stack_title: "Tools I usually build with in delivery.",
        home_metric_1: "AI voice agents built for qualification and follow-up.",
        home_metric_2: "contacts processed through automated capture workflows.",
        home_metric_3: "monthly subscriptions supported in an automated membership system.",
        home_metric_4: "reduction in manual work in utility data-entry operations.",
        home_build_eyebrow: "What I Build",
        home_build_title: "Systems that usually make the biggest difference first.",
        home_service_1_title: "Lead qualification systems",
        home_service_1_text: "Voice agents, website agents, and CRM routing flows that respond faster and qualify better.",
        home_service_2_title: "CRM and follow-up automation",
        home_service_2_text: "Pipelines, contact logic, consent flows, and follow-up systems built inside the tools your team already uses.",
        home_service_3_title: "Messaging and WhatsApp operations",
        home_service_3_text: "WhatsApp platforms, lookup systems, and messaging flows connected to real business operations.",
        home_service_4_title: "Internal ops and integrations",
        home_service_4_text: "n8n workflows, APIs, dashboards, data movement, infrastructure, and connected systems that reduce repetitive work.",
        home_fit_eyebrow: "Best Fit",
        home_fit_title: "The best projects usually start with one of these bottlenecks.",
        home_fit_1_title: "Leads are coming in, but follow-up is weak",
        home_fit_1_text: "The team is losing speed between first contact, qualification, and booking.",
        home_fit_2_title: "The CRM exists, but nobody trusts the process",
        home_fit_2_text: "Contacts, statuses, and next steps are inconsistent, manual, or disconnected.",
        home_fit_3_title: "Too much work depends on copy-paste",
        home_fit_3_text: "People are moving data by hand across inboxes, sheets, forms, or multiple tools.",
        home_fit_4_title: "Tools exist, but they do not talk to each other",
        home_fit_4_text: "The business has software, but not a system that keeps information moving cleanly.",
        home_process_eyebrow: "How I Work",
        home_process_title: "Simple process. Useful first version. Then iteration.",
        home_process_1_step: "Step 1",
        home_process_1_title: "Find the bottleneck",
        home_process_1_text: "We define where time, errors, or missed revenue are actually happening.",
        home_process_2_step: "Step 2",
        home_process_2_title: "Design the right system",
        home_process_2_text: "The solution may be an automation, an agent, a CRM workflow, or a more complete stack.",
        home_process_3_step: "Step 3",
        home_process_3_title: "Ship and refine",
        home_process_3_text: "Start with a usable version, test it in the operation, and improve from there.",
        home_close_eyebrow: "Next Step",
        home_close_title: "If the operation already works but feels manual, slow, or disconnected, that is usually the right place to improve.",
        home_close_text: "The best starting point is usually one workflow, one qualification system, or one CRM bottleneck with clear business impact.",
        about_eyebrow: "About",
        about_title: "I'm Jose. I build AI automation, CRM systems, and custom operations workflows.",
        about_intro: "Full stack when needed, but mostly hired to implement GHL, n8n, MCP, voice AI, and connected systems that remove manual work and make operations cleaner.",
        about_story_1: "I work with LATAM and US clients building custom automation systems for sales, marketing, support, and internal operations. A lot of the work lives inside GoHighLevel, n8n, MCP-connected environments, and CRM integrations where teams need faster execution and better control.",
        about_story_2: "That includes full GHL implementations and snapshots, MCP ticketing automations, voice AI agents, WhatsApp and chatbots, custom CRM integrations with tools like Chatwoot and HubSpot, and complete tech setups from domain and deployment to production-ready workflows.",
        about_what_eyebrow: "What I Do",
        about_what_title: "Most of the work starts with automation, then expands into integration, product, or infrastructure.",
        about_list_1: "GoHighLevel full implementations, snapshots, pipelines, and follow-up systems.",
        about_list_2: "n8n workflows across marketing, sales, operations, and support.",
        about_list_3: "Voice AI agents and chatbots for WhatsApp, web, and calling flows.",
        about_list_4: "Custom CRM integrations across GHL, Chatwoot, HubSpot, and related tools.",
        about_list_5: "MCP ticketing automations, production infrastructure, and complete stacks from domain to deployment.",
        faq_eyebrow: "FAQ",
        faq_title: "What usually needs to be clarified before getting started.",
        faq_q1: "Do you work with a specific niche?",
        faq_a1: "No. The focus is on understanding the business problem and designing the right solution for that specific context.",
        faq_q2: "Can this connect to my CRM or current tools?",
        faq_a2: "Yes. Most projects start by integrating what already exists so work is not duplicated and your current data can be used better.",
        faq_q3: "What is the real value of automation?",
        faq_a3: "It helps you respond faster, reduce manual work, organize information better, and free up your team for work that actually matters.",
        faq_q4: "Is this the same as using ChatGPT?",
        faq_a4: "Not exactly. ChatGPT can be one piece of a solution, but a useful system usually also needs logic, integrations, memory, business context, and connection to your tools.",
        faq_q5: "Do I need to have everything defined before reaching out?",
        faq_a5: "No. Many conversations start from a general need, and from there the right first step becomes clearer without overcomplicating things.",
        faq_q6: "What if I still do not know exactly what I need?",
        faq_a6: "That is normal. The first conversation often exists to figure out whether the right move is an automation, an agent, or a more complete system.",
        faq_q7: "What should I automate first?",
        faq_a7: "Usually the thing that takes the most time, creates the most errors, or has the biggest impact on sales and follow-up. That is often in lead handling, repetitive tasks, CRM updates, or internal responses.",
        faq_q8: "Are voice agents actually usable, or do they still sound robotic?",
        faq_a8: "They are already usable, and in many cases they work very well. The difference comes from how they are designed, what context they have, and where they are used in the process.",
        faq_q9: "How long does something like this take to implement?",
        faq_a9: "It depends on scope. Some automations can move quickly, while a more complete system takes multiple stages. The normal approach is to start with a useful first version and iterate from there.",
        faq_q10: "How expensive can something like this be?",
        faq_a10: "It depends on the real scope of the project. Not everything requires a big budget. Many times it makes sense to start with something focused, useful, and well designed.",
        contact_badge: "Start a Project",
        contact_title: "Tell me what you're trying to automate.",
        contact_text: 'Share your stack, bottleneck, and project type. Or reach out directly on <a href="https://wa.me/573142023012" target="_blank" rel="noopener noreferrer">WhatsApp</a> or <a href="https://www.linkedin.com/in/camargo-jose" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',
        contact_name_label: "Full Name",
        contact_name_placeholder: "Enter your full name",
        contact_company_label: "Company",
        contact_company_placeholder: "Enter your company name",
        contact_email_label: "Email Address",
        contact_email_placeholder: "Enter your email address",
        contact_phone_label: "WhatsApp",
        contact_phone_placeholder: "Enter your WhatsApp number",
        contact_stack_label: "Current Stack / CRM",
        contact_stack_placeholder: "Example: HubSpot, GHL, Excel, WhatsApp, forms",
        contact_project_type_label: "Project Type",
        contact_project_type_default: "Select project type",
        contact_project_type_option_1: "AI Voice Qualification",
        contact_project_type_option_2: "CRM Automation",
        contact_project_type_option_3: "WhatsApp / Messaging",
        contact_project_type_option_4: "Internal Ops Automation",
        contact_project_type_option_5: "Integrations / Infrastructure",
        contact_message_label: "Main Bottleneck",
        contact_message_placeholder: "What is slowing the operation down right now?",
        contact_captcha_note: "reCAPTCHA will appear here once the site key is added.",
        contact_submit: "Send Project Brief",
        projects_eyebrow: "Portfolio",
        projects_title: "Systems built to qualify leads, automate follow-up, and remove manual work.",
        projects_intro: "Voice AI, WhatsApp systems, CRM automation, lead generation, dashboards, infrastructure, and custom operations delivered through real client work.",
        projects_stat_1: "Published project cases",
        projects_stat_2: "Job Success",
        projects_stat_3: "Live Upwork badge",
        projects_stat_4: "Core delivery stack",
        project_type_1: "WhatsApp Ops",
        project_type_2: "AI Agent",
        project_type_3: "AI Content Ops",
        project_type_4: "Infrastructure",
        project_type_5: "CRM Logic",
        project_type_6: "Lookup Automation",
        project_type_7: "Marketing Ops",
        project_type_8: "Website + Ops",
        project_type_9: "Website",
        project_type_10: "Analytics",
        project_type_11: "Business Setup",
        project_type_12: "Lead Engine",
        project_type_13: "Platform Ops",
        project_type_14: "Capture Automation",
        project_type_15: "Membership Ops",
        project_type_16: "Backoffice Ops",
        project_type_17: "Voice AI",
        project_type_18: "Enterprise MCP",
        project_excerpt_1: "Secure API architecture for multi-account messaging, queues, and centralized operations.",
        project_excerpt_2: "Website agent for lead capture, service explanation, and intelligent interaction.",
        project_excerpt_3: "End-to-end content production with research, writing, formatting, and distribution.",
        project_excerpt_4: "Migration-ready production base with cleaner security and deployment control.",
        project_excerpt_5: "Consent messaging, deduplication, and cleaner CRM operations before follow-up.",
        project_excerpt_6: "Customer recognition, multi-source queries, and unified profiles in real time.",
        project_excerpt_7: "Automated asset creation for marketing teams without manual production loops.",
        project_excerpt_8: "Booking-oriented website prepared for future reservation and CRM automations.",
        project_excerpt_9: "A branding site with responsive UI and operational automation for forms and notifications.",
        project_excerpt_10: "Clean data, KPI tracking, and operational visibility through a live dashboard.",
        project_excerpt_11: "Website, hosting, domain, email, and automation flow for client interaction.",
        project_excerpt_12: "Google-based lead scraping, database storage, enrichment flow, and qualification-ready intake.",
        project_excerpt_13: "Azure, Kubernetes, NGINX, 8 n8n queue-mode instances, and NoCoDB for scalable automation infrastructure.",
        project_excerpt_14: "WiFi portal capture with 60k+ contacts, 30+ n8n steps, UniFi Controller, and automation-ready data flow.",
        project_excerpt_15: "GoHighLevel membership platform with certifications, communities, 73+ monthly subscriptions, and roughly $50K monthly volume.",
        project_excerpt_16: "Power Automate, Excel, and Microsoft integrations cutting around 50% of manual utility-bill data entry work.",
        project_excerpt_17: "10+ AI voice agents with ~47% faster response and close to 90% qualification performance across multiple industries.",
        project_excerpt_18: "MCP server connected to ticketing, GPT interfaces, CIPP, and Microsoft tenant workflows for centralized enterprise control.",
        project_open_case: "Open case",
        project_mobile_hint: "Tap a thumbnail or use the arrows.",
        project_modal_label: "Case",
        project_modal_cta: "View on Upwork",
        contact_status_captcha_loading: "reCAPTCHA is still loading.",
        contact_status_captcha_missing: "Complete the reCAPTCHA first.",
        contact_status_sending: "Sending message...",
        contact_status_sent: "Message sent.",
        contact_status_error: "Could not send the form. Please try again.",
        chat_header_title: "Chat with our assistant",
        chat_header_text: "A personalized assistant to guide you through automation, AI systems, CRM, and next steps.",
        chat_gate_title: "Start with verification",
        chat_gate_text: "Complete reCAPTCHA before chatting with the assistant.",
        chat_start: "Start",
        chat_placeholder: "Type your message...",
        chat_send: "Send",
        chat_status_loading: "Sending...",
        chat_status_sent: "Sent.",
        chat_status_error: "Could not send the message.",
        chat_captcha_loading: "reCAPTCHA is still loading.",
        chat_captcha_missing: "Complete reCAPTCHA first.",
        chat_intro: "Hi, I'm JCBot. I can guide you through automation, AI systems, CRM workflows, and the best next step for your project.",
        chat_fallback_success: "Message received. I will get back to you shortly.",
        chat_fallback_error: "I couldn't answer right now. Please try again in a moment."
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Perfil",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",
        home_kicker: "Automatización IA, CRM, MCP y operaciones",
        home_body: "Freelancer de automatización IA y sistemas a medida para clientes en LATAM y US. Construyo con GoHighLevel, n8n, MCP, voice AI, integraciones CRM y sistemas listos para producción que eliminan trabajo manual.",
        home_cta: "Ver proyectos seleccionados",
        home_cta_secondary: "Iniciar un proyecto",
        home_badge_1: "Implementaciones GHL",
        home_badge_2: "MCP + ticketing",
        home_badge_3: "Voice AI + chatbots",
        home_badge_4: "300+ workflows en n8n",
        home_what_eyebrow: "Lo que hago",
        home_what_title: "Gran parte del trabajo empieza con automatización y luego se expande hacia integración, lógica CRM o sistemas con IA.",
        home_what_intro: "El objetivo suele ser el mismo: reducir trabajo manual, mejorar tiempos de respuesta y dejar la operación más limpia sin meter complejidad innecesaria.",
        home_what_item_1: "Implementaciones en GoHighLevel, snapshots, pipelines y lógica de seguimiento.",
        home_what_item_2: "Workflows en n8n para ventas, marketing, soporte y operaciones.",
        home_what_item_3: "Agentes de voz, sistemas por WhatsApp y chatbots para sitios web.",
        home_what_item_4: "Integraciones CRM, flujos MCP y sistemas listos para producción.",
        home_stack_eyebrow: "Stack con el que trabajo",
        home_stack_title: "Herramientas con las que normalmente construyo en entrega.",
        home_metric_1: "agentes de voz con IA construidos para calificación y seguimiento.",
        home_metric_2: "contactos procesados por flujos automáticos de captura.",
        home_metric_3: "suscripciones mensuales soportadas en un sistema automatizado de memberships.",
        home_metric_4: "de reducción de trabajo manual en operaciones de data entry.",
        home_build_eyebrow: "Lo que construyo",
        home_build_title: "Sistemas que normalmente generan impacto primero.",
        home_service_1_title: "Sistemas de calificación de leads",
        home_service_1_text: "Agentes de voz, agentes web y flujos de CRM que responden más rápido y califican mejor.",
        home_service_2_title: "Automatización de CRM y seguimiento",
        home_service_2_text: "Pipelines, lógica de contactos, consent flows y sistemas de follow-up dentro de las herramientas que tu equipo ya usa.",
        home_service_3_title: "Mensajería y operaciones por WhatsApp",
        home_service_3_text: "Plataformas de WhatsApp, sistemas de lookup y flujos de mensajería conectados a operaciones reales.",
        home_service_4_title: "Operación interna e integraciones",
        home_service_4_text: "Workflows en n8n, APIs, dashboards, movimiento de datos, infraestructura y sistemas conectados que reducen trabajo repetitivo.",
        home_fit_eyebrow: "Dónde encajo mejor",
        home_fit_title: "Los mejores proyectos suelen empezar con uno de estos cuellos de botella.",
        home_fit_1_title: "Entran leads, pero el seguimiento es débil",
        home_fit_1_text: "El equipo pierde velocidad entre el primer contacto, la calificación y la agenda.",
        home_fit_2_title: "Existe CRM, pero nadie confía en el proceso",
        home_fit_2_text: "Los contactos, estados y siguientes pasos son inconsistentes, manuales o están desconectados.",
        home_fit_3_title: "Demasiado trabajo depende de copiar y pegar",
        home_fit_3_text: "La gente mueve datos a mano entre correos, hojas, formularios o múltiples herramientas.",
        home_fit_4_title: "Hay herramientas, pero no se comunican entre sí",
        home_fit_4_text: "El negocio tiene software, pero no un sistema que mantenga la información moviéndose de forma limpia.",
        home_process_eyebrow: "Cómo trabajo",
        home_process_title: "Proceso simple. Primera versión útil. Luego iteración.",
        home_process_1_step: "Paso 1",
        home_process_1_title: "Encontrar el cuello de botella",
        home_process_1_text: "Definimos dónde se está perdiendo tiempo, dinero, velocidad o calidad.",
        home_process_2_step: "Paso 2",
        home_process_2_title: "Diseñar el sistema correcto",
        home_process_2_text: "La solución puede ser una automatización, un agente, un workflow de CRM o un stack más completo.",
        home_process_3_step: "Paso 3",
        home_process_3_title: "Lanzar y refinar",
        home_process_3_text: "Se empieza con una versión usable, se prueba en operación y se mejora desde ahí.",
        home_close_eyebrow: "Siguiente paso",
        home_close_title: "Si la operación ya funciona pero se siente manual, lenta o desconectada, normalmente ese es el lugar correcto para mejorar.",
        home_close_text: "El mejor punto de partida suele ser un workflow, un sistema de calificación o un cuello de botella dentro del CRM con impacto claro en negocio.",
        about_eyebrow: "Perfil",
        about_title: "Soy Jose. Construyo automatización con IA, sistemas CRM y operaciones conectadas.",
        about_intro: "Full stack cuando hace falta, pero la mayoría del tiempo me contratan para implementar GHL, n8n, MCP, voice AI y sistemas conectados que eliminan trabajo manual y limpian la operación.",
        about_story_1: "Trabajo con clientes en LATAM y US construyendo sistemas a medida para ventas, marketing, soporte y operación interna. Gran parte de ese trabajo vive dentro de GoHighLevel, n8n, entornos conectados por MCP e integraciones CRM donde los equipos necesitan más velocidad y mejor control.",
        about_story_2: "Eso incluye implementaciones completas en GHL y snapshots, automatizaciones de ticketing vía MCP, agentes de voz, chatbots para WhatsApp y web, integraciones CRM con herramientas como Chatwoot y HubSpot, y stacks completos desde dominio y despliegue hasta flujos listos para producción.",
        about_what_eyebrow: "Lo que hago",
        about_what_title: "Gran parte del trabajo empieza con automatización y luego se expande hacia integración, producto o infraestructura.",
        about_list_1: "Implementaciones completas en GoHighLevel, snapshots, pipelines y sistemas de seguimiento.",
        about_list_2: "Workflows en n8n para marketing, ventas, operaciones y soporte.",
        about_list_3: "Agentes de voz y chatbots para WhatsApp, web y flujos de llamadas.",
        about_list_4: "Integraciones CRM con GHL, Chatwoot, HubSpot y herramientas relacionadas.",
        about_list_5: "Automatizaciones MCP para ticketing, infraestructura productiva y stacks completos desde dominio hasta deployment.",
        faq_eyebrow: "Preguntas frecuentes",
        faq_title: "Lo que normalmente hay que aclarar antes de empezar.",
        faq_q1: "¿Trabajas con un nicho específico?",
        faq_a1: "No. El foco está en entender el problema del negocio y diseñar la solución correcta para ese contexto específico.",
        faq_q2: "¿Esto se puede conectar con mi CRM o mis herramientas actuales?",
        faq_a2: "Sí. La mayoría de proyectos empieza integrando lo que ya existe para no duplicar trabajo y aprovechar mejor los datos actuales.",
        faq_q3: "¿Para qué sirve realmente automatizar?",
        faq_a3: "Sirve para responder más rápido, reducir trabajo manual, organizar mejor la información y liberar tiempo del equipo para lo que realmente importa.",
        faq_q4: "¿Esto es lo mismo que usar ChatGPT?",
        faq_a4: "No exactamente. ChatGPT puede ser una pieza dentro de la solución, pero un sistema útil normalmente también necesita lógica, integraciones, memoria, contexto del negocio y conexión con tus herramientas.",
        faq_q5: "¿Necesito tener todo definido antes de hablar contigo?",
        faq_a5: "No. Muchas conversaciones empiezan desde una necesidad general y desde ahí se aclara cuál es el primer paso correcto sin complicar de más.",
        faq_q6: "¿Qué pasa si todavía no sé exactamente qué necesito?",
        faq_a6: "Es normal. Muchas veces la primera conversación existe justamente para aterrizar si lo correcto es una automatización, un agente o un sistema más completo.",
        faq_q7: "¿Qué debería automatizar primero?",
        faq_a7: "Normalmente lo que más tiempo consume, más errores genera o más impacto tiene en ventas y seguimiento. Muchas veces eso está en leads, tareas repetitivas, actualizaciones de CRM o respuestas internas.",
        faq_q8: "¿Los agentes de voz realmente sirven o todavía suenan robóticos?",
        faq_a8: "Ya sirven, y en muchos casos funcionan muy bien. La diferencia está en cómo se diseñan, qué contexto tienen y en qué parte del proceso se usan.",
        faq_q9: "¿Cuánto tarda implementar algo así?",
        faq_a9: "Depende del alcance. Algunas automatizaciones pueden salir rápido, mientras que un sistema más completo toma varias etapas. Lo normal es empezar por una primera versión útil e iterar desde ahí.",
        faq_q10: "¿Qué tan costoso puede ser algo así?",
        faq_a10: "Depende del alcance real del proyecto. No todo requiere un presupuesto alto. Muchas veces tiene sentido empezar por algo puntual, útil y bien pensado.",
        contact_badge: "Iniciar proyecto",
        contact_title: "Cuéntame qué quieres automatizar.",
        contact_text: 'Compárteme tu stack, cuello de botella y tipo de proyecto. O escríbeme directamente por <a href="https://wa.me/573142023012" target="_blank" rel="noopener noreferrer">WhatsApp</a> o <a href="https://www.linkedin.com/in/camargo-jose" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',
        contact_name_label: "Nombre completo",
        contact_name_placeholder: "Escribe tu nombre completo",
        contact_company_label: "Empresa",
        contact_company_placeholder: "Escribe el nombre de tu empresa",
        contact_email_label: "Correo electrónico",
        contact_email_placeholder: "Escribe tu correo electrónico",
        contact_phone_label: "WhatsApp",
        contact_phone_placeholder: "Escribe tu número de WhatsApp",
        contact_stack_label: "Stack actual / CRM",
        contact_stack_placeholder: "Ejemplo: HubSpot, GHL, Excel, WhatsApp, formularios",
        contact_project_type_label: "Tipo de proyecto",
        contact_project_type_default: "Selecciona el tipo de proyecto",
        contact_project_type_option_1: "Calificación con IA de voz",
        contact_project_type_option_2: "Automatización CRM",
        contact_project_type_option_3: "WhatsApp / Mensajería",
        contact_project_type_option_4: "Automatización operativa",
        contact_project_type_option_5: "Integraciones / Infraestructura",
        contact_message_label: "Principal cuello de botella",
        contact_message_placeholder: "¿Qué está frenando hoy la operación?",
        contact_captcha_note: "reCAPTCHA aparecerá aquí cuando la site key esté configurada.",
        contact_submit: "Enviar resumen del proyecto",
        projects_eyebrow: "Portafolio",
        projects_title: "Sistemas construidos para calificar leads, automatizar seguimiento y quitar trabajo manual.",
        projects_intro: "Voice AI, sistemas por WhatsApp, automatización CRM, generación de leads, dashboards, infraestructura y operaciones personalizadas entregadas en trabajo real con clientes.",
        projects_stat_1: "Casos publicados",
        projects_stat_2: "Job Success",
        projects_stat_3: "Badge activo en Upwork",
        projects_stat_4: "Stack principal",
        project_type_1: "Ops por WhatsApp",
        project_type_2: "Agente IA",
        project_type_3: "Contenido con IA",
        project_type_4: "Infraestructura",
        project_type_5: "Lógica CRM",
        project_type_6: "Lookup automático",
        project_type_7: "Marketing Ops",
        project_type_8: "Web + Ops",
        project_type_9: "Sitio web",
        project_type_10: "Analítica",
        project_type_11: "Setup negocio",
        project_type_12: "Motor de leads",
        project_type_13: "Ops de plataforma",
        project_type_14: "Captura automatizada",
        project_type_15: "Membership ops",
        project_type_16: "Backoffice ops",
        project_type_17: "IA de voz",
        project_type_18: "MCP empresarial",
        project_excerpt_1: "Arquitectura segura para mensajería multi-cuenta, colas y operación centralizada.",
        project_excerpt_2: "Agente web para captación de leads, explicación de servicios e interacción inteligente.",
        project_excerpt_3: "Producción de contenido de punta a punta con investigación, redacción, formato y distribución.",
        project_excerpt_4: "Base de producción lista para migración con mejor seguridad y control de despliegue.",
        project_excerpt_5: "Mensajes de consentimiento, deduplicación y operación CRM más limpia antes del seguimiento.",
        project_excerpt_6: "Reconocimiento de clientes, consultas en múltiples fuentes y perfiles unificados en tiempo real.",
        project_excerpt_7: "Creación automatizada de assets para marketing sin ciclos manuales de producción.",
        project_excerpt_8: "Sitio orientado a reservas preparado para futuras automatizaciones con CRM.",
        project_excerpt_9: "Sitio de marca con UI responsive y automatización operativa para formularios y notificaciones.",
        project_excerpt_10: "Datos limpios, seguimiento de KPIs y visibilidad operativa a través de un dashboard en vivo.",
        project_excerpt_11: "Sitio web, hosting, dominio, correo y flujo de automatización para interacción con clientes.",
        project_excerpt_12: "Scraping de leads desde Google, guardado en base de datos, enriquecimiento y preparación para calificación.",
        project_excerpt_13: "Azure, Kubernetes, NGINX, 8 instancias de n8n en queue mode y NoCoDB para infraestructura de automatización escalable.",
        project_excerpt_14: "Captura desde portal WiFi con 60k+ contactos, 30+ pasos en n8n, UniFi Controller y flujo listo para automatización.",
        project_excerpt_15: "Membership platform en GoHighLevel con certificaciones, comunidades, 73+ suscripciones mensuales y cerca de $50K al mes.",
        project_excerpt_16: "Power Automate, Excel e integraciones Microsoft reduciendo cerca del 50% del trabajo manual en data entry de facturas.",
        project_excerpt_17: "10+ agentes de voz con ~47% mejor respuesta y cerca de 90% de cualificación en múltiples industrias.",
        project_excerpt_18: "Servidor MCP conectado a ticketing, interfaces con GPT, CIPP y flujos de Microsoft tenants para control empresarial centralizado.",
        project_open_case: "Abrir caso",
        project_mobile_hint: "Toca una miniatura o usa las flechas.",
        project_modal_label: "Caso",
        project_modal_cta: "Ver en Upwork",
        contact_status_captcha_loading: "reCAPTCHA todavía está cargando.",
        contact_status_captcha_missing: "Completa primero el reCAPTCHA.",
        contact_status_sending: "Enviando mensaje...",
        contact_status_sent: "Mensaje enviado.",
        contact_status_error: "No se pudo enviar el formulario. Inténtalo otra vez.",
        chat_header_title: "Chatea con nuestro asistente",
        chat_header_text: "Un asistente personalizado para guiarte en automatización, sistemas de IA, CRM y siguientes pasos.",
        chat_gate_title: "Empieza con verificación",
        chat_gate_text: "Completa el reCAPTCHA antes de chatear con el asistente.",
        chat_start: "Empezar",
        chat_placeholder: "Escribe tu mensaje...",
        chat_send: "Enviar",
        chat_status_loading: "Enviando...",
        chat_status_sent: "Enviado.",
        chat_status_error: "No se pudo enviar el mensaje.",
        chat_captcha_loading: "reCAPTCHA todavía está cargando.",
        chat_captcha_missing: "Completa primero el reCAPTCHA.",
        chat_intro: "Hola, soy JCBot. Puedo guiarte en automatización, sistemas de IA, flujos de CRM y el mejor siguiente paso para tu proyecto.",
        chat_fallback_success: "Mensaje recibido. Te responderé en breve.",
        chat_fallback_error: "No pude responder en este momento. Intenta de nuevo en un momento."
    }
};

function getTranslation(language, key, fallback = "") {
    const dictionary = siteTranslations[language] || siteTranslations.en;
    return dictionary[key] || siteTranslations.en[key] || fallback;
}

if (nav && abrir && cerrar) {
    const setMenuOpen = (open) => {
        nav.classList.toggle("visible", open);
        document.body.classList.toggle("menu-open", open);
    };

    abrir.addEventListener("click", () => {
        setMenuOpen(true);
    });

    cerrar.addEventListener("click", () => {
        setMenuOpen(false);
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            setMenuOpen(false);
        });
    });
}

if (langButtons.length > 0) {
    const languageStorageKey = "preferredSiteLanguage";

    const applyLanguage = (language) => {
        currentLanguage = language === "es" ? "es" : "en";

        document.querySelectorAll("[data-i18n]").forEach((node) => {
            const key = node.dataset.i18n;
            node.textContent = getTranslation(currentLanguage, key, node.textContent);
        });

        document.querySelectorAll("[data-i18n-html]").forEach((node) => {
            const key = node.dataset.i18nHtml;
            node.innerHTML = getTranslation(currentLanguage, key, node.innerHTML);
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
            const key = node.dataset.i18nPlaceholder;
            node.setAttribute("placeholder", getTranslation(currentLanguage, key, node.getAttribute("placeholder") || ""));
        });

        langButtons.forEach((button) => {
            const isActive = button.dataset.langButton === currentLanguage;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        document.documentElement.lang = currentLanguage;
        window.sessionStorage.setItem(languageStorageKey, currentLanguage);
        window.dispatchEvent(new CustomEvent("site-language-change", {
            detail: { language: currentLanguage }
        }));
    };

    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.langButton);
        });
    });

    const savedLanguage = window.sessionStorage.getItem(languageStorageKey);
    applyLanguage(savedLanguage === "es" ? "es" : "en");
}

if (revealItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 70}ms`;
        observer.observe(item);
    });
}

if (homeTitle && homeTitleText) {
    const fallbackPhrase = homeTitleText.textContent.trim();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationToken = 0;

    const readPhrases = () => {
        const attributeName = currentLanguage === "es" ? "data-home-phrases-es" : "data-home-phrases-en";
        const raw = homeTitle.getAttribute(attributeName) || homeTitle.getAttribute("data-home-phrases-en");

        if (!raw) {
            return [fallbackPhrase];
        }

        try {
            const parsedPhrases = JSON.parse(raw);
            if (Array.isArray(parsedPhrases) && parsedPhrases.length > 0) {
                return parsedPhrases.filter((phrase) => typeof phrase === "string" && phrase.trim().length > 0);
            }
        } catch (error) {
            return [fallbackPhrase];
        }

        return [fallbackPhrase];
    };

    const startTypingAnimation = () => {
        animationToken += 1;
        const token = animationToken;
        let phraseIndex = 0;
        let characterIndex = 0;
        let isDeleting = false;

        if (reducedMotion) {
            const phrases = readPhrases();
            homeTitleText.textContent = phrases[0] || fallbackPhrase;
            return;
        }

        const phrases = readPhrases();
        const firstPhrase = phrases[0] || fallbackPhrase;
        homeTitleText.textContent = firstPhrase;
        phraseIndex = 0;
        characterIndex = firstPhrase.length;

        const animateTitle = () => {
            if (token !== animationToken) {
                return;
            }

            const phrases = readPhrases();
            const currentPhrase = phrases[phraseIndex] || phrases[0] || fallbackPhrase;

            if (isDeleting) {
                characterIndex -= 1;
            } else {
                characterIndex += 1;
            }

            homeTitleText.textContent = currentPhrase.slice(0, characterIndex);

            if (!isDeleting && characterIndex === currentPhrase.length) {
                isDeleting = true;
                window.setTimeout(animateTitle, 1400);
                return;
            }

            if (isDeleting && characterIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                window.setTimeout(animateTitle, 240);
                return;
            }

            const typingDelay = isDeleting ? 26 : characterIndex < 12 ? 42 : 58;
            window.setTimeout(animateTitle, typingDelay);
        };

        window.setTimeout(() => {
            isDeleting = true;
            animateTitle();
        }, 1800);
    };

    startTypingAnimation();

    window.addEventListener("site-language-change", () => {
        startTypingAnimation();
    });
}

if (projectModal && projectButtons.length > 0) {
    let activeProjectId = null;
    let activeImageIndex = 0;

    const renderProjectGallery = (project, imageIndex = 0) => {
        if (!project || !projectModalImage) {
            return;
        }

        const gallery = Array.isArray(project.gallery) && project.gallery.length > 0
            ? project.gallery
            : [project.image];

        activeImageIndex = Math.max(0, Math.min(imageIndex, gallery.length - 1));

        projectModalImage.src = `${assetBase}/${gallery[activeImageIndex]}`;
        projectModalImage.alt = `${project.title} image ${activeImageIndex + 1}`;

        if (projectModalMobileHint) {
            projectModalMobileHint.hidden = gallery.length <= 1;
        }

        if (!projectModalThumbs) {
            return;
        }

        projectModalThumbs.hidden = gallery.length <= 1;
        projectModalThumbs.innerHTML = "";

        gallery.forEach((imageName, index) => {
            const thumbButton = document.createElement("button");
            thumbButton.type = "button";
            thumbButton.className = `projectModalThumb${index === activeImageIndex ? " is-active" : ""}`;
            thumbButton.setAttribute("aria-label", `${project.title} image ${index + 1}`);
            thumbButton.innerHTML = `<img src="${assetBase}/${imageName}" alt="${escapeHtml(project.title)} image ${index + 1}"><span>${index + 1}</span>`;
            thumbButton.addEventListener("click", () => {
                renderProjectGallery(project, index);
            });
            projectModalThumbs.appendChild(thumbButton);
        });
    };

    const renderProjectModal = (projectId, imageIndex = 0) => {
        const project = projectCatalog[projectId];

        if (!project) {
            return;
        }

        activeProjectId = projectId;
        projectModalTitle.textContent = project.title;
        projectModalRole.textContent = project.role;
        projectModalDescription.textContent = project.description;
        projectModalSkills.innerHTML = "";
        project.skills.forEach((skill) => {
            const skillTag = document.createElement("span");
            skillTag.textContent = skill;
            projectModalSkills.appendChild(skillTag);
        });
        renderProjectGallery(project, imageIndex);

        projectModal.classList.add("is-open");
        projectModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
    };

    const closeProjectModal = () => {
        projectModal.classList.remove("is-open");
        projectModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    };

    projectButtons.forEach((button) => {
        button.addEventListener("click", () => {
            renderProjectModal(button.dataset.projectOpen);
        });
    });

    projectCards.forEach((card) => {
        card.addEventListener("click", (event) => {
            if (event.target.closest("a, button")) {
                return;
            }

            renderProjectModal(card.dataset.projectOpen);
        });
    });

    projectCloseButtons.forEach((button) => {
        button.addEventListener("click", closeProjectModal);
    });

    const stepImage = (direction) => {
        if (!activeProjectId) {
            return;
        }

        const project = projectCatalog[activeProjectId];
        const gallery = Array.isArray(project?.gallery) && project.gallery.length > 0
            ? project.gallery
            : project?.image
                ? [project.image]
                : [];

        if (!project || gallery.length === 0) {
            return;
        }

        const nextIndex = (activeImageIndex + direction + gallery.length) % gallery.length;
        renderProjectGallery(project, nextIndex);
    };

    if (projectModalPrev) {
        projectModalPrev.addEventListener("click", () => {
            stepImage(-1);
        });
    }

    if (projectModalNext) {
        projectModalNext.addEventListener("click", () => {
            stepImage(1);
        });
    }

    projectModal.addEventListener("click", (event) => {
        if (event.target === projectModal) {
            closeProjectModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && projectModal.classList.contains("is-open")) {
            closeProjectModal();
        }

        if (projectModal.classList.contains("is-open") && event.key === "ArrowLeft") {
            stepImage(-1);
        }

        if (projectModal.classList.contains("is-open") && event.key === "ArrowRight") {
            stepImage(1);
        }
    });
}

function loadRecaptchaScript() {
    if (window.__recaptchaLoaderPromise) {
        return window.__recaptchaLoaderPromise;
    }

    window.__recaptchaLoaderPromise = new Promise((resolve, reject) => {
        if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
            resolve(window.grecaptcha);
            return;
        }

        window.__contactRecaptchaReady = () => {
            if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
                resolve(window.grecaptcha);
                return;
            }

            reject(new Error("reCAPTCHA did not initialize correctly."));
        };

        const existingScript = document.querySelector('script[data-recaptcha-script="true"]');

        if (existingScript) {
            return;
        }

        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js?onload=__contactRecaptchaReady&render=explicit";
        script.async = true;
        script.defer = true;
        script.dataset.recaptchaScript = "true";
        script.onerror = () => reject(new Error("Could not load reCAPTCHA."));
        document.head.appendChild(script);
    });

    return window.__recaptchaLoaderPromise;
}

function fitRecaptchaWidget(mount) {
    if (!mount) {
        return;
    }

    const widget = mount.firstElementChild;
    if (!widget) {
        return;
    }

    const availableWidth = mount.clientWidth || 0;
    const baseWidth = 304;
    const scale = availableWidth > 0 ? Math.min(1, availableWidth / baseWidth) : 1;

    widget.style.transform = `scale(${scale})`;
    widget.style.transformOrigin = "center top";
    widget.style.width = `${baseWidth}px`;
    widget.style.margin = "0 auto";
    mount.style.minHeight = `${78 * scale}px`;
}

if (contactForm) {
    const webhookUrl = (contactForm.getAttribute("data-webhook-url") || "").trim();
    const recaptchaSiteKey = (contactForm.getAttribute("data-recaptcha-sitekey") || "").trim();
    let recaptchaWidgetId = null;

    const getDefaultSubmitMarkup = () => `<span data-i18n="contact_submit">${getTranslation(currentLanguage, "contact_submit", "Submit Form")}</span><i class="bi bi-arrow-right" aria-hidden="true"></i>`;

    const setContactStatus = (text, state = "idle") => {
        if (!contactStatus) {
            return;
        }

        contactStatus.hidden = false;
        contactStatus.textContent = text;
        contactStatus.dataset.state = state;
    };

    const resetSubmitButton = () => {
        if (!contactSubmitButton) {
            return;
        }

        contactSubmitButton.disabled = false;
        contactSubmitButton.classList.remove("is-loading", "is-success");
        contactSubmitButton.innerHTML = getDefaultSubmitMarkup();
    };

    const setSubmitLoading = () => {
        if (!contactSubmitButton) {
            return;
        }

        contactSubmitButton.disabled = true;
        contactSubmitButton.classList.remove("is-success");
        contactSubmitButton.classList.add("is-loading");
        contactSubmitButton.innerHTML = `<span>${getTranslation(currentLanguage, "contact_status_sending", "Sending message...")}</span><span class="buttonSpinner" aria-hidden="true"></span>`;
    };

    const setSubmitSuccess = () => {
        if (!contactSubmitButton) {
            return;
        }

        contactSubmitButton.disabled = true;
        contactSubmitButton.classList.remove("is-loading");
        contactSubmitButton.classList.add("is-success");
        contactSubmitButton.innerHTML = `<span>${getTranslation(currentLanguage, "contact_status_sent", "Message sent.")}</span><i class="bi bi-check-lg" aria-hidden="true"></i>`;
    };

    if (recaptchaMount) {
        if (recaptchaSiteKey) {
            loadRecaptchaScript()
                .then((grecaptcha) => {
                    if (captchaNote) {
                        captchaNote.hidden = true;
                    }

                    recaptchaWidgetId = grecaptcha.render(recaptchaMount, {
                        sitekey: recaptchaSiteKey,
                        theme: "light"
                    });
                    window.requestAnimationFrame(() => fitRecaptchaWidget(recaptchaMount));
                })
                .catch(() => {
                    setContactStatus(getTranslation(currentLanguage, "contact_status_error", "Could not send the form. Please try again."), "error");
                });
        } else if (captchaNote) {
            captchaNote.hidden = false;
        }
    }

    resetSubmitButton();
    window.addEventListener("site-language-change", () => {
        if (!contactSubmitButton || contactSubmitButton.classList.contains("is-loading") || contactSubmitButton.classList.contains("is-success")) {
            return;
        }

        resetSubmitButton();
    });
    window.addEventListener("resize", () => fitRecaptchaWidget(recaptchaMount));

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const captchaToken = window.grecaptcha.getResponse(recaptchaWidgetId);
        const payload = {
            name: (formData.get("name") || "").toString().trim(),
            company: (formData.get("company") || "").toString().trim(),
            email: (formData.get("email") || "").toString().trim(),
            phone: (formData.get("phone") || "").toString().trim(),
            currentStack: (formData.get("currentStack") || "").toString().trim(),
            projectType: (formData.get("projectType") || "").toString().trim(),
            message: (formData.get("message") || "").toString().trim(),
            recaptchaToken: captchaToken,
            "g-recaptcha-response": captchaToken,
            source: "jose-camargo-portfolio",
            submittedAt: new Date().toISOString(),
            language: document.documentElement.lang || "en",
            pageUrl: window.location.href
        };

        if (!webhookUrl) {
            setContactStatus("Webhook URL missing.", "error");
            return;
        }

        if (!recaptchaSiteKey) {
            setContactStatus("reCAPTCHA site key missing.", "error");
            return;
        }

        if (!window.grecaptcha || recaptchaWidgetId === null) {
            setContactStatus(getTranslation(currentLanguage, "contact_status_captcha_loading", "reCAPTCHA is still loading."), "error");
            return;
        }

        if (!captchaToken) {
            setContactStatus(getTranslation(currentLanguage, "contact_status_captcha_missing", "Complete the reCAPTCHA first."), "error");
            return;
        }

        setSubmitLoading();
        setContactStatus(getTranslation(currentLanguage, "contact_status_sending", "Sending message..."), "loading");

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Webhook responded with ${response.status}`);
            }

            setSubmitSuccess();
            setContactStatus(getTranslation(currentLanguage, "contact_status_sent", "Message sent."), "success");
            contactForm.reset();

            if (window.grecaptcha && recaptchaWidgetId !== null) {
                window.grecaptcha.reset(recaptchaWidgetId);
            }
        } catch (error) {
            setContactStatus(getTranslation(currentLanguage, "contact_status_error", "Could not send the form. Please try again."), "error");
            resetSubmitButton();
            return;
        }

        window.setTimeout(() => {
            resetSubmitButton();
        }, 2200);
    });
}

function escapeHtml(value) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function extractChatReply(payload) {
    if (!payload) {
        return "";
    }

    if (typeof payload === "string") {
        return payload.trim();
    }

    const candidateKeys = [
        "reply",
        "response",
        "message",
        "text",
        "output",
        "answer"
    ];

    for (const key of candidateKeys) {
        if (typeof payload[key] === "string" && payload[key].trim()) {
            return payload[key].trim();
        }
    }

    if (payload.data) {
        return extractChatReply(payload.data);
    }

    return "";
}

function initAiChatWidget() {
    if (!document.body || document.querySelector("#aiChatWidget")) {
        return;
    }

    const assistantName = "JCBot";

    document.body.insertAdjacentHTML("beforeend", `
        <div class="aiChatWidget" id="aiChatWidget" data-chat-open="false">
            <div class="aiChatPanel" id="aiChatPanel" aria-hidden="true">
                <div class="aiChatHeader">
                    <div>
                        <h2 data-chat-i18n="chat_header_title">${getTranslation(currentLanguage, "chat_header_title", "Chat with our assistant")}</h2>
                        <p data-chat-i18n="chat_header_text">${getTranslation(currentLanguage, "chat_header_text", "A personalized assistant to guide you through automation, AI systems, CRM, and next steps.")}</p>
                    </div>
                    <button class="aiChatClose" type="button" id="aiChatClose" aria-label="Close chat">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>

                <div class="aiChatGate" id="aiChatGate">
                    <p class="aiChatGateTitle" data-chat-i18n="chat_gate_title">${getTranslation(currentLanguage, "chat_gate_title", "Start with verification")}</p>
                    <p class="aiChatGateText" data-chat-i18n="chat_gate_text">${getTranslation(currentLanguage, "chat_gate_text", "Complete reCAPTCHA before chatting with the assistant.")}</p>
                    <div class="aiChatCaptcha" id="aiChatCaptcha"></div>
                    <p class="aiChatGateNote" id="aiChatGateNote" hidden></p>
                    <button class="aiChatGateButton" type="button" id="aiChatGateButton" data-chat-i18n="chat_start">${getTranslation(currentLanguage, "chat_start", "Start")}</button>
                </div>

                <div class="aiChatConversation" id="aiChatConversation" hidden>
                    <div class="aiChatMessages" id="aiChatMessages"></div>

                    <form class="aiChatComposer" id="aiChatForm">
                        <textarea class="aiChatInput" id="aiChatInput" name="message" placeholder="${getTranslation(currentLanguage, "chat_placeholder", "Type your message...")}" rows="1" required></textarea>
                        <button class="aiChatSend" type="submit" id="aiChatSend" data-chat-i18n="chat_send">${getTranslation(currentLanguage, "chat_send", "Send")}</button>
                    </form>
                    <p class="aiChatStatus" id="aiChatStatus" hidden></p>
                </div>
            </div>

            <button class="aiChatToggle" type="button" id="aiChatToggle" aria-label="Open assistant chat">
                <svg class="aiChatToggleIcon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 5.25V3.5"></path>
                    <path d="M9.6 3.5h4.8"></path>
                    <rect x="6.1" y="7.2" width="11.8" height="8.8" rx="2.2"></rect>
                    <path d="M9.2 16v1.6"></path>
                    <path d="M14.8 16v1.6"></path>
                    <path d="M4.7 9.7v3.8"></path>
                    <path d="M19.3 9.7v3.8"></path>
                    <circle cx="10" cy="11.6" r="0.85" fill="currentColor" stroke="none"></circle>
                    <circle cx="14" cy="11.6" r="0.85" fill="currentColor" stroke="none"></circle>
                    <path d="M10 14h4"></path>
                </svg>
            </button>
        </div>
    `);

    const widget = document.querySelector("#aiChatWidget");
    const panel = document.querySelector("#aiChatPanel");
    const toggle = document.querySelector("#aiChatToggle");
    const close = document.querySelector("#aiChatClose");
    const gate = document.querySelector("#aiChatGate");
    const gateButton = document.querySelector("#aiChatGateButton");
    const gateNote = document.querySelector("#aiChatGateNote");
    const gateCaptcha = document.querySelector("#aiChatCaptcha");
    const conversation = document.querySelector("#aiChatConversation");
    const messages = document.querySelector("#aiChatMessages");
    const chatForm = document.querySelector("#aiChatForm");
    const chatInput = document.querySelector("#aiChatInput");
    const chatSend = document.querySelector("#aiChatSend");
    const chatStatus = document.querySelector("#aiChatStatus");
    const siteKey = defaultRecaptchaSiteKey;
    let chatCaptchaWidgetId = null;
    let chatStarted = false;
    let isSending = false;
    const history = [];

    const syncChatLanguage = () => {
        widget.querySelectorAll("[data-chat-i18n]").forEach((node) => {
            const key = node.dataset.chatI18n;
            node.textContent = getTranslation(currentLanguage, key, node.textContent);
        });

        if (chatInput) {
            chatInput.setAttribute("placeholder", getTranslation(currentLanguage, "chat_placeholder", "Type your message..."));
        }

        if (!isSending && chatSend) {
            chatSend.textContent = getTranslation(currentLanguage, "chat_send", "Send");
        }
    };

    const setOpenState = (open) => {
        if (!widget || !panel) {
            return;
        }

        widget.dataset.chatOpen = open ? "true" : "false";
        panel.setAttribute("aria-hidden", open ? "false" : "true");
    };

    const scrollChatToBottom = () => {
        if (!messages) {
            return;
        }

        messages.scrollTop = messages.scrollHeight;
    };

    const setChatStatus = (text, state = "idle") => {
        if (!chatStatus) {
            return;
        }

        chatStatus.hidden = false;
        chatStatus.textContent = text;
        chatStatus.dataset.state = state;
    };

    const appendMessage = (sender, text, loading = false) => {
        if (!messages) {
            return null;
        }

        const bubble = document.createElement("article");
        bubble.className = `aiChatBubble ${sender === "user" ? "aiChatBubbleUser" : "aiChatBubbleAi"}`;

        const avatar = document.createElement("div");
        avatar.className = "aiChatAvatar";
        avatar.textContent = sender === "user" ? "YO" : assistantName;

        const messageText = document.createElement("div");
        messageText.className = `aiChatBubbleText${loading ? " is-loading" : ""}`;
        messageText.innerHTML = loading
            ? '<span class="aiChatTyping"><span></span><span></span><span></span></span>'
            : escapeHtml(text);

        bubble.appendChild(avatar);
        bubble.appendChild(messageText);
        messages.appendChild(bubble);
        scrollChatToBottom();
        return {
            bubble,
            messageText
        };
    };

    const renderChatCaptcha = () => {
        if (!gateCaptcha || !siteKey) {
            return;
        }

        loadRecaptchaScript()
            .then((grecaptcha) => {
                chatCaptchaWidgetId = grecaptcha.render(gateCaptcha, {
                    sitekey: siteKey,
                    theme: "light",
                    callback: () => {
                        if (gateNote) {
                            gateNote.hidden = true;
                        }
                    },
                    "expired-callback": () => {
                        if (gateNote) {
                            gateNote.hidden = false;
                            gateNote.textContent = getTranslation(currentLanguage, "chat_captcha_missing", "Complete reCAPTCHA first.");
                        }
                    }
                });
                window.requestAnimationFrame(() => fitRecaptchaWidget(gateCaptcha));
            })
            .catch(() => {
                if (gateNote) {
                    gateNote.hidden = false;
                    gateNote.textContent = getTranslation(currentLanguage, "chat_status_error", "Could not send the message.");
                }
            });
    };

    syncChatLanguage();
    window.addEventListener("site-language-change", syncChatLanguage);
    renderChatCaptcha();
    window.addEventListener("resize", () => fitRecaptchaWidget(gateCaptcha));

    if (toggle) {
        toggle.addEventListener("click", () => {
            const nextOpen = widget?.dataset.chatOpen !== "true";
            setOpenState(nextOpen);
        });
    }

    if (close) {
        close.addEventListener("click", () => {
            setOpenState(false);
        });
    }

    if (gateButton) {
        gateButton.addEventListener("click", () => {
            if (!window.grecaptcha || chatCaptchaWidgetId === null) {
                if (gateNote) {
                    gateNote.hidden = false;
                    gateNote.textContent = getTranslation(currentLanguage, "chat_captcha_loading", "reCAPTCHA is still loading.");
                }
                return;
            }

            const token = window.grecaptcha.getResponse(chatCaptchaWidgetId);

            if (!token) {
                if (gateNote) {
                    gateNote.hidden = false;
                    gateNote.textContent = getTranslation(currentLanguage, "chat_captcha_missing", "Complete reCAPTCHA first.");
                }
                return;
            }

            chatStarted = true;
            if (gate) {
                gate.hidden = true;
            }
            if (conversation) {
                conversation.hidden = false;
            }
            if (messages && messages.children.length === 0) {
                const intro = getTranslation(currentLanguage, "chat_intro", `Hi, I'm ${assistantName}. I can guide you through automation, AI systems, CRM workflows, and the best next step for your project.`);
                appendMessage("ai", intro);
                history.push({ sender: "ai", content: intro });
            }
            if (chatInput) {
                chatInput.focus();
            }
            scrollChatToBottom();
        });
    }

    if (chatForm && chatInput && chatSend) {
        chatForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            if (!chatStarted || isSending) {
                return;
            }

            const message = chatInput.value.trim();

            if (!message) {
                return;
            }

            if (!window.grecaptcha || chatCaptchaWidgetId === null) {
                setChatStatus(getTranslation(currentLanguage, "chat_captcha_loading", "reCAPTCHA is still loading."), "error");
                return;
            }

            const token = window.grecaptcha.getResponse(chatCaptchaWidgetId);

            if (!token) {
                setChatStatus(getTranslation(currentLanguage, "chat_captcha_missing", "Complete reCAPTCHA first."), "error");
                if (gate) {
                    gate.hidden = false;
                }
                if (conversation) {
                    conversation.hidden = true;
                }
                chatStarted = false;
                return;
            }

            appendMessage("user", message);
            history.push({ sender: "user", content: message });
            chatInput.value = "";
            isSending = true;
            chatSend.disabled = true;
            chatSend.textContent = getTranslation(currentLanguage, "chat_status_loading", "Sending...");
            setChatStatus(getTranslation(currentLanguage, "chat_status_loading", "Sending..."), "loading");

            const loadingMessage = appendMessage("ai", "", true);

            try {
                const response = await fetch(aiChatWebhookUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message,
                        recaptchaToken: token,
                        "g-recaptcha-response": token,
                        source: "marpicorp-ai-chat",
                        submittedAt: new Date().toISOString(),
                        language: document.documentElement.lang || "en",
                        pageUrl: window.location.href,
                        history
                    })
                });

                if (!response.ok) {
                    throw new Error(`Webhook responded with ${response.status}`);
                }

                const contentType = response.headers.get("content-type") || "";
                const payload = contentType.includes("application/json")
                    ? await response.json()
                    : await response.text();
                const reply = extractChatReply(payload) || getTranslation(currentLanguage, "chat_fallback_success", "Message received. I will get back to you shortly.");

                if (loadingMessage?.messageText) {
                    loadingMessage.messageText.classList.remove("is-loading");
                    loadingMessage.messageText.textContent = reply;
                }

                history.push({ sender: "ai", content: reply });
                setChatStatus(getTranslation(currentLanguage, "chat_status_sent", "Sent."), "success");
            } catch (error) {
                if (loadingMessage?.bubble) {
                    loadingMessage.bubble.remove();
                }

                appendMessage("ai", getTranslation(currentLanguage, "chat_fallback_error", "I couldn't answer right now. Please try again in a moment."));
                setChatStatus(getTranslation(currentLanguage, "chat_status_error", "Could not send the message."), "error");
            } finally {
                isSending = false;
                chatSend.disabled = false;
                chatSend.textContent = getTranslation(currentLanguage, "chat_send", "Send");
                scrollChatToBottom();
            }
        });
    }
}

function initFaqAccordion() {
    const faqGroups = document.querySelectorAll("[data-faq-group]");

    if (!faqGroups.length) {
        return;
    }

    faqGroups.forEach((group) => {
        const items = Array.from(group.querySelectorAll("[data-faq-item]"));

        const setItemState = (item, isOpen) => {
            const trigger = item.querySelector(".faqTrigger");
            const answer = item.querySelector(".faqAnswer");

            if (!trigger || !answer) {
                return;
            }

            item.classList.toggle("is-open", isOpen);
            trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
            answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0px";
        };

        items.forEach((item) => {
            const trigger = item.querySelector(".faqTrigger");
            const answer = item.querySelector(".faqAnswer");

            if (!trigger || !answer) {
                return;
            }

            setItemState(item, item.classList.contains("is-open"));

            trigger.addEventListener("click", () => {
                const willOpen = !item.classList.contains("is-open");

                items.forEach((currentItem) => {
                    setItemState(currentItem, currentItem === item ? willOpen : false);
                });
            });
        });

        window.addEventListener("resize", () => {
            items.forEach((item) => {
                if (item.classList.contains("is-open")) {
                    const answer = item.querySelector(".faqAnswer");

                    if (answer) {
                        answer.style.maxHeight = `${answer.scrollHeight}px`;
                    }
                }
            });
        });
    });
}

initFaqAccordion();
initAiChatWidget();
