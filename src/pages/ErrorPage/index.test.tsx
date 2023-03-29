import { render, screen } from '@testing-library/react';
import ErrorPage from '.';

const mockedUsedNavigate = jest.fn();

// TeamPage.test.js
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useRouteError: () => mockedUsedNavigate,
}));

beforeEach(() => {
  console.error = jest.fn();
});
describe('Error Page', () => {
  it('should render without crash', () => {
    render(<ErrorPage />);
  });

  it('should has text not found', async () => {
    render(<ErrorPage />);

    const errorMessage = await screen.findByRole('heading', { name: /Oops!/i });

    expect(errorMessage).toBeInTheDocument;
  });
});
