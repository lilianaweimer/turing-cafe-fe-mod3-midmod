import React from 'react';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: null,
            date: null,
            time: null,
            number: null,
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Name' value={this.state.name} name='name' onChange={this.handleChange}/>
                <input type='text' placeholder='Date (mm/dd)' value={this.state.date} name='date' onChange={this.handleChange}/>
                <input type='text' placeholder='Time' value={this.state.time} name='time' onChange={this.handleChange}/>
                <input type='text' placeholder='Number of Guests' value={this.state.number} name='number' onChange={this.handleChange}/>
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default Form;