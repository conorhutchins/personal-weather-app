import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/back.png';
import sunIcon from '../../assets/images/sunny.png';
import cloudIcon from '../../assets/images/cloudy.png';
import rainIcon from '../../assets/images/rain.png';
import partialCloudIcon from '../../assets/images/partially-cloudy.png';
import notFound from '../../assets/images/not-found.png';
import styles from './DetailsView.module.css';

export const DetailsView: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { city, icon } = location.state || {};

    if (!city) {
        return <div>City not found</div>;
    }
    return (
        <div className={styles.detailsView}>
            <div className={styles.header}>
            <img src={backIcon} alt="back" className={styles.backIcon} onClick={() => navigate(-1)} />
            <div className={styles.cityName}>
              <h1>{city.name}</h1>
              <img src={icon || notFound} alt={city.weather.conditions} />
            </div>
            </div>
          <div className={styles.details}>
            <p className={styles.greyBackground}><span>Temperature</span>
            <span>{city.weather.temperature}</span></p>
            <p><span>Conditions</span><span>{city.weather.conditions}</span></p>
            <p className={styles.greyBackground}><span>Wind Speed</span><span>{city.weather.windSpeed}</span></p>
            <p><span>Humidity</span><span>{city.weather.humidity}</span></p>
          </div>
        </div>
      );
    };