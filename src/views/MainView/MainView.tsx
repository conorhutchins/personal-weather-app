import React, { useEffect, useState} from "react";
import { City } from '../../api/weather';
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

const sortCitiesByName = (cities: City[]) => {
  return [...cities].sort((a, b) => a.name.localeCompare(b.name));
}

export const MainView: React.FC = () => {
  const { cities, loading, error } = useWeatherApi();
  const navigate = useNavigate();
    if (loading) {
        return <h2 className={styles.loading}>Still loading...</h2>;
    }

    if (error) {
        return <h2 className={styles.error}>{error}</h2>;
    }
    const sortedCities = sortCitiesByName(cities);

    return (
      <div className={styles.mainView}>

        {sortedCities.map((city) => (
          <div key={city.name} className={styles.city}>
          <span className={styles.cityName}>{city.name}</span>
          <div className={styles.iconContainer}>
          <img src ={weatherIcons[city.weather.conditions || notFound]} alt={city.weather.conditions} className={styles.icons}/>
          </div>
          <button onClick={() => navigate(`/details/${city.name}`, { state: { city, icon: weatherIcons[city.weather.conditions || notFound] }})}>Details</button>
      </div>
        ))}
      </div>
    );
  };
