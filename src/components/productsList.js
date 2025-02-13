"use client";
import ProductSnapShot from "./productSnapShot";

function ProductList({products}) {
    


    return(
        <>
            {products.map(product => (
                <ProductSnapShot 
                    product={product} 
                    key={product.id}
                />
            ))}
        </>
    )
}

export default ProductList;