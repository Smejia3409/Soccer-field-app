import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cities } from "../cities";
import { UserContext } from "./UserContext";

const DropDownMenu = () => {
  const { myCity, setMyCity } = useContext(UserContext);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Select location
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {cities.map((city) => {
          return (
            <div style={{ width: "100%" }} key={city.id}>
              <Link
                to="/"
                onClick={() => {
                  setMyCity(city);
                }}
              >
                <div className="dropdown-item">{city.name}</div>
              </Link>
              <br />
            </div>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownMenu;
