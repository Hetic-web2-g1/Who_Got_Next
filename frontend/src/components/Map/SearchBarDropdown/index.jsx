import React, { useRef, useEffect } from "react";
import './styles.css'

const SearchBarDropdown = ({ options, onInputChange }) => {

  const ulRef = useRef();
  const inputRef = useRef();
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
                inputRef.current.value = option.facility_name;
              }}
              className="list-group-item list-group-item-action"
            >
              {option.facility_name}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBarDropdown;
