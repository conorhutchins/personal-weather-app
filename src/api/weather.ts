export interface Weather {
    city: string;
    temperature: string;
    conditions: string
    windSpeed: string;
    humidity: string;
    }
    
export interface City {
        name: string;
        weather: Weather;
    }

export interface WeatherData {
    location: string, 
    cities: City[]
}

  export async function fetchWeatherData(): Promise<City[]> {
    const response = await fetch('https://raw.githubusercontent.com/WillPlayground/weather-data/main/uk-weather.json');
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  const rawData = await response.json();
  const data: WeatherData = {
    location: rawData.location,
    cities: rawData.cities.map((city: any) => ({
      name: city.name,
      weather: {
        city: city.weather.city,
        temperature: city.weather.temperature,
        conditions: city.weather.conditions,
        windSpeed: city.weather.wind_speed,
        humidity: city.weather.humidity
      }
    }))
  }
  return data.cities;
  }
