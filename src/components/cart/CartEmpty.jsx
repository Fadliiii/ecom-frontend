import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartEmpty=()=>{
    return(
        <div className="min-h-[800px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <MdShoppingCart size={80} className="mb-4 text-slate-500"/>
                <div className="text-3xl font-bold text-slate-700 ">
                    Your cart is empty
                </div>
                <div className="text-lg mt-2 text-slate-500">
                    Add some products to get started
                </div>
            </div>
            <div className="mt-6">
                <Link
                to="/"
                    className="group flex items-center gap-2 font-medium text-blue-500 hover:text-blue-500 transition-colors">
                    <MdArrowBack size={24} className="text-blue-500 transition-transform duration-300 ease-in-out group-hover:-translate-x-1.5"/>
                    <span className="font-medium text-blue-500 hover:text-blue-600 transition">Start Shoping</span>
                </Link>
            </div>
        </div>
       
    )
}
export default CartEmpty;