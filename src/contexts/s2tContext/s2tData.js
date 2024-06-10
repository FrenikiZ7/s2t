// armazena todos os dados da Showcase2Transfer
export const s2tData = {

  videos: {
    trending: [
      { id: '1', src: '/assets/videos/video.mp4', type: 'video' },
      { id: '2', src: '/assets/videos/video.mp4', type: 'video' },
      { id: '3', src: '/assets/videos/video.mp4', type: 'video' },
      { id: '4', src: '/assets/videos/video.mp4', type: 'video' },
      { id: '5', src: '/assets/videos/video.mp4', type: 'video' },
      { id: '6', src: '/assets/videos/video.mp4', type: 'video' },
      { id: '7', src: '/assets/videos/video.mp4', type: 'video' },
      { id: '8', src: '/assets/videos/video.mp4', type: 'video' },
    ],
  },

  leagues: [
    { id: '1', name: 'Brasileirão', profileImageSrc: '/assets/images/pngs/brasileirao.png' },
  ],

  users: {
    scouts: [
      { id: '1', name: 'Melissa de Lima', profileImageSrc: '/assets/images/background.png' },
      { id: '2', name: 'Enzo Costa', profileImageSrc: '/assets/images/background.png' },
      { id: '3', name: 'Beatriz Oliveira', profileImageSrc: '/assets/images/background.png' },
      { id: '4', name: 'Sophia Silva', profileImageSrc: '/assets/images/background.png' },
      { id: '5', name: 'Miguel Pereira', profileImageSrc: '/assets/images/background.png' },
      { id: '6', name: 'Laura Souza', profileImageSrc: '/assets/images/background.png' },
      { id: '7', name: 'Gabriel Santos', profileImageSrc: '/assets/images/background.png' },
      { id: '8', name: 'Isabella Almeida', profileImageSrc: '/assets/images/background.png' },
      { id: '9', name: 'Manuela Nunes', profileImageSrc: '/assets/images/background.png' },
      { id: '10', name: 'Lucas Ferreira', profileImageSrc: '/assets/images/background.png' },
      { id: '11', name: 'Maria Mendes', profileImageSrc: '/assets/images/background.png' },
      { id: '12', name: 'André Cardoso', profileImageSrc: '/assets/images/background.png' },
    ],

    clubs: [
      { id: '1', name: 'São Paulo', profileImageSrc: '/assets/images/background.png' },
      { id: '2', name: 'Barcelona', profileImageSrc: '/assets/images/background.png' },
      { id: '3', name: 'Real Madrid', profileImageSrc: '/assets/images/background.png' },
      { id: '4', name: 'Celta de Vigo', profileImageSrc: '/assets/images/background.png' },
      { id: '5', name: 'Ajax', profileImageSrc: '/assets/images/background.png' },
      { id: '6', name: 'Novorizontino', profileImageSrc: '/assets/images/background.png' },
      { id: '7', name: 'Aguia de marabá', profileImageSrc: '/assets/images/background.png' },
      { id: '8', name: 'Atlético de Madrid', profileImageSrc: '/assets/images/background.png' },
      { id: '9', name: 'PSG', profileImageSrc: '/assets/images/background.png' },
      { id: '10', name: 'River Plate', profileImageSrc: '/assets/images/background.png' },
      { id: '11', name: 'XV de Piracicaba', profileImageSrc: '/assets/images/background.png' },
      { id: '12', name: 'Coritiba', profileImageSrc: '/assets/images/background.png' },
    ],
  },

  proposals: {

    female: {

    },

    male: {
      agents: {
        semiProfessional: [
          {
            from: 'Agente',
            date: '29/05/2024',
            category: 'Universitário',
            opportunity: 'Centroavante',
            country: 'Brasil',
            org: 'Brasileirão',
            orglogo: '/assets/images/pngs/brasileirao.png',
            orgpath: '/brasileirao',
          },
        ],

        professional: [
          {
            opportunityId: 0,
            details: {
              from: 'Agente',
              date: '29-05-2024',
              category: 'Profissional',
              opportunity: 'Centroavante',
              country: 'Brasil',
              org: 'Brasileirão',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/brasileirao',
              payment: {
                minPayment: 5000,
                maxPayment: 8000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 1,
            details: {
              from: 'Agente 2',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 2,
            details: {
              from: 'Agente 3',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 3,
            details: {
              from: 'Agente 4',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 4,
            details: {
              from: 'Agente 5',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 5,
            details: {
              from: 'Agente 6',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 6,
            details: {
              from: 'Agente 7',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 7,
            details: {
              from: 'Agente 8',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 8,
            details: {
              from: 'Agente 9',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 9,
            details: {
              from: 'Agente 10',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 10,
            details: {
              from: 'Agente 11',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 11,
            details: {
              from: 'Agente 12',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 12,
            details: {
              from: 'Agente 13',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 13,
            details: {
              from: 'Agente 14',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 14,
            details: {
              from: 'Agente 15',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

          {
            opportunityId: 15,
            details: {
              from: 'Agente 16',
              date: '01-06-2024',
              category: 'Profissional',
              opportunity: 'Zagueiro',
              country: 'Alemanha',
              org: 'Bundesliga',
              orglogo: '/assets/images/pngs/brasileirao.png',
              orgpath: '/bundesliga',
              payment: {
                minPayment: 10000,
                maxPayment: 18000,
              },
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
            requirements: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit nisl et leo porta egestas. Duis risus dolor, dignissim non gravida at, gravida non augue. Ut vulputate, nulla sed eleifend euismod, tellus libero rhoncus sem, vitae lobortis ipsum tellus ut diam. Integer fermentum nisi velit, sed posuere felis vestibulum vel',
          },

        ],

      },

      clubs: {

        semiProfessional: [
          {
            from: 'Clube',
            date: '29/05/2024',
            category: 'Semi profissional',
            opportunity: 'Centroavante',
            country: 'Brasil',
            org: 'Brasileirão',
            orglogo: '/assets/images/pngs/brasileirao.png',
            orgpath: '/brasileirao',
          },
        ],

        professional: [
          {
            from: 'Agente',
            date: '29/05/2024',
            category: 'Profissional',
            opportunity: 'Centroavante',
            country: 'Brasil',
            org: 'Brasileirão',
            orglogo: '/assets/images/pngs/brasileirao.png',
            orgpath: '/brasileirao',
          },
          {
            from: 'Clube',
            date: '18/10/2023',
            category: 'Profissional',
            opportunity: 'Atacante',
            country: 'Portugal',
            org: 'Liga NOS',
            orglogo: '/assets/images/pngs/brasileirao.png',
            orgpath: '/bundesliga',
          },
          {
            from: 'Clube',
            date: '07/09/2023',
            category: 'Profissional',
            opportunity: 'Goleiro',
            country: 'Holanda',
            org: 'Eredivisie',
            orglogo: '/assets/images/pngs/brasileirao.png',
            orgpath: '/bundesliga',
          },
        ],
      },
    },

  },
};
