import React, { useState } from 'react'
import FlightDetail from './FlightDetail';

const FlightList = () => {
    const [flightList, setFlightList ] = useState([
        1, 2
    ])
  return (
    <div>
      {
        flightList.map( flt => {
            return (
              <FlightDetail key={flt} />
            );
        })
      }
    </div>
  )
}

export default FlightList
