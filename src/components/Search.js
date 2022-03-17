import React, { useContext } from "react";

import { UserContext } from "./UserContext";
import { cities } from "../cities";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";

const Search = () => {
  //state for selected city
  const { myCity } = useContext(UserContext);
  useState(() => {}, [myCity, cities]);

  const form_submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="search container d-flex align-items-center justify-content-start">
        <h1 className="display-6 text-white">
          Your next football story begins here
        </h1>

        <form className="search-form form-group" onSubmit={form_submit}>
          <DropDownMenu />
          <br />
        </form>
      </div>
    </>
  );
};

export default Search;

//give the selected value state to the map as a child prop
