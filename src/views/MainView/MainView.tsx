import React, { useEffect, useState} from "react";
import CityWeatherCard from "../../components/CityWeatherCard/CityWeatherCard";
import styles from "../styles/MainView.module.css";
import { useWeatherApi } from "../../api/hooks/useWeatherApi";

export const MainView: React.FC = () => {
  const { cities, loading, error } = useWeatherApi();

    if (loading) {
        return <div>Still loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
      <div className={styles.mainView}>
        {loading && <div>Still loading...</div>}
        {error && <div>{error}</div>}
        {!loading && !error && cities.map((city) => (
          <CityWeatherCard 
            key={city.name}
            name={city.name}
            temperature={city.weather.temperature}
            conditions={city.weather.conditions}
            windSpeed={city.weather.windSpeed}
            humidity={city.weather.humidity} 
          />
        ))}
      </div>
    );
  };
