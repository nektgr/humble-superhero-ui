import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../components/Theme/ThemeContext';
import ThemeToggle from '../components/Theme/ThemeToggle';

describe('ThemeToggle Component', () => {
  test('toggles theme from light to dark and back', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button', { name: /dark mode/i });
    
    // Initially in light mode, button should prompt to switch to dark mode.
    expect(toggleButton).toHaveTextContent(/dark mode/i);
    
    // Click to switch to dark mode
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent(/light mode/i);
    
    // Click again to switch back to light mode
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent(/dark mode/i);
  });
});
