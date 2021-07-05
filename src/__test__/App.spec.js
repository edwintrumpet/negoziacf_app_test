import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  test('Render message', () => {
    render(<App />);
    screen.getByText(/material ui works/i);
  });
});
