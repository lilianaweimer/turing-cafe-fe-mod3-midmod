import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, getByDisplayValue } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {

  it('should be able to make a reservation', () => {
    const { getByPlaceholderText, getByRole, getByText, debug } = render(<App />);
    
    const nameInput = getByPlaceholderText('Name');
    const dateInput = getByPlaceholderText('Date (mm/dd)');
    const timeInput = getByPlaceholderText('Time');
    const numberInput = getByPlaceholderText('Number of Guests');
    const submitButton = getByRole('button', {name: 'Make Reservation'});


    fireEvent.change(nameInput, {
        target: {value: 'somebody'}
    });
    fireEvent.change(dateInput, {
        target: {value: '(01/02)'}
    });
    fireEvent.change(timeInput, {
        target: {value: '10:23'}
    });
    fireEvent.change(numberInput, {
        target: {value: '5'}
    });
    fireEvent.click(submitButton);
    debug()
    
    const changedName = getByText('somebody');
    const changedDate = getByText('(01/02)');
    const changedTime = getByText('10:23');
    const changedNumber = getByText('Guests: 5');

    expect(changedName).toBeInTheDocument();
    expect(changedDate).toBeInTheDocument();
    expect(changedTime).toBeInTheDocument();
    expect(changedNumber).toBeInTheDocument();
    
  })
})
