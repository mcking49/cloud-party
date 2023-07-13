import { useEffect } from "react";

import { useCache } from "@/hooks/cache/use-cache";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useCache<boolean>("darkMode");

  useEffect(() => {
    if (darkMode === null) {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      setDarkMode(userPrefersDark);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  useEffect(() => {
    // set 'dark' classname on body
    if (typeof darkMode === "boolean") {
      window.document.body.classList.toggle("dark", darkMode);
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
};
