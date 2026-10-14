import { useState } from "react";

const Filter = () =>{
    const categories = [
        { categoryId:1, categoryName:"Electronics"},
        { categoryId:2, categoryName:"Clothing"},
        { categoryId:3, categoryName:"Furniture"},
        { categoryId:4, categoryName:"Books"},
        { categoryId:5, categoryName:"Typs"},
    ]

    const [category,setCategory] = useState("all");

    const handletCategoryChange = (event)=>{
        setCategory(event.target.value);
    };

    return(
        <div className="flex lg:flex-row flex-colr-reverse lg:justify-between justify-center items-center gap-4">
            <div>
                <input
                type="text"
                placeholder="Search Products"
                className="border border-gray-400 text-slate-800 rounded-md py-2 pl-10 pr-4 w-full focus:outline"/>
            </div>
        </div>
    );
};

export default Filter;