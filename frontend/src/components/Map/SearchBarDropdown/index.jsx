import React, { useRef, useEffect } from "react";
import { useState } from "react";
import searchWhite from "../search-white.svg";
import "./styles.css";

const SearchBarDropdown = ({ options, onInputChange, mapRef }) => {
  const ulRef = useRef();
  const inputRef = useRef();
  const [flyToLngLat, setFlyToLngLat] = useState([]);

  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      ulRef.current.style.display = "flex";
      onInputChange(event);
    });
    document.addEventListener("click", (event) => {
      ulRef.current.style.display = "none";
    });
  }, []);

  var SearchButton = document.getElementById("MapSearchButton");
  if (SearchButton) {
    SearchButton.onclick = function () {
      mapRef?.current?.flyTo({
        center: flyToLngLat,
        duration: 500,
        essential: true,
      });
    };
  }

  return (
    <div className="searchbar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="searchBar searchBarPerso form-control"
        placeholder="Choisissez un endroit où jouer"
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options?.map((option, index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                setFlyToLngLat([option.longitude, option.latitude]);
                inputRef.current.value = option.facility_name;
              }}
              className="list-group-item list-group-item-action"
            >
              {option.facility_name}
            </button>
          );
        })}
      </ul>
      <button className="searchBtn" id="MapSearchButton">
        Chercher <img src={searchWhite} />
      </button>
    </div>
  );
};

export default SearchBarDropdown;
