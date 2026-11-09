export const formatPrice = (amout)=>{
    return new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    }).format(amout);
}