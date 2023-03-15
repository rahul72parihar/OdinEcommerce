import React, { useEffect } from "react";
import { getAllProducts } from "../../../api/firebase";
import ProductCard from "../Card/ProductCard";
import "./Product.css";
const Product = () => {
  const [category, setCategory] = React.useState<string | null>("all");
  const [order, setOrder] = React.useState<string | null>(null);
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
    return data
      .sort(
        (
          a: {
            category: string;
            description: string;
            id: string;
            image: string;
            pages: number;
            price: number;
            title: string;
          },
          b: {
            category: string;
            description: string;
            id: string;
            image: string;
            pages: number;
            price: number;
            title: string;
          }
        ) => {
          if (order === "descending") return b.price - a.price;
          else if (order === "ascending") return a.price - b.price;
          else return Math.random() - 0.5;
        }
      )
      .map((curr) => {
        if (category !== "all" && curr.category !== category) return;
        return (
          <ProductCard
            key={curr.id}
            title={curr.title}
            image={curr.image}
            price={curr.price}
          />
        );
      });
  }

  function filterByCategory(e: React.SyntheticEvent) {
    let target = e.target as HTMLButtonElement;
    setCategory(target.textContent);
  }
  function sortByPrice(e: React.SyntheticEvent) {
    let target = e.target as HTMLButtonElement;
    setOrder(target.textContent);
  }

  return (
    <>
      <h1 className="product-header">Products</h1>
      <div className="category-filter">
        <button onClick={filterByCategory}>non-fiction</button>
        <button onClick={filterByCategory}>biography</button>
        <button onClick={filterByCategory}>fantasy</button>
        <button onClick={filterByCategory}>young-adult</button>
        <button onClick={filterByCategory}>all</button>
      </div>
      <div className="category-filter">
        <button onClick={sortByPrice}>ascending</button>
        <button onClick={sortByPrice}>descending</button>
        <button onClick={sortByPrice}>random</button>
      </div>
      <div className="thumb-container">{productElement()}</div>
    </>
  );
};

export default Product;
