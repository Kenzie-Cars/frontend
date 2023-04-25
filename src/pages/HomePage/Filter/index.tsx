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
              {carsInfo.map((car: { brand: string }, index: number) => (
                <li key={index}>{car.brand}</li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Modelo</h3>
            <ul className="lists">
              {carsInfo.map((car: { model: string }, index: number) => (
                <li key={index}>{car.model}</li>
              ))}
            </ul>
          </li>
          <li>
            <h3>Cor</h3>
            <ul className="lists">
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
      <button onClick={() => setFilter(false)}>Ver Anúncios</button>
    </StyledFilter>
  );
};
