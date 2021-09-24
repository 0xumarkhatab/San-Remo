import React, { useState } from "react";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";

import Order from "./order";

function ShowOrders() {
  let ordersData = useSelector((state) => state.ORDERS);
  const [Reload, setReload] = useState(1);
  const [currentFilter, setCurrentFilter] = useState("all");

  console.log("orders data ", ordersData);

  const reloader = (id) => {
    console.log("reloader called");
    setReload(Reload + 1);
  };

  const onNewFilter = (e) => {
    setCurrentFilter("new");
  };
  const onPendingFilter = (e) => {
    setCurrentFilter("pending");
  };
  const onCompletedFilter = (e) => {
    setCurrentFilter("completed");
  };
  const onAllFilter = (e) => {
    setCurrentFilter("all");
  };
  let filteredData = ordersData.filter((item) =>
    currentFilter === "all" ? item : item.status === currentFilter
  );

  return (
    <div>
      <Card className="shadow bg-gradient-dark">
        <CardHeader className="border-0 bg-dark text-white">
          <div>
            <h3 className="text-white">Orders Menu</h3>
            <Button
              color="default"
              onClick={(e) => {
                e.preventDefault();
                onAllFilter(e);
              }}
            >
              All
            </Button>

            <Button
              color="info"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                onNewFilter(e);
              }}
            >
              New
            </Button>

            <Button
              color="warning"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                onPendingFilter(e);
              }}
            >
              Pending
            </Button>
            <Button
              color="success"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                onCompletedFilter(e);
              }}
            >
              Completed
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <Table
            className="align-items-center table-dark table-flush"
            responsive
          >
            <thead className="thead-dark">
              <tr>
                <th scope="col">Items</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
                {}
                <th scope="col">Actions</th>
                {/* <th scope="col"></th>
                 */}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => {
                return (
                  <Order
                    key={`order no ${item.id}`}
                    theOrder={item}
                    setReload={reloader}
                  />
                );
              })}
            </tbody>
          </Table>
        </CardBody>
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

export default ShowOrders;
