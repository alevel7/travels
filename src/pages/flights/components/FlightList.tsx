import { useState } from 'react'
import FlightDetail from './FlightDetail';

const FlightList = () => {
    const [flightList, setFlightList ] = useState([
        1, 2,3,4,5,6
    ])
  return (
    <div className=''>
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
