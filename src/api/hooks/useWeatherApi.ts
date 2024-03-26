import { useEffect, useState } from 'react';
import { City, fetchWeatherData } from '../weather';

export const useWeatherApi = () => {
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
    return { cities, loading, error };
}