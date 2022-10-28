import React from 'react'
import EventList from '../components/EventList'
import EventsForm from '../components/EventsForm'
import { useState } from 'react';
import UpdateEvent from '../components/UpdateEvent';

export default function EventTracker() {
  const [ID, setID] = useState(0);
  return (
    <>
    <div id="EventList">
      <EventList s={setID}/>
    </div>
    <EventsForm/>
    <UpdateEvent i={ID}/>
    </>
  )
}
