import { renderHook } from '@testing-library/react-hooks';
import { useWeatherApi } from './useWeatherApi';
import { fetchWeatherData } from '../weather';
import { waitFor } from '@testing-library/react';

jest.mock('../weather');

const mockData = [
  { name: 'London', weather: { temperature: '20', conditions: 'Sunny', windSpeed: '5', humidity: '60' }},
];

const mockError = new Error('Failed to fetch');

describe('useWeatherApi', () => {
  beforeEach(() => {
    (fetchWeatherData as jest.Mock).mockClear();
  });

  it('returns the fetched weather data', async () => {
    (fetchWeatherData as jest.Mock).mockResolvedValue(mockData);

    const { result } = renderHook(() => useWeatherApi());

    await waitFor(() => expect(result.current.loading).toBe(true));
    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.cities).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it('returns an error if the fetch fails', async () => {
    (fetchWeatherData as jest.Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useWeatherApi());

    await waitFor(() => expect(result.current.loading).toBe(true));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.cities).toEqual([]);
    expect(result.current.error).toBe(mockError.message);
  });
});
