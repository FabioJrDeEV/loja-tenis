export type Product = {
  id: number;
  name: string;
  category: "feminino" | "masculino" | "novidades";
  price: string;
  description: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Tênis Urbano Cloud",
    category: "novidades",
    price: "R$ 289,90",
    description: "Modelo leve para rotina, com visual limpo e sola confortável.",
    badge: "Novo"
  },
  {
    id: 2,
    name: "Sandália Serena",
    category: "feminino",
    price: "R$ 179,90",
    description: "Acabamento delicado, salto baixo e ajuste prático para o dia a dia."
  },
  {
    id: 3,
    name: "Mocassim Linha Norte",
    category: "masculino",
    price: "R$ 249,90",
    description: "Couro sintético estruturado e forma versátil para looks casuais."
  },
  {
    id: 4,
    name: "Sapatilha Aurora",
    category: "feminino",
    price: "R$ 149,90",
    description: "Perfil minimalista, palmilha macia e toque elegante."
  },
  {
    id: 5,
    name: "Tênis Runner Base",
    category: "masculino",
    price: "R$ 319,90",
    description: "Amortecimento firme e desenho esportivo para uso prolongado."
  },
  {
    id: 6,
    name: "Bota Compacta",
    category: "novidades",
    price: "R$ 359,90",
    description: "Cano curto, textura moderna e presença discreta.",
    badge: "Destaque"
  },
  {
    id: 7,
    name: "Tênis Pulse Neon",
    category: "novidades",
    price: "R$ 299,90",
    description: "Linha casual com detalhe vibrante e shape atual para looks urbanos.",
    badge: "Trend"
  },
  {
    id: 8,
    name: "Papete Move",
    category: "novidades",
    price: "R$ 189,90",
    description: "Tiras largas, base confortável e visual despojado para dias quentes.",
    badge: "Verão"
  },
  {
    id: 9,
    name: "Tênis Street Flex",
    category: "feminino",
    price: "R$ 269,90",
    description: "Solado leve, acabamento moderno e conforto para combinações casuais."
  },
  {
    id: 10,
    name: "Tamanco Luna",
    category: "feminino",
    price: "R$ 169,90",
    description: "Design simples com salto bloco e visual fácil de usar no dia a dia."
  },
  {
    id: 11,
    name: "Bota Chelsea Vibe",
    category: "feminino",
    price: "R$ 329,90",
    description: "Cano médio, elástico lateral e presença urbana sem perder conforto."
  },
  {
    id: 12,
    name: "Tênis Court Neo",
    category: "masculino",
    price: "R$ 279,90",
    description: "Inspirado em quadra, com linhas limpas e combinação fácil com jeans."
  },
  {
    id: 13,
    name: "Chinelo Slide Rush",
    category: "masculino",
    price: "R$ 119,90",
    description: "Slide prático com palmilha macia e estilo relaxado para a rotina."
  },
  {
    id: 14,
    name: "Bota Work Urban",
    category: "masculino",
    price: "R$ 389,90",
    description: "Visual robusto, acabamento fosco e sola marcada para looks street."
  }
];

export const featuredProducts = products.filter((product) => product.category === "novidades");
export const femaleProducts = products.filter((product) => product.category === "feminino");
export const maleProducts = products.filter((product) => product.category === "masculino");
