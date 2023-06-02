import { useState, useEffect } from "react";
import { getRandomNumber } from "./utils/getRandomNumber.js";
import { getLocationByID } from "./services/getLocationById.js";
import "./App.css";
import Location from "./components/Location/Location";
import Loader from "./components/Loader/Loader";
import MemoizedResidentCard from "./components/ResidentCard/ResidentCard";
import Input from "./components/Input/Input.jsx";

//Promise.all()
//Si alguna falla todo el promise all falla, es decir, lanzamos 100 peticiones y de esas fallan 2 entonces perderíamos los otros 98 datos que obtuve bien.

function App() {
  const [location, setLocation] = useState(null);

  const loadLocation = async (id) => {
    const locationInfo = await getLocationByID(id);
    setLocation(locationInfo);
  };
  useEffect(() => {
    const randomNumber = getRandomNumber(1, 126);
    loadLocation(randomNumber);
  }, []);

  return (
    <div className="App">
      <div className="header__image__container"></div>
      {location ? <Location location={location} /> : <Loader />}
      <Input loadLocation={loadLocation} />
      {location && location.residents.length > 0 ? (
        <MemoizedResidentCard
          residentsUrl={location.residents}
          locationPopulation={location.residents.length}
        />
      ) : (
        <div className="empty__population_general__container"></div>
      )}
    </div>
  );
}
export default App;
