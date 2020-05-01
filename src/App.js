import React from "react";
import "./styles.css";

export default function App() {
  //const [isMoving,setIsMoving] = React.useState(false);
  //const itemCount = 6;
  //const slide = 0;
  
  const setPrev = ()=>{
    console.log("prev clicked");
  }
  const setNext = ()=>{
    console.log("next clicked");
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="carousel-conatainer">
         <div className="carousel">
          <img className="carousel-photo initial" alt ="imag1" src="https://media.kohlsimg.com/is/image/kohls/2950743_New_White?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp"/>
          <img className="carousel-photo" src="https://media.kohlsimg.com/is/image/kohls/2950743_ALT?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0" alt="Women's Apt. 9® Structured Essential Button-Down Shirt"/>
          <img className="carousel-photo" src="https://media.kohlsimg.com/is/image/kohls/2950743_ALT2?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0" alt="Women's Apt. 9® Structured Essential Button-Down Shirt"/>
          <img className="carousel-photo" src="https://media.kohlsimg.com/is/image/kohls/2950743_Black_White_Stripe_ALT9?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0" alt="Women's Apt. 9® Structured Essential Button-Down Shirt"/>
          <img className="carousel-photo" src="https://media.kohlsimg.com/is/image/kohls/2950743_Blue_Thin_Stripe_ALT17?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0" alt="Women's Apt. 9® Structured Essential Button-Down Shirt"/>
          <img className="carousel-photo" src="https://media.kohlsimg.com/is/image/kohls/2950743_White_Black_Dot_ALT9?wid=800&amp;hei=800&amp;op_sharpen=1&amp;fmt=jpeg&amp;qlt=85,1&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.8,6,0" alt="Women's Apt. 9® Structured Essential Button-Down Shirt"/>
          <div className="carousel-btn-prev" onClick={setPrev}></div>
          <div className="carousel-btn-next" onClick={setNext}></div>
      </div>
      </div>
    </div>
  );
}
