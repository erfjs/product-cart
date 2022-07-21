import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Info = () => {
  const shoeName = (
    <div className='shoeName'>
      <div>
        <h1 className='big'>Nike Zoom Air</h1>
        <span className='new'>new</span>
      </div>
      <h2 className='small'>Men's running shoes</h2>
    </div>
  );

  const description = (
    <div className='description'>
      <h3 className='title'>Product Info</h3>
      <p className='text'>
        Ensure a comfortable running session by wearing this pair of cool
        running shoes from Nike.
      </p>
    </div>
  );

  const [colorMeta, setColorMeta] = useState("#2175f5");

  const setColorFunc = (color) => {
    setTimeout(()=>setColorMeta(color),680);
  };

  const ColorContainer = (
    <div className='color-container'>
      <Helmet>
        <meta name='theme-color' content={colorMeta} />
      </Helmet>
      <h3 className='title'>Color</h3>
      <div className='colors'>
        <span
          onClick={() => setColorFunc("#2175f5")}
          className='color active'
          primary='#2175f5'
          color='blue'
        ></span>
        <span
          onClick={() => setColorFunc("#ff5521")}
          className='color'
          primary='#ff5521'
          color='orange'
        ></span>

        <span
          onClick={() => setColorFunc("#29b864")}
          className='color'
          primary='#29b864'
          color='green'
        ></span>
        <span
          onClick={() => setColorFunc("#f84848")}
          className='color'
          primary='#f84848'
          color='red'
        ></span>
        <span
          onClick={() => setColorFunc("#444")}
          className='color'
          primary='#444'
          color='black'
        ></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className='size-container'>
      <h3 className='title'>size</h3>
      <div className='sizes'>
        <span className='size'>7</span>
        <span className='size'>8</span>
        <span className='size active'>9</span>
        <span className='size'>10</span>
        <span className='size'>11</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className='buy-price'>
      <a href='/#' className='buy'>
        <i className='fas fa-shopping-cart'></i>Add to card
      </a>
      <div className='price'>
        <i className='fas fa-dollar-sign'></i>
        <h1>125.00</h1>
      </div>
    </div>
  );

  return (
    <div className='info'>
      {shoeName}
      {description}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

export default Info;
