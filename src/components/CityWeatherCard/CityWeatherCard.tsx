import React from 'react';
import styles from './CityWeatherCard.module.css';

export interface CityWeatherCardProps {
    name: string;
    temperature: string;
    conditions: string;
    windSpeed: string;
    humidity: string;
}
const CityWeatherCard = ({
    name,
    temperature,
    conditions,
    windSpeed,
    humidity
}: CityWeatherCardProps): JSX.Element => (
    <div className={styles.card}>
        <h2>{name}</h2>
        <p>Temperature: {temperature}</p>
        <p>Conditions: {conditions}</p>
        <p>Wind Speed: {windSpeed}</p>
        <p>Humidity: {humidity}</p>
    </div>
);
export default CityWeatherCard;