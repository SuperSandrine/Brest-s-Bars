import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = () => {
  const [mainData, setMainData] = useState([]);
  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setError(false);
      try {
        const result = await axios.get(`https://api.brest.bar/items/bars/`);
        setMainData(result.data);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error('error true :', error);
      }
      setLoading(false);
    })();
  }, []);
  return [mainData, hasError, isLoading];
};
