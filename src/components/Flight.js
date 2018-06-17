import React, { Component } from 'react';
import './style.css'
class Flight extends Component {

  render() {
    return (
      <div className={'flight-box'}>
        <div>{this.props.flight.origin} > {this.props.flight.destination}</div>
        <div>Depart: {this.props.flight.departure}</div>
        <div>Arrive: {this.props.flight.arrival}</div>
        <div>Price: {this.props.flight.price}</div>
      </div>
    );
  }
}

export default Flight;
