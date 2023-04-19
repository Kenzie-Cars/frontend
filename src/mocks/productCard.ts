export const mockUser =  
  {
    id: '2',
    name: 'String',
    email: 'string',
    cpf: 'string',
    phone: 'string',
    birthdate: new Date(),
    description: 'string',
    password: '1234',
    is_adm: true,
    is_active: true,
    is_seller: true,
    created_at: new Date(),
    updated_at: new Date()
  }

export const productDataArray = 
  [
    {
    id: 'p1',
    images : 
      [
        {
          id: 'lol',
          url:'https://s3-alpha-sig.figma.com/img/4698/3d4e/e5edeba66e01f8f54b6af3eb791795c6?Expires=1682294400&Signature=V4tZ7aBW2WWgUUZmzHzJC82ksYMxEIe~aryQDSy0VQod3Wr-~-8O1bPhEUZ42ISruwMEys373x4SsFxO-pvd~1GBPTY-rGFBCJmiQDoMgoZD3TZxh~iS~smB9OZMHxm5Xn12Efzms9g3UHgiM3luy7cRMoT6vuPkF91JRpSgOuCkM5OkIdpMfwXdTfKIE2iA0xnH5MmhZcphBmC93CBqTNe9ecxvcf8uO9H6AA-UCbkaBNi1ZDQiFGhfLs2NGELYn-ClbD1oHd6FsQ5ZhUZfCoV4cHy2Y1UuhpVKTA-efGJ4jhjJp83eNlLvM3PojNZYyL~VMW8DVPsfjxTvHNK5cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
          title: 'car',
          advertisement_id: 'lel'
        }
      ],
    model: 'Teste',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user: 
      {
        id: '1',
        name: 'João',
        email: 'string',
        cpf: 'string',
        phone: 'string',
        birthdate: new Date(),
        description: 'string',
        password: '1234',
        is_adm: true,
        is_active: true,
        is_seller: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      year: 2019,
      km: 80000,
      price: 59999.00,
      is_good_sale: false,
      is_active: true
    },
    {
      id: 'p2',
      images : 
        [
          {
            id: 'lol',
            url:'https://s3-alpha-sig.figma.com/img/4698/3d4e/e5edeba66e01f8f54b6af3eb791795c6?Expires=1682294400&Signature=V4tZ7aBW2WWgUUZmzHzJC82ksYMxEIe~aryQDSy0VQod3Wr-~-8O1bPhEUZ42ISruwMEys373x4SsFxO-pvd~1GBPTY-rGFBCJmiQDoMgoZD3TZxh~iS~smB9OZMHxm5Xn12Efzms9g3UHgiM3luy7cRMoT6vuPkF91JRpSgOuCkM5OkIdpMfwXdTfKIE2iA0xnH5MmhZcphBmC93CBqTNe9ecxvcf8uO9H6AA-UCbkaBNi1ZDQiFGhfLs2NGELYn-ClbD1oHd6FsQ5ZhUZfCoV4cHy2Y1UuhpVKTA-efGJ4jhjJp83eNlLvM3PojNZYyL~VMW8DVPsfjxTvHNK5cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            title: 'car',
            advertisement_id: 'lel'
          }
        ],
      model: 'Teste2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      user: 
        {
          id: '1',
          name: 'Francisco',
          email: 'string',
          cpf: 'string',
          phone: 'string',
          birthdate: new Date(),
          description: 'string',
          password: '1234',
          is_adm: true,
          is_active: true,
          is_seller: true,
          created_at: new Date(),
          updated_at: new Date()
        },
        year: 2019,
        km: 80000,
        price: 59999.00,
        is_good_sale: true,
        is_active: false
      },
      {
        id: 'p3',
        images : 
          [
            {
              id: 'lol',
              url:'https://s3-alpha-sig.figma.com/img/4698/3d4e/e5edeba66e01f8f54b6af3eb791795c6?Expires=1682294400&Signature=V4tZ7aBW2WWgUUZmzHzJC82ksYMxEIe~aryQDSy0VQod3Wr-~-8O1bPhEUZ42ISruwMEys373x4SsFxO-pvd~1GBPTY-rGFBCJmiQDoMgoZD3TZxh~iS~smB9OZMHxm5Xn12Efzms9g3UHgiM3luy7cRMoT6vuPkF91JRpSgOuCkM5OkIdpMfwXdTfKIE2iA0xnH5MmhZcphBmC93CBqTNe9ecxvcf8uO9H6AA-UCbkaBNi1ZDQiFGhfLs2NGELYn-ClbD1oHd6FsQ5ZhUZfCoV4cHy2Y1UuhpVKTA-efGJ4jhjJp83eNlLvM3PojNZYyL~VMW8DVPsfjxTvHNK5cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
              title: 'car',
              advertisement_id: 'lel'
            }
          ],
        model: 'Teste3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user: 
          {
            id: '2',
            name: 'Marcelo Costa',
            email: 'string',
            cpf: 'string',
            phone: 'string',
            birthdate: new Date(),
            description: 'string',
            password: '1234',
            is_adm: true,
            is_active: true,
            is_seller: true,
            created_at: new Date(),
            updated_at: new Date()
          },
          year: 2019,
          km: 80000,
          price: 59999.00,
          is_good_sale: false,
          is_active: false
        },
        {
            id: 'p4',
            images : 
              [
                {
                  id: 'lol',
                  url:'https://s3-alpha-sig.figma.com/img/4698/3d4e/e5edeba66e01f8f54b6af3eb791795c6?Expires=1682294400&Signature=V4tZ7aBW2WWgUUZmzHzJC82ksYMxEIe~aryQDSy0VQod3Wr-~-8O1bPhEUZ42ISruwMEys373x4SsFxO-pvd~1GBPTY-rGFBCJmiQDoMgoZD3TZxh~iS~smB9OZMHxm5Xn12Efzms9g3UHgiM3luy7cRMoT6vuPkF91JRpSgOuCkM5OkIdpMfwXdTfKIE2iA0xnH5MmhZcphBmC93CBqTNe9ecxvcf8uO9H6AA-UCbkaBNi1ZDQiFGhfLs2NGELYn-ClbD1oHd6FsQ5ZhUZfCoV4cHy2Y1UuhpVKTA-efGJ4jhjJp83eNlLvM3PojNZYyL~VMW8DVPsfjxTvHNK5cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                  title: 'car',
                  advertisement_id: 'lel'
                }
              ],
            model: 'Teste4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            user: 
              {
                id: '2',
                name: 'Teste',
                email: 'string',
                cpf: 'string',
                phone: 'string',
                birthdate: new Date(),
                description: 'string',
                password: '1234',
                is_adm: true,
                is_active: true,
                is_seller: true,
                created_at: new Date(),
                updated_at: new Date()
              },
              year: 2019,
              km: 80000,
              price: 59999.00,
              is_good_sale: true,
              is_active: false
            }

  ]