import React, { useEffect, useRef } from "react";
import Gradients from "../components/Gradients";
import ProductImages from "../components/ProductImages";
import Info from "../components/Info/Info";

import logo from "../assets/img/logo.png";

const Home = () => {
  var shoeHeight;
  var prevColor = "blue";
  var animateOrNot = true;

  const colors = useRef(null);
  const sizes = useRef(null);
  const shoes = useRef(null);
  const gradients = useRef(null);
  const shoeBackground = useRef(null);

  function changeColor() {
    if (!animateOrNot) {
      console.log("waittttt");
      return;
    }
    var primary = this.getAttribute("primary");
    var color = this.getAttribute("color");
    var shoe = document.querySelector(`.shoe[color="${color}"]`);
    var gradient = document.querySelector(`.gradient[color="${color}"]`);
    var prevGradient = document.querySelector(
      `.gradient[color="${prevColor}"]`
    );

    // showing correct color
    colors.current.forEach((color) => color.classList.remove("active"));
    this.classList.add("active");

    // changing primary css variable
    document.documentElement.style.setProperty("--primary", primary);

    // showing correct img
    shoes.current.forEach((s) => s.classList.remove("show"));
    shoe.classList.add("show");

    // dealing with gradient
    gradients.current.forEach((g) => g.classList.remove("display", "behind"));
    prevGradient.classList.add("behind");
    gradient.classList.add("display");

    // logic
    prevColor = color;
    animateOrNot = false;

    // hack
    setTimeout(() => {
      animateOrNot = true;
    }, 800);
  }

  function changeSize() {
    sizes.current.forEach((size) => size.classList.remove("active"));
    this.classList.add("active");
  }

  // for responsive behaviour
  const changeHeight = () => {
    var x = window.matchMedia("(max-width:1000px)");
    !shoes.current
      ? (shoeHeight = 0)
      : (shoeHeight = shoes.current[0].offsetHeight);

    if (x.matches) {
      if (shoeHeight === 0) {
        try {
          setTimeout(changeHeight, 50);
        } catch (error) {
          alert("Something is Wrong!!");
        }
      }
      shoeBackground.current.style.height = `${shoeHeight * 0.9}px`;
    } else if (!!shoeBackground.current) {
      // go back to default
      shoeBackground.current.style.height = "475px";
    }
  };

  useEffect(() => {
    sizes.current = document.querySelectorAll(".size");
    colors.current = document.querySelectorAll(".color");
    shoes.current = document.querySelectorAll(".shoe");
    gradients.current = document.querySelectorAll(".gradient");
    shoeBackground.current = document.querySelector(".shoeBackground");

    colors.current.forEach((color) =>
      color.addEventListener("click", changeColor)
    );

    sizes.current.forEach((size) => size.addEventListener("click", changeSize));

    changeHeight();
  }, [changeHeight]);

  window.addEventListener("resize", changeHeight);

  return (
    <div className='Home'>
      <div className='container'>
        <div className='card'>
          <div className='shoeBackground'>
            <Gradients />

            <h1 className='nike'>nike</h1>
            <img src={logo} alt='logo' className='logo' />
            <a href='/#' className='share'>
              <i className='fas fa-share-alt'></i>
            </a>

            <ProductImages />
          </div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Home;
