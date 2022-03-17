import { useContext } from "react";

import { UserContext, FeaturedField } from "./UserContext";

import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../style/tab_view.css";

const TabView = () => {
  // has value of selected city
  const { myCity } = useContext(UserContext);

  //has value of selected field
  const { featuredField, setFeaturedField } = useContext(FeaturedField);

  return (
    <div className="tab-view border" key={myCity.global_id}>
      <h3 className="text-center border-bottom border-success">
        {myCity.name}
      </h3>
      <section className="tab-view-comp">
        {myCity.fields.map((field) => {
          let fullmap;
          if (myCity.name === "New York City") {
            fullmap = field.global_id;
          } else {
            fullmap = field.id;
          }
          return (
            <div key={fullmap}>
              <Card
                className="card"
                key={field.id}
                onClick={() => {
                  setFeaturedField(fullmap);
                }}
              >
                <Card.Header>{fullmap}</Card.Header>
                <Card.Body>
                  <Card.Title>{field.name}</Card.Title>
                  {/* <Card.Text>{featuredField}</Card.Text> */}
                  <Card.Text>
                    Address: <br />
                    {field.address}
                  </Card.Text>

                  <Button
                    variant="primary"
                    onClick={() => {
                      window.location.href =
                        "http://maps.google.com/?q=" + field.name;
                      // console.log("btn clciked");
                    }}
                  >
                    Get directions
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default TabView;
