import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JourneyPicker } from "../../components/JourneyPicker";
import { JourneyDetail } from "../../components/JourneyDetail";
import { SeatPicker } from "../../components/SeatPicker";
import { SelectedSeat } from "../../components/SelectedSeat";

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const [userSeat, setUserSeat] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (selectedJourney) => {
    setJourney(selectedJourney);
    setUserSeat(selectedJourney.autoSeat)
  };

  const handleBuy = async () => {
    const resp = await fetch(
      "https://apps.kodim.cz/daweb/leviexpress/api/reservation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "create",
          seat: userSeat,
          journeyId: journey.journeyId,
        }),
      }
    );
    if (!resp.ok) {
      alert("Něco se pokazilo. Server neodpovídá..");
      return;
    }
    const data = await resp.json();
    const reservation = data.results;
    console.log(data.results)
    navigate(`/reservation/${reservation.reservationId}`);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} selectedSeat={userSeat}/>
          <SeatPicker
            seats={journey.seats}
            journeyId={journey.journeyId}
            selectedSeat={userSeat}
            onSeatSelected={setUserSeat}
          />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>
              Rezervovat
            </button>
          </div>
        </>
      )}
    </main>
  );
};



// import { JourneyPicker } from '../../components/JourneyPicker';
// import { useState } from 'react';
// import { JourneyDetail } from '../../components/JourneyDetail';
// import { Seat } from '../../components/Seat';

 const Home = () => {
  const [journey, setJourney] = useState(null)

  const handleJourneyChange = (journey) => {
    setJourney(journey)
    console.log('Co je to journey:', journey.stops)
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/* Alternativní zápisy */}
      {/* {journey === null ? null : <h1>Nalezeno spojení s id{journey.journeyId}</h1>} */}
      {/* {journey === null ? null : <JourneyDetail  journey={journey} />} */}
      {journey && <JourneyDetail journey={journey} />}
      <Seat number={number}/>
    </main>
  );
};
