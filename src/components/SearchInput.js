import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'

const divStyle = {
//  margin: '10px',
  padding: '10px'
};

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originCity: '',
      destinationCity: '',
      departureDate: '',
      returnDate: '',
      value: {
        min: 0,
        max: 10000
      },
      searchType: 'return'
    };

    this.setOriginCity = this.setOriginCity.bind(this);
    this.setDestinationCity = this.setDestinationCity.bind(this)
    this.setDepartureDate = this.setDepartureDate.bind(this)
    this.setReturnDate = this.setReturnDate.bind(this)
    this.searchFlights = this.searchFlights.bind(this)
    this.refineSearch = this.refineSearch.bind(this)
    this.setOneWay = this.setOneWay.bind(this)
    this.setReturn = this.setReturn.bind(this)
  }

  setOriginCity(event) {
    this.setState({originCity: event.target.value.toUpperCase()})
  }

  setDestinationCity(event) {
    this.setState({destinationCity: event.target.value.toUpperCase()})
  }

  setDepartureDate(event) {
    this.setState({departureDate: event.target.value})
  }

  setReturnDate(event) {
    this.setState({returnDate: event.target.value})
  }
  searchFlights() {
    this.props.searchFlights(this.state.originCity, this.state.destinationCity,
      this.state.departureDate, this.state.returnDate)
  }

  refineSearch(value) {
    this.setState({
      value: value
    })
    this.props.refineSearch(value)
  }

  setOneWay() {
    this.setState({
      searchType: 'oneway'
    })
  }

  setReturn() {
    this.setState({
      searchType: 'return'
    })
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.setOneWay}>One way</button>
          <button onClick={this.setReturn}>Return</button>
        </div>
        <div style={divStyle}>
          <input type="text"
            placeholder="enter origin city"
            value={this.state.originCity}
            onChange={this.setOriginCity}/>
        </div>
        <div style={divStyle}>
          <input type="text"
            placeholder="enter destination city"
            value={this.state.destinationCity}
            onChange={this.setDestinationCity}/>
        </div>
        <div style={divStyle}>
          <label>Departure Date</label>
          <input type="date" value={this.state.departureDate} onChange={this.setDepartureDate} />
        </div>

        { this.state.searchType == 'return' &&
          <div style={divStyle}>
            <label>Return Date</label>
            <input type="date" value={this.state.returnDate} onChange={this.setReturnDate} />
          </div>
        }

        <div style={divStyle}>
          <input type="button" value="search" onClick={this.searchFlights} />
        </div>

        <div style={{padding: '10px', margin: '10px'}}>
          <label>Refine flight search</label>
          <div style={{margin: '25px 25px 25px 0'}}>
            <InputRange
              maxValue={10000}
              minValue={0}
              value={this.state.value}
              onChange={value => this.refineSearch( value )} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchInput;
