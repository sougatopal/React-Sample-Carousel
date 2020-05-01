import React from "react";
import ReactDOM from "react-dom";

import Carousel from "./Carousel";

const rootElement = document.getElementById("root");
const ImgArray = [
  "https://media.kohlsimg.com/is/image/kohls/2950743_New_White?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp",
  "https://media.kohlsimg.com/is/image/kohls/2950743_ALT?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0,",
  "https://media.kohlsimg.com/is/image/kohls/2950743_ALT2?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0",
  "https://media.kohlsimg.com/is/image/kohls/2950743_Black_White_Stripe_ALT9?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0",
  "https://media.kohlsimg.com/is/image/kohls/2950743_Blue_Thin_Stripe_ALT17?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0",
  "https://media.kohlsimg.com/is/image/kohls/2950743_White_Black_Dot_ALT9?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0"
];
ReactDOM.render(
  <React.StrictMode>
    <Carousel images={ImgArray} />
  </React.StrictMode>,
  rootElement
);
