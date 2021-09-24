import React from "react";
import { UncontrolledTooltip } from "reactstrap";

import { categories } from "./CategoriesData";

function DisplayCategoriesAll() {
  return (
    <div className="avatar-group d-flex">
      {categories.map((category, index) => {
        return (
          <div key={"categ" + index} className="avatar-group-item">
            <a
              className={`avatar avatar-lg d-flex`}
              href="#pablo"
              id={"categoryShow" + index + ""}
              onClick={(e) => e.preventDefault()}
            >
              <img
                alt="..."
                className="rounded-circle"
                src={category.url}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
            </a>
            <UncontrolledTooltip delay={0} target={"categoryShow" + index + ""}>
              {category.title}
            </UncontrolledTooltip>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayCategoriesAll;
