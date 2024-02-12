import React, { useEffect, useState } from "react";
import axios from "axios";
import Quotes from "../quotes/Quotes";

function AllQuotes() {
  let [quotes, setQuotes] = useState([]);

  useEffect(function () {
    async function getQuotes() {
      const res = await axios.get("http://localhost:8080/allquotes");
      setQuotes(res.data);
    }
    getQuotes();
  }, []);

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: "#f0f0f0", 
      backgroundImage: "url('https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVvdGVzJTIwd2Vic2l0ZSUyMGdyZWVufGVufDB8fDB8fHww')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>AllQuotes</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {quotes.map((quote, index) => {
          return (
            <Quotes
              id={quote._id}
              key={quote._id}
              text={quote.text}
              author={quote.author}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default AllQuotes;
