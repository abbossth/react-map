const ProductCard = (props) => {
  console.log(props);

  return (
    <div class="product-card">
      <h3> {props.title} </h3>
      <p>${props.price}</p>
    </div>
  );
};

export default ProductCard;
 