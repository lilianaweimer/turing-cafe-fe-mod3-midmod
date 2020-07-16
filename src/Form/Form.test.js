import React from 'react';
import Form from './Form';

import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, getByDisplayValue } from '@testing-library/react';

describe('Form', () => {

    it('should render all form elements', () => {
        const { getByPlaceholderText, getByRole } = render(<Form />);

        const nameInput = getByPlaceholderText('Name');
        const dateInput = getByPlaceholderText('Date (mm/dd)');
        const timeInput = getByPlaceholderText('Time');
        const numberInput = getByPlaceholderText('Number of Guests');
        const submitButton = getByRole('button', {name: 'Make Reservation'});

        expect(nameInput).toBeInTheDocument();
        expect(dateInput).toBeInTheDocument();
        expect(timeInput).toBeInTheDocument();
        expect(numberInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

    });

    it('should be able to fill out form inputs', async () => {
        const { getByPlaceholderText } = render(<Form />);

        const nameInput = getByPlaceholderText('Name');
        const dateInput = getByPlaceholderText('Date (mm/dd)');
        const timeInput = getByPlaceholderText('Time');
        const numberInput = getByPlaceholderText('Number of Guests');

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

        const changedName = await waitFor(() => getByDisplayValue('somebody'));
        const changedDate = await waitFor(() => getByDisplayValue('(01/02)'));
        const changedTime = await waitFor(() => getByDisplayValue('10:23'));
        const changedNumber = await waitFor(() => getByDisplayValue('5'));

        expect(changedName).toBeInTheDocument();
        expect(changedDate).toBeInTheDocument();
        expect(changedTime).toBeInTheDocument();
        expect(changedNumber).toBeInTheDocument();

    });

});