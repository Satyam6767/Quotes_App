import React, { useState } from "react";
import { Link } from "react-router-dom";

function MainNavigation() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const navStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
  };

  const titleStyle = {
    margin: 0,
    textAlign: "center",
    textDecoration: "underline",
    
  };

  const listStyle = {
    listStyleType: "none",
    padding: 0,
  };

  const listItemStyle = {
    display: "inline",
    marginRight: "20px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  };

  const linkHoverStyle = {
    backgroundColor: "#0056b3",
  };

  return (
    <nav style={navStyle}>
      <h2 style={titleStyle}>GREAT QUOTES APP</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <Link
            to="/"
            style={
              isHovered
                ? { ...linkStyle, ...linkHoverStyle }
                : linkStyle
            }
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            All Quotes
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link
            to="/new"
            style={
              isHovered
                ? { ...linkStyle, ...linkHoverStyle }
                : linkStyle
            }
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            New Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
