import React from "react";
import Admin from "layouts/Admin.js";
import { Button, Container, Row, Col } from "reactstrap";



const Dashboard = (props) => {
 
return (
  

<>
<div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url( 'https://wallpaperaccess.com/full/767277.jpg') " ,
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
                Welcome To The Dashboard . Here You Can Have 
                Your Application Status .
                Click On The Following Button To Display Stats

              </p>
              <Button
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Display
              </Button>
              
            </Col>
          </Row>
        </Container>
      </div>

</>


);

      
  
};

Dashboard.layout = Admin;

export default Dashboard;
