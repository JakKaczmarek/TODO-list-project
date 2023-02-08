import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe('TodoForm', () => {
  const addTodoMock = jest.fn();
  it('renders correctly', () => {
    render(<TodoForm addTodo={addTodoMock}/>);
    expect(addTodoMock).toBeDefined();
  });
  it('submits form after button click', () => {
    render(<TodoForm addTodo={addTodoMock}/>);
    fireEvent.click(screen.getByText('Add'));
    expect(addTodoMock).toBeCalledTimes(1);
  });
  it('submits form with proper values', () => {
    render(<TodoForm addTodo={addTodoMock}/>);
    const expectedText = 'Test todo text';
    const expectedDate = '2024-01-01';

    // fireEvent.change(screen.getByPlaceholderText('Add anything'), { target: { value:  expectedText } });
    fireEvent.change(screen.getByTestId('text-input'), { target: { value:  expectedText } });
    fireEvent.change(screen.getByTestId('date-input'), { target: { value: expectedDate } });

    fireEvent.click(screen.getByText('Add'));
    expect(addTodoMock).toBeCalledWith(expectedText, expectedDate);
  }) 
})