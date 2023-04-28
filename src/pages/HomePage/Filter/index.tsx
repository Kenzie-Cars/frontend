import { useEffect, useState } from "react";
import { StyledFilter } from "./style";
import { RequestApiKenzieKars } from "../../../Requests/RequestApiKenzieKars";
import { RequestApiFIPE } from "../../../Requests/RequestApiFIPE";

export const Filter = ({ carsInfo, setFilter, setAdvertisements }: any) => {
  // console.log(carsInfo)
  const [filterBrand, setFilterBrand] = useState('')
  const [selectModel, setModel] = useState('')
  const [urlBrand, setUrlBrand] = useState('')
  const [urlModel, setUrlModel] = useState('')
  const [carsInfoo, setCarsInfo] = useState([])

  // --------------------------- \\
  const [brands, setBrands] = useState([""]);
  const [models, setModels] = useState<string[]>([""]);
  const [years, setYears] = useState<string[]>([""]);
  const [fuel, setFuel] = useState([""]);



  // --------------------------- \\
  const getAdvertisements = async () => {
    try {
      const { data } = await RequestApiKenzieKars.get(`advertisements?brand=${urlBrand}&model=${urlModel}`);
      setAdvertisements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const setBrandFunction = (brand: string) => {

    if (filterBrand == brand) {
      setFilterBrand('')
      setUrlBrand('')
      setUrlModel('')

    } else {
      setFilterBrand(brand)
      setUrlBrand(brand)
      // console.log(models[`${urlBrand}`])
    }
  }

  const setModelFunction = (model: string, index: number) => {
    console.log(model)
    // if (urlBrand && model) {
    if (model == urlModel) {
      setUrlModel('')
      setModel('')
    } else {
      setUrlModel(model)
      setModel(`model${index}`)
      console.log(selectModel)
    }
    // }

  }

  useEffect(() => {
    async function ApiFIPE() {
      try {
        const { data } = await RequestApiFIPE.get("cars");
        setBrands(Object.keys(data));
        // setModels(data)
        setCarsInfo(data)
      } catch (error) {
        // console.log(error);
      }
    }
    ApiFIPE();
  }, []);

  useEffect(() => {
    setModels(carsInfoo[`${urlBrand}`])
    // models?.map(element => {
    //   console.log(element)
    // })

  }, [urlBrand])

  // useEffect(() => {
  //   if (urlBrand) {
  //     const findModels = async () => {
  //       try {
  //         const { data } = await RequestApiFIPE.get(`cars?brand=${brandValue}`);
  //         // const name = data.map(car => { return car.name });
  //         console.log(data[`${urlBrand}`])
  //         // setModels(name);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     findModels();
  //   } else {
  //     setModels([''])
  //   }
  // }, [urlBrand]);



  useEffect(() => {
    console.log('oi')
    getAdvertisements()
  }, [urlBrand, urlModel])

  return (
    <StyledFilter selectModel={selectModel} brand={filterBrand}>
      <div className="filterHeader">
        <p>Filtro</p>
        <button onClick={() => setFilter(false)} className="close">
          X
        </button>
      </div>
      <div>
        <ul className="filterList">
          <li>
            <h3>Marca</h3>
            <ul className="lists">
              {
                brands.map(brand => {
                  return <li id={brand.toLowerCase()} onClick={() => setBrandFunction(brand.toLowerCase())} >{brand}</li>
                })
              }
              {/* {carsInfo.map((car: { brand: string }, index: number) => (
                <li id={car.brand} key={index} onClick={() => setBrandFunction(car.brand)}>{car.brand}</li>
              ))} */}
            </ul>
          </li>
          <li>
            <h3>Modelo</h3>
            <ul className="lists">
              {models?.map((model: any, index: number) => (
                <li id={`model${index}`} onClick={() => setModelFunction(model.name, index)} key={index}>- {model.name}</li>
              ))}
            </ul>
            {/* <ul className="lists">
              {carsInfo.map((car: { model: string }, index: number) => (
                <li key={index}>{car.model}</li>
              ))}
            </ul> */}
          </li>
          <li className="listModels">
            <h3>Cor</h3>
            <ul className="lists listModels">
              {carsInfo.map((car: { color: string }, index: number) => (
                <li key={index}>{car.color}</li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Ano</h3>
            <ul className="lists">
              {carsInfo.map((car: { year: string }, index: number) => (
                <li key={index}>{car.year}</li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Combustivel</h3>
            <ul className="lists">
              {carsInfo.map((car: { fuel: string }, index: number) => (
                <li key={index}>{car.fuel}</li>
              ))}
            </ul>
          </li>
        </ul>
        <div className="range">
          <h3>Km</h3>
          <div className="inputs">
            <input type="text" placeholder="Mínima" />
            <input type="text" placeholder="Máxima" />
          </div>
        </div>
        <div className="range">
          <h3>Year</h3>
          <div className="inputs">
            <input type="text" placeholder="Mínimo" />
            <input type="text" placeholder="Máximo" />
          </div>
        </div>
      </div>
      <button className="filterModal" onClick={() => setFilter(false)}>Ver Anúncios</button>
    </StyledFilter>
  );
};
