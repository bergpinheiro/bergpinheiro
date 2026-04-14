export const WHATSAPP_NUMBER = "5585991203123";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Weblooks e gostaria de saber mais sobre os serviços."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];

export const SERVICES = [
  {
    id: "web",
    icon: "Monitor",
    title: "Sistemas Web",
    description:
      "Desenvolvimento de aplicações web modernas, escaláveis e performáticas com as melhores tecnologias do mercado.",
    features: ["Next.js & React", "TypeScript", "APIs RESTful", "PostgreSQL & NoSQL"],
  },
  {
    id: "integrations",
    icon: "Zap",
    title: "Integrações & APIs",
    description:
      "Conectamos seu sistema a qualquer plataforma. Automações inteligentes que economizam tempo e eliminam erros manuais.",
    features: ["REST & GraphQL", "Webhooks", "n8n & Zapier", "ERPs & CRMs"],
  },
  {
    id: "whatsapp",
    icon: "MessageCircle",
    title: "Soluções WhatsApp",
    description:
      "Automatize seu atendimento e vendas pelo WhatsApp com bots inteligentes e integrações com sua equipe.",
    features: ["WhatsApp Business API", "Chatbots", "Atendimento humano", "CRM integrado"],
  },
  {
    id: "infra",
    icon: "Server",
    title: "Infraestrutura & Deploy",
    description:
      "Configuração, gerenciamento e monitoramento de infraestrutura cloud para alta disponibilidade e performance.",
    features: ["Vercel & AWS", "Docker & CI/CD", "Monitoramento", "Backups automáticos"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Wilmar Alves",
    role: "CEO",
    company: "Inflatex Balões",
    content:
      "O W Multi Channel revolucionou o nosso atendimento. Antes, perdíamos clientes por demora nas respostas. Hoje centralizamos WhatsApp, Instagram e e-mail em um só lugar — a equipe ficou muito mais produtiva e o cliente percebe a diferença.",
    avatar: "WA",
  },
  {
    id: 2,
    name: "Ana Paula",
    role: "CEO",
    company: "Mega Infláveis",
    content:
      "Com o W Multi Channel conseguimos organizar todos os canais de atendimento da nossa empresa sem precisar de vários aplicativos abertos. O sistema é intuitivo, rápido e a Weblooks nos deu suporte em todo momento. Recomendo demais!",
    avatar: "AP",
  },
  {
    id: 3,
    name: "Ariel Pinheiro",
    role: "CEO",
    company: "Arballoon",
    content:
      "Implementamos o W Multi Channel e a transformação foi imediata. Unificamos todos os nossos canais digitais, conseguimos distribuir atendimentos para a equipe e o tempo de resposta caiu pela metade. A Weblooks entregou exatamente o que prometeu.",
    avatar: "AP",
  },
];

export const DIFFERENTIALS = [
  {
    icon: "Rocket",
    title: "Entrega Rápida",
    description: "Processos ágeis e comunicação clara para entregar valor no menor tempo possível.",
  },
  {
    icon: "Shield",
    title: "Código de Qualidade",
    description: "Clean code, testes e documentação. Seu projeto escalável desde o primeiro dia.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Suporte Dedicado",
    description: "Parceria de longo prazo. Estamos disponíveis para suporte e evolução contínua.",
  },
  {
    icon: "TrendingUp",
    title: "Foco em Resultado",
    description: "Cada linha de código pensada para gerar impacto real no seu negócio.",
  },
];
