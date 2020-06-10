import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
})

describe('<Header />', () => {

    it('User should see App title and tagline', () => {
        const { getByText } = render(<BrowserRouter> <Header /> </BrowserRouter>);
        expect(getByText('TAROT TO GO')).toBeInTheDocument();
        expect(getByText('For Mystics on the Move')).toBeInTheDocument();
    })
})
