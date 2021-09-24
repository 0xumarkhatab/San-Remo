import React from "react";
import Admin from "layouts/Admin.js";
import SimpleHeader from "../../components/Headers/SimpleHeader";
import ShowOrders from "../../components/Orders/ShowOrders";
import {useSelector} from "react-redux";

function manageOrders() {
  return (
    <>
      <SimpleHeader />
      <ShowOrders />
      
    </>
  );
}
manageOrders.layout = Admin;
export default manageOrders;
