import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

describe('Form', () => {
    it('should render all form elements', () => {
        const { getByPlaceholderText } = render(<Form />)
    });
});