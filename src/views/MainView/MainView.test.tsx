import { render, screen } from '@testing-library/react';
import { useWeatherApi } from '../../api/hooks/useWeatherApi';
import { MainView } from './MainView';

jest.mock('../../api/hooks/useWeatherApi');

describe('MainView', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

test('renders loading state', () => {
    (useWeatherApi as jest.Mock).mockReturnValue({
        cities: [],
        loading: true,
        error: null,
    });

render(<MainView />);
  expect(screen.getByText('Still loading...')).toBeInTheDocument();
  expect(screen.queryByText('An unknown error occurred')).not.toBeInTheDocument();
})

test('renders error state', () => {
  (useWeatherApi as jest.Mock).mockReturnValue({
    cities: [],
    loading: false,
    error: 'An unknown error occurred',
  });

  render(<MainView />);

  expect(screen.getByText('An unknown error occurred')).toBeInTheDocument();
  expect(screen.queryByText('Still loading...')).not.toBeInTheDocument();
})

test('able to render no cities', () => {
  (useWeatherApi as jest.Mock).mockReturnValue({
    cities: [],
    loading: false,
    error: null,
  });

  render(<MainView />);

  expect(screen.queryByText('Still loading...')).not.toBeInTheDocument();
  expect(screen.queryByText('An unknown error occurred')).not.toBeInTheDocument();
})

test('able to render a single city', () => {
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

test('able to render multiple cities', () => {
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
      {
        name: 'London',
        weather: {
          city: 'London',
          temperature: '20',
          conditions: 'Sunny',
          windSpeed: '10',
          humidity: '60',
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

  expect(screen.getByText('London')).toBeInTheDocument();
  expect(screen.getByText('Temperature: 20')).toBeInTheDocument();
  expect(screen.getByText('Conditions: Sunny')).toBeInTheDocument();
  expect(screen.getByText('Wind Speed: 10')).toBeInTheDocument();
  expect(screen.getByText('Humidity: 60')).toBeInTheDocument();
})
})