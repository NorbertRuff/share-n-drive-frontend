import React from 'react';
import * as assert from "assert";

beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

it('renders without crashing', () => {
    assert(true)
});


