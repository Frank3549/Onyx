"use client";
import { useParams } from "next/navigation"
import { useState } from "react";
export default function ProductPage() {
    const {productId } = useParams();
    const productData = {
      name: "southern weather",
      tastingNotes: ["milk chocolate", "plum", "candied walnuts", "juicy & citrus finish"],
      price: 19,
    };
    const sizeOptions = ["4oz", "10oz", "2lb", "5lb"];
    const [selectedSize, setSelectedSize] = useState(sizeOptions[1]); // default to 10oz

    return (
        <div className="productPage">
            <div className = "mainTitle">
              <h1>{productData.name}</h1>
              <p><span>{productData.tastingNotes.join(" | ")}</span></p>
            </div>
        </div>


    );  
}