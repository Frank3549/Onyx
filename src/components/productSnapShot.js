
function ProductSnapShot({ product }) {

  const formatFlavors = (flavors) => {
    if (flavors.length > 1) {
      return flavors.join(" | ");
    } else {
      return flavors[0];
    }
  };

  return (
    <div className="productSnapShot viewThreeColumn">

      <img className="productSnapShotImage" src={product.image} alt={product.name} />
      <p className="productTitle">{product.name} <span className="productTitle price">{"$" + product.price}</span></p>
      <div className = "notes">
        <p>{formatFlavors(product.flavors)}</p> 
        <p>{"Roast Level: " + product.roast}</p>
      </div>

    </div>
  );
}

export default ProductSnapShot;