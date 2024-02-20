import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('unusedVariable is not used in the component', () => {
  // Render the component
  render(<App />);

  // Attempt to access the unusedVariable
  // If the test fails, it means the variable is being used
  expect(() => {
    // Replace 'unusedVariable' with the actual name of the variable if needed
    // eslint-disable-next-line no-unused-vars
    const unusedVariable = (window as any).unusedVariable;
  }).toThrow();
});
