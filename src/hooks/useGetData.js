import { useEffect, useState } from 'react';

export default function useGetData (get, params = []) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);

    const result = await get(...params);

    setData(result);
    setIsLoading(false);
  };

  return [data, isLoading];
}
