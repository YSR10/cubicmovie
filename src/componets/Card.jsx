import React from "react";

const Card = () => {
  return (
    <>
      <div className="movie">
        <img src="images/bill-gates.png" className="poster"></img>
        <div className="movie-details">
          <div className="box">
            <h4 className="title">Movie Title</h4>
            <p className="rating">9.7</p>
          </div>
          <div className="overview">
            <h1>overview</h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
            temporibus labore commodi et libero tenetur minima quis! Adipisci
            quisquam ea sit ullam! Praesentium voluptas nobis exercitationem
            ipsa aliquid, beatae iste?
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
