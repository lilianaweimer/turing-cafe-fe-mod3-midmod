import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchReservations();
  }

  fetchReservations = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ 
      reservations: data,
      loading: false, 
    }))
  }

  addReservation = (data) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({
        name: data.name,
        date: data.date,
        time: data.time,
        number: data.number,
      })
    })
      .then(response => response.json())
      .then(data => this.fetchReservations())
      .catch(err => console.error(err)) 
  }

  deleteReservation = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/JSON'
      }
    })
      .then(() => this.fetchReservations())
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
