import React from 'react';
import Card from './Card';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('<Card />', () => {
    const card = {
        name: "Nine of Cups",
        name_short: "cu09",
        value: "nine",
        value_int: 9,
        suit: "cups",
        type: "minor",
        meaning_up: "Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.",
        meaning_rev: "Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.",
        desc: "A goodly personage has feasted to his heart's content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects.",
    };

    it('should display card info', () => {
        const { getByText } = render(<BrowserRouter> <Card card={card}/> </BrowserRouter>);
        expect(getByText('Nine of Cups')).toBeInTheDocument();
        expect(getByText('Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.')).toBeInTheDocument();
    })
})