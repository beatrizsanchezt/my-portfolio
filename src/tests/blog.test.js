import React from 'react';
import { render } from '@testing-library/react';
import Blog from '../pages/Blog/Blog';

describe('blog page', () => {
  const message = 'Take control of your learning experience';
  const title = 'Blog';

  test('should render Blog page title', () => {
    const { getByText } = render(<Blog />);
    expect(getByText(title, { selector: 'h1' })).toBeInTheDocument();
  });

  test('should render Blog page content', () => {
    const { getByText } = render(<Blog />);
    expect(getByText(message, { exact: false })).toBeInTheDocument();
  });
});
