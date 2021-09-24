import React, { useState } from "react";
import { Button, CardBody } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  UncontrolledTooltip,
} from "reactstrap";
import { useRouter } from "next/router";

function ShowCategories() {
  const router = useRouter();
  const [reload, setReload] = useState(false);

  const categories = useSelector((state) => state.CATEGORIES);
  const dispatch = useDispatch();

  async function UpdateProps(update) {
    switch (update.action) {
      case "delete":
        categories.splice(update.index, 1);
        console.log("categories after Deletion ", categories);
        dispatch({
          type: "SET_FOODS",
          CATEGORIES: categories,
        });
        setReload((prev) => !prev);

        return 0;
      case "edit":
        dispatch({
          type: "SET_EDIT_PROPS",
          EDIT_PROPS: categories[update.index],
        });
        return 0;
      case "view":
        console.log(categories[update.index]);
        dispatch({
          type: "SET_VIEW_PROPS",
          VIEW_PROPS: categories[update.index],
        });

        return 0;

      default:
        console.log("Invalid Action");
    }
  }

  return (
    <div>
      <Card
        className="shadow bg-gradient-dark"
        style={{ width: "100%", overflowX: "hidden" }}
      >
        <CardHeader className="border-0 bg-dark text-white">
          <div>
            <h3 className="text-white">Categories Info</h3>
          </div>
        </CardHeader>
        <CardBody>
          <Table
            className="align-items-center table-dark table-flush"
            responsive
          >
            <thead className="thead-dark">
              <tr key="headCategoryRow">
                <th scope="col">Category</th>
                <th scope="col">Title</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => {
                return (
                  <tr key={"ctg" + index}>
                    <td key={"ctgTD" + index}>
                      <div className="avatar-group-item">
                        <a
                          className={`avatar avatar-lg d-flex`}
                          href="#pablo"
                          id={"categoryShow" + index + ""}
                          onClick={(e) => e.preventDefault()}
                        >
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={category.imageURL}
                            style={{
                              width: "50px",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                        </a>
                        <UncontrolledTooltip
                          delay={0}
                          target={"categoryShow" + index + ""}
                        >
                          {category.title}
                        </UncontrolledTooltip>
                      </div>
                    </td>
                    <td>{category.title}</td>

                    <td>
                      <Button
                        className="p-3 "
                        color="primary"
                        onClick={(e) => {
                          router.push({
                            pathname: "/admin/editCategory",
                            query: { title: category.title },
                          });
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        className="p-3 "
                        color="danger"
                        onClick={(e) => {
                          UpdateProps({
                            index: index,
                            action: "delete",
                          });
                        }}
                      >
                        Delete
                      </Button>
                      <Link exact href="/admin/viewCategory">
                        <Button
                          onClick={(e) => {
                            update;
                          }}
                          className="p-3 "
                          color="info"
                          onClick={(e) => {
                            UpdateProps({
                              index: index,
                              action: "view",
                            });
                          }}
                        >
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
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

export default ShowCategories;
