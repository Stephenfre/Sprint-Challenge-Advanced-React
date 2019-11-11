import React from "react";
import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [someValue, setSomeValue] = useLocalStorage("isDark");

  useEffect(() => {
    if (someValue === true) {
      return document.querySelector("body").classList.add("dark-mode");
    }
    return document.querySelector("body").classList.remove("dark-mode");
  }, [someValue]);
  return [someValue, setSomeValue];
};
