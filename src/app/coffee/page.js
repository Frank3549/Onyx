import ProductHeader from "../../components/header";
import ProductList from "../../components/productsList";
import productData from "../../../data/productDescription.json";


function Coffee() {
  return (
    <div className= "container pagePadTop">
      <ProductHeader productCategory={"Coffee"}/>
      <div className="divider"></div>
      <div className="productList">
        <ProductList 
          products = {productData}
      />
      </div>
    </div>
  );
}

export default Coffee;
