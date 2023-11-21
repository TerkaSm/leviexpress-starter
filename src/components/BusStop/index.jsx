import React from "react";
import "./style.css";

export const BusStop = (journey) => {
  return (
    <div className="bus-stop">
      <div className="bus-stop__bullet"></div>
      <div className="bus-stop__place">
        <div className="bus-stop__city">Praha {journey.name}</div>
        <div className="bus-stop__station">ÚAN Florenc {journey.station} </div>
      </div>
      <div className="bus-stop__departure">15:55 {journey.time} </div>
    </div>
  );
};
