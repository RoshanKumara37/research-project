import React, { useEffect } from "react";
import Scan from "../img/scan.png";
import { useNavigate } from "react-router-dom";

function Processing() {
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate 5000ms -> 5 seconds
    const timeout = setTimeout(() => {
      // Navigate to server page
      navigate("/server-data");
    }, 5000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div>
      <div className="scan-animation">
        <div className="scanning-text">Scanning...</div>
        <img src={Scan} className="scanning-arrow" alt="Scanning Arrow" />
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
