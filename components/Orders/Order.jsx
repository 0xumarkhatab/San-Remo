import React from "react";
import { Badge, UncontrolledTooltip } from "reactstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Router from "next/router";

function Order({ theOrder, setReload }) {
  const [reloader, setReloader] = useState(false);
  const prices = theOrder.items.map((item) => item.price * item.quantity);
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const amount = prices.reduce(reducer);
  let orders = useSelector((state) => state.ORDERS);
  const dispatch = useDispatch();

  const proceed = (id) => {
    orders[id - 1].status = "pending";
    dispatch({
      type: "SET_ORDERS",
      ORDERS: orders,
    });
    setReloader((prev) => !prev);
  };

  async function dispatchOrderView(theOrder) {
    dispatch({
      type: "SET_VIEW_PROPS",
      VIEW_PROPS: orders[theOrder.id - 1],
    });

    // setReloader(prev=>!prev);
  }

  async function onDelete(id) {
    const newOrders = orders.filter((item) => item.id !== id);
    dispatch({
      type: "SET_ORDERS",
      ORDERS: newOrders,
    });
    console.log("new Orders ", newOrders);

    setReload(1);
  }

  const giveBadgeColor = (choice) => {
    switch (choice) {
      case "new":
        return "bg-info";
      case "pending":
        return "bg-warning";
      case "completed":
        return "bg-success";

      default:
        break;
    }
  };
  let badgeColor = giveBadgeColor(theOrder.status);

  return (
    <tr id={theOrder.id}>
      <td>
        <div className="avatar-group d-flex">
          {theOrder.items.map((item) => {
            return (
              <div>
                <a
                  className="avatar avatar-sm"
                  href="#pablo"
                  id={"tooltipItems" + item.id}
                  onClick={(e) => e.preventDefault()}
                >
                  <img alt="..." className="rounded-circle" src={item.url} />
                </a>
                <UncontrolledTooltip
                  delay={0}
                  target={"tooltipItems" + item.id}
                >
                  {item.title}(x{item.quantity})
                </UncontrolledTooltip>
              </div>
            );
          })}
        </div>
      </td>
      <td className="text-center">{theOrder.type}</td>
      <td className="text-center">{amount}€</td>
      <Badge
        color=""
        className="text-center text-capitalize mt-5 badge-dot mr-2 "
      >
        <i className={badgeColor} />
        {theOrder.status}
      </Badge>

      <td className="text">
        <td>
          <div className="avatar-group">
            <a
              className="avatar avatar-sm"
              href="#pablo"
              id={"tooltipProc" + theOrder.id}
              onClick={(e) => {
                e.preventDefault();
                proceed(theOrder.id);
              }}
            >
              <img
                alt="..."
                className="rounded-circle"
                src="https://www.kindpng.com/picc/m/145-1452108_transparent-scooter-clipart-motorcycle-delivery-icon-png-png.png"
              />
            </a>
            <UncontrolledTooltip delay={0} target={"tooltipProc" + theOrder.id}>
              Proceed
            </UncontrolledTooltip>

            <a
              className="avatar avatar-sm"
              href="#pablo"
              id={"tooltipDel" + theOrder.id}
              onClick={(e) => {
                e.preventDefault();
                onDelete(theOrder.id);
              }}
            >
              <img
                alt="..."
                className="rounded-circle"
                src="https://previews.123rf.com/images/arhimicrostok/arhimicrostok1708/arhimicrostok170802891/84747832-red-trash-can-icon-.jpg"
              />
            </a>
            <UncontrolledTooltip delay={0} target={"tooltipDel" + theOrder.id}>
              Delete
            </UncontrolledTooltip>
            <a
              className="avatar avatar-sm"
              href="/admin/orderDetails"
              id={"tooltipView" + theOrder.id}
              onClick={(e) => {
                e.preventDefault();

                dispatchOrderView(theOrder);

                console.log(
                  "before setting view props := ",
                  orders[theOrder.id - 1]
                );
                Router.push("/admin/orderDetails");
              }}
            >
              <img
                alt="..."
                className="rounded-circle"
                src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1710/faysalfarhan171018091/89010189-info-icon-isolated-on-orange-round-button-abstract-illustration.jpg"
              />
            </a>
            <UncontrolledTooltip delay={0} target={"tooltipView" + theOrder.id}>
              View
            </UncontrolledTooltip>
          </div>
        </td>
      </td>
    </tr>
  );
}

export default Order;
