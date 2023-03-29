import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const mockedUsedNavigate = jest.fn();

// TeamPage.test.js
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteError: () => mockedUsedNavigate,
}));

beforeEach(() => {
  console.error = jest.fn()
})


describe('Error Page', () => {
  it('should render without crash', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  })
  

  it('should has text not found', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    const countButton = await screen.findByRole('button');
    fireEvent.click(countButton, {key: 'click'})

    expect(countButton.textContent).toEqual('count is 1');

  })
})