import { useEffect, useState } from "react";

const EventsPage = () => {

  const [eventList, setEventList] = useState([]);

  useEffect(async () => { 
    const response = await fetch(`http://localhost:9000/api/events`);
    const responseData = await response.json();
     
    setEventList(responseData);
  }, []);


  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {
          eventList.map(ev => (
            <li key={ev.id}>{ ev.title }</li>
          ))
        }
      </ul>
      
    </>
  );
};

export default EventsPage;
