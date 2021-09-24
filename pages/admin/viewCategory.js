import React from "react";
import Admin from "../../layouts/Admin";
import SimpleHeader from "../../components/Headers/SimpleHeader";
import { useSelector } from "react-redux";
import "../../assets/css/nextjs-argon-dashboard.css";

function viewCategory() {
  let item = useSelector((state) => state.VIEW_PROPS);
  item = { ...item };
  console.log(item);

  return (
    <div>
      <SimpleHeader />
      <div className="item_img  ml-3 mt-2">
        <img src={item.imageURL} alt={item.title} />
        <div className="mt-2 ml-10">
          <b className="text-white">{item.title}</b>
          <h4 className="text-white">{item.description}</h4>

          <p className="d-flex">
            <i class="mt-1 fas fa-star"></i>
            <i class="mt-1 fas fa-star"></i>
            <i class="mt-1 fas fa-star"></i>
            <i class="mt-1 fas fa-star"></i>
            <i class="mt-1 fas fa-star-half-alt"></i>
            <p className="ml-1"> 4.5 </p>
          </p>
          {/* */}
        </div>
      </div>
    </div>
  );
}

viewCategory.layout = Admin;

export default viewCategory;
