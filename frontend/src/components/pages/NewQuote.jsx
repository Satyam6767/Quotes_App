import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewQuote() {
  let navigate = useNavigate();
  let usernameInputRef = useRef();
  let quoteInputRef = useRef();

  async function addQuoteHandler(e) {
    e.preventDefault();
    let author = usernameInputRef.current.value;
    let text = quoteInputRef.current.value;

    try {
      let res = await axios.post("http://localhost:8080/addquotes", {
        author,
        text,
      });
      navigate("/");
    } catch (e) {
      console.log("cannot create a quote");
    }
  }

  const formContainerStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: "#f0f0f0", 
      backgroundImage: "url('https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cXVvdGVzJTIwd2Vic2l0ZSUyMGdyZWVufGVufDB8fDB8fHww')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      }}>
    <div style={formContainerStyle}>
      <form onSubmit={addQuoteHandler}>
        <div>
          <label htmlFor="naam">Author:</label>
          <input
            type="text"
            placeholder="Author's Name"
            id="naam"
            ref={usernameInputRef}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="textt">Quote:</label>
          <textarea
            id="textt"
            cols="30"
            rows="4"
            placeholder="Author's Quote"
            ref={quoteInputRef}
            style={inputStyle}
          ></textarea>
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={() => buttonStyle.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseLeave={() => buttonStyle.backgroundColor = "#007bff"}
          >
            Add Quote
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default NewQuote;
