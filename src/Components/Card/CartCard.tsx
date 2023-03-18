import { Link } from "react-router-dom";
import { addProduct, deleteProduct } from "../../../api/firebase";
import { useUserAuth } from "../../context/UserAuthContext";
import "./CartCard.css";
const CartCard = (props: any) => {
  const { user }: any = useUserAuth();
  const handleAddToCartButton = async () => {
    await addProduct(user.uid, props.title, props.image, props.price);
    document.location.reload();
  };
  const handleDeleteFromCart = async () => {
    await deleteProduct(user.uid, props.title);
    document.location.reload();
  };
  return (
    <div className="cart-container">
      <div className="left">
        <Link
          to={{
            pathname: `/product/${props.title}`,
          }}
        >
          <img src={props.image} alt="image of the cart item" />
        </Link>
      </div>
      <div className="right">
        <h1>{props.title}</h1>
        <h2 className="limegreen">Price : {props.price} ₹</h2>
        <h2>Quantity : {props.quantity}</h2>
        <h2 className="limegreen">
          Subtotal : {props.quantity * props.price} ₹
        </h2>
        <button className="green-button" onClick={handleAddToCartButton}>
          ADD
        </button>
        <button className="red-button" onClick={handleDeleteFromCart}>
          {props.quantity === 1 ? "REMOVE" : "REDUCE"}
        </button>
      </div>
    </div>
  );
};

export default CartCard;
