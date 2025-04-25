
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Add this import
import Article from '../components/Article.js'; // Adjust path and extension as needed

describe('Article Component', () => {
  test('renders article with title, date, and preview', () => {
    const title = 'Test Article';
    const date = 'April 25, 2025';
    const preview = 'This is a test preview.';

    render(<Article title={title} date={date} preview={preview} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(title);
    expect(screen.getByText(date)).toBeInTheDocument();
    expect(screen.getByText(preview)).toBeInTheDocument();
  });

  test('renders default date when date prop is not provided', () => {
    const title = 'Test Article';
    const preview = 'This is a test preview.';

    render(<Article title={title} preview={preview} />);

    expect(screen.getByText('January 1, 1970')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(title);
    expect(screen.getByText(preview)).toBeInTheDocument();
  });

  test('renders without crashing with only required props', () => {
    const title = 'Minimal Article';
    const preview = 'Minimal preview.';

    render(<Article title={title} preview={preview} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(title);
    expect(screen.getByText(preview)).toBeInTheDocument();
  });
});