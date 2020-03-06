import React from 'react';
import { render } from '@testing-library/react';
import Skills from '../pages/Skills/Skills';

describe('skills page', () => {
  const message = 'React';
  const title = 'Skills';

  test('should render Skills page title', () => {
    const { getByText } = render(<Skills />);
    expect(getByText(title, { selector: 'h1' })).toBeInTheDocument();
  });

  test('should render Skills page content', () => {
    const { getByText } = render(<Skills />);
    expect(getByText(message)).toBeInTheDocument();
  });
});
