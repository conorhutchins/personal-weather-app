import React, { useEffect, useState} from "react";
import CityWeatherCard from "../../components/CityWeatherCard/CityWeatherCard";
import styles from "../styles/MainView.module.css";
import { fetchWeatherData, City } from "../../api/weather";

const MainView: React.FC = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=> {
    fetchWeatherData().then(data => {
        setCities(data);
        setLoading(false);
    }).catch(error => {
        setError(error.message);
        setLoading(false);
    })
    }, []);

    if (loading) {
        return <div>Still loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div className={styles.mainView}>
          {cities.map((city) => (
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

    export default MainView;