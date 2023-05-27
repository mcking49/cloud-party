import { useCallback, useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback((newValue?: boolean) => {
    if (typeof newValue === "boolean") {
      setValue(newValue);
    } else {
      setValue((currentValue) => !currentValue);
    }
  }, []);

  return [value, toggle] as const;
};
