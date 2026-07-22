import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";


import { useDispatch } from 'react-redux';
import { Dispatch } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import "../../../css/home.css";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
});


export default function HomePage() {
  const { setPopularDishes, setNewDishes } = actionDispatch(useDispatch());
    // SELECTOR = Store => Store


  useEffect(() => {
      // Backend server data request/ fetch => Data
      const product = new ProductService();
      product.getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.DISH,
      })
      .then(data => {
        setPopularDishes(data);
      })
      .catch((err) => console.log(err));

      // slice: Data => Store    // Slice - bu backenddan qabul qilingan data ni Redux storega joylashadi
      
      
      product.getProducts({
        page: 1,
        limit: 4,
        order: "CreatedAt",
        productCollection: ProductCollection.DISH,
      })
      .then(data => {
        setNewDishes(data);
      })
      .catch((err) => console.log(err));

  }, []);


  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
