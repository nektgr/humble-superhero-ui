import React from 'react';
import { render, screen } from '@testing-library/react';
import SuperheroList from '../components/Superhero/SuperheroList';

describe('SuperheroList Component', () => {
  test('renders "No superheroes yet!" message when the list is empty', () => {
    render(<SuperheroList superheroes={[]} />);
    expect(screen.getByText(/no superheroes yet!/i)).toBeInTheDocument();
  });

  test('renders a list of superhero cards when superheroes are provided', () => {
    const superheroes = [
      { name: 'Superman', superpower: 'Flight', humilityScore: 10 },
      { name: 'Batman', superpower: 'Stealth', humilityScore: 8 },
    ];
    
    render(<SuperheroList superheroes={superheroes} />);
    
    superheroes.forEach((hero) => {
      expect(screen.getByText(hero.name)).toBeInTheDocument();
      expect(screen.getByText(new RegExp(hero.superpower, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(String(hero.humilityScore), 'i'))).toBeInTheDocument();
    });
  });
});
