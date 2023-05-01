import { useEffect, useState } from "react";
import { StyledFilter } from "./style";
import { RequestApiKenzieKars } from "../../../Requests/RequestApiKenzieKars";

export const Filter = ({
  setFilter,
  setAdvertisements,
  advertisements,
}: any) => {
  const [urlBrand, setUrlBrand] = useState("");
  const [urlModel, setUrlModel] = useState("");
  const [urlColor, setUrlColor] = useState("");
  const [urlYear, setUrlYear] = useState("");
  const [urlFuel, setUrlFuel] = useState("");
  ///////////////////////////////////////
  const [kmMin, setKmMin] = useState("");
  const [kmMax, setKmMax] = useState("");
  const [yearMin, setYearMin] = useState("");
  const [yearMax, setYearMax] = useState("");
  ///////////////////////////////////////
  const [listBrands, setListBrands] = useState<Array<string>>([""]);
  const [models, setModels] = useState<string[]>([""]);
  const [colors, setColors] = useState<string[]>([""]);
  const [years, setYears] = useState<string[]>([""]);
  const [fuel, setFuel] = useState([""]);

  const getAdvertisements = async () => {
    try {
      const { data } = await RequestApiKenzieKars.get(
        `advertisements?brand=${urlBrand}&model=${urlModel}&color=${urlColor}&year=${urlYear}&fuel=${urlFuel}&kmMin=${kmMin}&kmMax=${kmMax}&yearMin=${yearMin}&yearMax=${yearMax}`,
      );
      setAdvertisements(data);
    } catch (error) {
      console.log(error);
    }
  };

  const setBrandFunction = (brand: string) => {
    if (urlBrand == brand) {
      setUrlBrand("");
      setUrlModel("");
      setUrlColor("");
      setUrlYear("");
      setUrlFuel("");
    } else {
      setUrlBrand(brand);
    }
  };

  const setModelFunction = (model: string, index: number) => {
    if (urlModel == model) {
      setUrlModel("");
      // setModel('')
    } else {
      setUrlModel(model);
    }
  };

  const setColorFunction = (color: string) => {
    if (color == urlColor) {
      setUrlColor("");
    } else {
      setUrlColor(color);
    }
  };

  const setYearFunction = (year: string) => {
    if (year == urlYear) {
      setUrlYear("");
    } else {
      setUrlYear(year);
    }
  };

  const setFueFunction = (fuel: string) => {
    if (urlFuel == fuel) {
      setUrlFuel("");
    } else {
      setUrlFuel(fuel);
    }
  };

  useEffect(() => {
    let listBrands2: Array<string> = [];
    advertisements.map((car: { brand: string }) => {
      if (!listBrands2.includes(car.brand)) {
        listBrands2.push(car.brand);
      }
    });

    setListBrands(listBrands2);
  }, [advertisements]);

  useEffect(() => {
    let arryModels: Array<string> = [];
    let arryColors: Array<string> = [];
    let arryYear: Array<string> = [];
    let arryFuel: Array<string> = [];
    if (urlBrand) {
      advertisements.map(
        (car: { model: string; color: string; year: string; fuel: string }) => {
          if (!arryModels.includes(car.model)) {
            arryModels.push(car.model);
          }
          if (!arryColors.includes(car.color)) {
            arryColors.push(car.color);
          }
          if (!arryYear.includes(car.year)) {
            arryYear.push(car.year);
          }
          if (!arryFuel.includes(car.fuel)) {
            arryFuel.push(car.fuel);
          }
        },
      );
      setModels(arryModels);
      setColors(arryColors);
      setYears(arryYear);
      setFuel(arryFuel);
    } else {
      setModels([]);
      setColors([]);
      setYears([]);
      setFuel([]);
    }
  }, [urlBrand, advertisements]);

  const cleanFilter = () => {
    setUrlBrand("");
    setYearMin("");
    setYearMax("");
    setKmMin("");
    setKmMax("");
  };

  const eventKey = (event: any) => {
    if (event.key == "Enter") {
      getAdvertisements();
    }
  };

  useEffect(() => {
    getAdvertisements();
  }, [urlBrand, urlModel, urlColor, urlYear, urlFuel]);

  return (
    <StyledFilter color={urlColor} year={urlYear} brand={urlBrand}>
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
              {listBrands.map((brand) => {
                return (
                  <li
                    key={brand}
                    id={brand.toLowerCase()}
                    onClick={() => setBrandFunction(brand.toLowerCase())}
                  >
                    {brand}
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <h3>Modelo</h3>
            <ul className="lists">
              {models?.map((model: any, index: number) => (
                <li onClick={() => setModelFunction(model, index)} key={index}>
                  {model}
                </li>
              ))}
            </ul>
          </li>
          <li className="listModels">
            <h3>Cor</h3>
            <ul className="lists listModels">
              {colors.map((color, index: number) => (
                <li
                  id={color}
                  onClick={() => setColorFunction(color)}
                  key={index}
                >
                  {color}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Ano</h3>
            <ul className="lists">
              {years.map((year: string, index: number) => (
                <li onClick={() => setYearFunction(year)} id={year} key={index}>
                  {year}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Combustivel</h3>
            <ul className="lists">
              {fuel.map((fuel: string, index: number) => (
                <li onClick={() => setFueFunction(fuel)} key={index}>
                  {fuel}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <form onKeyDown={(e) => eventKey(e)}>
          <div className="range">
            <h3>Km</h3>
            <div className="inputs">
              {/* <input onChange={(e) => setKmMin(e.target.value)} type="number" placeholder="Mínima" /> */}
              <input
                onChange={(e) => setKmMin(e.target.value)}
                type="number"
                placeholder="Mínima"
              />
              <input
                onChange={(e) => setKmMax(e.target.value)}
                type="number"
                placeholder="Máxima"
              />
            </div>
            <div className="range">
              <h3>Year</h3>
              <div className="inputs">
                <input
                  onChange={(e) => setYearMin(e.target.value)}
                  type="number"
                  placeholder="Mínimo"
                />
                <input
                  onChange={(e) => setYearMax(e.target.value)}
                  type="number"
                  placeholder="Máximo"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      {urlBrand || kmMin || kmMax || yearMin || yearMax ? (
        <button onClick={() => cleanFilter()}>Limpar Filtro</button>
      ) : (
        <></>
      )}
      <button className="filterModal" onClick={() => setFilter(false)}>
        Ver Anúncios
      </button>
    </StyledFilter>
  );
};
