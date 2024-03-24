export interface Weather {
    city: string;
    temperature: string;
    conditions: string
    wind_speed: string;
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

    export const fetchWeatherData = (): Promise<City[]> => {
      return fetch('https://raw.githubusercontent.com/WillPlayground/weather-data/main/uk-weather.json')
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data: WeatherData) => data.cities) 
        .catch(error => {
          throw new Error(error.message);
        });
    };
