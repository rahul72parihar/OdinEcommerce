import React, { useEffect } from "react";
import { getAllProducts } from "../../../api/firebase";
const Product = () => {
  const [data, setData] = React.useState([{ id: "no Product found" }]);

  useEffect(() => {
    getAllProducts().then((value) => {
      setData(value);
    });
  }, []);

  function productElement() {
    return data.map((curr) => <h2 key={curr.id}>{curr.id}</h2>);
  }
  return (
    <>
      <h1>Product1</h1>
      {productElement()}
    </>
  );
};

export default Product;
