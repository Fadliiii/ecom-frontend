const btnStyles = "border-[1.2px] border-slate-800 px-3 py-1 rounded";
const SetQuantity =({
    quantity,
    cardCounter,
    handleQtyIncrese,
    handleQtyDecrese
})=>{
    return (
        <div className="flex gap-8 items-center">
            {cardCounter ? null : <div className="font-semibold"> Quantity</div>}
            <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm ">
                <button
                disabled={quantity <=1}
                onClick={handleQtyDecrese}
                className={btnStyles}>
                -
                </button>
                <div className="text-red-500">
                    {quantity}
                </div>
                <button
                onClick={handleQtyIncrese}
                className={btnStyles}>
                +
                </button>
            </div>
        </div>
    );
};
export default SetQuantity;