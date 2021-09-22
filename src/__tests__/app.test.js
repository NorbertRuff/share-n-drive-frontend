import React from 'react';
import * as ReactDOM from "react-dom";
import App from "../App";

beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
});


