import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Flight from './Flight';
import { flightsData } from '../flightsData'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightsResults: []
    }

    this.searchFlights = this.searchFlights.bind(this)
  }

  searchFlights(originCity, destinationCity, departureDate) {
    let flightsResults = flightsData.flights.filter(flight => {
      return flight.origin == originCity && flight.destination == destinationCity
    })

    this.setState({
      flightsResults: flightsResults
    })
  }

  render() {
    let flights = this.state.flightsResults.map((flight) =>
      <Flight flight={flight} key={flight.id}></Flight>
    )
    return (
      <div>
        <header>FLight Search Engine</header>
        <SearchInput searchFlights={this.searchFlights}></SearchInput>
        {flights}
      </div>
    );
  }
}

export default Home;
