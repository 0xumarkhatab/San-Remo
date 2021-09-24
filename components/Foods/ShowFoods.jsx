import React from "react";

import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";

import DisplayCategoriesAll from "../Categories/DisplayCategoriesAll";
import { useSelector, useDispatch } from "react-redux";
import Food from "./Food";

function ShowFoods({ reload, foods }) {
  let foodsPassed = false;
  console.log(foods, " recieved ");

  foods ? (foodsPassed = true) : (foods = useSelector((state) => state.FOODS));

  return (
    <div>
      <Card
        className="shadow bg-dark"
        style={{ width: "100%", overflowX: "hidden" }}
      >
        <CardHeader className="border-0 bg-dark ">
          {foodsPassed ? (
            <div>
              <h3 className="text-white">Foods Summary</h3>
            </div>
          ) : (
            <div>
              <h3 className="text-white">Filter by Category</h3>
              <DisplayCategoriesAll />
            </div>
          )}
        </CardHeader>

        <Table className="align-items-center table-dark table-flush" responsive>
          <thead className="thead-dark">
            <tr key="headRow">
              <th scope="col">ID</th>
              <th scope="col">Title(size)</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Extras</th>
              {foodsPassed ? "" : <th scope="col"></th>}
            </tr>
          </thead>
          <tbody>
            {foods?.map((food, index) => {
              return (
                <Food
                  key={"Fno"+index}
                  setReload={reload}
                  theFood={food}
                  foodsPassed={foodsPassed}
                />
              );
            })}
          </tbody>
        </Table>
        <CardFooter className="py-4 bg-dark text-white">
          <nav aria-label="...">
            <Pagination
              className="pagination justify-content-end mb-0"
              listClassName="justify-content-end mb-0"
            >
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  tabIndex="-1"
                >
                  <i className="fas fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  2 <span className="sr-only">(current)</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fas fa-angle-right" />
                  <span className="sr-only">Next</span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ShowFoods;
