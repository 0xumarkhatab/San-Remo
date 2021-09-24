import React, { useState, useEffect } from "react";
import Admin from "layouts/Admin.js";
import SimpleHeader from "../../components/Headers/SimpleHeader";
import ShowFoods from "../../components/Foods/ShowFoods";
import Link from "next/link";
import { Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

import fetchAndDispatch from "../../API_WORK/fetchAndDispatch";
import { fetchCategories, fetchFoods } from "../../store/actions";

function manageFoods() {
  const dispatch = useDispatch();
  const foods = useSelector((redux) => redux.FOODS);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    dispatch(fetchFoods());
    dispatch(fetchCategories());
    
  }, []);


  return (
    <div>
      <SimpleHeader />
      <h3 className="text-center mt-4 text-white bg-transparent">
        Manage Foods
      </h3>

      <ShowFoods reload={setReload} />
      <div className="text-center">
        <Link exact href="/admin/AddFood">
          <Button color="primary" className="pt3 pb-3 ">
            Add New Food
          </Button>
        </Link>
      </div>
    </div>
  );
}
manageFoods.layout = Admin;
export default manageFoods;
