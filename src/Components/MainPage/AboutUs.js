import React from "react";
import "./AboutUs.css";
import Card from "react-bootstrap/Card";

const AboutUs = () => {
  return (
    <>
      <div className="container aboutUsContainer">
        <div className="row">
          <div className="aboutUsHeader">
            <h3 className="aboutUsHeader">About Us</h3>
          </div>
          <div className="col-4 aboutUsImgDiv">
            {/* <div className="aboutUsImage">
              <img src="https://thumbs.dreamstime.com/b/indian-rural-farmer-using-laptop-indian-rural-farmer-using-laptop-149929931.jpg" />
            </div> */}
          </div>
          <div className="col-8 aboutUsBody">
            <Card>
              <Card.Header className="aboutUsCardHeader">
                E-Green Farm
              </Card.Header>
              <Card.Body className="cardBody">
                {/* <Card.Title>E-Green Farm</Card.Title> */}
                <Card.Text className="cardtext">
                  <p>
                    {" "}
                    E-Green Farm is an online fruit, vegetable that is dedicated
                    to providing services to consumers in making online
                    marketing accessible to them. It is an online store which
                    will allow the suppliers buying fruits, vegetable easily and
                    also maintain transparency between the Farmer and Consumer.{" "}
                  </p>
                  <p>
                    {" "}
                    This application helps customers to buy fruits, vegetable &
                    grain at best value. People can easily browse through the
                    various items using the well-defined interfaces that will be
                    provided by the system.{" "}
                  </p>
                  <p>
                    {" "}
                    E-Green Farm is an online fruit, vegetable that is dedicated
                    to providing services to consumers in making online
                    marketing accessible to them. It is an online store which
                    will allow the suppliers buying fruits, vegetable easily and
                    also maintain transparency between the Farmer and Consumer.{" "}
                  </p>
                  <br></br>
                  <br></br>
                  <footer className="blockquote-footer quote">
                    “To forget how to dig the earth and to tend the soil is to
                    forget ourselves.”{" "}
                    <cite title="Source Title">-Mahatma Gandhi</cite>
                  </footer>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
    </>
  );
};

export default AboutUs;
