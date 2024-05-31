import React from 'react';
import { useLocation } from 'react-router-dom';

export const DetailsView: React.FC = () => {
    const location = useLocation();
    const city = location.state?.city;

    if (!city) {
        return <div>City not found</div>;
    }
return (
    <div>
        <h1>{city.name}</h1>
        <p>Temperature: {city.weather.temperature}</p>
        <p>Conditions: {city.weather.conditions}</p>
        <p>Wind Speed: {city.weather.windSpeed}</p>
        <p>Humidity: {city.weather.humidity}</p>
    </div>
);
}