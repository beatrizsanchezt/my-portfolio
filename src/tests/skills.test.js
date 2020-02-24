import React from 'react';
import { render } from '@testing-library/react';
import Skills from '../pages/Skills/Skills';

describe.skip('Skills page', () => {
  const message = 'Reactúytfyt';
  const title = 'Skills';

  test('should render Skills page title', () => {
    const { getByText } = render(<Skills />);
    expect(getByText(title, { selector: 'h1' })).toBeInTheDocument();
  });

  test.skip('should render Skills page content', () => {
    const { getByText } = render(<Skills />);
    expect(getByText(message)).toBeInTheDocument();
  });
});
