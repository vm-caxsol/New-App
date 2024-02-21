import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/this text does not exist/i);  // intentionally incorrect text
  expect(linkElement).toBeInTheDocument('Learn React link is missing');
});

test('renders the App logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/logo/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders the code edit message', () => {
  render(<App />);
  const codeEditElement = screen.getByText(/edit .*src\/App\.js.* and save to reload\./i);
  expect(codeEditElement).toBeInTheDocument();
});


