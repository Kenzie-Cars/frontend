import { useEffect, useState } from "react";
import { StyledFilter } from "./style";
import { RequestApiKenzieKars } from "../../../Requests/RequestApiKenzieKars";

export const Filter = ({
  setFilter,
  setAdvertisements,
  advertisements,
  statusFilter
}: any) => {
  const [urlBrand, setUrlBrand] = useState("");
  const [urlModel, setUrlModel] = useState("");
  const [focusModel, setFocusModel] = useState("");
  const [urlColor, setUrlColor] = useState("");
  const [urlYear, setUrlYear] = useState("");
  const [urlFuel, setUrlFuel] = useState("");
  ///////////////////////////////////////
  const [kmMin, setKmMin] = useState("");
  const [kmMax, setKmMax] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  ///////////////////////////////////////
  const [listBrands, setListBrands] = useState<Array<string>>([""]);
  const [models, setModels] = useState<string[]>([""]);
  const [colors, setColors] = useState<string[]>([""]);
  const [years, setYears] = useState<string[]>([""]);
  const [fuel, setFuel] = useState([""]);

  const getAdvertisements = async () => {
    try {
      const { data } = await RequestApiKenzieKars.get(
        `advertisements?brand=${urlBrand}&model=${urlModel}&color=${urlColor}&year=${urlYear}&fuel=${urlFuel}&kmMin=${kmMin}&kmMax=${kmMax}&priceMin=${priceMin}&priceMax=${priceMax}`,
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
      setFocusModel("")
      // setModel('')
    } else {
      setUrlModel(model);
      setFocusModel(model.replaceAll(' ', '').replaceAll('.', ''))
      console.log(focusModel)
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
    advertisements.map((car: { brand: string, is_active: boolean }) => {
      if (car.is_active && !listBrands2.includes(car.brand)) {
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
    advertisements.map(
      (car: { model: string; color: string; year: string; fuel: string; is_active: boolean; }) => {
        if (car.is_active && !arryModels.includes(car.model)) {
          arryModels.push(car.model);
        }
        if (car.is_active && !arryColors.includes(car.color)) {
          arryColors.push(car.color);
        }
        if (car.is_active && !arryYear.includes(car.year)) {
          arryYear.push(car.year);
        }
        if (car.is_active && !arryFuel.includes(car.fuel)) {
          arryFuel.push(car.fuel);
        }
      },
    );
    setModels(arryModels);
    setColors(arryColors);
    setYears(arryYear);
    setFuel(arryFuel);

  }, [urlBrand, advertisements]);

  const cleanFilter = () => {
    setUrlBrand("");
    setPriceMin("");
    setPriceMax("");
    setKmMin("");
    setKmMax("");
    setUrlColor("")
    setUrlFuel("")
    setUrlModel("")
    setUrlYear("")
    setFocusModel("")
  };

  const eventKey = (event: any) => {
    if (event.key == "Enter") {
      getAdvertisements();
    }
  };

  useEffect(() => {
    if (kmMin == "" && kmMax == "" && priceMax == "" && priceMax == "") {
      getAdvertisements();
    }

  }, [kmMin, kmMax, priceMin, priceMax]);


  useEffect(() => {
    getAdvertisements();

  }, [urlBrand, urlModel, urlColor, urlYear, urlFuel]);

  return (
    <StyledFilter brand={urlBrand} model={focusModel} color={urlColor} year={urlYear} fuel={urlFuel} statusFilter={statusFilter}>
      <div className="filterHeader">
        <p>Filtro</p>
        <button onClick={() => setFilter(true)} className="close">
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
                <li onClick={() => setModelFunction(model, index)} id={model.replaceAll(' ', '').replaceAll('.', '')} key={index}>
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
                <li onClick={() => setYearFunction(year)} id={`year${year}`} key={index}>
                  {year}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Combustivel</h3>
            <ul className="lists">
              {fuel.map((fuel: string, index: number) => (
                <li onClick={() => setFueFunction(fuel)} id={fuel} key={index}>
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
                value={kmMin}
              />
              <input
                onChange={(e) => setKmMax(e.target.value)}
                type="number"
                placeholder="Máxima"
                value={kmMax}
              />
            </div>
            <div className="range">
              <h3>Preço</h3>
              <div className="inputs">
                <input
                  onChange={(e) => setPriceMin(e.target.value)}
                  type="number"
                  placeholder="Mínimo"
                  value={priceMin}

                />
                <input
                  onChange={(e) => setPriceMax(e.target.value)}
                  type="number"
                  placeholder="Máximo"
                  value={priceMax}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="filterButtons">
        {urlBrand || urlColor || urlFuel || urlYear || urlModel || kmMin || kmMax || priceMin || priceMax ? (
          <button onClick={() => cleanFilter()}>Limpar Filtro</button>
        ) : (
          <></>
        )}
        <button className="filterModal" onClick={() => setFilter(true)}>
          Ver Anúncios
        </button>
      </div>
    </StyledFilter>
  );
};
