import GoogleMapReact from "google-map-react";

import { useEffect, useContext, useState } from "react";
import { UserContext, FeaturedField } from "./UserContext";
//icons
import { ImLocation } from "react-icons/im";

import "../style/map_view.css";

const MapView = () => {
  const { myCity } = useContext(UserContext);
  const { featuredField } = useContext(FeaturedField);

  //const { centerLat, centerLong } = props;
  const apiKey = "AIzaSyAHAXs - gLYRYdOFnovTmrOTVN7W6u3462A";

  const defaultProps = {
    center: {
      lat: myCity.lat,
      lng: myCity.long,
    },
  };

  // get users location
  const [myLocation, setMyLocation] = useState(0);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPostion);
    }
  };

  const showPostion = (pos) => {
    setMyLocation(pos.coords);
  };
  useEffect(() => {
    getLocation();
    console.log(featuredField);
  }, [featuredField]);

  return (
    <div className="map-view">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        center={defaultProps.center}
        defaultZoom={11}
      >
        <MyLocationMarker
          lat={myLocation.latitude}
          lng={myLocation.longitude}
        />

        {myCity.fields.map((fields) => {
          //fullmap is to change the id number of next to the map markers to global_id if the full nyc map is being displayed
          let fullmap = null;
          if (myCity.name === "New York City") {
            fullmap = fields.global_id;
          } else {
            fullmap = fields.id;
          }
          return (
            <FieldMarker
              key={fields.global_id}
              lat={fields.lat}
              lng={fields.lng}
              name={fields}
              fullMap={fullmap}
              fF={featuredField}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

//users location point
const MyLocationMarker = () => {
  return (
    <>
      <ImLocation color="red" size="20px" />
      <p>My Location</p>
    </>
  );
};

//When clicking on filedmarker it set the popup to be visable

const FieldMarker = ({ name, fullMap }) => {
  const [popUpStyle, setPopUpStyle] = useState("none");
  const { featuredField, setFeaturedField } = useContext(FeaturedField);

  useState(() => {}, [featuredField, fullMap]);

  return (
    <>
      <MarkerPopUp field={name} setId={fullMap} setStyle={popUpStyle} />
      <ImLocation
        key={fullMap}
        color="green"
        size="20px"
        setStyle={popUpStyle}
        onClick={() => {
          setFeaturedField(fullMap);
          popUpStyle === "none"
            ? setPopUpStyle("block")
            : setPopUpStyle("none");
        }}
      />
      <p className="text-primary" style={{ fontSize: "15px" }}>
        {fullMap}
      </p>
    </>
  );
};

//adds pop up on click
const MarkerPopUp = ({ field, setStyle, setId }) => {
  return (
    <>
      <div className="marker-popup " style={{ display: setStyle }}>
        <div className="card-body">
          <p className="h6">{setId}</p>
          <p className="card-title">{field.name}</p>
        </div>
      </div>
    </>
  );
};

export default MapView;
