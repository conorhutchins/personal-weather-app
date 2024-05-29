import React, { useEffect, useState} from "react";
import CityWeatherCard from "../../components/CityWeatherCard/CityWeatherCard";
import styles from './MainView.module.css';
import { useWeatherApi } from "../../api/hooks/useWeatherApi";
import { useNavigate } from "react-router-dom";

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
        {cities.map((city) => (
          <div key={city.name}>
          <CityWeatherCard 
            name={city.name}
            temperature={city.weather.temperature}
            conditions={city.weather.conditions}
            windSpeed={city.weather.windSpeed}
            humidity={city.weather.humidity} 
          />
          <button onClick={() => navigate(`/details/${city.name}`, { state: { city }})}>Details</button>
      </div>
        ))}
      </div>
    );
  };
