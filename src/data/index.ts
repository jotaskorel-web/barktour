import { Destination, Trip, BlogPost, SocialPost } from '@/types'

/**
 * Conteúdo da Bark Tour a partir do briefing da empresa e das publicações
 * públicas do Instagram @barktour_foz. Nenhum preço ou depoimento foi inventado.
 */

export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'foz-do-iguacu',
    title: 'Foz do Iguaçu',
    state: 'PR',
    country: 'Brasil',
    description:
      'Cataratas do lado brasileiro, Parque das Aves, Dreams, city tour com Itaipu, Mesquita e Templo Budista, Marco, roda gigante e catamarã.',
    image: '/images/hero/cataratas-br-hq.jpg',
    featured: true,
    region: 'Tríplice Fronteira',
  },
  {
    id: '2',
    slug: 'paraguai',
    title: 'Paraguai',
    state: 'Alto Paraná',
    country: 'Paraguai',
    description:
      'City tour com Itaipu e Salto Monday, compras na New Zone e no Shopping China. A equipe orienta horário, documentos e a fronteira.',
    image: '/images/passeios/new-zone-hq.jpg',
    featured: true,
    region: 'Tríplice Fronteira',
  },
  {
    id: '3',
    slug: 'argentina',
    title: 'Argentina',
    state: 'Misiones',
    country: 'Argentina',
    description:
      'Cataratas argentinas, By Night com Duty Free, Feirinha, Marco e jantar em Puerto Iguazú, com a logística da fronteira combinada.',
    image: '/images/destinos/argentina.jpg',
    featured: true,
    region: 'Tríplice Fronteira',
  },
]

export const trips: Trip[] = [
  {
    id: '1',
    slug: 'cataratas-brasileiras',
    title: 'Cataratas brasileiras',
    destination: 'Foz do Iguaçu',
    departureCity: 'Hotel ou aeroporto',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período ou dia inteiro',
    image: '/images/passeios/cataratas-br-hq.jpg',
    description:
      'O lado brasileiro das Cataratas: vista panorâmica, entrada do parque e tempo nas passarelas sem o ritmo de uma excursão. O grupo sai no próprio horário.',
    highlights: [
      'Vista panorâmica do lado brasileiro',
      'Saída no horário do grupo',
      'Orientação sobre o parque',
      'Acesso privativo, sem fila de van compartilhada',
    ],
    included: ['Transporte privativo', 'Acompanhamento da equipe'],
    category: 'foz',
    featured: true,
  },
  {
    id: '2',
    slug: 'cataratas-argentinas',
    title: 'Cataratas argentinas',
    destination: 'Argentina',
    departureCity: 'Hotel em Foz do Iguaçu',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Dia inteiro',
    image: '/images/destinos/argentina.jpg',
    description:
      'Circuito do lado argentino, com a logística da fronteira organizada para o grupo aproveitar Puerto Iguazú e as quedas com mais liberdade.',
    highlights: ['Travessia da fronteira acompanhada', 'Roteiro flexível', 'Orientação de documentos e horários'],
    included: ['Transporte privativo', 'Acompanhamento na Argentina'],
    category: 'argentina',
    featured: true,
  },
  {
    id: '3',
    slug: 'paraguai-compras',
    title: 'Paraguai com acompanhamento',
    destination: 'Paraguai',
    departureCity: 'Hotel em Foz do Iguaçu',
    startDate: '',
    dateLabel: 'Melhor horário combinado com você',
    duration: 'Meio período ou dia inteiro',
    image: '/images/passeios/new-zone-hq.jpg',
    gallery: ['/images/passeios/shopping-china-hq.jpg', '/images/destinos/ciudad-del-este-skyline.webp'],
    description:
      'Compras na New Zone e no Shopping China, com deslocamento no Paraguai no ritmo do grupo. A Bark Tour cuida da fronteira e do horário.',
    highlights: ['New Zone', 'Shopping China', 'Orientação na fronteira', 'Retorno combinado ao hotel'],
    included: ['Transporte privativo', 'Acompanhamento no Paraguai'],
    category: 'paraguai',
    featured: true,
  },
  {
    id: '4',
    slug: 'transfer-aeroporto',
    title: 'Transfer aeroporto e hotel',
    destination: 'Foz do Iguaçu',
    departureCity: 'Aeroporto de Foz do Iguaçu',
    startDate: '',
    dateLabel: 'No horário do seu voo',
    duration: 'Trecho privativo',
    image: '/images/instagram/ig-07.jpg',
    description:
      'Chegada e saída sem espera de van compartilhada. O carro busca o grupo no aeroporto ou no hotel, com espaço para bagagem.',
    highlights: ['Horário do voo', 'Carro privativo', 'Recepção do grupo'],
    included: ['Transfer privativo'],
    category: 'transfer',
    featured: true,
  },
  {
    id: '5',
    slug: 'parque-das-aves',
    title: 'Parque das Aves',
    destination: 'Foz do Iguaçu',
    departureCity: 'Hotel',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período',
    image: '/images/passeios/parque-tucano-hq.jpg',
    gallery: [
      '/images/passeios/parque-araras-hq.jpg',
      '/images/passeios/parque-flamingos-hq.jpg',
      '/images/destinos/parque-das-aves.jpg',
    ],
    description:
      'O Parque das Aves fica ao lado das Cataratas e é um dos passeios mais pedidos em Foz. Viveiros imersivos, tucanos, araras, flamingos e a fauna da Mata Atlântica, no ritmo do grupo — sem o horário de uma excursão.',
    highlights: [
      'Viveiros imersivos e passarela na mata',
      'Tucanos, araras, flamingos e mais de 130 espécies',
      'Ao lado das Cataratas — combina no mesmo dia',
      'Transporte privativo e saída flexível',
    ],
    included: ['Transporte privativo'],
    itinerary: [
      {
        day: 1,
        title: 'Saída do hotel',
        description: 'Busca no hotel no horário combinado. O parque fica a poucos minutos da entrada das Cataratas.',
      },
      {
        day: 2,
        title: 'Viveiros e passarela',
        description:
          'Caminhada pelos viveiros imersivos: tucanos de perto, bandos de araras e flamingos nas lagoas. Tempo livre para fotos no ritmo do grupo.',
      },
      {
        day: 3,
        title: 'Combinação com as Cataratas',
        description:
          'Quem quiser, segue no mesmo dia para o lado brasileiro das Cataratas. A equipe organiza a sequência para não perder o dia em deslocamento.',
      },
    ],
    category: 'foz',
    featured: true,
  },
  {
    id: '6',
    slug: 'roteiro-triplice-fronteira',
    title: 'Tríplice Fronteira',
    destination: 'Foz do Iguaçu, Paraguai e Argentina',
    departureCity: 'Hotel ou aeroporto',
    startDate: '',
    dateLabel: 'Datas do seu grupo',
    duration: 'Sob medida',
    image: '/images/hero/marco-hd.jpg',
    description:
      'Um roteiro desenhado para a sua família, casal ou grupo: Cataratas, Paraguai, Argentina, restaurantes e o tempo certo em cada parada.',
    highlights: [
      'Planejamento de horários',
      'Liberdade de um serviço privativo',
      'Português, inglês e espanhol',
      'Indicação de restaurantes e atrações',
    ],
    included: ['Transporte privativo', 'Acompanhamento do roteiro', 'Orientação local'],
    category: 'roteiro',
    featured: true,
  },
  {
    id: '7',
    slug: 'roda-gigante-e-marco',
    title: 'Roda gigante e Marco',
    destination: 'Foz do Iguaçu',
    departureCity: 'Hotel',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período',
    image: '/images/passeios/roda-gigante-hq.jpg',
    gallery: ['/images/hero/marco-hd.jpg'],
    description:
      'O complexo do Marco das Três Fronteiras, com o obelisco brasileiro e a roda gigante no mesmo passeio. Dá para ir no fim da tarde e ver o pôr do sol.',
    highlights: ['Marco das Três Fronteiras', 'Roda gigante', 'Transporte privativo'],
    included: ['Transporte privativo'],
    category: 'foz',
    featured: true,
  },
  {
    id: '8',
    slug: 'catamara',
    title: 'Catamarã',
    destination: 'Foz do Iguaçu',
    departureCity: 'Hotel',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período',
    image: '/images/passeios/catamara-hq.jpg',
    description:
      'Passeio de barco até perto das quedas. O grupo vai e volta no próprio horário, sem depender de excursão.',
    highlights: ['Navegação nas Cataratas', 'Saída flexível', 'Transporte privativo'],
    included: ['Transporte privativo'],
    category: 'foz',
    featured: true,
  },
  {
    id: '9',
    slug: 'city-tour-paraguai',
    title: 'City tour Paraguai',
    destination: 'Paraguai',
    departureCity: 'Hotel em Foz do Iguaçu',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Dia inteiro',
    image: '/images/passeios/city-tour-py-hq.jpg',
    gallery: ['/images/passeios/salto-monday.jpg', '/images/passeios/itaipu.jpg', '/images/destinos/ciudad-del-este-skyline.webp'],
    description:
      'Itaipu, Salto Monday e compras no Paraguai no mesmo dia. A travessia e o tempo em cada parada são combinados com o grupo.',
    highlights: ['Itaipu', 'Salto Monday', 'Compras em Ciudad del Este', 'Fronteira acompanhada'],
    included: ['Transporte privativo', 'Acompanhamento no Paraguai'],
    category: 'paraguai',
    featured: true,
  },
  {
    id: '10',
    slug: 'city-tour-brasil',
    title: 'City tour Brasil',
    destination: 'Foz do Iguaçu',
    departureCity: 'Hotel',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período ou dia inteiro',
    image: '/images/passeios/templo-budista-hq.jpg',
    gallery: ['/images/passeios/templo-budista.jpg', '/images/passeios/itaipu.jpg'],
    description:
      'Itaipu, a Mesquita Omar Ibn Al-Khattab e o Templo Budista. Um giro pela cidade no ritmo do grupo, sem fila de excursão.',
    highlights: ['Itaipu', 'Mesquita', 'Templo Budista', 'Transporte privativo'],
    included: ['Transporte privativo'],
    category: 'foz',
    featured: true,
  },
  {
    id: '11',
    slug: 'duty-free-argentina',
    title: 'Duty Free Argentina',
    destination: 'Puerto Iguazú',
    departureCity: 'Hotel em Foz do Iguaçu',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período',
    image: '/images/passeios/duty-free.jpg',
    description:
      'Compras no Duty Free de Puerto Iguazú, com a ida e a volta pela fronteira organizadas para o grupo.',
    highlights: ['Duty Free de Puerto Iguazú', 'Fronteira acompanhada', 'Retorno ao hotel'],
    included: ['Transporte privativo', 'Acompanhamento na Argentina'],
    category: 'argentina',
    featured: true,
  },
  {
    id: '12',
    slug: 'marco-argentino',
    title: 'Marco argentino',
    destination: 'Puerto Iguazú',
    departureCity: 'Hotel em Foz do Iguaçu',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período',
    image: '/images/passeios/marco-argentino.jpg',
    description:
      'O Hito das Três Fronteiras do lado argentino, em Puerto Iguazú. Pode ser combinado com as Cataratas, a Feirinha ou o Duty Free no mesmo dia.',
    highlights: ['Hito Tres Fronteras', 'Vista dos três países', 'Fronteira acompanhada'],
    included: ['Transporte privativo', 'Acompanhamento na Argentina'],
    category: 'argentina',
    featured: true,
  },
  {
    id: '13',
    slug: 'feirinha',
    title: 'Feirinha',
    destination: 'Puerto Iguazú',
    departureCity: 'Hotel em Foz do Iguaçu',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período',
    image: '/images/passeios/feirinha-hq2.jpg',
    description:
      'A Feirinha da Avenida Brasil, em Puerto Iguazú. Barracas, artesanato e produtos argentinos, com ida e volta combinadas com o grupo.',
    highlights: ['Feirinha da Avenida Brasil', 'Compras na Argentina', 'Fronteira acompanhada'],
    included: ['Transporte privativo', 'Acompanhamento na Argentina'],
    category: 'argentina',
    featured: true,
  },
  {
    id: '14',
    slug: 'dreams',
    title: 'Dreams',
    destination: 'Foz do Iguaçu',
    departureCity: 'Hotel',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período ou noite',
    image: '/images/passeios/dreams-hq.jpg',
    description:
      'Dreams Park Show e o Dreamland Museu de Cera. Transporte privativo até o complexo, no horário que o grupo quiser encaixar no roteiro.',
    highlights: ['Dreamland Museu de Cera', 'Dreams Park Show', 'Transporte privativo'],
    included: ['Transporte privativo'],
    category: 'foz',
    featured: true,
  },
  {
    id: '15',
    slug: 'by-night-argentina',
    title: 'By Night Argentina',
    destination: 'Puerto Iguazú',
    departureCity: 'Hotel em Foz do Iguaçu',
    startDate: '',
    dateLabel: 'Saída no fim da tarde',
    duration: 'Final de tarde e noite',
    image: '/images/passeios/tio-querido-hq.jpg',
    gallery: [
      '/images/passeios/duty-free.jpg',
      '/images/passeios/duty-free-argentina.jpg',
      '/images/passeios/feirinha-hq2.jpg',
      '/images/passeios/feirinha-hq.jpg',
      '/images/passeios/marco-argentino.jpg',
      '/images/destinos/argentina.jpg',
      '/images/passeios/tio-querido-hq.jpg',
    ],
    description:
      'O roteiro noturno de Puerto Iguazú: Duty Free, Feirinha, Marco argentino e jantar. Saída do hotel no fim da tarde, fronteira acompanhada e retorno combinado com o grupo.',
    highlights: [
      'Duty Free de Puerto Iguazú',
      'Feirinha da Avenida Brasil',
      'Marco das Três Fronteiras (lado argentino)',
      'Jantar em restaurante argentino (combinado à parte)',
    ],
    included: ['Transporte privativo', 'Acompanhamento na Argentina', 'Paradas do roteiro By Night'],
    itinerary: [
      {
        day: 1,
        title: 'Saída do hotel',
        description:
          'Busca no hotel em Foz do Iguaçu no fim da tarde, com a documentação em ordem para a aduana argentina.',
      },
      {
        day: 2,
        title: 'Duty Free',
        description:
          'Parada no Duty Free de Puerto Iguazú para compras de perfumes, bebidas, chocolates e eletrônicos, no tempo combinado com o grupo.',
      },
      {
        day: 3,
        title: 'Marco argentino',
        description:
          'Visita ao Hito das Três Fronteiras do lado argentino, com vista para Brasil, Argentina e Paraguai.',
      },
      {
        day: 4,
        title: 'Feirinha',
        description:
          'Feirinha da Avenida Brasil: barracas, artesanato, iguarias e o clima típico de Puerto Iguazú.',
      },
      {
        day: 5,
        title: 'Jantar',
        description:
          'Jantar em restaurante argentino, como o El Quincho del Tío Querido, quando o grupo quiser incluir. Menu e show, quando houver, são combinados à parte.',
      },
    ],
    category: 'argentina',
    featured: true,
  },
  {
    id: '16',
    slug: 'new-zone-shopping-china',
    title: 'New Zone e Shopping China',
    destination: 'Ciudad del Este',
    departureCity: 'Hotel em Foz do Iguaçu',
    startDate: '',
    dateLabel: 'No horário do seu grupo',
    duration: 'Meio período ou dia inteiro',
    image: '/images/passeios/new-zone-hq.jpg',
    gallery: ['/images/passeios/shopping-china-hq.jpg'],
    description:
      'Compras no comércio de Ciudad del Este: New Zone e Shopping China. Atravessar a fronteira e o tempo em cada loja ficam no ritmo do grupo.',
    highlights: ['New Zone', 'Shopping China', 'Fronteira acompanhada', 'Retorno ao hotel'],
    included: ['Transporte privativo', 'Acompanhamento no Paraguai'],
    category: 'paraguai',
    featured: true,
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'o-que-fazer-em-foz-do-iguacu',
    title: 'O que fazer em Foz do Iguaçu?',
    excerpt:
      'Cataratas, Parque das Aves, Itaipu, Marco das Três Fronteiras e um dia do outro lado da fronteira. Um panorama para quem chega sem roteiro pronto.',
    content: `Foz do Iguaçu concentra, em poucos quilômetros, algumas das experiências mais procuradas da América do Sul. O ponto de partida da maioria dos grupos são as Cataratas do lado brasileiro: passarelas, vista ampla e a escala das quedas, que muda conforme a vazão do rio.

Perto dali fica o Parque das Aves, fácil de encaixar no mesmo dia para quem quer ver a fauna da Mata Atlântica sem atravessar a fronteira. A Itaipu e o Marco das Três Fronteiras completam o mapa da cidade para quem tem mais de um dia.

Quem viaja em grupo privado não precisa seguir o relógio de uma excursão. Dá para começar mais cedo nas Cataratas, almoçar onde o grupo preferir e deixar o Paraguai ou a Argentina para o dia seguinte. A Bark Tour organiza esses deslocamentos de hotel ou aeroporto, em carro ou van, com orientação em português, inglês e espanhol.

Se o tempo for curto, o mais útil é escolher duas experiências fortes em vez de tentar ver tudo. Conte as datas e o tamanho do grupo no WhatsApp que o roteiro sai no ritmo de vocês.`,
    image: '/images/hero/cataratas.jpg',
    category: 'destinations',
    date: '2026-10-01',
    author: 'Equipe Bark Tour',
    readTime: 5,
  },
  {
    id: '2',
    slug: 'foz-do-iguacu-em-3-dias',
    title: 'Foz do Iguaçu em 3 dias',
    excerpt:
      'Uma sugestão de ritmo para famílias e grupos que querem Cataratas, um país vizinho e tempo livre, sem ficar presos a uma excursão.',
    content: `Três dias dão para ver o essencial da Tríplice Fronteira com folga, desde que o deslocamento não coma a manhã. Um desenho que funciona bem para grupos privados:

Dia 1. Chegada e Cataratas brasileiras, ou Parque das Aves se o voo for cedo e o grupo ainda tiver energia. O transfer do aeroporto evita a espera de um transporte compartilhado.

Dia 2. Argentina. As Cataratas do lado de Puerto Iguazú pedem o dia inteiro por causa da fronteira, dos circuitos e do retorno. Documentos em dia e saída combinada fazem diferença.

Dia 3. Paraguai pela manhã, no horário em que a fronteira costuma fluir melhor, e volta com tempo para o voo. Se compras não forem prioridade, esse dia pode ir para Itaipu ou para o Marco das Três Fronteiras.

Nada disso é um pacote fechado. Família com criança, casal ou grupo de amigos muda a ordem. A Bark Tour ajusta horários, busca no hotel e o acompanhamento em cada trecho.`,
    image: '/images/hero/marco-hd.jpg',
    category: 'itineraries',
    date: '2026-10-08',
    author: 'Equipe Bark Tour',
    readTime: 6,
  },
  {
    id: '3',
    slug: 'cataratas-brasil-ou-argentina',
    title: 'Cataratas do Brasil ou da Argentina?',
    excerpt:
      'Os dois lados mostram a mesma queda de jeitos diferentes. Entenda quando vale fazer um, o outro ou os dois no mesmo roteiro.',
    content: `O lado brasileiro é o panorama. As passarelas entregam a largura das quedas de uma vez, e muita gente considera essa a foto clássica de Foz. O parque fica a poucos minutos da cidade, então encaixa bem em meio período.

O lado argentino é a imersão. Os circuitos aproximam o visitante da água e levam até a Garganta do Diabo. O dia fica mais longo porque inclui a travessia da fronteira, a ida até Puerto Iguazú e a volta.

Se a viagem tiver um dia só, o lado brasileiro costuma render mais com menos logística. Com dois dias, os dois lados se complementam: um para a vista ampla, o outro para chegar perto. A Bark Tour faz os dois trajetos em carro privativo e ajuda a escolher a ordem conforme o voo, o hotel e o tamanho do grupo.

A vazão muda ao longo do ano. Nas publicações do Instagram @barktour_foz a equipe mostra como as quedas estão na semana, inclusive em períodos de água alta.`,
    image: '/images/destinos/argentina.jpg',
    category: 'tips',
    date: '2026-10-12',
    author: 'Equipe Bark Tour',
    readTime: 5,
  },
  {
    id: '4',
    slug: 'como-funciona-a-fronteira-do-paraguai',
    title: 'Como funciona a fronteira do Paraguai?',
    excerpt:
      'O que separar antes de sair do hotel: documento, horário e o que esperar da ponte entre Foz e Ciudad del Este.',
    content: `A ida ao Paraguai a partir de Foz do Iguaçu é curta no mapa e variável na prática. A ponte da Amizade concentra carros, pedestres e o movimento de compras. Em alguns horários o trajeto anda rápido; em outros, a fila consome a manhã.

Por isso o horário de saída importa tanto quanto o destino. A Bark Tour combina a partida com o grupo para reduzir tempo parado e acompanha o deslocamento, em vez de deixar cada pessoa se virar na fronteira.

Leve um documento válido. A regra pode pedir RG ou passaporte conforme a nacionalidade e a orientação do dia — confirme antes de sair do hotel. Quem viaja com criança precisa dos documentos dela também.

Compras e Duty Free são os motivos mais comuns da travessia, mas o roteiro não precisa ser só isso. Dá para limitar o tempo nas lojas, almoçar e voltar com hora marcada para o restante do dia em Foz.`,
    image: '/images/destinos/paraguai.jpg',
    category: 'tips',
    date: '2026-10-15',
    author: 'Equipe Bark Tour',
    readTime: 5,
  },
  {
    id: '5',
    slug: 'o-que-comprar-no-paraguai',
    title: 'O que comprar no Paraguai?',
    excerpt:
      'Eletrônicos, perfumes e o Duty Free aparecem em quase todo roteiro. O que muda a experiência é o tempo e o acompanhamento.',
    content: `Ciudad del Este é parada clássica de quem visita Foz. Eletrônicos, perfumes, roupas e o Duty Free concentram a maior parte das compras. A oferta é grande, e sem uma ordem o grupo gasta a visita inteira andando de loja em loja.

Um roteiro privativo inverte essa lógica. Antes de sair, a Bark Tour pergunta o que o grupo quer de fato — um item específico, só o Duty Free ou um tempo livre — e organiza a ida e a volta. Assim sobra hora para as Cataratas ou para o almoço, em vez de a fronteira tomar o dia.

Não existe uma lista única de “melhores compras”: preço e estoque mudam. O que a equipe oferece é orientação local, horário mais favorável e o transporte de volta ao hotel com as sacolas no carro.

Se o objetivo for só olhar, também dá para fazer um trecho mais curto. Conte o tamanho do grupo e o interesse no WhatsApp.`,
    image: '/images/destinos/ciudad-del-este-skyline.webp',
    category: 'tips',
    date: '2026-10-18',
    author: 'Equipe Bark Tour',
    readTime: 4,
  },
]

export const socialPosts: SocialPost[] = [
  {
    id: '1',
    image: '/images/instagram/ig-02.jpg',
    caption: 'Cataratas do Iguaçu com a Bark Tour',
    url: 'https://www.instagram.com/barktour_foz/p/DaQPYkhRpk4/',
  },
  {
    id: '2',
    image: '/images/instagram/ig-03.jpg',
    caption: 'Grupo nas Cataratas',
    url: 'https://www.instagram.com/barktour_foz/p/DTQKsx0DfSk/',
  },
  {
    id: '3',
    image: '/images/instagram/ig-08.jpg',
    caption: 'Cataratas do Iguaçu',
    url: 'https://www.instagram.com/barktour_foz/p/DOJOpJLDbG9/',
  },
  {
    id: '4',
    image: '/images/instagram/ig-06.jpg',
    caption: 'Transporte privativo Bark Tour',
    url: 'https://www.instagram.com/giovannibarkjr/p/DOjoW_1kul5/',
  },
  {
    id: '5',
    image: '/images/instagram/ig-07.jpg',
    caption: 'Recepção de grupo no aeroporto de Foz',
    url: 'https://www.instagram.com/barktour_foz/p/DOL8eADjdSX/',
  },
  {
    id: '6',
    image: '/images/instagram/ig-05.jpg',
    caption: 'Roteiro pela região da Tríplice Fronteira',
    url: 'https://www.instagram.com/barktour_foz/p/DPUddtPkun7/',
  },
]
