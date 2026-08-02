import {
  Globe,
  Cpu,
  Cloud,
  Code2,
  Smartphone,
  Palette,
  Shield,
  Rocket,
  Bot,
  Brain,
  Workflow,
  CreditCard,
  Search,
  Wrench,
  Building2,
  Server,
  LayoutDashboard,
  Users,
  Network,
  ShoppingCart,
  Store,
  Layers,
  Braces,
  ShieldCheck,
  Activity,
  GraduationCap,
  Package,
  Receipt,
  CalendarCheck,
  BedDouble,
  Plane,
  UtensilsCrossed,
  BarChart3,
  Headphones,
  Handshake,
  Database,
  Megaphone,
  Briefcase,
  Timer,
  BadgeCheck,
  Award,
  type LucideIcon,
} from 'lucide-react'

export type IconRef = LucideIcon

export const COMPANY = {
  name: 'NUVOX TECHNOLOGIES',
  shortName: 'NUVOX',
  email: 'nuvoxtechnologies@gmail.com',
  careersEmail: 'nuvoxtechnologies@gmail.com',
  phone: '+91 8870189283',
  whatsapp: '+918870189283',
  address: 'Floor 14, Meridian Business Park, New York, NY 10001',
  city: 'New York',
  region: 'NY',
  country: 'United States',
  url: 'https://www.nuvoxtech.com',
  tagline: 'Building Future-Ready Digital Solutions for Modern Businesses',
  founded: 2015,
}

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Process', href: '/#process' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

export const COMPANY_TYPES = [
  'Startups',
  'Enterprises',
  'FinTech',
  'Healthcare',
  'Education',
  'Retail',
  'Logistics',
  'Manufacturing',
  'Hospitality',
  'Real Estate',
  'E-Commerce',
  'SaaS',
]

export const STATS = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 250, suffix: '+', label: 'Projects Delivered' },
  { value: 150, suffix: '+', label: 'Happy Clients' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

export const ACHIEVEMENTS = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 250, suffix: '+', label: 'Successful Projects' },
  { value: 150, suffix: '+', label: 'Happy Clients' },
  { value: 40, suffix: '+', label: 'Certified Experts' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support & Monitoring' },
]

export interface Service {
  icon: IconRef
  title: string
  description: string
}

export const SERVICES: Service[] = [
  { icon: Cpu, title: 'Custom Software Development', description: 'Tailor-made applications engineered around your exact workflows, data and growth roadmap.' },
  { icon: Globe, title: 'Web Development', description: 'High-performance websites and portals built for speed, SEO, security and conversions.' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Native iOS, Android and cross-platform apps delivered to App Store and Play Store standard.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Research-driven interfaces that users understand, trust and genuinely enjoy using.' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Cloud-native architecture, migration and cost-optimized management on AWS, Azure and GCP.' },
  { icon: Workflow, title: 'DevOps', description: 'CI/CD pipelines, infrastructure-as-code and automated release management that scale safely.' },
  { icon: Braces, title: 'API Development', description: 'Well-documented, secured and versioned REST and GraphQL APIs your teams will love.' },
  { icon: Bot, title: 'AI Solutions', description: 'Production AI — RAG assistants, automation and intelligent decision engines with guardrails.' },
  { icon: Brain, title: 'Machine Learning', description: 'Predictive models, computer vision and NLP products trained on your data.' },
  { icon: Network, title: 'ERP Systems', description: 'Unified ERP platforms connecting finance, inventory, procurement and operations.' },
  { icon: Users, title: 'CRM Systems', description: 'Custom CRMs that mirror your sales pipeline, support desk and customer intelligence.' },
  { icon: Wrench, title: 'Maintenance & Support', description: '24×7 monitoring, proactive updates and priority support that never sleeps.' },
  { icon: Megaphone, title: 'Digital Marketing', description: 'Full-funnel campaigns, content and analytics that turn traffic into revenue.' },
  { icon: Search, title: 'SEO Optimization', description: 'Technical, on-page and content SEO that lifts rankings and qualified traffic.' },
  { icon: ShieldCheck, title: 'Cyber Security', description: 'Security audits, penetration testing and secure-by-default engineering.' },
  { icon: Briefcase, title: 'IT Consulting', description: 'Architecture reviews, technology roadmaps and senior guidance for your leadership team.' },
]

export interface Solution {
  icon: IconRef
  title: string
  description: string
  color: string
}

export const SOLUTIONS: Solution[] = [
  { icon: Activity, title: 'Hospital Management', description: 'EHR, appointments, billing and pharmacy modules.', color: '#2563eb' },
  { icon: GraduationCap, title: 'School ERP', description: 'Admissions, fees, exams and parent communication.', color: '#06b6d4' },
  { icon: Package, title: 'Inventory Management', description: 'Real-time stock, warehouses and purchase orders.', color: '#22c55e' },
  { icon: Receipt, title: 'Billing & Invoicing', description: 'Recurring billing, invoices and financial analytics.', color: '#f59e0b' },
  { icon: CalendarCheck, title: 'Attendance & Payroll', description: 'Shift-based attendance and payroll-ready reporting.', color: '#6366f1' },
  { icon: BedDouble, title: 'Hotel Management', description: 'Reservations, housekeeping and front desk suite.', color: '#f43f5e' },
  { icon: Plane, title: 'Travel & Booking', description: 'Flights, hotels, tours and payment automation.', color: '#3b82f6' },
  { icon: UtensilsCrossed, title: 'Restaurant POS', description: 'Tables, kitchen display and order management.', color: '#ea580c' },
  { icon: BarChart3, title: 'Finance & Treasury', description: 'Ledgers, reconciliation and financial analytics.', color: '#8b5cf6' },
  { icon: Users, title: 'Custom CRM', description: 'Pipelines, automation and customer intelligence.', color: '#14b8a6' },
]

export interface Project {
  slug: string
  title: string
  category: string
  description: string
  gradient: string
  icon: IconRef
  image: string
  imageAlt: string
  client: string
  year: string
  stack: string[]
  results: { label: string; value: string }[]
  overview: string[]
  liveUrl: string
  githubUrl: string
}

const IMG = 'q=80&auto=format&fit=crop'

export const PROJECTS: Project[] = [
  {
    slug: 'nexa-corporate',
    title: 'Nexa Corporate Platform',
    category: 'Corporate Website',
    description: 'An enterprise-grade digital presence and CMS for a global manufacturing leader.',
    gradient: 'from-blue-500 to-indigo-600',
    icon: Building2,
    image: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?${IMG}&w=1200`,
    imageAlt: 'Modern corporate headquarters for the Nexa enterprise platform',
    client: 'Nexa Industries',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Headless CMS'],
    results: [
      { label: 'Organic Traffic', value: '+182%' },
      { label: 'Bounce Rate', value: '-41%' },
      { label: 'Page Speed', value: '0.9s' },
    ],
    overview: [
      'Rebuilt the corporate presence with a clean, credible design that matches the scale of a global manufacturer.',
      'Engineered a headless CMS workflow so the marketing team can ship content independently.',
      'Delivered fast, accessible pages across every region and device.',
    ],
    liveUrl: 'https://nexa.example.com',
    githubUrl: 'https://github.com/nuvoxtech/nexa-corporate',
  },
  {
    slug: 'velora-ecommerce',
    title: 'Velora Commerce',
    category: 'E-Commerce',
    description: 'A headless storefront processing $2M in monthly revenue with one-tap checkout.',
    gradient: 'from-sky-500 to-blue-600',
    icon: ShoppingCart,
    image: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?${IMG}&w=1200`,
    imageAlt: 'Online payment and checkout interface for Velora e-commerce platform',
    client: 'Velora',
    year: '2025',
    stack: ['Next.js', 'Stripe', 'Tailwind CSS', 'PostgreSQL'],
    results: [
      { label: 'Revenue', value: '$2M / mo' },
      { label: 'Conversion', value: '+34%' },
      { label: 'Checkout Time', value: '-58%' },
    ],
    overview: [
      'Built a headless commerce architecture with real-time inventory sync across channels.',
      'Designed a one-tap checkout flow that cut average checkout time by more than half.',
      'Scaled to 40k daily sessions without a single point of failure during peak sales.',
    ],
    liveUrl: 'https://velora.example.com',
    githubUrl: 'https://github.com/nuvoxtech/velora-commerce',
  },
  {
    slug: 'pulse-fintech',
    title: 'Pulse FinTech App',
    category: 'Finance',
    description: 'A banking-grade dashboard for real-time treasury and risk management.',
    gradient: 'from-emerald-500 to-teal-600',
    icon: CreditCard,
    image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?${IMG}&w=1200`,
    imageAlt: 'Financial analytics dashboard for the Pulse treasury platform',
    client: 'Pulse Financial',
    year: '2024',
    stack: ['React', 'Node.js', 'NestJS', 'PostgreSQL', 'AWS'],
    results: [
      { label: 'Transactions', value: '1.2M / mo' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Fraud Alerts', value: '< 50ms' },
    ],
    overview: [
      'Delivered a multi-currency treasury platform with sub-100ms ledger queries.',
      'Implemented bank-grade security: 2FA, audit trails and role-based access control.',
      'Architected for PCI-DSS and SOC 2 compliance from day one.',
    ],
    liveUrl: 'https://pulse.example.com',
    githubUrl: 'https://github.com/nuvoxtech/pulse-fintech',
  },
  {
    slug: 'carefirst-health',
    title: 'CareFirst Health Portal',
    category: 'Healthcare',
    description: 'Patient portals and telemedicine for a 12-clinic care network.',
    gradient: 'from-sky-500 to-cyan-600',
    icon: ShieldCheck,
    image: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?${IMG}&w=1200`,
    imageAlt: 'Doctor using a tablet inside a clinic for the CareFirst telehealth portal',
    client: 'CareFirst Clinics',
    year: '2024',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'WebRTC', 'Firebase'],
    results: [
      { label: 'Appointments', value: '+3.2×' },
      { label: 'No-Shows', value: '-47%' },
      { label: 'Rating', value: '4.9 / 5' },
    ],
    overview: [
      'Created patient booking, telemedicine and EHR modules for a 12-location healthcare network.',
      'HIPAA-aligned data handling with end-to-end encrypted video visits.',
      'Automated reminders reduced no-shows by nearly half in the first quarter.',
    ],
    liveUrl: 'https://carefirst.example.com',
    githubUrl: 'https://github.com/nuvoxtech/carefirst-health',
  },
  {
    slug: 'aeris-travel',
    title: 'Aeris Travel Engine',
    category: 'Travel',
    description: 'A multi-source booking engine aggregating 24 GDS and hotel suppliers.',
    gradient: 'from-amber-500 to-orange-600',
    icon: Plane,
    image: `https://images.unsplash.com/photo-1488646953014-85cb44e25828?${IMG}&w=1200`,
    imageAlt: 'Travel booking experience for the Aeris multi-source travel engine',
    client: 'Aeris Travel',
    year: '2024',
    stack: ['React', 'Node.js', 'GraphQL', 'Redis', 'GCP'],
    results: [
      { label: 'Search Speed', value: '< 300ms' },
      { label: 'Bookings', value: '+128%' },
      { label: 'Sources', value: '24 GDS' },
    ],
    overview: [
      'Aggregated 24 GDS and hotel sources into one fast search API.',
      'GraphQL gateway with smart caching delivers results in under 300 milliseconds.',
      'Dynamic pricing engine increased bookings 128% year over year.',
    ],
    liveUrl: 'https://aeris.example.com',
    githubUrl: 'https://github.com/nuvoxtech/aeris-travel',
  },
  {
    slug: 'edusphere-learn',
    title: 'EduSphere Learning',
    category: 'Education',
    description: 'An interactive LMS powering 80k students across 14 countries.',
    gradient: 'from-violet-500 to-purple-600',
    icon: GraduationCap,
    image: `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?${IMG}&w=1200`,
    imageAlt: 'Students collaborating on the EduSphere learning management system',
    client: 'EduSphere',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Redis'],
    results: [
      { label: 'Students', value: '80k+' },
      { label: 'Completion', value: '+61%' },
      { label: 'Courses', value: '1,400+' },
    ],
    overview: [
      'Built a learning platform used by 80,000 students in 14 countries.',
      'Adaptive quizzing and analytics lift course completion rates by 61%.',
      'Offline-first support keeps learning uninterrupted in low-connectivity regions.',
    ],
    liveUrl: 'https://edusphere.example.com',
    githubUrl: 'https://github.com/nuvoxtech/edusphere-learn',
  },
  {
    slug: 'savory-pos',
    title: 'Savory Restaurant POS',
    category: 'Retail',
    description: 'A unified POS with kitchen display and online ordering across 38 branches.',
    gradient: 'from-rose-500 to-pink-600',
    icon: UtensilsCrossed,
    image: `https://images.unsplash.com/photo-1552566626-52f8b828add9?${IMG}&w=1200`,
    imageAlt: 'Modern restaurant interior for the Savory point-of-sale platform',
    client: 'Savory Group',
    year: '2024',
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'Socket.io'],
    results: [
      { label: 'Order Errors', value: '-92%' },
      { label: 'Table Turnover', value: '+24%' },
      { label: 'Branches', value: '38' },
    ],
    overview: [
      'Unified POS, kitchen display and online ordering into a single real-time system.',
      'Rolled out across 38 branches with offline-tolerant order sync.',
      'Cut order errors by 92% and increased table turnover by 24%.',
    ],
    liveUrl: 'https://savory.example.com',
    githubUrl: 'https://github.com/nuvoxtech/savory-pos',
  },
  {
    slug: 'struct-construction',
    title: 'Struct Construction ERP',
    category: 'Construction',
    description: 'Project, cost and subcontractor management for large builders.',
    gradient: 'from-orange-500 to-amber-600',
    icon: Network,
    image: `https://images.unsplash.com/photo-1541888946425-d81bb19240f5?${IMG}&w=1200`,
    imageAlt: 'Construction site with cranes for the Struct construction ERP platform',
    client: 'Struct Builders',
    year: '2023',
    stack: ['React', 'NestJS', 'PostgreSQL', 'Docker'],
    results: [
      { label: 'Cost Oversight', value: '-31%' },
      { label: 'Projects Tracked', value: '200+' },
      { label: 'Payroll Time', value: '-70%' },
    ],
    overview: [
      'Built an ERP covering tenders, budgets, subcontractors and site payroll.',
      'Real-time cost tracking reduced budget overruns by 31%.',
      'Automated site payroll saved the operations team 70% of admin time.',
    ],
    liveUrl: 'https://struct.example.com',
    githubUrl: 'https://github.com/nuvoxtech/struct-construction',
  },
  {
    slug: 'cargoflow-logistics',
    title: 'CargoFlow Logistics',
    category: 'Business Applications',
    description: 'Fleet tracking and dispatch analytics for 500 vehicles.',
    gradient: 'from-teal-500 to-emerald-600',
    icon: Package,
    image: `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?${IMG}&w=1200`,
    imageAlt: 'Delivery truck on the highway for the CargoFlow fleet tracking platform',
    client: 'CargoFlow',
    year: '2025',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Google Maps', 'WebSockets'],
    results: [
      { label: 'Fleet Size', value: '500+' },
      { label: 'Delivery Time', value: '-28%' },
      { label: 'Fuel Cost', value: '-19%' },
    ],
    overview: [
      'Live GPS fleet tracking with route optimization across 500 vehicles.',
      'WebSocket dispatch feed cut average delivery times by 28%.',
      'Predictive maintenance and route analytics lowered fuel spend 19%.',
    ],
    liveUrl: 'https://cargoflow.example.com',
    githubUrl: 'https://github.com/nuvoxtech/cargoflow-logistics',
  },
  {
    slug: 'maison-fashion',
    title: 'Maison Fashion Store',
    category: 'E-Commerce',
    description: 'A premium fashion storefront with editorial storytelling.',
    gradient: 'from-fuchsia-500 to-rose-600',
    icon: Store,
    image: `https://images.unsplash.com/photo-1441986300917-64674bd600d8?${IMG}&w=1200`,
    imageAlt: 'Elegant boutique clothing display for the Maison fashion storefront',
    client: 'Maison',
    year: '2024',
    stack: ['Next.js', 'Stripe', 'Tailwind CSS', 'Sanity'],
    results: [
      { label: 'Avg. Order Value', value: '+43%' },
      { label: 'Mobile Conversion', value: '+2.8×' },
      { label: 'Instagram Referrals', value: '+190%' },
    ],
    overview: [
      'An editorial storefront that treats fashion like film.',
      'Product lookbook pages lifted average order value 43%.',
      'Built for gallery-grade visuals while keeping sub-second load times.',
    ],
    liveUrl: 'https://maison.example.com',
    githubUrl: 'https://github.com/nuvoxtech/maison-fashion',
  },
  {
    slug: 'sense-ai',
    title: 'Sense AI Assistant',
    category: 'Business Applications',
    description: 'A RAG-powered assistant for enterprise knowledge bases.',
    gradient: 'from-cyan-500 to-indigo-600',
    icon: Bot,
    image: `https://images.unsplash.com/photo-1677442136019-21780ecad995?${IMG}&w=1200`,
    imageAlt: 'Artificial intelligence concept art for the Sense AI assistant',
    client: 'Sense Labs',
    year: '2025',
    stack: ['Python', 'LangChain', 'OpenAI', 'Next.js', 'Pinecone'],
    results: [
      { label: 'Resolution Time', value: '-64%' },
      { label: 'Tickets Deflected', value: '41%' },
      { label: 'Answer Accuracy', value: '96%' },
    ],
    overview: [
      'Retrieval-augmented assistant grounded in the client’s full knowledge base.',
      'Deflected 41% of support tickets while keeping answer accuracy at 96%.',
      'Fine-tuned guardrails keep responses safe, on-brand and grounded.',
    ],
    liveUrl: 'https://sense.example.com',
    githubUrl: 'https://github.com/nuvoxtech/sense-ai',
  },
  {
    slug: 'stackly-saas',
    title: 'Stackly SaaS Platform',
    category: 'SaaS Products',
    description: 'A multi-tenant subscription platform with metered usage billing.',
    gradient: 'from-blue-500 to-indigo-600',
    icon: Layers,
    image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?${IMG}&w=1200`,
    imageAlt: 'Laptop showing SaaS analytics dashboard for the Stackly platform',
    client: 'Stackly',
    year: '2025',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe', 'Kubernetes'],
    results: [
      { label: 'Tenants', value: '1,900+' },
      { label: 'ARR', value: '$4.6M' },
      { label: 'Deploys / Day', value: '14' },
    ],
    overview: [
      'A multi-tenant SaaS platform with metered usage-based billing.',
      'Kubernetes-driven auto-scaling handles 1,900+ paying tenants.',
      'CI/CD pipelines ship 14 deployments a day without downtime.',
    ],
    liveUrl: 'https://stackly.example.com',
    githubUrl: 'https://github.com/nuvoxtech/stackly-saas',
  },
]

export const TECH_GROUPS = [
  {
    name: 'Frontend',
    icon: LayoutDashboard,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue'],
  },
  {
    name: 'Backend',
    icon: Server,
    items: ['Node.js', 'NestJS', 'Python', 'Go', 'Java'],
  },
  {
    name: 'Database & Data',
    icon: Database,
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'BigQuery'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
  },
]

export const PROCESS_STEPS = [
  { step: '01', title: 'Discovery', icon: Search, description: 'We map your goals, users and constraints to define what success looks like.' },
  { step: '02', title: 'Strategy & Planning', icon: Cpu, description: 'Roadmaps, architecture and scope are locked with total clarity.' },
  { step: '03', title: 'UI/UX Design', icon: Palette, description: 'Clean, accessible interfaces crafted around real user journeys.' },
  { step: '04', title: 'Development', icon: Code2, description: 'Clean, tested, scalable code shipped in weekly increments.' },
  { step: '05', title: 'Quality Assurance', icon: Shield, description: 'Automated QA, security scans and real-device validation.' },
  { step: '06', title: 'Deployment', icon: Rocket, description: 'Zero-downtime launches with monitoring from day one.' },
  { step: '07', title: 'Support & Scale', icon: Wrench, description: 'Ongoing care, iteration and continuous improvement.' },
]

export const WHY_US = [
  { icon: Timer, title: 'Fast Delivery', description: 'Clear milestones and a proven record of on-schedule launches.' },
  { icon: BadgeCheck, title: 'Quality Assurance', description: 'Multi-layer QA, automated tests and security reviews on every build.' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock monitoring and a support team that actually answers.' },
  { icon: Award, title: 'Certified Experts', description: 'AWS, Azure and Google Cloud certified engineers and architects.' },
  { icon: Users, title: 'Happy Clients', description: '150+ long-term client relationships built on reliability and trust.' },
  { icon: Handshake, title: 'Long-term Partnership', description: 'We build products, then stand behind them for years to come.' },
  { icon: Layers, title: 'Scalable Architecture', description: 'Systems engineered to grow from MVP to global scale.' },
  { icon: ShieldCheck, title: 'Secure by Design', description: 'Security reviews baked into every stage of delivery.' },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Velora Commerce',
    quote:
      'NUVOX rebuilt our storefront and conversions jumped 34% within a month. Professional, reliable and genuinely invested in our results.',
    rating: 5,
    initials: 'SM',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'David Chen',
    role: 'CTO, Pulse Financial',
    quote:
      'The treasury platform they built handles 1.2M transactions a month with 99.99% uptime. Flawless engineering and communication.',
    rating: 5,
    initials: 'DC',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, EduSphere',
    quote:
      'From strategy to launch in ten weeks. Our platform now serves 80,000 students and looks professional on every device.',
    rating: 5,
    initials: 'PS',
    gradient: 'from-violet-500 to-cyan-500',
  },
  {
    name: 'James O\'Brien',
    role: 'COO, CargoFlow',
    quote:
      'Real-time fleet tracking that actually works. Delivery times dropped 28% and their support team is available around the clock.',
    rating: 5,
    initials: 'JO',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Amelia Rodriguez',
    role: 'Marketing Director, Maison',
    quote:
      'They turned our store into an experience. The editorial design lifted average order value 43% and our brand finally feels premium.',
    rating: 5,
    initials: 'AR',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    name: 'Michael Thompson',
    role: 'VP Engineering, Stackly',
    quote:
      'Fourteen deploys a day, zero downtime, and a team that reviews code like their own. NUVOX is our long-term engineering partner.',
    rating: 5,
    initials: 'MT',
    gradient: 'from-indigo-500 to-cyan-500',
  },
]

export const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'A landing page ships in 2–3 weeks, a full website in 4–6 weeks, and complex enterprise platforms in 2–5 months. You get a detailed timeline before we start, plus weekly progress updates throughout.',
  },
  {
    q: 'What does your development process look like?',
    a: 'We follow a transparent seven-step process — discovery, strategy, UI/UX design, development, quality assurance, deployment and ongoing support. You review working builds at every milestone.',
  },
  {
    q: 'Do you work with startups and SMEs?',
    a: 'Yes. We support early-stage startups with fast MVPs and scale to enterprise-grade delivery for SMEs and large organizations. Engagement models are tailored to your budget and stage.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Pricing depends on scope, complexity and timeline. We offer fixed-price projects, dedicated teams and hourly engagement — all quoted transparently with no hidden costs.',
  },
  {
    q: 'Will my website be mobile responsive?',
    a: 'Absolutely. Every product is designed and tested across desktop, tablet and mobile. Our QA matrix covers 40+ real devices and browsers before launch.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Every project includes a post-launch support window, and we offer flexible ongoing care plans with 24×7 monitoring, updates and priority response.',
  },
  {
    q: 'Can you integrate with our existing systems?',
    a: 'Yes. We integrate CRMs, ERPs, payment gateways and third-party APIs. Legacy systems are wrapped or migrated with zero downtime.',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'why-nextjs-is-the-future',
    title: 'Why Next.js Is The Default Choice For Enterprise Web Apps',
    excerpt: 'A deep look at SSR, ISR and edge rendering — and why the world’s biggest teams are migrating.',
    category: 'Engineering',
    date: 'July 2026',
    readTime: '8 min',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    slug: 'enterprise-react-structure',
    title: 'How We Structure Enterprise React Projects That Scale',
    excerpt: 'A practical, folder-by-folder guide to codebases that stay clean past 100k lines.',
    category: 'Engineering',
    date: 'June 2026',
    readTime: '6 min',
    gradient: 'from-indigo-500 to-violet-500',
  },
  {
    slug: 'ai-for-business-growth',
    title: 'How To Ship Real AI Products, Not AI Demos',
    excerpt: 'From RAG to fine-tuning: a practical playbook for taking AI from prototype to production.',
    category: 'AI',
    date: 'May 2026',
    readTime: '10 min',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    slug: 'cloud-cost-optimization',
    title: 'The 2026 Guide To Cloud Cost Optimization',
    excerpt: 'Cut your cloud bill by 40% with right-sizing, spot instances and serverless-first thinking.',
    category: 'Cloud',
    date: 'April 2026',
    readTime: '7 min',
    gradient: 'from-orange-500 to-amber-500',
  },
]

export const CAREERS = [
  {
    title: 'Senior React Engineer',
    dept: 'Engineering',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    icon: Code2,
  },
  {
    title: 'Full Stack Developer (Node.js)',
    dept: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: Server,
  },
  {
    title: 'Product Designer (UI/UX)',
    dept: 'Design',
    type: 'Full-time',
    location: 'Hybrid',
    icon: Palette,
  },
  {
    title: 'DevOps Engineer',
    dept: 'Infrastructure',
    type: 'Full-time',
    location: 'Remote',
    icon: Cloud,
  },
  {
    title: 'QA Automation Engineer',
    dept: 'Quality',
    type: 'Full-time',
    location: 'Remote',
    icon: Shield,
  },
  {
    title: 'AI / ML Engineer',
    dept: 'Innovation',
    type: 'Full-time',
    location: 'Remote',
    icon: Brain,
  },
]

export const INDUSTRIES = [
  { name: 'Healthcare', icon: ShieldCheck, description: 'HIPAA-aware portals and hospital systems' },
  { name: 'Finance & FinTech', icon: CreditCard, description: 'Banking-grade platforms and dashboards' },
  { name: 'Education', icon: GraduationCap, description: 'LMS platforms and school ERPs' },
  { name: 'Real Estate', icon: Building2, description: 'Property portals and CRM workflows' },
  { name: 'Retail & E-Commerce', icon: ShoppingCart, description: 'Commerce and omnichannel experiences' },
  { name: 'Logistics', icon: Package, description: 'Fleet tracking and dispatch systems' },
  { name: 'Manufacturing', icon: Network, description: 'ERP, IoT and supply chain intelligence' },
  { name: 'Hospitality', icon: BedDouble, description: 'Hotel and restaurant management suites' },
]
