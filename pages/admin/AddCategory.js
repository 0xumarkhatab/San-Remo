import React,{useState} from "react";
import SimpleHeader from "../../components/Headers/SimpleHeader";
import Admin from "../../layouts/Admin";
import { useSelector,useDispatch } from "react-redux";
import api from "../../API_WORK/api";

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
// layout for this page
function addCategory({item}) {
  
  const [title,setTitle]=useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [flavours, setFlavours] = useState('');
  const categories=useSelector(state=>state.CATEGORIES);
  const dispatch = useDispatch();



  const onTitleChange=(e)=>{
    setTitle(e.target.value);
  }
  const onImageUrlChange=(e)=>{
    setImageUrl(e.target.value);
  }
  const onDescriptionChange=(e)=>{
    setDescription(e.target.value);
  }
  
  const onFlavorschange=(e)=>{
    setFlavours(e.target.value);


  }

const Submitter=(e)=>{

  const Category={

    title,
    imageURL:imageUrl,
    description,
    flavors:flavours,
  }

api.put("/category",Category);

console.log("Category Updated");


}
  
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
                    <h3 className="mb-0">{item? "Edit Category":"Add New Category"}  </h3>
                  </Col>
                  <Col className="text-right" xs="4">
                  <Link onClick={Submitter} exact href="/admin/manageCategories">
          <Button onClick={Submitter} color= {item? "success" : "primary"} className="pt3 pb-3 ">
             {item? "Save Changes":"Add"} 

          </Button>
        </Link>
        
                            
                  </Col>
                </Row>
                <Form>
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
                            type="text"
                            defaultValue={item? item.title : ""}
                            onChange={(e)=>onTitleChange(e)}
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
                            Image Url
                          </label>
                          <Input
                            className="form-control-alternative"
                            onChange={(e)=>{onImageUrlChange(e)}}
                            id="input-imageUrl"
                            placeholder="www.example.com/image.png"
                            defaultValue={item? item.imageURL : ""}

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
                            htmlFor="input-address"
                          >
                            Description
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-address"
                            placeholder="Description"
                            type="textarea"
                            rows={5}
                            defaultValue={item? item.description : ""}

                            onChange={(e)=>{onDescriptionChange(e)}}
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
                            Flavors
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-flavors"
                            onChange={(e)=>{onFlavorschange(e)}}
                            defaultValue={item? item?.flavors?.map(v=>{
                              return v.title +" ";
                            }) : ""}
                            
                            type="text"
                          />
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
addCategory.layout = Admin;

export default addCategory;
