import { render, screen } from '@testing-library/react';
import { MainView } from './MainView';
import fetchMock from 'jest-fetch-mock';

describe('MainView', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('renders loading state', async () => {
    fetchMock.mockResponseOnce(() => new Promise(resolve => setTimeout(() => resolve(JSON.stringify({
      cities: []
    })), 100)));

    render(<MainView />);
    await screen.findByText('Still loading...');
  });

  test('renders error state', async () => {
    fetchMock.mockReject(new Error('An unknown error occurred'));

    render(<MainView />);
    await screen.findByText('An unknown error occurred');
  });

  test('able to render no cities', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ cities: [] }));
  
    render(<MainView />);
  
    await screen.findByText('No cities found')

    expect(screen.queryByText('Temperature')).not.toBeInTheDocument();
    expect(screen.queryByText('An unknown error occurred')).not.toBeInTheDocument();
  });

  test('able to render a single city', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      cities: [
        {
          name: 'Leeds',
          weather: {
            temperature: '10',
            conditions: 'Cloudy',
            windSpeed: '5',
            humidity: '50'
          },
        },
      ]
    }));

    render(<MainView />);
    await screen.findByText('Leeds');
    expect(screen.getByText('Temperature: 10')).toBeInTheDocument();
    expect(screen.getByText('Conditions: Cloudy')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 50')).toBeInTheDocument();
  });

  test('able to render multiple cities', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({
      cities: [
        {
          name: 'Leeds',
          weather: {
            temperature: '10',
            conditions: 'Cloudy',
            windSpeed: '5',
            humidity: '50'
          },
        },
        {
          name: 'London',
          weather: {
            temperature: '20',
            conditions: 'Sunny',
            windSpeed: '10',
            humidity: '60'
          },
        }
      ]
    }));

    render(<MainView />);
    await screen.findByText('Leeds');
    expect(screen.getByText('Temperature: 10')).toBeInTheDocument();
    expect(screen.getByText('Conditions: Cloudy')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 50')).toBeInTheDocument();

    await screen.findByText('London');
    expect(screen.getByText('Temperature: 20')).toBeInTheDocument();
    expect(screen.getByText('Conditions: Sunny')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 60')).toBeInTheDocument();
  });
});
