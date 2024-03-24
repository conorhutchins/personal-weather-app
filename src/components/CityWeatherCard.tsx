import React from 'react';
import styles from './CityWeatherCard.module.css';

export interface CityWeatherCardProps {
    name: string;
    temperature: string;
    conditions: string;
    wind_speed: string;
    humidity: string;
}

const CityWeatherCard: React.FC<CityWeatherCardProps> = ({
    name,
    temperature,
    conditions,
    wind_speed,
    humidity
}) => {
    return (
        <div className={styles.card}>
            <h2>{name}</h2>
            <p>Temperature: {temperature}</p>
            <p>Conditions: {conditions}</p>
            <p>Wind Speed: {wind_speed}</p>
            <p>Humidity: {humidity}</p>
        </div>
    );
}
 
export default CityWeatherCard;