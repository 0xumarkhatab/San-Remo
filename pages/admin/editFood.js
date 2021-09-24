import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import AddFood from './AddFood';

function editFood() {
const item=useSelector(state=>state.EDIT_PROPS);
console.clear();
console.table(item);
let foods=useSelector(state=>state.FOODS);
foods.splice(item.id-1,1);
const dispatch = useDispatch();

dispatch({
    type:"SET_FOODS",
    FOODS:foods,
});





    return (
        <div>
            <AddFood item={item} />
        </div>
    )
}

export default editFood
