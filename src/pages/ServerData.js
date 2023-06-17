import React from "react";
import Check from "../img/check.png";
import { useNavigate } from "react-router-dom";
function ServerData() {
  const navigate = useNavigate();
  return (
    <div className="server-main">
      <h1>Complete</h1>
      <img src={Check} alt="check" />
      <div className="size-topic">
        <p>Your Color Size</p>
      </div>
      <div className="size-data">
        <p>Text Box</p>
      </div>

      <div className="server-btn-container">
        <button className="server-btn" onClick={() => navigate("/final-data")}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ServerData;
