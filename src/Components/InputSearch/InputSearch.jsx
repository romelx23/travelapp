import React from "react";
import './InputSearch.css';

export const InputSearch = () => {
  return (
    <div className="content__input__search">
      <input type="text" id="search" placeholder="Location, country..." />
      <label htmlFor="search">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="#333"
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          />
        </svg>
      </label>
    </div>
  );
};
