export const NavData = [
  {
    id: 1,
    title: "Home",
    url: "/", // Caminho da rota interna
    type: "router", // Define o tipo de link: 'router' para rotas internas
  },
  {
    id: 2,
    title: "Áreas de Atuação",
    to: "areas", // ID da seção na página
    type: "internal", // Define como scroll interno
  },
  {
    id: 3,
    title: "Pilares",
    to: "pillars", // ID da seção na página
    type: "internal", // Define como scroll interno
  },
  {
    id: 4,
    title: "Sessões",
    to: "sessions", // ID da seção na página
    type: "internal", // Define como scroll interno
  },
  {
    id: 5,
    title: "Contato",
    url: "contato", // Link externo absoluto
    type: "internal", // Define o link como externo
  },
];
