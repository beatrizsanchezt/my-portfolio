import React from 'react';
import { render } from '@testing-library/react';
import Projects from '../pages/Projects/Projects';

describe('projects page', () => {
  const content = 'My Portfolio';
  const title = 'Projects';

  test('should render Projects page title', () => {
    const { getByText } = render(<Projects />);
    expect(getByText(title, { selector: 'h1' })).toBeInTheDocument();
  });

  test('should render Projects page content', () => {
    const { getByText } = render(<Projects />);
    expect(getByText(content)).toBeInTheDocument();
  });
});
