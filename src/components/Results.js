import React, { useContext, useState, useEffect } from "react";
import { UserContext, FeaturedField } from "./UserContext";

//view components
import MapView from "./MapView";
import TabView from "./TabView";

import Header from "./Header";

const FieldView = () => {
  //context
  const { myCity } = useContext(UserContext);

  const [featuredField, setFeaturedField] = useState(1);

  useEffect(() => {}, [myCity]);

  return (
    <div>
      <Header />
      <h1 className="col-10 h1 display-3 ">{myCity.name} Map</h1>

      <br />
      <div className="d-flex">
        <FeaturedField.Provider value={{ featuredField, setFeaturedField }}>
          <div className="col-9">
            <MapView centerLat={myCity.lat} centerLong={myCity.long} />
          </div>
          <div className="col-3 h-100">
            <TabView />
          </div>
        </FeaturedField.Provider>
      </div>
    </div>
  );
};

export default FieldView;
