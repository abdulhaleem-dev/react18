import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import {books}  from "./books";
import Book from "./Book";

const BookList = (props) => {
  return (
    <>
    <h1 style={{textAlign: "center", margin: "1rem"}}>Amazon Best Sellers</h1>
      <section className="booklist">
        {props.books.map((b,index) => (
          <Book
            bookNumber={index}
            image={b.image}
            author={b.author}
            title={b.title}
            key={b.id}
          ></Book>
        ))}
      </section>
    </>
  );
};


 const EventExample = () => {
  const handleFormInput = (e) => {
    console.log("Value Change: " +e.target.value)
  }

  const handleClick = () => {
    alert("handle button click")
  }


  return (
    <section>
      <form>
        <h2>Handle Events</h2>
        <input 
        type="text"
        onChange={handleFormInput}
        name="btn"
        style={{margin: "1rem 0"}}
        ></input>
      </form>
      </section>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList books={books} />);
