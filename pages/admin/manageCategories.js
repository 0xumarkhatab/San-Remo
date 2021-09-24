import React ,{useEffect}from "react";
import Admin from "layouts/Admin.js";

import SimpleHeader from "../../components/Headers/SimpleHeader";
import ShowCategories from "../../components/Categories/ShowCategories";
import Link from "next/link";
import { useSelector,useDispatch} from "react-redux";
import { Button } from "reactstrap";
import fetchAndDispatch from "../../API_WORK/fetchAndDispatch";
import { fetchCategories } from "../../store/actions";

function manageCategories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories() );
  }, []);
  
let categories=useSelector(state=>state.CATEGORIES);

console.log("categories received ",categories);

  return (
    <div>
      <SimpleHeader  />
      <h3 className="text-center mt-4 text-white bg-transparent">Manage Categories</h3>

      <ShowCategories />
      <div className="text-center">
      <Link exact href="/admin/AddCategory">
          <Button color="primary" className="pt3 pb-3 ">
            Add New Category
          </Button>
        </Link>
        
      </div>
    </div>
  );
}
manageCategories.layout = Admin;
export default manageCategories;
