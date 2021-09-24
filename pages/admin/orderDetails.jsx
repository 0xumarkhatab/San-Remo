import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  DropdownItem,
  Col,
  DropdownMenu,
  Table,
} from "reactstrap";
import Admin from "../../layouts/Admin";

import { useDispatch, useSelector } from "react-redux";
import ShowFoods from "../../components/Foods/ShowFoods";

function orderDetails() {
  const VIEW_PROPS = useSelector((state) => state.VIEW_PROPS);
  const theOrder = { ...VIEW_PROPS };

  const prices = theOrder.items.map((item) => item.price * item.quantity);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const amount = prices.reduce(reducer);

  console.log(theOrder);

  return (
    <div>
      <Container className="ml-0 mt-6" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card
              className="bg-gradient-dark text-white shadow"
              style={{ width: "75vw" }}
            >
              <CardHeader className="bg-dark  text-center">
                <h3 className="text-white">Order Summary</h3>
              </CardHeader>
              <CardBody>
                <Row className="align-items-center ">
                  <Col md="6">
                    <h3 className="ml-4 text-white  mb-0">
                      Order Details{" "}
                    </h3>
                    <ul
                      key={"lst1"}
                      className="align-left text-left mt-2"
                      style={{ listStyle: "none" }}
                    >
                      <li>
                        <b>Order ID: </b> {theOrder.id}
                      </li>
                      <li>
                        <b>Ordered On:</b> {theOrder.time}
                      </li>
                      <li>
                        <b>Payment Mode: </b> {theOrder.paymentMode}{" "}
                      </li>
                      <li>
                        <b>PaymentID:</b> {theOrder.paymentId}{" "}
                      </li>
                      <li>
                        <b>OrderStatus:</b> {theOrder.status}{" "}
                      </li>
                    </ul>
                  </Col>
                  <Col md="6">
                    <h3 className="ml-4 text-white mb-0">
                      Billing And Shipping Informtion{" "}
                    </h3>
                    <ul
                      key={"lst2"}
                      className="align-left text-left mt-2"
                      style={{ listStyle: "none" }}
                    >
                      <li>
                        {" "}
                        <b>Name: </b> {theOrder.name}
                      </li>
                      <li>
                        {" "}
                        <b>Phone Number: </b>
                        {theOrder.phone}
                      </li>
                      <li>
                        <b>Adress: </b> {theOrder.adress}{" "}
                      </li>
                      <li className="text-dark">_ </li>
                      <li className="text-dark">_ </li>
                    </ul>
                  </Col>
                </Row>

                <div className="mt-2">
                  <Table
                    className="align-items-center table-dark table-flush"
                    responsive
                  >
                    <thead className="thead-dark">
                      <tr key="headRow">
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Update</th>
                      </tr>
                    </thead>
                    <tbody>
                      {theOrder.items.map((item, index) => {
                        return (
                          <tr key={"orderitemNo" + index}>
                            <td>
                              <div className="avatar-group d-flex">
                                <div>
                                  <a
                                    className="avatar avatar-sm"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                  >
                                    <img
                                      alt="..."
                                      className="rounded-circle"
                                      src={item.url}
                                    />
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}€</td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity}€</td>
                            <td>
                              <UncontrolledDropdown nav>
                                <DropdownToggle className="pr-0" nav>
                                  <Media className="ml-2 d-none d-lg-block">
                                    <Button className="btn btn-danger">
                                      <i className="fas fa-edit"></i>{" "}
                                    </Button>
                                  </Media>
                                </DropdownToggle>
                                <DropdownMenu
                                  className="bg-dark  dropdown-menu-arrow"
                                  right
                                >
                                  <DropdownItem
                                    className="noti-title"
                                    header
                                    tag="div"
                                  >
                                    <h3 className="text-white">
                                      Change Status
                                    </h3>
                                  </DropdownItem>

                                  <DropdownItem className="bg-dark ">
                                    <h4 className="text-white">
                                      {" "}
                                      This Feature will be Available Soon
                                    </h4>
                                  </DropdownItem>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-dark pl-2 mt-3">
              <CardBody className="bg-dark">
                <div className="pl-lg-4">
                  <Row>
                    <Col md="6" xs="6" sm="6">
                      <h4></h4>
                    </Col>
                    <Col md="6" xs="6" sm="6">
                    <h3 className="text-white">Total Price = {amount}€ </h3>
                    <h3 className="text-white">Discount = 0 € </h3>
                      
                    <h3 className="text-white">Grand Total ={amount}€ </h3>

                    </Col>
                  </Row>
                </div>
                <div className="pl-lg-4">
                  <Row>
                    <Col md="6" xs="6" sm="6">
                      <h4></h4>
                    </Col>
                    <Col md="6" xs="6" sm="6">
                      <Button className="ml-2 pl-2 pt-3 btn btn-default">
                        Print Receipt
                      </Button>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

orderDetails.layout = Admin;

export default orderDetails;
