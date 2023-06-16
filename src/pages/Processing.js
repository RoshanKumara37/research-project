import React from "react";
import Scan from "../img/scan.png";
import { useNavigate } from "react-router-dom";
function Processing() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="scan-animation">
        <div class="scanning-text">Scanning...</div>
        <img src={Scan} class="scanning-arrow"></img>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Processing;
