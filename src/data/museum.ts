export const img = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Category = {
  id: string;
  name: string;
  hebrew: string;
  blurb: string;
  cover: string;
};

export const categories: Category[] = [
  {
    id: "israel",
    name: "Terra Santa",
    hebrew: "ארץ ישראל",
    blurb:
      "Jerusalém, o Kotel e os horizontes que moldaram a alma do nosso povo.",
    cover: "1544972917-3529b113a469",
  },
  {
    id: "sinagoga",
    name: "Nossa Sinagoga",
    hebrew: "בית הכנסת",
    blurb:
      "Os espaços sagrados do Espaço Torah — onde tradição e beleza se encontram.",
    cover: "1438032005730-c779502df39b",
  },
  {
    id: "judaica",
    name: "Arte & Judaica",
    hebrew: "אמנות יהודית",
    blurb:
      "Objetos rituais, manuscritos e a estética milenar da vida judaica.",
    cover: "1574936145840-28808d77a0b6",
  },
  {
    id: "festividades",
    name: "Festividades",
    hebrew: "מועדים",
    blurb:
      "Luzes, velas e celebrações que marcam o calendário sagrado.",
    cover: "1528659882437-b89a74bc157f",
  },
  {
    id: "comunidade",
    name: "Memória Viva",
    hebrew: "קהילה",
    blurb:
      "A história da nossa comunidade — de 2012 aos dias de hoje.",
    cover: "1502920917128-1aa500764cbd",
  },
];

export type Exhibit = {
  id: string;
  title: string;
  meta: string;
  category: string;
  imageId: string;
  span: "tall" | "wide" | "square";
  description: string;
};

export const exhibits: Exhibit[] = [
  {
    id: "kotel",
    title: "O Muro Ocidental",
    meta: "Jerusalém · Cidade Antiga",
    category: "israel",
    imageId: "1544972917-3529b113a469",
    span: "tall",
    description:
      "O Kotel HaMa'aravi, último vestígio do Segundo Templo, recebe orações de todas as nações há dois mil anos. Coração espiritual do povo judeu.",
  },
  {
    id: "jerusalem-dourada",
    title: "Jerusalém de Ouro",
    meta: "Yerushalayim Shel Zahav",
    category: "israel",
    imageId: "1547483238-2cbf881a559f",
    span: "wide",
    description:
      "A pedra dourada que reveste a cidade santa transforma cada entardecer em um espetáculo de luz e memória.",
  },
  {
    id: "cidade-antiga",
    title: "Vielas da Cidade Antiga",
    meta: "Jerusalém",
    category: "israel",
    imageId: "1552423314-cf29ab68ad73",
    span: "square",
    description:
      "Caminhos de pedra que atravessaram impérios e ainda ecoam os passos dos profetas.",
  },
  {
    id: "monte-templo",
    title: "Horizonte do Monte do Templo",
    meta: "Jerusalém",
    category: "israel",
    imageId: "1592861956120-e524fc739696",
    span: "wide",
    description:
      "O panorama onde a história sagrada se desenrola — Har HaBayit, o lugar mais reverenciado do judaísmo.",
  },
  {
    id: "deserto",
    title: "O Deserto da Judeia",
    meta: "Israel",
    category: "israel",
    imageId: "1601233749202-95d04d5b3c00",
    span: "square",
    description:
      "No silêncio do deserto, Israel recebeu a Torah. A vastidão que ainda hoje convida à contemplação.",
  },
  {
    id: "galileia",
    title: "Águas da Galileia",
    meta: "Norte de Israel",
    category: "israel",
    imageId: "1502920917128-1aa500764cbd",
    span: "tall",
    description:
      "O Kinneret, fonte de vida da Terra Prometida, cercado pelas colinas verdejantes da Galileia.",
  },
  {
    id: "santuario",
    title: "O Santuário",
    meta: "Espaço Torah · Salão Principal",
    category: "sinagoga",
    imageId: "1438032005730-c779502df39b",
    span: "wide",
    description:
      "O espaço onde a comunidade se reúne para a liturgia — luz, madeira e silêncio em harmonia.",
  },
  {
    id: "aron",
    title: "Diante do Aron Kodesh",
    meta: "Arca Sagrada",
    category: "sinagoga",
    imageId: "1466442929976-97f336a657be",
    span: "tall",
    description:
      "A Arca que guarda o Sefer Torah recebido de Israel em 2023 — o tesouro mais precioso da casa.",
  },
  {
    id: "arcos",
    title: "Arcos e Devoção",
    meta: "Espaço Torah",
    category: "sinagoga",
    imageId: "1513475382585-d06e58bcb0e0",
    span: "square",
    description:
      "Detalhes arquitetônicos que traduzem o princípio do Hiddur Mitzvá: embelezar o mandamento.",
  },
  {
    id: "fachada",
    title: "A Casa de Estudo",
    meta: "Beit Midrash",
    category: "sinagoga",
    imageId: "1551038247-3d9af20df552",
    span: "wide",
    description:
      "Onde a Yeshivá Chayim Tovim conduz, diariamente, o estudo para crianças, jovens e adultos.",
  },
  {
    id: "sefer",
    title: "Sefer Torah",
    meta: "Pergaminho kosher · Israel, 2023",
    category: "judaica",
    imageId: "1574936145840-28808d77a0b6",
    span: "tall",
    description:
      "Escrito à mão por um sofer, cada letra do rolo é uma joia. Este veio diretamente da Terra Santa.",
  },
  {
    id: "sidur",
    title: "Sidur Aberto",
    meta: "Livro de Orações",
    category: "judaica",
    imageId: "1490806843957-31f4c9a91c65",
    span: "square",
    description:
      "As palavras que conectam gerações — a mesma prece sussurrada por milênios.",
  },
  {
    id: "menora",
    title: "Menorah",
    meta: "Símbolo eterno",
    category: "judaica",
    imageId: "1518972559570-7cc1309f3229",
    span: "tall",
    description:
      "A luz de sete braços que iluminava o Templo e hoje simboliza o Estado de Israel e a sabedoria.",
  },
  {
    id: "velas-shabat",
    title: "Velas de Shabat",
    meta: "Erev Shabat",
    category: "festividades",
    imageId: "1528659882437-b89a74bc157f",
    span: "wide",
    description:
      "O acender das velas inaugura o tempo sagrado — um santuário no tempo, semana após semana.",
  },
  {
    id: "luz-festiva",
    title: "Chamas de Celebração",
    meta: "Chanucá · Festa das Luzes",
    category: "festividades",
    imageId: "1524230572899-a752b3835840",
    span: "square",
    description:
      "Cada vela acrescentada proclama o milagre — a luz que vence a escuridão.",
  },
  {
    id: "panorama-cidade",
    title: "Panorama de Jerusalém",
    meta: "Mirante de Israel",
    category: "comunidade",
    imageId: "1564769662533-4f00a87b4056",
    span: "wide",
    description:
      "A jornada de Rachel Bat Ya'akov a Israel, em 2012, deu origem a tudo o que somos hoje.",
  },
  {
    id: "memoria-galileia",
    title: "Raízes e Memória",
    meta: "Acervo histórico",
    category: "comunidade",
    imageId: "1502920917128-1aa500764cbd",
    span: "tall",
    description:
      "De uma visão espiritual a uma comunidade viva: a alegria que define o Espaço Torah.",
  },
  {
    id: "estudo-comunidade",
    title: "Gerações de Estudo",
    meta: "Yeshivá · Comunidade",
    category: "comunidade",
    imageId: "1551038247-3d9af20df552",
    span: "square",
    description:
      "Três comitês — Administrativo, Mídia e Educacional — sustentam a missão de ser luz para as nações.",
  },
];
