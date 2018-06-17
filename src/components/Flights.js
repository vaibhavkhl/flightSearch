import React, { Component } from 'react';
import Flight from './Flight'

class Flights extends Component {

  render() {
    let flights = this.props.flights.map((flight) =>
      <Flight flight={flight} key={flight.id}></Flight>
    )

    let returnFlights = this.props.returnFlights.map((flight) =>
      <Flight flight={flight} key={flight.id}></Flight>
    )
    return (
      <div style={{display: 'flex', padding: '5%'}}>
        <div>{flights}</div>
        <div>{returnFlights}</div>
      </div>
    );
  }
}

export default Flights;
