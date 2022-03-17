import React from "react";

//components
import Search from "./Search";
//import { SelectedField } from "./UserContext";

//css
import "../style/mainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <p className="h2 display-6 text-white">My local football field</p>
      <div className="search-comp">
        <Search />
      </div>
    </div>
  );
};

export default MainPage;
