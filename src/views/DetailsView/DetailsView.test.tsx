import React from 'react';
import { render, screen } from '@testing-library/react';
import { DetailsView } from './DetailsView';
import { MemoryRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('DetailsView', () => {
  beforeEach(() => {
    (useLocation as jest.Mock).mockReturnValue({
      state: {
        city: {
          name: 'London',
          weather: {
            temperature: '20',
            conditions: 'Sunny',
            windSpeed: '5',
            humidity: '60',
          },
        },
        icon: 'sunny.png',
      },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/details']}>
        <DetailsView />
      </MemoryRouter>
    );
  });

  it('displays the correct city name and weather details', () => {
    render(
      <MemoryRouter initialEntries={['/details']}>
        <DetailsView />
      </MemoryRouter>
    );

    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('Temperature')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('Conditions')).toBeInTheDocument();
    expect(screen.getByText('Sunny')).toBeInTheDocument();
    expect(screen.getByText('Wind Speed')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('Humidity')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();
  });
});