import { useState, useEffect } from "react";

//hooks
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);
  useEffect(() => {
    if ((values = true)) {
      document.body.class.add("dark-mode");
    } else {
      document.body.class.remove("dark-mode");
    }
  }, [values]);
  return [values];
};
