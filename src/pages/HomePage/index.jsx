import { JourneyPicker } from '../../components/JourneyPicker';
import { useState } from 'react';

export const HomePage = () => {
  const [journey, setJourney] = useState(null)

  const handleJourneyChange = (journey) => {
    console.log('journey')
  }
  handleJourneyChange()

  return (
    <main>
      <JourneyPicker journeyId={journeyId} journey={journey} onJourneyChange={handleJourneyChange} />
      <h1>Nalezeno spojení s id{journeyId}</h1>
    </main>
  );
};
