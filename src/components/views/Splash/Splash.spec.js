import React from 'react';
import { render, screen } from '@testing-library/react';

import Splash from './Splash';

describe('Splash', () => {
  test('Render message', () => {
    render(<Splash />);
    screen.getByText(/negozia consumer finance/i);
  });
});
