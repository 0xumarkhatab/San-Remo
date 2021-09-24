import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { categories } from "../components/Categories/CategoriesData";
import { foodsArray } from "../components/Foods/foodsData";
import { ordersData } from "../components/Orders/ordersData";
import api from "./api";
import { io } from "socket.io-client";

function fetchAndDispatch() {
  const dispatch = useDispatch();

  (async () => {
    const { data } = await api.get("/category");

    dispatch({
      type: "SET_CATEGORIES",
      CATEGORIES: data,
    });
  })();

  // (async () => {
  //   const { data } = await api.get("/order");
  //   const socket=io("http://192.168.100.156:5050");
 
  //   socket.on('order',(order)=>{
  //    console.log("Order received ",order)
     
      
      
  //    });
   
  //    dispatch({
  //      type: "SET_ORDERS",
  //      ORDERS: data ,
  //    });
         
    
  // })();

  
  
  
  return 0;
}

export default fetchAndDispatch;
