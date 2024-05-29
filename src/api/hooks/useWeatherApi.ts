import { useEffect, useState } from "react";
import { City, fetchWeatherData } from "../weather";

export const useWeatherApi = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchWeatherData();
        setCities(data);
        if (data.length === 0) {
          setError("No cities found");
        }
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    )();
  }
  , []);
  return { cities, loading, error };
};
