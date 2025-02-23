"use client";
import { useParams } from "next/navigation"
import { useState } from "react";
import Image from "next/image"; 
export default function ProductPage() {
    const {productId } = useParams();
    const productData = {
      name: "southern weather",
      tastingNotes: ["milk chocolate", "plum", "candied walnuts", "juicy & citrus finish"],
      price: 19,
      image: "https://onyxcoffeelab.com/cdn/shop/files/southernweather_1200x.webp?v=1724682333"
    };
    const sizeOptions = ["4oz", "10oz", "2lb", "5lb"];
    const [selectedSize, setSelectedSize] = useState(sizeOptions[1]); // default to 10oz

    return (
        <div className="product-page">
            <div className = "main-title">
              <h1>{productData.name}</h1>
              <div className="tasting-notes">
                <p><span>{productData.tastingNotes.join(" | ")}</span></p>
              </div>
            </div>

            <div className= "image-container">
              <Image 
                src={productData.image} 
                alt={productData.name + " image"} 
                width={450} 
                height={450}      
                layout="responsive"
                />
            </div>

        </div>


    );  
}