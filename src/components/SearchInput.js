import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originCity: '',
      destinationCity: ''
    };

    this.setOriginCity = this.setOriginCity.bind(this);
    this.setDestinationCity = this.setDestinationCity.bind(this)
    this.setDepartureDate = this.setDepartureDate.bind(this)
    this.setReturnDate = this.setReturnDate.bind(this)
    this.searchFlights = this.searchFlights.bind(this)
  }

  setOriginCity(event) {
    this.setState({originCity: event.target.value})
  }

  setDestinationCity(event) {
    this.setState({destinationCity: event.target.value})
  }

  setDepartureDate(event) {
    this.setState({departureDate: event.target.value})
  }

  setReturnDate(event) {
    this.setState({returnDate: event.target.value})
  }
  searchFlights() {
    this.props.searchFlights(this.state.originCity, this.state.destinationCity,
      this.state.departureDate)
  }

  render() {
    return (
      <div>
        <div>
          <input type="text"
            value={this.state.originCity}
            onChange={this.setOriginCity}/>
        </div>
        <div><input type="text" value={this.state.destinationCity}
        onChange={this.setDestinationCity}/></div>
        <div>
          <input type="date" value={this.state.departureDate} onChange={this.setDepartureDate} />
        </div>
        <div>
          <input type="date" value={this.state.returnDate} onChange={this.setReturnDate} />
        </div>
        <div><input type="button" onClick={this.searchFlights} /></div>
      </div>
    );
  }
}

export default SearchInput;
