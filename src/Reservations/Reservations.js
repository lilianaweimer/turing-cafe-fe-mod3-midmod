import React from 'react';

function Reservations(props) {
    return (
        props.reservations.map(reservation => {
            return (<article className='reservation' id='reservation.id'>
                <h3>{reservation.name}</h3>
                <p>{reservation.date}</p>
                <p>{reservation.time}</p>
                <p>Guests: {reservation.number}</p>
                <button onClick={() => props.deleteReservation(reservation.id)}>Cancel Reservation</button>
            </article>)
        })
    )
}

export default Reservations;