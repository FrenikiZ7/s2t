// armazena todos os dados do atleta
export const playerData = {

  // dados gerais do perfil
  profile:
  {
    // dados usados no banner do atleta. Badge = icone referente ao atual plano dele
    banner: {
      name: 'John Doe',
      profileImageSrc: '/assets/images/background.png',
      badge: 'https://cdn.discordapp.com/attachments/1242525965595181209/1242526040837062716/medal.png?ex=6656b9cd&is=6655684d&hm=e013183a657962979fa869df66201ff337f511ab0f204b52495568f947a0d2e1&',
      backgroundImagesrc: 'https://cdn.discordapp.com/attachments/1242525965595181209/1244735534274842634/dirty-soccer-ball-wet-grass-field-generated-by-ai.jpg?ex=66582c0d&is=6656da8d&hm=21fffae7f500ec50a631c916c01e20ceaa5d2b88e03274c3e7e70cadc8724c39&',
    },

    // Informações que são exibidas abaixo do banner
    info:
      [
        { title: 'Nascimento', info: '05/02/1992' },
        { title: 'Idade', info: 32 },
        { title: 'Local de nascimento', info: 'Mogi das cruzes' },
        { title: 'Nacionalidade', info: 'Brasil' },
        { title: 'Altura', info: '1,72M' },
        { title: 'Perna boa', info: 'Direita' },
      ],

    // Fotos ou vídeos no perfil do usuário
    photos: [
      {
        id: '1',
        src: '/assets/images/background.png',
        type: 'photo',
      },

      {
        id: '2',
        src: '/assets/images/background.png',
        type: 'photo',
      },

      {
        id: '3',
        src: '/assets/images/background.png',
        type: 'photo',
      },

      {
        id: '4',
        src: '/assets/images/background.png',
        type: 'photo',
      },

      {
        id: '5',
        src: '/assets/images/background.png',
        type: 'photo',
      },

      {
        id: '6',
        src: '/assets/images/background.png',
        type: 'photo',
      },

      {
        id: '7',
        src: '/assets/images/background.png',
        type: 'photo',
      },
    ],

    // Histórico de clubes do usuário
    clubs: [
      {
        id: '1',
        name: 'São Paulo',
        image: '/assets/images/background.png',
        years: [2010, 2015],
      },

      {
        id: '2',
        name: 'Club Atlético nacional de medelin',
        image: '/assets/images/background.png',
        years: [2015, 2015],
      },

      {
        id: '3',
        name: 'PSG',
        image: '/assets/images/background.png',
        years: [2015, 2019],
      },

      {
        id: '4',
        name: 'Bayern München',
        image: '/assets/images/background.png',
        years: [2019, 2023],
      },

      {
        id: '5',
        name: 'Juventus',
        image: '/assets/images/background.png',
        years: [2023, 2025],
      },

      {
        id: '6',
        name: 'São Paulo',
        image: '/assets/images/background.png',
        years: [2025, 2027],
      },
    ],

    // Histórico acadêmico do usuário
    studies: [
      {
        id: '1',
        name: 'Ensino Fundamental',
        years: [2000, 2008],
        image: '/assets/images/background.png',
      },

      {
        id: '2',
        name: 'Ensino Médio',
        years: [2008, 2012],
        image: '/assets/images/background.png',
      },

      {
        id: '3',
        name: 'Curso técnico de Ti',
        years: [2013, 2015],
        image: '/assets/images/background.png',
      },

      {
        id: '4',
        name: 'Faculdade de Uber',
        years: [2015, 2020],
        image: '/assets/images/background.png',
      },

      {
        id: '5',
        name: 'Cursinho de cortar cabelo',
        years: [2021, 2021],
        image: '/assets/images/background.png',
      },
    ],

    // Títulos já conquistados pelo usuário
    championships: [
      {
        id: '1',
        name: 'Sul Americana',
        image: '/assets/images/trophy.png',
        year: 2012,
      },

      {
        id: '2',
        name: 'La Liga',
        image: '/assets/images/trophy.png',
        year: 2017,
      },

      {
        id: '3',
        name: 'Uefa Champions League',
        image: '/assets/images/trophy.png',
        year: 2018,
      },

      {
        id: '4',
        name: 'Copa do mundo',
        image: '/assets/images/trophy.png',
        year: 2018,
      },

      {
        id: '5',
        name: 'Taça guanabara',
        image: '/assets/images/trophy.png',
        year: 2019,
      },

      {
        id: '6',
        name: 'Campeonato Gáucho',
        image: '/assets/images/trophy.png',
        year: 2022,
      },

    ],

  },

  // lista de benefícios da conta do usuário.
  // Ao clicar é direcionado a página do benefício clicado. Caso tenha isLocked como true, a estilização do componente
  // vai ser alterada e ao clicar ele vai direcionar automaticamente para a página de planos
  benefits: [
    {
      id: '1',
      src: '/assets/images/background.png',
      title: 'podcast',
      path: '/podcast',
    },

    {
      id: '2',
      src: '/assets/images/background.png',
      title: 'Sport TV',
      path: '/sporttv',
    },

    {
      id: '3',
      src: '/assets/images/background.png',
      title: 'Sports Invest',
      islocked: true,
      path: '/sportsinvest',
    },

    {
      id: '4',
      src: '/assets/images/background.png',
      title: 'Benefícios',
      islocked: true,
      path: '/benefits',
    },

    {
      id: '5',
      src: '/assets/images/background.png',
      title: 'Intercâmbio',
      islocked: true,
      path: '/interchange',
    },

    {
      id: '6',
      src: '/assets/images/background.png',
      title: 'Visibilidade',
      path: '/visibility',
    },

    {
      id: '7',
      src: '/assets/images/background.png',
      title: 'Eventos',
      islocked: true,
      path: '/events',
    },
  ],
};
