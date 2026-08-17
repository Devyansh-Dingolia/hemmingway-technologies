import { Bot, Zap, Lock, Cloud, Newspaper, Rocket, Globe } from 'lucide-react';

// Icon + accent per category, so every post in a category looks consistent.
export const CATEGORY_ICONS = {
  'AI/ML': Bot,
  Frontend: Zap,
  Security: Lock,
  'Cloud & DevOps': Cloud,
  'Company News': Newspaper,
  'Project Updates': Rocket,
  'Industry Insights': Globe,
};

export const BLOG_POSTS = [
  {
    slug: 'hemmingway-technologies-founded-2026',
    title: 'Hemmingway Technologies Is Officially Incorporated',
    excerpt:
      'We\'re proud to announce the official incorporation of Hemmingway Technologies Private Limited — a company born from a hackathon win and a shared vision for building software that matters.',
    category: 'Company News',
    author: 'Janardhan Verma',
    date: '2026-03-15',
    readTime: '4 min read',
    tags: ['Company', 'Milestone', 'Founding'],
    content: [
      {
        heading: 'From hackathon to incorporation',
        body: 'What started as a 36-hour sprint at Smart India Hackathon 2025 has become something much bigger. On 9th March 2026, Hemmingway Technologies Private Limited was officially incorporated under the Ministry of Corporate Affairs, registered in New Delhi. This marks the beginning of our journey as a formal entity — with a clear mission to build technology that solves real-world problems.',
      },
      {
        heading: 'Why the name Hemmingway?',
        body: 'Ernest Hemingway was known for clarity, precision, and saying more with less. Those are the same principles we bring to software engineering. Clean code. Clear architecture. Solutions that do exactly what they need to do, without unnecessary complexity. The extra "m" is our small reminder that we\'re not trying to be anyone else — just the best version of ourselves.',
      },
      {
        heading: 'Our founding team',
        body: 'Hemmingway Technologies was founded by Janardhan Verma and Sakshi Yadav, both appointed as Directors and signatories of the company. Together, they bring complementary strengths in technology, operations, and business development — united by a shared experience of building under pressure at SIH and a belief that the best companies are built by teams that ship.',
      },
      {
        heading: 'What\'s ahead',
        body: 'Incorporation is just the first step. We\'re actively developing our flagship project, Suraksha Sathi, continuing our collaboration with CMPDI and the Ministry of Coal, and expanding our service offerings across custom software development, AI/ML, cloud architecture, and cybersecurity. There\'s a lot of building ahead — and we couldn\'t be more ready for it.',
      },
    ],
  },
  {
    slug: 'sih-2025-national-win',
    title: 'How We Won Smart India Hackathon 2025 — And What It Taught Us',
    excerpt:
      'Our team Vajra Dev from NSUT won the Smart India Hackathon 2025 grand prize. Here\'s the story of 36 sleepless hours, a mine safety problem, and the prototype that started a company.',
    category: 'Company News',
    author: 'Janardhan Verma',
    date: '2026-01-10',
    readTime: '6 min read',
    tags: ['SIH', 'Hackathon', 'Achievement'],
    content: [
      {
        heading: 'The challenge',
        body: 'Smart India Hackathon is India\'s largest open innovation platform, with over 1.5 lakh participants competing across hundreds of problem statements from government ministries and organizations. Our team — Vajra Dev, from Netaji Subhas University of Technology — was assigned problem SIH25181: build a software solution for the Ministry of Coal through CMPDI (Central Mine Planning & Design Institute) to address mine safety compliance.',
      },
      {
        heading: '36 hours of building',
        body: 'The hackathon format is simple but brutal: 36 continuous hours to go from problem statement to working prototype. No breaks that matter. Our team divided into workstreams — backend architecture, frontend UX, data modeling, and presentation — and shipped a production-grade app prototype that the judges could actually use. Not a pitch deck. Not a mockup. A working system.',
      },
      {
        heading: 'What the judges saw',
        body: 'The winning factor wasn\'t just technical polish — it was our understanding of the problem domain. We spent the first several hours researching mine safety regulations, speaking with domain experts at the event, and mapping actual compliance workflows before writing a line of code. When we presented, we could speak to the real operational challenges that mine safety officers face daily.',
      },
      {
        heading: 'From trophy to company',
        body: 'Winning SIH didn\'t just give us a trophy — it gave us conviction. The problem was real, the solution was needed, and we had demonstrated we could build under pressure. Three months later, Hemmingway Technologies was incorporated, and Suraksha Sathi became our flagship project. The hackathon taught us that the best companies aren\'t born from business plans — they\'re born from shipping.',
      },
    ],
  },
  {
    slug: 'suraksha-sathi-development-update',
    title: 'Suraksha Sathi: Building a Mine Safety Platform for India',
    excerpt:
      'An update on our flagship project — a mine safety compliance platform developed in collaboration with CMPDI under the Ministry of Coal.',
    category: 'Project Updates',
    author: 'Sakshi Yadav',
    date: '2026-06-20',
    readTime: '5 min read',
    tags: ['Suraksha Sathi', 'Mine Safety', 'Gov-Tech'],
    content: [
      {
        heading: 'The problem we\'re solving',
        body: 'India\'s coal mining industry employs hundreds of thousands of workers, and safety compliance is a critical challenge. Regulatory frameworks exist, but the tools for tracking, enforcing, and improving compliance are often outdated or manual. Suraksha Sathi aims to bridge this gap with a modern, digital-first approach to mine safety management.',
      },
      {
        heading: 'Our approach',
        body: 'Rather than building a generic compliance tool and hoping it fits the mining industry, we\'ve worked closely with domain experts from CMPDI to understand actual on-ground workflows. The platform is designed around real regulatory requirements, real inspection processes, and real reporting needs — not theoretical ones.',
      },
      {
        heading: 'Technology choices',
        body: 'Suraksha Sathi is built on a modern stack — React for the frontend, a robust backend architecture, and data systems designed to handle the scale of India\'s mining operations. We\'re exploring the integration of AI/ML capabilities for predictive safety analytics, though the core platform focuses on reliability and usability above all else.',
      },
      {
        heading: 'What\'s next',
        body: 'We\'re continuing development in close collaboration with our government partners. Our goal is to deliver a platform that genuinely improves worker safety outcomes — not just checks compliance boxes. More updates will follow as we reach key milestones.',
      },
    ],
  },
  {
    slug: 'building-ai-powered-systems-at-scale',
    title: 'Building AI-Powered Systems at Scale',
    excerpt:
      'What actually breaks when you take a machine learning pipeline from a notebook prototype to a system handling millions of events a day — and how to design around it.',
    category: 'AI/ML',
    author: 'Janardhan Verma',
    date: '2026-07-05',
    readTime: '8 min read',
    tags: ['AI', 'Performance', 'Architecture'],
    content: [
      {
        heading: 'The gap between "it works" and "it scales"',
        body: "A model that returns good predictions in a Jupyter notebook and a model that reliably serves predictions under real production traffic are two very different engineering problems. The first is a data science problem. The second is a distributed systems problem that happens to have a model somewhere inside it.",
      },
      {
        heading: 'Decouple inference from your request path',
        body: "The biggest mistake we see teams make is calling a model synchronously inside the same request that a user is waiting on. Once volume grows, that single decision determines your entire latency budget. Wherever the workload allows it, push inference behind a queue, batch requests where the model supports it, and cache aggressively for repeated inputs.",
      },
      {
        heading: 'Version everything, not just the model',
        body: "Model weights, feature transformations, and the code that assembles inputs all drift independently over time. If you can't answer 'which exact combination of these three produced this prediction six weeks ago', debugging a regression becomes guesswork.",
      },
      {
        heading: 'Design for graceful degradation',
        body: "Models fail in ways traditional software doesn't — a confident wrong answer instead of a clean error. Build fallbacks: a simpler heuristic, a cached prior result, or a conservative default when confidence scores drop below a threshold.",
      },
    ],
  },
  {
    slug: 'mine-safety-technology-india',
    title: 'The State of Mine Safety Technology in India',
    excerpt:
      'India\'s mining sector is at an inflection point — legacy compliance systems are giving way to digital-first safety platforms. Here\'s what the landscape looks like and where we see it heading.',
    category: 'Industry Insights',
    author: 'Sakshi Yadav',
    date: '2026-05-15',
    readTime: '6 min read',
    tags: ['Mine Safety', 'India', 'Technology'],
    content: [
      {
        heading: 'A sector in transition',
        body: 'India is one of the world\'s largest coal producers, with Coal India Limited alone employing over 200,000 people. Safety in this sector has historically relied on manual processes — paper-based inspections, physical logbooks, and periodic audits. The technology gap is significant, and the human cost of that gap is measured in lives.',
      },
      {
        heading: 'What digital compliance looks like',
        body: 'Modern mine safety platforms can digitize inspection workflows, provide real-time monitoring of safety parameters, and generate compliance reports automatically. The value isn\'t just efficiency — it\'s visibility. When safety data is digital, patterns emerge that manual processes can\'t detect.',
      },
      {
        heading: 'The role of AI in predictive safety',
        body: 'Perhaps the most promising frontier is using machine learning to move from reactive safety management to predictive. By analyzing historical incident data, environmental sensors, and operational patterns, AI systems can flag high-risk conditions before incidents occur — shifting the paradigm from "investigate after the fact" to "prevent before it happens."',
      },
      {
        heading: 'Where we fit in',
        body: 'At Hemmingway Technologies, we\'re building Suraksha Sathi with exactly this vision in mind — starting with robust compliance digitization and building toward intelligent safety analytics. The mining industry deserves the same quality of software that other sectors take for granted.',
      },
    ],
  },
  {
    slug: 'practical-guide-to-integrating-llms',
    title: 'A Practical Guide to Integrating LLMs Into Your Product',
    excerpt:
      "Most LLM integrations fail for boring reasons — no eval process, no cost ceiling, no fallback for a bad response. Here's the checklist we run through before shipping one.",
    category: 'AI/ML',
    author: 'Janardhan Verma',
    date: '2026-06-20',
    readTime: '7 min read',
    tags: ['AI', 'LLM', 'Product'],
    content: [
      {
        heading: 'Start with the failure mode, not the demo',
        body: "It's easy to get an LLM feature working for the happy path in an afternoon. The real work is deciding what happens when the model hallucinates, times out, or returns something malformed. If you haven't designed that path before you ship, your users will discover it for you.",
      },
      {
        heading: 'Put a cost ceiling on every feature',
        body: 'Token costs scale with usage in a way that traditional compute costs don\'t always make obvious until the invoice arrives. Before shipping, know your worst-case cost per user session, and put a hard limit somewhere in the stack.',
      },
      {
        heading: 'Build a lightweight eval set early',
        body: "You don't need an elaborate evaluation framework on day one — a spreadsheet of thirty realistic inputs with expected outcomes is enough to catch regressions when you change a prompt or swap a model.",
      },
      {
        heading: 'Keep the model swappable',
        body: 'Model providers, pricing, and capabilities shift quickly. Wrap model calls behind a thin abstraction from the start so that switching providers — or running two in parallel to compare quality — is a config change, not a rewrite.',
      },
    ],
  },
  {
    slug: 'govtech-software-development-lessons',
    title: 'Lessons from Building Gov-Tech Software in India',
    excerpt:
      'Working with government organizations teaches you things that enterprise clients don\'t — about scale, inclusivity, and building for users you\'ll never meet in a design sprint.',
    category: 'Industry Insights',
    author: 'Janardhan Verma',
    date: '2026-04-10',
    readTime: '5 min read',
    tags: ['Gov-Tech', 'India', 'Software Development'],
    content: [
      {
        heading: 'The user base is different',
        body: 'When you\'re building for a government ministry, your users span an enormous range of technical literacy, device quality, and connectivity. A design that works on a flagship phone in an air-conditioned office might fail completely for an inspector using a budget Android phone in a remote mine site. Designing for inclusion isn\'t a nice-to-have — it\'s a core requirement.',
      },
      {
        heading: 'Reliability over features',
        body: 'Government stakeholders don\'t care about your feature velocity — they care about whether the system works when it\'s needed. A platform that does three things reliably is infinitely more valuable than one that does thirty things inconsistently. We learned early to ruthlessly prioritize stability and simplicity.',
      },
      {
        heading: 'Documentation is a deliverable',
        body: 'In enterprise SaaS, you can sometimes get away with "intuitive UI" as your documentation strategy. In gov-tech, your documentation is a formal deliverable — training manuals, administrator guides, compliance documentation. This discipline actually makes the entire product better.',
      },
      {
        heading: 'The impact is real',
        body: 'The upside of gov-tech work is that the impact is tangible and measured in outcomes that matter: worker safety improvements, compliance rates, time saved by civil servants. It\'s deeply motivating work, and it\'s a privilege to contribute to it.',
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
