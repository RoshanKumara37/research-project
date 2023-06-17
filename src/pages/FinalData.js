import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../img/Home.png";
function FinalData() {
  const navigate = useNavigate();

  return (
    <div className="server-main">
      <h1
        style={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "44px",
          color: "#636262",
        }}
      >
        Available
      </h1>

      <div>
        <p style={{ fontSize: "34px" }}>
          XYZ <span style={{ color: "#8A8989" }}> pcs </span>
        </p>
      </div>
      <div className="table-data">
        <table>
          <tr>
            <th colSpan={2}>Pick up location</th>
          </tr>
          <tr>
            <td>Floor</td>
            <td>xyz</td>
          </tr>
          <tr>
            <td>Rack No</td>
            <td>xyz</td>
          </tr>
        </table>
      </div>

      <img
        src={Home}
        alt="check"
        width={"50px"}
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default FinalData;
