import { StyledFilter } from "./style";

export const Filter = ({ carsInfo, setFilter }: any) => {
  return (
    <StyledFilter>
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
              {carsInfo.map((car: { brand: string }) => (
                <li>{car.brand}</li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Modelo</h3>
            <ul className="lists">
              {carsInfo.map((car: { model: string }) => (
                <li>{car.model}</li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Cor</h3>
            <ul className="lists">
              {carsInfo.map((car: { color: string }) => (
                <li>{car.color}</li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Ano</h3>
            <ul className="lists">
              {carsInfo.map((car: { year: string }) => (
                <li>{car.year}</li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Combustivel</h3>
            <ul className="lists">
              {carsInfo.map((car: { fuel: string }) => (
                <li>{car.fuel}</li>
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
      <button onClick={() => setFilter(false)}>Ver Anúncios</button>
    </StyledFilter>
  );
};
