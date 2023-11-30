import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Books.css";
import BooksCard from "./BooksCard";

const Books = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/v1/getBooks")
        .then((res) => setData(res.data.books));
    };
    fetch();
  }, []);
  // console.log(data);
  return (
    <div style={{ minHeight: "97vh",width:"100%" }}>
      <div className="bookstyle">
        <h4 style={{paddingTop:"15px"}}>Books Section</h4>
      </div>
      {data ? (
        data &&
        data.map((item, index) => (
          <div className="bookcards"  key={index}>
            <BooksCard item={item} />
          </div>
        ))
      ) : (
        <div className="">Loading...</div>
      )}
    </div>
  );
};

export default Books;
