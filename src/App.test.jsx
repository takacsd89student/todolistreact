import { render, screen, fireEvent } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import App from './App';

expect.extend(matchers);

test('renders App component', () => {
  render(<App />);
  const header = screen.getByText('My Todolist');
  expect(header).toBeInTheDocument();
});

  // Click the Clear button
  const button = screen.getByText('Clear');
  fireEvent.click(button);

  // Check if the todo is removed from the table
  const noTodoText = screen.queryByText(/Test Todo/i);
  expect(noTodoText).not.toBeInTheDocument();