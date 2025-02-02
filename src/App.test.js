import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';

test('renders Humble Superheroes title and form elements', () => {
  render(<App />);
  
  // Check for the title
  const titleElement = screen.getByText(/humble superheroes/i);
  expect(titleElement).toBeInTheDocument();
  
  // Check for form input placeholders
  const nameInput = screen.getByPlaceholderText(/name/i);
  const superpowerInput = screen.getByPlaceholderText(/superpower/i);
  expect(nameInput).toBeInTheDocument();
  expect(superpowerInput).toBeInTheDocument();
  
  // Check for the theme toggle button
  const themeToggle = screen.getByRole('button', { name: /dark mode/i });
  expect(themeToggle).toBeInTheDocument();
});
