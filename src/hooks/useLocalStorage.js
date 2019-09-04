import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  //converting from JSON to JS
  const item = JSON.parse(localStorage.getItem(key));

  //set state
  const [storedValue, setStoredValue] = useState(item || initialValue);

  //setter function
  const setValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };
  return [storedValue, setValue];
};
