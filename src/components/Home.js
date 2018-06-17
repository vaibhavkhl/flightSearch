import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Flights from './Flights';
import { flightsData } from '../flightsData'
import './style.css'
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightsResults: [],
      refinedFlightsResults: [],
      returnFlightsResults: [],
      refinedReturnFlightsResults: []
    }

    this.searchFlights = this.searchFlights.bind(this)
    this.refineSearch = this.refineSearch.bind(this)
  }

  searchFlights(originCity, destinationCity, departureDate, returnDate) {

    let flightsResults = flightsData.flights.filter(flight => {
      return flight.origin == originCity &&
        flight.destination == destinationCity &&
        flight.date == departureDate
    })

    let returnFlightsResults
    if (returnDate) {
      returnFlightsResults = flightsData.flights.filter(flight => {
        return flight.origin == destinationCity &&
          flight.destination == originCity &&
          flight.date == returnDate
      })
    }

    this.setState({
      flightsResults: flightsResults,
      refinedFlightsResults: flightsResults,
      returnFlightsResults: returnFlightsResults,
      refinedReturnFlightsResults: returnFlightsResults
    })
  }

  refineSearch(value) {
    let flightsResults = this.state.flightsResults
    let newResults = flightsResults.filter(flight => {
      return flight.price < value.max &&
        flight.price > value.min
    })

    let newReturnResults
    if (this.state.returnFlightsResults.length > 0) {
      let returnFlights = this.state.returnFlightsResults
      newReturnResults = returnFlights.filter(flight => {
        return flight.price < value.max &&
          flight.price > value.min
      })
    }

    this.setState({
      refinedFlightsResults: newResults,
      refinedReturnFlightsResults: newReturnResults
    })
  }

  render() {
    return (
      <div>
      <header>FLight Search Engine</header>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div className={'search-input-box'}>
            <SearchInput searchFlights={this.searchFlights}
            refineSearch={this.refineSearch}></SearchInput>
          </div>
          <div style={{width: '70%'}}>
            <Flights flights={this.state.refinedFlightsResults || []}
              returnFlights={this.state.refinedReturnFlightsResults || []}></Flights>
          </div>
        </div>
        </div>
    );
  }
}

export default Home;
