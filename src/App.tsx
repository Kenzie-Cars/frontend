import { ProductCard } from "./components/ProductCard"

function App() {

  const productDataArray = 
  [
    {
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
    description: 'teste',
    user: 
      {
        id: 'string',
        name: 'string',
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
      price: 59999.00
    },
    {
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
      description: 'teste2',
      user: 
        {
          id: 'string',
          name: 'string',
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
        price: 59999.00
      }
  ]
  

  return (
    <div >
      {
        productDataArray.map((productData) => {
          return <ProductCard 
        images={productData.images} 
        model={productData.model} 
        description={productData.description}
        year={productData.year} 
        price={productData.price} 
        user={productData.user} 
        km={productData.km}
      />
        })
      }
      
    </div>
  )
}

export default App
