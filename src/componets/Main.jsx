import react from "react";
import Card from "./Card";

const Main = () => {
  return (
    <>
      <div className="header">
        <nav>
          <h1 className="logo">CUBIC</h1>
          <ul>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Theatre</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Drama</a>
            </li>
            <li>
              <a href="#">Comedie</a>
            </li>
          </ul>
        </nav>
        <form>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
            ></input>
            <button></button>
          </div>
        </form>
      </div>
      <div className="container">
        <Card />
      </div>
    </>
  );
};
export default Main;
