import React, { useEffect, useState} from "react";
import CityWeatherCard from "../../components/CityWeatherCard/CityWeatherCard";
import styles from './MainView.module.css';
import { useWeatherApi } from "../../api/hooks/useWeatherApi";
import { useNavigate } from "react-router-dom";
import sunIcon from '../../assets/images/sunny.png';
import cloudIcon from '../../assets/images/cloudy.png';
import rainIcon from '../../assets/images/rain.png';
import partialCloudIcon from '../../assets/images/partially-cloudy.png';
import notFound from '../../assets/images/not-found.png';


const weatherIcons: {[key: string]: string | undefined } = {
  Sunny: sunIcon,
  Cloudy: cloudIcon,
  Rain: rainIcon,
  'Partly Cloudy': partialCloudIcon,
  'Not Found': notFound,
};

export const MainView: React.FC = () => {
  const { cities, loading, error } = useWeatherApi();
  const navigate = useNavigate();

    if (loading) {
        return <div>Still loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
      <div className={styles.mainView}>
        <h1> Weather United Kingdom </h1>
        <div className="time">{new Date().toLocaleTimeString()}</div>
        {cities.map((city) => (
          <div key={city.name} className={styles.city}>
          <h2>{city.name}</h2>
          <img src ={weatherIcons[city.weather.conditions || notFound]} alt={city.weather.conditions} className={styles.weatherIcon}/>
          <button onClick={() => navigate(`/details/${city.name}`, { state: { city }})}>Details</button>
      </div>
        ))}
      </div>
    );
  };
