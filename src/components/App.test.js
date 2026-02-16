import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('initial inputs use correct name attributes', () => {
  const { container } = render(<App />);
  const nameInputs = container.querySelectorAll('input[name="name"]');
  const ageInputs = container.querySelectorAll('input[name="age"]');

  expect(nameInputs.length).toBe(1);
  expect(ageInputs.length).toBe(1);
});

test('add and remove fields maintain input[name] attributes', () => {
  const { container, getByText } = render(<App />);
  const addButton = getByText('Add Field');

  // add one field
  fireEvent.click(addButton);
  let nameInputs = container.querySelectorAll('input[name="name"]');
  let ageInputs = container.querySelectorAll('input[name="age"]');
  expect(nameInputs.length).toBe(2);
  expect(ageInputs.length).toBe(2);

  // remove the second field
  const removeButtons = screen.getAllByText('Remove');
  fireEvent.click(removeButtons[1]);

  nameInputs = container.querySelectorAll('input[name="name"]');
  ageInputs = container.querySelectorAll('input[name="age"]');
  expect(nameInputs.length).toBe(1);
  expect(ageInputs.length).toBe(1);
});
