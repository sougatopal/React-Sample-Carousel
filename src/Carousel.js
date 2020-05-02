import React from "react";
import "./styles.css";

export default function Carousel(props) {
  //const [isMoving,setIsMoving] = React.useState(false);
  //const itemCount = 6;
  const [slide, setSlide] = React.useState(0);

  const setPrev = () => {
    console.log("prev clicked");
    if (slide !== 0) {
      setSlide(slide - 1);
    } else {
      setSlide(5);
    }
  };
  const setNext = () => {
    console.log("next clicked");
    if (slide !== 5) {
      setSlide(slide + 1);
    } else {
      setSlide(0);
    }
  };
  const imgArray = props.images;
  console.log("slide", slide);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="carousel-conatainer">
        <div className="carousel">
          {imgArray.map((img, index) => {
            return (
              <img
                className={
                  "carousel-photo " +
                  (index === slide ? "active" : "") +
                  (index === slide - 1 ? "prev" : "") +
                  (index === slide + 1 ? "next" : "")
                }
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
