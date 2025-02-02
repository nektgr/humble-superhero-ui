import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SuperheroForm from '../components/Form/SuperheroForm';

describe('SuperheroForm Component', () => {
  test('displays error when the name field is empty', () => {
    const onAddMock = jest.fn();
    render(<SuperheroForm onAdd={onAddMock} />);
    
    // Fill in only the superpower input
    const superpowerInput = screen.getByPlaceholderText(/superpower/i);
    fireEvent.change(superpowerInput, { target: { value: 'Flying' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /add superhero/i }));
    
    // Expect an error message about the empty name
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent(/name cannot be empty/i);
    expect(onAddMock).not.toHaveBeenCalled();
  });

  test('displays error when the superpower field is empty', () => {
    const onAddMock = jest.fn();
    render(<SuperheroForm onAdd={onAddMock} />);
    
    // Fill in only the name input
    const nameInput = screen.getByPlaceholderText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'Superman' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /add superhero/i }));
    
    // Expect an error message about the empty superpower
    const errorMessage = screen.getByRole('alert');
    expect(errorMessage).toHaveTextContent(/superpower cannot be empty/i);
    expect(onAddMock).not.toHaveBeenCalled();
  });

  test('calls onAdd when form data is valid', async () => {
    const onAddMock = jest.fn(() => Promise.resolve());
    render(<SuperheroForm onAdd={onAddMock} />);
    
    // Fill in the form inputs
    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: 'Batman' } });
    fireEvent.change(screen.getByPlaceholderText(/superpower/i), { target: { value: 'Stealth' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /add superhero/i }));
    
    // Verify that onAdd was called with the expected data (assuming default slider value is 5)
    expect(onAddMock).toHaveBeenCalledWith({
      name: 'Batman',
      superpower: 'Stealth',
      humilityScore: 5,
    });
  });
});
