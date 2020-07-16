import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.submitReservation}>
                <input type='text' placeholder='Name' value='this.state.name' name='name'/>
                <input type='text' placeholder='Date (mm/dd)' value='this.state.date' name='date'/>
                <input type='text' placeholder='Time' value='this.state.time' name='time'/>
                <input type='text' placeholder='Number of Guests' value='this.state.number' name='number'/>
                <button>Make Reservation</button>
            </form>
        )
    }
}

export default Form;