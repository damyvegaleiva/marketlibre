import { useEffect, useState } from "react";
import { ACCESS_TOKEN, BASE_URL } from "../config/config";

type TFetchReturn<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

const useFetch = <T,>(url: string): TFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async (): Promise<void> => {
      try {
        const request: Response = await fetch(BASE_URL + url, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        });

        console.log(`This is the ${request}`);

        if (!request.ok) {
          throw new Error("Error fetching data from API");
        }

        const response: T = await request.json();
        setData(response);
      } catch (error) {
        setError(error as Error);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 1700);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
