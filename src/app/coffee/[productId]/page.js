
"use client";
import { useParams } from "next/navigation"
export default function ProductPage() {
    const {productId } = useParams();


    return (
      <div>
        <h2>Product Page: {productId}</h2>
        </div>
    );  
}