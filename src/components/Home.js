import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Flight from './Flight';
import { flightsData } from '../flightsData'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightsResults: [],
      refinedFlightsResults: []
    }

    this.searchFlights = this.searchFlights.bind(this)
    this.refineSearch = this.refineSearch.bind(this)
  }

  searchFlights(originCity, destinationCity, departureDate) {

    let flightsResults = flightsData.flights.filter(flight => {
      return flight.origin == originCity &&
        flight.destination == destinationCity &&
        flight.date == departureDate
    })

    this.setState({
      flightsResults: flightsResults,
      refinedFlightsResults: flightsResults
    })
  }

  refineSearch(value) {
    let flightsResults = this.state.flightsResults
    let newResults = flightsResults.filter(flight => {
      return flight.price < value.max &&
        flight.price > value.min
    })

    this.setState({
      refinedFlightsResults: newResults
    })
  }

  render() {
    let flights = this.state.refinedFlightsResults.map((flight) =>
      <Flight flight={flight} key={flight.id}></Flight>
    )
    return (
      <div>
        <header>FLight Search Engine</header>
        <SearchInput searchFlights={this.searchFlights} refineSearch={this.refineSearch}></SearchInput>
        {flights}
      </div>
    );
  }
}

export default Home;
