import React from "react";
import "./style.css";

export const BusStop = (journey) => {
  return (
    <div className="bus-stop">
      <div className="bus-stop__bullet"></div>
      <div className="bus-stop__place">
        <div className="bus-stop__city">{journey.name}</div>
        <div className="bus-stop__station">{journey.station}</div>
      </div>
      <div className="bus-stop__departure">{journey.time}</div>
    </div>
  );
};
