import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/back.png';
import sunIcon from '../../assets/images/sunny.png';
import cloudIcon from '../../assets/images/cloudy.png';
import rainIcon from '../../assets/images/rain.png';
import partialCloudIcon from '../../assets/images/partially-cloudy.png';
import notFound from '../../assets/images/not-found.png';

export const DetailsView: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { city, icon } = location.state || {};

    if (!city) {
        return <div>City not found</div>;
    }
return (
    <div>
        <img src={backIcon} alt="back" onClick={() => navigate(-1)} />
        <h1>{city.name}</h1>
        <img src={icon || notFound} alt={city.weather.conditions} />
        <p>Temperature {city.weather.temperature}</p>
        <p>Conditions {city.weather.conditions}</p>
        <p>Wind Speed {city.weather.windSpeed}</p>
        <p>Humidity {city.weather.humidity}</p>
    </div>
);
}