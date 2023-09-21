import { useEffect, useState } from "react";
import { BASE_URL } from "../config/config";

interface FetchReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

const useFetch = <T,>(url: string): FetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async (): Promise<void> => {
      try {
        const request: Response = await fetch(BASE_URL + url);
        const response: T = await request.json();
        setData(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
