import React from "react";
import Link from "next/link";
import { Button } from "reactstrap";

import { useSelector, useDispatch } from "react-redux";

function Food({ theFood, setReload, foodsPassed }) {
  const foods = useSelector((state) => state.FOODS);
  console.log(foods);
  const dispatch = useDispatch();

  async function UpdateProps(update) {
    switch (update.action) {
      case "delete":
        foods.splice(update.index, 1);
        console.log("foods after Deletion ", foods);
        dispatch({
          type: "SET_FOODS",
          FOODS: foods,
        });
        setReload((prev) => !prev);

        return 0;
      case "edit":
        dispatch({
          type: "SET_EDIT_PROPS",
          EDIT_PROPS: foods[update.index],
        });
        return 0;
      case "view":
        console.log(categories[update.index]);
        dispatch({
          type: "SET_VIEW_PROPS",
          VIEW_PROPS: foods[update.index],
        });

        return 0;

      default:
        console.log("Invalid Action");
    }
  }

  const giveEnglishSize = (size) => {
    switch (size) {
      case "sm":
        return "Small";
      case "md":
        return "Medium";
      case "lg":
        return "Large";
      case "xlg":
        return "Extra Large";
      default:
        return "Undefined Size";
    }
  };

  return (
    <tr key={`Food No ${theFood.id}0`}>
      <td>{theFood.id}</td>
      <td>
        {theFood.title}
        {theFood.size ? <p>({giveEnglishSize(theFood.size)})</p> : ""}
      </td>
      <td>{theFood.category}</td>
      <td>{theFood.price}</td>
      <td>
        {theFood.Extras?.length === 0 ? (
          <p>None</p>
        ) : (
          theFood.Extras?.map((item) => {
            return (
              <div>
                <p>
                  +{item.quantity} {item.name}
                </p>
              </div>
            );
          })
        )}
      </td>
      <td>
        {foodsPassed ? (
          <p> </p>
        ) : (
          <div>
            <Link exact href="/admin/editFood" title="category1">
              <Button
                className="p-3 "
                color="primary"
                onClick={(e) => {
                  UpdateProps({
                    index: theFood.id - 1,
                    action: "edit",
                  });
                }}
              >
                Edit
              </Button>
            </Link>

            <Button
              className="p-3 "
              color="danger"
              onClick={(e) => {
                UpdateProps({
                  index: theFood.id - 1,
                  action: "delete",
                });
              }}
            >
              Delete
            </Button>

            <Link exact href="/admin/viewFood">
              <Button
                onClick={(e) => {
                  update;
                }}
                className="p-3 "
                color="info"
                onClick={(e) => {
                  UpdateProps({
                    index: theFood.id - 1,
                    action: "view",
                  });
                }}
              >
                View
              </Button>
            </Link>
          </div>
        )}
      </td>
    </tr>
  );
}

export default Food;
