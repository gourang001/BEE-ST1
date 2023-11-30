import React from "react";
import "./Home.css";
import ImgBook from "../assets/book.jpg";
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="homePage">
      <header className="Home">
        <div className="home-heading">
          <h2 style={{ fontSize: "100px" }}>Books Store For You</h2>
          <p>Checkout Books From Here.</p>
          <Link to={'/books'}>
          <button className="viewbutton">View Books</button>
          </Link>
        </div>
        <div className="home-heading1">
          <img className="bookimg" src={ImgBook} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Home;
