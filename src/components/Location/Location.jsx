/* eslint-disable react/prop-types */
import "./Location.css";
const Location = ({ location }) => {
  return (
    <div className="location__general__container">
      <div className="location__title__container">
        <h2>
          {location.name}
          <hr />
        </h2>
        <p>
          Location: <span>{location.id}</span>
        </p>
      </div>
      <ul className="location__items__container">
        <li>
          <b>Type: </b>
          <span>{location.type}</span>
        </li>
        <li>
          <b>Dimensión: </b>
          <span>{location.dimension}</span>
        </li>
        <li>
          <b>Population: </b>
          <span>{location.residents.length}</span>
        </li>
      </ul>
    </div>
  );
};

export default Location;
