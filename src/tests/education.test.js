import React from 'react';
import { render } from '@testing-library/react';
import Education from '../pages/Education/Education';

describe.skip('Education page', () => {
  const content = 'Bachelor Systems Engineering';
  const title = 'Education and Certificates';

  test('should render Education page title', () => {
    const { getByText } = render(<Education />);
    expect(getByText(title, { selector: 'h1' })).toBeInTheDocument();
  });

  test('should render Education page content', () => {
    const { getByText } = render(<Education />);
    expect(getByText(content)).toBeInTheDocument();
  });
});
