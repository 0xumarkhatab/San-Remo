import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// layout for this page
import Admin from "layouts/Admin.js";
// core components
// import UserHeader from "components/Headers/UserHeader.js";
import Header from "next/dist/lib/load-custom-routes";
import UserHeader from "components/Headers/UserHeader.js";

function settings() {
  return (
    <>
    <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url( 'https://wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-38.jpg ') " ,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-6" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello Jessica</h1>
              <p className="text-white mt-0 mb-5">
                At this Point Of Time , You are Just Able To 
                Turn Off the Application Service by jus One Click.
                More Features Are Coming Soon ....
              </p>
              <Button
                color="danger"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Turn OFF
              </Button>
              
            </Col>
          </Row>
        </Container>
      </div>
   
      
    </>
  );
}

settings.layout = Admin;

export default settings;
