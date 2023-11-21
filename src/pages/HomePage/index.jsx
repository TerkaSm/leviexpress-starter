import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from 'react';
import { JourneyDetail } from '../../components/JourneyDetail';

export const HomePage = () => {
  const [journey, setJourney] = useState(null)

  const handleJourneyChange = (journey) => {
    setJourney(journey)
    console.log('Co je to journey:', journey.stops)
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/* {journey === null ? null : <h1>Nalezeno spojení s id{journey.journeyId}</h1>} */}
      {journey === null ? null : <JourneyDetail  journey={journey} />}
    </main>
  );
};
