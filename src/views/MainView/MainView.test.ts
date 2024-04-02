import { render, screen } from '@testing-library/react';
import { useWeatherApi } from '../../api/hooks/useWeatherApi';
import { MainView } from '../../views/MainView/MainView';

jest.mock('../../api/hooks/useWeatherApi');

test('renders loading state', () => {
    (useWeatherApi as jest.Mock).mockReturnValue({
        cities: [],
        loading: true,
        error: null,
    });

render(<MainView />);
  expect(screen.getByText('Still loading...')).toBeInTheDocument();
})

test('renders error state', () => {
  (useWeatherApi as jest.Mock).mockReturnValue({
    cities: [],
    loading: false,
    error: 'An unknown error occurred',
  });

  render(<MainView />);

  expect(screen.getByText('An unknown error occurred')).toBeInTheDocument();
})

test('able to render cities', () => {
  (useWeatherApi as jest.Mock).mockReturnValue({
    cities: [
      {
        name: 'Leeds',
        weather: {
          city: 'Leeds',
          temperature: '10',
          conditions: 'Cloudy',
          windSpeed: '5',
          humidity: '50',
        },
      },
    ],
    loading: false,
    error: null,
  });

  render(<MainView />);

  expect(screen.getByText('Leeds')).toBeInTheDocument();
  expect(screen.getByText('Temperature: 10')).toBeInTheDocument();
  expect(screen.getByText('Conditions: Cloudy')).toBeInTheDocument();
  expect(screen.getByText('Wind Speed: 5')).toBeInTheDocument();
  expect(screen.getByText('Humidity: 50')).toBeInTheDocument();
})