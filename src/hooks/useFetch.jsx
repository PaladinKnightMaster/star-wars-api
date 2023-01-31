import axios from "axios";
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, loading, error };
};