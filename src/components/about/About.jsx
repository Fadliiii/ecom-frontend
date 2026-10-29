import ProductCard from "../shared/ProductCard";

const products = [
{
productId: 651,
productName : "iPhone XS",
image:"https://placehold.co/600x400",
description:"Experience the latest in the mobile advanced cameras,powerful processing, and an all-day battery.",
quantity:0,
price:1450.0,
discount:10.0,
specialPrice:1305.0
},
{
productId: 652,
productName : "iPhone Duo",
image:"https://placehold.co/600x400",
description:"Experience the new iPhone folding",
quantity:0,
price:2250,
discount:20.0,
specialPrice:2040.0
},
{
productId: 653,
productName : "Samsung Fold",
image:"https://placehold.co/600x400",
description:"Experience the new iPhone folding",
quantity:0,
price:2250,
discount:20.0,
specialPrice:2040.0
}
]
const About =()=>{
    return(
        <div className="max-w-7xl mx-auto px-4 py-8">
           <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
            About Us
           </h1>
           <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">Welcome to our e-commerce store! We are dedicated to provided
                        best products and services to our customer. Our missions is seamless
                        shopping experince while ensuring the highest our offerings.
                    </p>
                </div>
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                    alt="About Us"
                    className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" 
                    src="https://placehold.co/600x400">
                    </img>
                </div>
           </div>
            <div className="py-7 space-y-8">
                    <h1 className="text-slate-800 text-4xl font-bold text-center">Our Products</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            products.map((products,index)=>(
                                    <ProductCard
                                    key={index}
                                    image={products.image}
                                    productName={products.productName}
                                    description={products.description}
                                    specialPrice={products.specialPrice}
                                    about/>
                               
                            ))
                        }
                        
                  </div>
                </div>
        </div>
    )
}
export default About;