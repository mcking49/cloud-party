import { useCallback, useEffect, useState } from "react";

const getItemFromCache = <T = unknown>(key: string) => {
  const item = localStorage.getItem(key);

  if (!item) {
    return null;
  }

  const value = JSON.parse(item) as T | undefined;

  if (value === undefined) {
    return null;
  }

  return value;
};

export const useCache = <T = unknown>(key: string) => {
  const [item, setItem] = useState<T | null>();

  const setItemToCache = useCallback(
    (value: T | null) => {
      if (value === null) {
        localStorage.removeItem(key);
        setItem(null);
        return null;
      }

      const item = typeof value === "string" ? value : JSON.stringify(value);
      localStorage.setItem(key, item);
      setItem(value);
      return value;
    },
    [key],
  );

  useEffect(() => {
    const value = getItemFromCache<T>(key);
    setItem(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [item, setItemToCache] as const;
};
