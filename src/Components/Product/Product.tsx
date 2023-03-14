import React, { useEffect } from "react";
import { getAllProducts } from "../../../api/firebase";
import ProductCard from "../Card/ProductCard";
import "./Product.css";
const Product = () => {
  const [data, setData] = React.useState<
    {
      category: string;
      description: string;
      id: string;
      image: string;
      pages: number;
      price: number;
      title: string;
    }[]
  >([
    {
      category: "",
      description: "",
      id: "",
      image: "",
      pages: 320,
      price: 448,
      title: "",
    },
  ]);

  useEffect(() => {
    const promise1 = Promise.resolve(getAllProducts());
    promise1.then((value: any) => {
      setData(value);
    });
  }, []);

  function productElement() {
    return data.map((curr) => (
      <ProductCard
        key={curr.id}
        title={curr.title}
        image={curr.image}
        price={curr.price}
      />
    ));
  }
  return (
    <>
      <h1 className="product-header">Products</h1>
      <div className="thumb-container">{productElement()}</div>
    </>
  );
};

export default Product;
