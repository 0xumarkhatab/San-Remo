import React, { useState } from "react";
import SimpleHeader from "../../components/Headers/SimpleHeader";
import Admin from "../../layouts/Admin";

import Link from "next/link";

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
  Col,
} from "reactstrap";

import SelectMenuSingle from "../../components/SelectMenu/SelectMenuSingle";
import SelectMenuMultiple from "../../components/SelectMenu/SelectMenuMultiple";
import { useSelector, useDispatch } from "react-redux";
import api from "../../API_WORK/api";

// layout for this page
let title, category, sizes, description, price;

function addFood({ item }) {
  console.log("existing Food Recieved", item);
  const [showSizeDiv, setShowSizeDiv] = useState(false);

  const [prices, setPrices] = useState([]);
  const [title, setTitle] = useState(item ? item.title : "");
  const [category, setCategory] = useState(item ? item.category : "");
  const [allergies, setAllergies] = useState(item ? item.alleries : "");
  const [description, setDescription] = useState(item ? item.description : "");
  const [imageUrl, setImageUrl] = useState(item ? item.url : "");
  const [isextras, setIsextras] = useState(false);

  const [sizes, setSizes] = useState([]);
  const [currentSize, setCurrentSize] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");

  const foods = useSelector((state) => state.FOODS);
  const categories = useSelector((state) => state.CATEGORIES);
  console.log(useSelector((state) => state));

  const dispatch = useDispatch();

  function Submitter(e) {
    
     
    let price = document.getElementById("input-price").value;
if(sizes.length===0){
  sizes.push({
    price:price,
    size:null,
  })
}
    const food =
      {    foodNo: (foods?.length ? length : 0) + 1,
            title: title,
            price:0,
            allergies: allergies,
            description: description,
            extras: isextras,
            // imageUrl: imageUrl,
            category: category,
            sizes:sizes,
          }
        

      api.post("/food", food);
      console.log("Food is ", food);
     
    (async () => {
      await api.get("/food").then((c) => console.log(c.data));
    })();

    // console.log(food);
  }
  const onCategoryChange = (e) => {
    setCategory(e.value);
  };
  const onPriceChanger = (e) => {
    prices.push(Number(e.target.value));
    setPrices(prices);
  };
  const onTitleChanger = (e) => {
    setTitle(e.target.value);
  };

  const onImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const onDescriptionChanger = (e) => {
    setDescription(e.target.value);
  };

  const sizeAdder = (e) => {
     document.getElementById("input-price").disabled=true;

    const s = sizes;

    s.push({
      price: currentPrice,
      size: currentSize,
    });
    console.log("size added ", s);

    setSizes(s);
  };

  const onAllergiesChanger = (e) => {
    // let arr = "";
    // arr = arr.concat("" + e.target.value);
    // arr = arr.split(",", 1000);

    setAllergies(e.target.value);

  };
  const onextrasChanger = (e) => {
    // console.log(e.target.checked);

    setIsextras(e.target.checked);
  };

  const categoryOptions = categories.map((cat) => {
    return {
      value: cat.title,
      label: cat.title,
    };
  });

  const sizesOptions = [
    { value: "sm", label: "Small" },
    { value: "md", label: "Medium" },
    { value: "lg", label: "Large" },
    { value: "xlg", label: "Extra Large" },
  ];

  return (
    <>
      <SimpleHeader />

      <Container className="mt-7" fluid>
        <Row>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0"></CardHeader>
              <CardBody>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">
                      {item ? "Edit Existing Food" : "Add New Food"}{" "}
                    </h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Link
                      exact
                      href="/admin/manageFoods"
                      onClick={(e) => Submitter(e)}
                    >
                      <Button
                        onClick={(e) => Submitter(e)}
                        color={item ? "success" : "primary"}
                        className="pt3 pb-3 "
                      >
                        {item ? "Save Changes" : "Add"}
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <hr className="mt-2 mb-2" />
                      </Col>
                    </Row>
                  </div>

                  <div className="pl-lg-4 text-center">
                    <Row>
                      <Col md="12">
                        <p>Click On Every Field at least Once</p>
                      </Col>
                    </Row>
                  </div>

                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <hr className="mb-2" />
                      </Col>
                    </Row>
                  </div>

                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Title
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-title"
                            placeholder="pizza , speghati etc...."
                            autoFocus
                            type="text"
                            defaultValue={item ? item.title : ""}
                            onChange={(e) => {
                              onTitleChanger(e);
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <div className="pl-lg-4 ">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-category"
                          >
                            Select the Category
                          </label>
                          <SelectMenuSingle
                            id="input-category"
                            options={categoryOptions}
                            defaultValue={item ? item.category : ""}
                            onChangeHandler={onCategoryChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  {/* <div id="sizesDiv">
                    <div className="pl-lg-4 ">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-sizes"
                            >
                              Add Size(optional)
                            </label>
                            <SelectMenuMultiple
                              id="input-sizes"
                              onChangeHandler={onSizesChanger}
                              options={sizesOptions}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  </div> */}
                  <div className="pl-lg-4 ">
                    <Row>
                      <Col md="12">
                        <Button
                          className="p-3 mt-2"
                          color="primary"
                          onClick={(e) => {
                            setShowSizeDiv(true);
                          }}
                        >
                          + Manage Size
                        </Button>
                      </Col>
                    </Row>
                  </div>

                  {showSizeDiv ? (
                    <div className="sizesDiv">
                      <div className="pl-lg-4 ">
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-sizeSize"
                              >
                                Size
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-sizesSize"
                                placeholder="32x45cm"
                                type="text"
                                onChange={(e) => {
                                  console.log("sizes got", e.target.value);
                                  setCurrentSize(e.target.value);
                                }}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <div className="pl-lg-4 ">
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-sizePrice"
                              >
                                Price
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-sizePrice"
                                placeholder="4.33€"
                                type="text"
                                onChange={(e) => {
                                  console.log("sizes got", e.target.value);
                                  setCurrentPrice(e.target.value);
                                }}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <div className="pl-lg-4 ">
                        <Row>
                          <Col md="12">
                            <Button
                              className="p-3 mt-2"
                              color="primary"
                              onClick={(e) => {
                                setShowSizeDiv(false);
                                sizeAdder(e);
                              }}
                            >
                              ADD
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="pl-lg-4 ">
                    <Row>
                      <Col md="12"> 
                    {
                        sizes.map(s=>{
                          return (
                            <div className="text-center ml-4 mr-4 mt-2 d-flex justify-content-between">
                            <Button  color="danger">Delete</Button>
                            <b>{s.price}€</b>
                            <b>{s.size}</b>
                            </div>

                          )
                        })

                    }




                        
                      </Col>
                    </Row>
                  </div>

                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Image Url
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-imageUrl"
                            placeholder="www.example.com/image.png"
                            type="text"
                            defaultValue={item ? item.url : ""}
                            onChange={(e, v) => onImageUrlChange(e, v)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-price"
                          >
                            Price
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-price"
                            placeholder="4.56€"
                            defaultValue={item ? item.price : ""}
                            onChange={(e, v) => onPriceChanger(e, v)}
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-allergies"
                          >
                            Allergies
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-allergies"
                            placeholder="Allergies i,i,1,2"
                            type="text"
                            defaultValue={item ? item.allergies : ""}
                            onChange={(e, v) => onAllergiesChanger(e, v)}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Description
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-address"
                            placeholder="Description"
                            defaultValue={item ? item.description : ""}
                            type="textarea"
                            rows={5}
                            onChange={(e) => {
                              onDescriptionChanger(e);
                            }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <Input
                            type="checkbox"
                            onChange={(e) => {
                              onextrasChanger(e);
                            }}
                          />
                          <p>extras Included?</p>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
addFood.layout = Admin;

export default addFood;
