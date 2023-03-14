import "./ProductCard.css";
const ProductCard = (props: any) => {
  return (
    <div className="solo">
      <img src={props.image} alt={`image of the book ${props.title}`} />
      <h4>{props.title}</h4>
      <h4>₹ {props.price}</h4>
    </div>
  );
};

export default ProductCard;
