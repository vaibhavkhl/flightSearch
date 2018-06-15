import React, { Component } from 'react';

class Flight extends Component {

  render() {
    return (
      <div>
        <div>{this.props.flight.origin} > {this.props.flight.destination}</div>
        <div>Depart: {this.props.flight.departure}</div>
        <div>Arrive: {this.props.flight.arrival}</div>
      </div>
    );
  }
}

export default Flight;
