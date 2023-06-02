import "./ResidentCard.css";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { usePagination } from "../../hooks/UsePagination";
import { getResidentByUrl } from "../../services/getResidentByUrl";
import Loader from "../Loader/Loader";

//Lógica + Estado === Hook
const ResidentCard = ({ residentsUrl, locationPopulation }) => {
  const [resident, setResident] = useState([]);
  const [quantityPagination, setQuantityPagination] = useState(8);
  //HOOK=======================================================================
  const [numberPage, residentSlice, totalPages, changePageTo] = usePagination(
    resident,
    quantityPagination
  );
  //USE EFFECT=================================================================
  useEffect(() => {
    const loadResident = async (url) => {
      const residentData = await getResidentByUrl(url);
      setResident(residentData);
    };
    loadResident(residentsUrl);

    return () => {};
  }, [residentsUrl, locationPopulation]);
  //JSX========================================================================
  return (
    <>
      {/* BUTTONS*/}
      <div className="buttons__general__container">
        <div className="dinamic__buttons__container">
          {totalPages.map((i) => (
            <button
              key={i + 1}
              onClick={() => changePageTo(i)}
              style={{
                backgroundColor: numberPage === i && "#0d3136",
                color: numberPage === i && "rgb(44, 255, 7)",
              }}
              className="dinamic__buttons"
            >
              {i}
            </button>
          ))}
        </div>
        {/* NEXT & PREVIOUS BUTTONS */}
        <div className="secondary__buttons__general__container">
          <div className="next__previous__buttons__container">
            <button
              onClick={() => changePageTo(numberPage - 1)}
              className="previous__button"
            >
              Previous
            </button>
            <button
              onClick={() => changePageTo(numberPage + 1)}
              className="next__button"
            >
              next
            </button>
          </div>
          {/* SELECT BUTTON */}
          <div className="select__container">
            <select
              name="quantity__per__page"
              value={quantityPagination}
              onChange={(e) => setQuantityPagination(Number(e.target.value))}
            >
              <option>8</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
        </div>
      </div>
      {/* RESIDENT CARD */}
      <div className="grid__residents">
        {resident ? (
          residentSlice.map((residentItem) => (
            <article
              key={residentItem.id}
              className="resident__card__general__container"
            >
              <div className="resident__img__container">
                <img
                  src={residentItem.image}
                  alt={`A picture of ${residentItem.name}`}
                />
              </div>
              <div className="resident__status__container">
                <div
                  style={{
                    backgroundColor:
                      residentItem.status === "Dead"
                        ? "red"
                        : residentItem.status === "Alive" && "green",
                  }}
                ></div>
                <p>{residentItem.status}</p>
              </div>
              <div className="resident__info__general__container">
                <h3>{residentItem.name}</h3>
                <ul className="resident__list__items">
                  <li>
                    <b>Species: </b>
                    <span>{residentItem.species}</span>
                  </li>
                  <li>
                    <b>Origin: </b>
                    <span> {residentItem.origin.name}</span>
                  </li>
                  <li>
                    <b>Appearances in episodes: </b>
                    <span>{residentItem.episode.length}</span>
                  </li>
                </ul>
              </div>
            </article>
          ))
        ) : (
          <Loader />
        )}
      </div>
      {/* BUTTONS */}
      <div className="buttons__general__container">
        <div className="dinamic__buttons__container">
          {totalPages.map((i) => (
            <button
              key={i + 1}
              onClick={() => changePageTo(i)}
              style={{
                backgroundColor: numberPage === i && "#0d3136",
                color: numberPage === i && "rgb(44, 255, 7)",
              }}
              className="dinamic__buttons"
            >
              {i}
            </button>
          ))}
        </div>
        {/* NEXT & PREVIOUS BUTTONS */}
        <div className="secondary__buttons__general__container">
          <div className="next__previous__buttons__container">
            <button
              onClick={() => changePageTo(numberPage - 1)}
              className="previous__button"
            >
              Previous
            </button>
            <button
              onClick={() => changePageTo(numberPage + 1)}
              className="next__button"
            >
              next
            </button>
          </div>
          {/* SELECT BUTTON */}
          <div className="select__container">
            <select
              name="quantity__per__page"
              value={quantityPagination}
              onChange={(e) => setQuantityPagination(Number(e.target.value))}
            >
              <option>8</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

ResidentCard.propTypes = {
  residentsUrl: PropTypes.array,
};

const MemoizedResidentCard = React.memo(ResidentCard);

export default MemoizedResidentCard;
