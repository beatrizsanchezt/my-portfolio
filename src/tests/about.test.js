import React from 'react';
import { render } from '@testing-library/react';
import About from '../pages/About/About';

describe('testing about page', () => {
  const message = 'constantly challenging myself to learn something new that I can';
  const title = 'About';

  test('should render About page title', () => {
    const { getByText } = render(<About />);
    expect(getByText(title, { selector: 'h1' })).toBeInTheDocument();
  });

  test('should render About page content', () => {
    const { getByText } = render(<About />);
    expect(getByText(message, { exact: false })).toBeInTheDocument();
  });
});
