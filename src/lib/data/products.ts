import {
  Sparkles,
  LayoutTemplate,
  KanbanSquare,
  Users,
  BarChart3,
  Palette,
  IndianRupee,
  EyeOff,
  Siren,
  UserX,
  Briefcase,
  UserCog,
  UserCheck,
  Smartphone,
  FileText,
  LineChart,
  ShieldCheck,
  GraduationCap,
  Brain,
  FolderOpen,
  CalendarClock,
  ClipboardList,
  AlertTriangle,
  Building2,
  School,
  ShoppingBag,
  CalendarDays,
  BookOpen,
  ChefHat,
  Bike,
  CreditCard,
  Store,
  MessageSquareWarning,
  RefreshCw,
  PackageX,
  Megaphone,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'
import type { Product } from '@/types'
import { companyInfo } from '@/lib/data/company'

const mailto = (subject: string) =>
  `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}`

export const kitchenConnectEarlyAccess = mailto('KitchenConnect – Early access')
export const kitchenConnectPartner = mailto('KitchenConnect – Partnership enquiry')

export const products: Product[] = [
  {
    slug: 'taskram',
    name: 'TasKram',
    tagline: 'Sequence. Simplified.',
    category: 'AI Task Management',
    status: 'live',
    oneLiner: 'AI-generated compliance task lists for CA & accounting firms',
    summary:
      "TasKram turns your firm's business templates and each client's data into a complete, reviewable task list in seconds — then tracks every GST, TDS and ROC deliverable through to done.",
    audience: 'CA, accounting & compliance firms',
    hero: {
      headline: "Every client's compliance calendar, planned in seconds",
      subheadline:
        "TasKram combines your firm's business templates with each client's real data to generate a complete task list. Your team reviews it, accepts it, and tracks every filing on one board — so nothing slips through the cracks.",
    },
    url: 'https://taskram.in',
    primaryCta: { label: 'Visit taskram.in', href: 'https://taskram.in', external: true },
    logo: { src: '/images/products/taskram/logo.png', width: 900, height: 313 },
    icon: '/images/products/taskram/icon.png',
    brand: {
      brand: '#3F8ED9',
      strong: '#1E6BB8',
      accent: '#D4922F',
      tint: '#EEF5FC',
    },
    highlights: [
      { value: 'Seconds', label: 'to draft a full client task list' },
      { value: '100%', label: 'of AI tasks reviewed before assignment' },
      { value: '3', label: 'role-based workspaces' },
      { value: 'Your brand', label: 'logo and colours for your firm' },
    ],
    problem: {
      title: 'When task assignment isn’t systemised, deadlines slip',
      intro:
        "Most firms still run compliance from spreadsheets, WhatsApp groups and memory. Here's where that quietly costs you.",
      points: [
        {
          icon: 'IndianRupee',
          title: 'Missed revenue',
          description:
            "Compliance work that isn't tracked often goes unbilled — untracked hours quietly add up to real money left on the table.",
        },
        {
          icon: 'EyeOff',
          title: 'Broken visibility',
          description:
            "No one — not even you — can say what's overdue or who's blocked, until a client calls asking why.",
        },
        {
          icon: 'Siren',
          title: 'Escalation chaos',
          description:
            'One missed GST, TDS or ROC filing turns into an all-hands scramble, a penalty notice and an uncomfortable client call.',
        },
        {
          icon: 'UserX',
          title: 'Client friction',
          description:
            'Clients notice slipped deadlines before you do — and trust, once shaken, takes far longer to rebuild than to keep.',
        },
      ],
    },
    steps: [
      {
        title: 'Add your client',
        description: 'Capture the client’s profile — registrations, entity type and the services you handle for them.',
      },
      {
        title: 'AI drafts the task list',
        description: "Your firm's business template is combined with the client's data to generate a complete checklist.",
      },
      {
        title: 'Review and accept',
        description: 'Edit, add or discard tasks in a private preview. Nothing reaches your team until you accept.',
      },
      {
        title: 'Track it to done',
        description: 'Tasks flow onto the Kanban board — To Do, In Progress, Review, Done — with clear owners.',
      },
    ],
    features: [
      {
        icon: 'Sparkles',
        title: 'AI task generation',
        description: 'Generate a business-specific task checklist for any client in seconds, grounded in their real data.',
      },
      {
        icon: 'LayoutTemplate',
        title: 'Business templates',
        description: 'Encode how your firm works once. Every generated task list follows your own playbook.',
      },
      {
        icon: 'KanbanSquare',
        title: 'Kanban boards',
        description: 'Drag-and-drop boards that show every task’s status at a glance, from To Do to Done.',
      },
      {
        icon: 'Users',
        title: 'Team management',
        description: 'Invite your team, assign work and balance load from one unified dashboard.',
      },
      {
        icon: 'BarChart3',
        title: 'Reports & dashboards',
        description: 'See what’s overdue, who’s blocked and how each client is tracking — in real time.',
      },
      {
        icon: 'Palette',
        title: 'Your firm’s branding',
        description: 'Your team works in a space with your firm’s logo, colours and theme.',
      },
    ],
    personas: [
      {
        icon: 'Briefcase',
        title: 'Firm admins & partners',
        description: 'Onboard clients, generate task lists, manage the team and see the whole practice at a glance.',
      },
      {
        icon: 'UserCog',
        title: 'Managers',
        description: 'Assign and rebalance work, review progress and unblock the team before deadlines bite.',
      },
      {
        icon: 'UserCheck',
        title: 'Team members',
        description: 'A personal board of assigned tasks, so everyone knows exactly what to do next.',
      },
    ],
    spotlight: {
      eyebrow: 'AI, with you in control',
      title: 'AI drafts. Your team decides.',
      description:
        'TasKram never assigns work on its own. Generated task lists stay in a private preview until a firm admin reviews and accepts them — so AI speeds you up without taking judgement away from the professionals.',
      points: [
        'Generated lists open in preview mode, visible only to you',
        'Edit, add or discard tasks before anything reaches the board',
        'Accepted tasks flow to Kanban with owners and status',
        "Every firm's data is isolated in its own secure workspace",
      ],
    },
    platforms: ['Web app — desktop, tablet and mobile browsers'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'AWS Lambda', 'Amazon Cognito', 'PostgreSQL', 'OpenAI'],
    relatedServices: ['software-development', 'ai-ml-solutions', 'cloud-devops'],
    video: { youtubeId: 'zx1HR7RnyA4', title: 'TasKram launch film' },
    screenshots: [],
    seo: {
      title: 'TasKram – AI Task Management for CA & Compliance Firms',
      description:
        'TasKram generates complete GST, TDS and ROC compliance task lists for every client in seconds, then tracks them on Kanban boards. AI task management built by Patheya Technologies.',
      keywords: [
        'AI task management for CA firms',
        'GST compliance task tracker',
        'CA practice management software',
        'compliance task management India',
        'TDS ROC filing tracker',
        'TasKram',
      ],
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
    },
  },
  {
    slug: 'easie',
    name: 'EASIE',
    fullName: 'E-Auditing & Systems Integration In Education',
    tagline: 'Report-oriented data capture for NAAC & CAS',
    category: 'Accreditation & IQAC Platform',
    status: 'live',
    oneLiner: 'NAAC & CAS data capture and reporting for colleges and universities',
    summary:
      'EASIE replaces scattered spreadsheets with one platform where faculty capture data as it happens, IQAC validates it, and NAAC- and CAS-compliant reports are generated in a click.',
    audience: 'Colleges, universities & IQAC teams',
    hero: {
      headline: 'Be accreditation-ready every day, not just in NAAC season',
      subheadline:
        'EASIE gives every teacher a simple way to record their work as it happens, gives IQAC a live view of every criterion, and turns it all into NAAC- and CAS-compliant reports — without the last-minute scramble.',
    },
    url: 'https://www.easie.co.in',
    primaryCta: { label: 'Visit easie.co.in', href: 'https://www.easie.co.in', external: true },
    logo: { src: '/images/products/easie/logo.png', width: 900, height: 482 },
    icon: '/images/products/easie/icon.png',
    brand: {
      brand: '#3A8B80',
      strong: '#2A6C63',
      accent: '#52C3E8',
      tint: '#EBF5F3',
    },
    highlights: [
      { value: '110+', label: 'ready-made form types' },
      { value: '15', label: 'NAAC & CAS report formats' },
      { value: '14+', label: 'user roles with fine-grained access' },
      { value: '25+ yrs', label: 'of education domain expertise' },
    ],
    problem: {
      title: 'Accreditation shouldn’t mean months of firefighting',
      intro:
        'For most institutions, NAAC and CAS preparation means chasing data that should have been recorded all along.',
      points: [
        {
          icon: 'FolderOpen',
          title: 'Data scattered everywhere',
          description:
            'Evidence lives across departments, spreadsheets, inboxes and paper files — and nobody has the full picture.',
        },
        {
          icon: 'CalendarClock',
          title: 'The last-minute scramble',
          description:
            'SSR and AQAR deadlines trigger weeks of chasing faculty for details that happened months ago.',
        },
        {
          icon: 'ClipboardList',
          title: 'Faculty overload',
          description:
            'Teachers re-enter the same information in different formats for NAAC, CAS, audits and internal reviews.',
        },
        {
          icon: 'AlertTriangle',
          title: 'Unverified numbers',
          description:
            'Without validation at the source, inconsistencies surface during peer review — when they cost the most.',
        },
      ],
    },
    steps: [
      {
        title: 'Faculty capture',
        description: 'Teachers record activities, publications and events on mobile, the moment they happen.',
      },
      {
        title: 'Validate at source',
        description: 'Heads of department and IQAC verify entries through a bottom-up approval flow.',
      },
      {
        title: 'Monitor live',
        description: 'Real-time dashboards show progress for every criterion, department and teacher.',
      },
      {
        title: 'Generate reports',
        description: 'Produce NAAC- and CAS-compliant reports in standard formats, ready to submit.',
      },
    ],
    features: [
      {
        icon: 'Smartphone',
        title: 'Mobile-first data capture',
        description: 'A simple app for teachers to record data in real time, from anywhere on campus.',
      },
      {
        icon: 'FileText',
        title: 'NAAC & CAS reporting',
        description: 'Generate compliant reports in 15 standard formats, straight from validated data.',
      },
      {
        icon: 'LineChart',
        title: 'Real-time IQAC dashboards',
        description: 'Visualise progress across criteria and departments, and spot gaps early.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Fine-grained access control',
        description: '14+ roles, from teacher to principal, each seeing exactly what they should.',
      },
      {
        icon: 'GraduationCap',
        title: 'Teacher-centric workflows',
        description: 'Bottom-up data gathering with validation built in, designed around how faculty actually work.',
      },
      {
        icon: 'Brain',
        title: 'AI-powered insights',
        description: 'Automated report drafting, data-quality checks, anomaly detection and plain-language summaries.',
      },
    ],
    personas: [
      {
        icon: 'Building2',
        title: 'IQAC coordinators',
        description: 'A single source of truth for every criterion, with reports generated instead of compiled.',
      },
      {
        icon: 'School',
        title: 'Principals & management',
        description: 'Live visibility into institutional quality, long before the peer team arrives.',
      },
      {
        icon: 'GraduationCap',
        title: 'Faculty & HoDs',
        description: 'Record once, reuse everywhere — for NAAC, CAS promotions and internal reviews.',
      },
    ],
    spotlight: {
      eyebrow: 'Built with domain expertise',
      title: 'Shaped by 25+ years in higher education',
      description:
        'EASIE is designed alongside our education domain expert, who brings more than 25 years of hands-on experience in academic administration and quality assurance. Every form, workflow and report mirrors how institutions actually prepare for NAAC and CAS.',
      points: [
        'Forms modelled on real NAAC criteria and CAS requirements',
        'Workflows that match how departments and IQAC already operate',
        'Reports in the formats assessors expect to see',
        'Continuously refined with feedback from institutions',
      ],
    },
    platforms: ['Web app for IQAC and administration', 'Mobile app for faculty data capture'],
    technologies: [],
    relatedServices: ['software-development', 'mobile-app-development', 'ai-ml-solutions'],
    video: { youtubeId: 'QwPtuRaILKM', title: 'EASIE app intro' },
    screenshots: [],
    seo: {
      title: 'EASIE – NAAC & CAS Data Management Software for Colleges',
      description:
        'EASIE helps colleges and universities capture accreditation data in real time, validate it through IQAC and generate NAAC- and CAS-compliant reports. Built by Patheya Technologies.',
      keywords: [
        'NAAC software',
        'IQAC data management software',
        'CAS reporting software',
        'NAAC accreditation software India',
        'AQAR SSR report generation',
        'EASIE',
      ],
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web, Android',
    },
  },
  {
    slug: 'kitchen-connect',
    name: 'KitchenConnect',
    tagline: 'From kitchen to doorstep, connected.',
    category: 'Cloud Kitchen Platform',
    status: 'coming-soon',
    oneLiner: 'Ordering, kitchen and delivery platform for cloud kitchens & tiffin services',
    summary:
      'KitchenConnect brings customer ordering, daily menus, kitchen operations and OTP-verified delivery together on one platform — across every outlet a food business runs.',
    audience: 'Cloud kitchens, tiffin services & multi-outlet food brands',
    hero: {
      headline: 'Run your entire food business on one connected platform',
      subheadline:
        'KitchenConnect brings customer ordering, daily menus, kitchen operations and doorstep delivery together — with your own brand, across every outlet you run.',
    },
    primaryCta: { label: 'Get early access', href: kitchenConnectEarlyAccess },
    logo: { src: '/images/products/kitchen-connect/logo.png', width: 800, height: 430 },
    icon: '/images/products/kitchen-connect/icon.png',
    brand: {
      brand: '#3A5F3A',
      strong: '#3A5F3A',
      accent: '#C2570E',
      tint: '#EFF5EC',
    },
    highlights: [
      { value: '1 platform', label: 'for customers, kitchen and delivery' },
      { value: 'Multi-outlet', label: 'one business, many locations' },
      { value: 'OTP', label: 'verified doorstep handover' },
      { value: 'Mobile + Web', label: 'Android, iOS and web apps' },
    ],
    problem: {
      title: 'Growing a food business shouldn’t mean juggling five tools',
      intro:
        'Cloud kitchens and tiffin services outgrow phone calls and chat groups fast. The cracks show up in every order.',
      points: [
        {
          icon: 'MessageSquareWarning',
          title: 'Orders everywhere',
          description:
            'Orders arrive by call, WhatsApp and aggregator — and someone has to re-type every one of them.',
        },
        {
          icon: 'RefreshCw',
          title: 'Menus that change daily',
          description:
            'Today’s menu and meal slots live in someone’s head, so customers never quite know what’s available.',
        },
        {
          icon: 'PackageX',
          title: 'Delivery disputes',
          description:
            '“I never received it” is hard to argue with when there is no proof of handover at the door.',
        },
        {
          icon: 'Megaphone',
          title: 'Your brand gets lost',
          description:
            'On marketplaces you are one listing among hundreds, and the customer relationship is not yours.',
        },
      ],
    },
    steps: [
      {
        title: 'Onboard your business',
        description: 'Set up your business and outlets with verified KYC, GST and FSSAI details.',
      },
      {
        title: 'Publish today’s menu',
        description: 'Build menus from a ready dish library and open meal slots for each outlet.',
      },
      {
        title: 'Customers order',
        description: 'Customers find nearby outlets, order and pay online or on delivery.',
      },
      {
        title: 'Cook, dispatch, deliver',
        description: 'The kitchen works a live order queue, and riders confirm every handover with an OTP.',
      },
    ],
    features: [
      {
        icon: 'ShoppingBag',
        title: 'Branded customer app',
        description: 'Location-based outlet discovery, favourites, saved addresses, cart and order tracking.',
      },
      {
        icon: 'CalendarDays',
        title: 'Daily menus & meal slots',
        description: 'Publish what’s cooking today and when — breakfast, lunch or dinner, per outlet.',
      },
      {
        icon: 'BookOpen',
        title: 'Master dish library',
        description: 'Start from a curated catalogue of Indian dishes with photos, instead of a blank menu.',
      },
      {
        icon: 'ChefHat',
        title: 'Kitchen order queue',
        description: 'Kitchen staff see open orders as they arrive and mark them prepared in a tap.',
      },
      {
        icon: 'Bike',
        title: 'OTP-verified delivery',
        description: 'Assign orders to delivery partners, who confirm every handover with the customer’s OTP.',
      },
      {
        icon: 'CreditCard',
        title: 'Payments & invoicing',
        description: 'Online payments, cash on delivery, GST invoices and refunds — reconciled per outlet.',
      },
    ],
    personas: [
      {
        icon: 'Store',
        title: 'Business owners',
        description: 'Run every outlet, menu and team from one place, with your own brand front and centre.',
      },
      {
        icon: 'UtensilsCrossed',
        title: 'Outlet managers',
        description: 'Set today’s menu, manage staff and keep orders moving through the day.',
      },
      {
        icon: 'ChefHat',
        title: 'Kitchen staff',
        description: 'A clear queue of what to cook next — no shouting across the kitchen.',
      },
      {
        icon: 'Bike',
        title: 'Delivery partners',
        description: 'Assigned orders, addresses and OTP confirmation in a simple rider view.',
      },
    ],
    spotlight: {
      eyebrow: 'Early access',
      title: 'Be one of our first partner kitchens',
      description:
        'KitchenConnect is in its final stretch before launch. We are inviting a small group of cloud kitchens, tiffin services and multi-outlet food brands to onboard first and help shape the product.',
      points: [
        'Priority onboarding with hands-on setup support',
        'A direct line to the team that built the platform',
        'Your feedback shapes the product roadmap',
        'Go live with your own branded ordering from launch',
      ],
    },
    platforms: ['Customer and staff apps for Android, iOS and Web', 'Admin web console for owners and outlets'],
    technologies: ['Flutter', 'React', 'TypeScript', 'Python', 'AWS Lambda', 'PostgreSQL', 'Razorpay', 'Mappls Maps'],
    relatedServices: ['mobile-app-development', 'cloud-devops', 'software-development'],
    screenshots: [],
    seo: {
      title: 'KitchenConnect – Cloud Kitchen & Tiffin Service Management Platform',
      description:
        'KitchenConnect is an ordering, kitchen and delivery platform for cloud kitchens and tiffin services — daily menus, multi-outlet management and OTP-verified delivery. Coming soon from Patheya Technologies.',
      keywords: [
        'cloud kitchen management software',
        'tiffin service app India',
        'restaurant ordering app',
        'multi-outlet kitchen management',
        'food delivery management platform',
        'KitchenConnect',
      ],
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Android, iOS, Web',
    },
  },
]

const productIcons: Record<string, LucideIcon> = {
  Sparkles,
  LayoutTemplate,
  KanbanSquare,
  Users,
  BarChart3,
  Palette,
  IndianRupee,
  EyeOff,
  Siren,
  UserX,
  Briefcase,
  UserCog,
  UserCheck,
  Smartphone,
  FileText,
  LineChart,
  ShieldCheck,
  GraduationCap,
  Brain,
  FolderOpen,
  CalendarClock,
  ClipboardList,
  AlertTriangle,
  Building2,
  School,
  ShoppingBag,
  CalendarDays,
  BookOpen,
  ChefHat,
  Bike,
  CreditCard,
  Store,
  MessageSquareWarning,
  RefreshCw,
  PackageX,
  Megaphone,
  UtensilsCrossed,
}

export const getProductIcon = (iconName: string): LucideIcon => productIcons[iconName] || Sparkles

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug)

export const getProductsForService = (serviceSlug: string): Product[] =>
  products.filter((product) => product.relatedServices.includes(serviceSlug))

export const productStatusLabel: Record<Product['status'], string> = {
  live: 'Live',
  'coming-soon': 'Coming soon',
}
