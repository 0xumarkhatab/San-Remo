import { useRouter } from 'next/router';
import React from 'react'
import {useSelector} from "react-redux";
import AddCategory from './AddCategory';

function editCategory() {
    const categories=useSelector(state=>state.CATEGORIES);
    const router = useRouter();
    const item = categories.filter(c=>c.title === router.query.title )[0] ;
 
    console.log(item);

    return (
        <div>
            <AddCategory item={item} />
        </div>
    )
}

export default editCategory
