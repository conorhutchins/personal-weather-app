import React from 'react';
import { render, screen } from '@testing-library/react';
import CityWeatherCard, { CityWeatherCardProps } from './CityWeatherCard';
import '@testing-library/jest-dom';

describe('CityWeatherCard', () => {
  const defaultProps: CityWeatherCardProps = {
    name: 'London',
    temperature: '20°C',
    conditions: 'Sunny',
    windSpeed: '15 km/h',
    humidity: '60%',
  };

  it('renders correctly with given props', () => {
    render(<CityWeatherCard {...defaultProps} />);

    expect(screen.getByText('London')).toBeInTheDocument();
    expect(screen.getByText('Temperature: 20°C')).toBeInTheDocument();
    expect(screen.getByText('Conditions: Sunny')).toBeInTheDocument();
    expect(screen.getByText('Wind Speed: 15 km/h')).toBeInTheDocument();
    expect(screen.getByText('Humidity: 60%')).toBeInTheDocument();
  });

});
