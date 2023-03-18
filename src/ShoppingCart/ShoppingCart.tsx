import React, { useEffect } from "react";
import { getShoppingCart } from "../../api/firebase";
import CartCard from "../Components/Card/CartCard";
import { useUserAuth } from "../context/UserAuthContext";
import "./ShoppingCart.css";
const ShoppingCart = () => {
  const { user, setCount }: any = useUserAuth();

  const [cart, setCart] = React.useState<any>();
  useEffect(() => {
    const promise1 = Promise.resolve(getShoppingCart(user.uid));
    promise1.then((value: any) => {
      if (!value) return;
      if (value.cart) setCart(value.cart);
      setCount(value.cart.length);
    });
  }, []);
  function renderCartItems() {
    return cart.map((curr: any) => {
      //   console.log(curr);
      return (
        <CartCard
          key={curr.title}
          image={curr.image}
          title={curr.title}
          quantity={curr.quantity}
          price={curr.price}
        />
      );
    });
  }

  const getSum = (total: any, curr: any) => {
    return total + curr.quantity * curr.price;
  };
  const checkout = () => {
    let total;
    if (cart) total = cart.reduce(getSum, 0);
    else total = 0;
    return (
      <div className="cart-checkout">
        <h1>
          TOTAL = <span className="limegreen">{total} ₹/-</span>
        </h1>
        <button>CHECKOUT</button>
      </div>
    );
  };

  if (!cart) return <div></div>;
  else
    return (
      <div>
        {cart && renderCartItems()}
        {checkout()}
      </div>
    );
};

export default ShoppingCart;
