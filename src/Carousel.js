import React from "react";
import "./styles.css";

export default function Carousel(props) {
  //const [isMoving,setIsMoving] = React.useState(false);
  //const itemCount = 6;
  //const slide = 0;

  const setPrev = () => {
    console.log("prev clicked");
  };
  const setNext = () => {
    console.log("next clicked");
  };
  const ImgArray = props.images;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="carousel-conatainer">
        <div className="carousel">
          {ImgArray.map((img, index) => {
            return (
              <img
                className={"carousel-photo " + (index === 0 ? "initial" : "")}
                key={index}
                src={img}
                alt="mytest"
              />
            );
          })}
          <div className="carousel-btn-prev" onClick={setPrev} />
          <div className="carousel-btn-next" onClick={setNext} />
        </div>
      </div>
    </div>
  );
}
