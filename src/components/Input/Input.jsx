import { useState } from "react";
import { getRandomNumber } from "../../utils/getRandomNumber";
import "./input.css";

// El valor de un input en react nunca puede ser null o undefined

const Input = ({ loadLocation }) => {
  const [searchId, setSearchId] = useState("");
  const [errorSearchLocation, setErrorSearchLocation] = useState("");

  //===================================HandleChange==================================
  const handleChange = (e) => {
    const value = e.target.value; // este valor es un texto
    // Valida que desde el principio hasta el final del string haya solo números.
    // if (!/^\d$/.test(value)) {
    if (value === "") {
      setErrorSearchLocation("");
    } else if (isNaN(Number(value))) {
      setErrorSearchLocation(
        "Hey! , you must provide only numbers from 1 to 126"
      );
    } else if (Number(value) < 1) {
      setErrorSearchLocation("The minimum number is 1");
    } else if (Number(value) > 126) {
      setErrorSearchLocation("The maximum number is 126");
    } else {
      setErrorSearchLocation("");
    }
    setSearchId(value);
  };
  //===================================HandleSubmit==================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Si no hay valor de búsqueda o el valor tiene un error.
    if (errorSearchLocation) {
      setSearchId("");
      return;
    }

    if (!searchId) {
      const randomId = getRandomNumber(1, 126);
      loadLocation(randomId);
    } else {
      loadLocation(searchId);
    }
  };
  //===================================JSX==========================================
  return (
    <div className="search__general__container">
      <form onSubmit={handleSubmit} className="input">
        <input
          type="text"
          value={searchId}
          onChange={handleChange}
          placeholder=" Search from 1 to 126"
          className="no__translate"
        />
        <button type="submit">Search</button>
      </form>

      <p className={errorSearchLocation ? "show" : ""} role="alert">
        <span>⚠</span>
        {errorSearchLocation}
      </p>
    </div>
  );
};

export default Input;
