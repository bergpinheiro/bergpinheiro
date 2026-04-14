export const WHATSAPP_NUMBER = "5585991203123";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Berg! Vi seu portfólio e gostaria de conversar sobre um projeto."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Habilidades", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];

export const SKILLS = [
  {
    id: "frontend",
    icon: "Monitor",
    title: "Frontend",
    description:
      "Interfaces modernas, responsivas e acessíveis com foco em performance e experiência do usuário.",
    features: ["Next.js & React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    icon: "Server",
    title: "Backend & APIs",
    description:
      "APIs robustas e escaláveis, arquiteturas limpas e bancos de dados bem modelados.",
    features: ["Node.js", "REST & GraphQL", "PostgreSQL & MongoDB", "Prisma ORM"],
  },
  {
    id: "integrations",
    icon: "Zap",
    title: "Integrações & Automações",
    description:
      "Conecto sistemas, automatizo processos e integro plataformas para eliminar trabalho manual.",
    features: ["WhatsApp Business API", "Webhooks & Eventos", "n8n & Zapier", "ERPs & CRMs"],
  },
  {
    id: "devops",
    icon: "Cloud",
    title: "DevOps & Deploy",
    description:
      "Infraestrutura cloud configurada para alta disponibilidade, CI/CD e monitoramento contínuo.",
    features: ["Vercel & AWS", "Docker", "CI/CD Pipelines", "Linux & Nginx"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Wilmar Alves",
    role: "CEO",
    company: "Inflatex Balões",
    content:
      "O W Multi Channel revolucionou o nosso atendimento. Hoje centralizamos WhatsApp, Instagram e e-mail em um só lugar — a equipe ficou muito mais produtiva e o cliente percebe a diferença.",
    avatar: "WA",
  },
  {
    id: 2,
    name: "Ana Paula",
    role: "CEO",
    company: "Mega Infláveis",
    content:
      "Com o W Multi Channel conseguimos organizar todos os canais de atendimento sem precisar de vários aplicativos. O Berg nos deu suporte em todo momento. Recomendo demais!",
    avatar: "AP",
  },
  {
    id: 3,
    name: "Ariel Pinheiro",
    role: "CEO",
    company: "Arballoon",
    content:
      "Implementamos o W Multi Channel e a transformação foi imediata. Unificamos todos os nossos canais digitais e o tempo de resposta caiu pela metade. Trabalho impecável.",
    avatar: "AP",
  },
];

export const STACK = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Linguagem" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Banco de Dados" },
  { name: "MongoDB", category: "Banco de Dados" },
  { name: "Prisma", category: "ORM" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Deploy" },
  { name: "Git", category: "Versionamento" },
];
