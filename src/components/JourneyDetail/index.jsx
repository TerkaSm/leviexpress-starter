import React from "react";
import "./style.css";
import { BusStop } from "../BusStop";

export const JourneyDetail = (journey) => {
    console.log(journey)

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((stop) => {
          <BusStop key={stop.name} name={stop.name} station={stop.station} time={stop.time} />
        })}
      {/* <BusStop name={journey.name} station={journey.station} time={journey.time} /> */}
      </div>
    </div>
  );
};
