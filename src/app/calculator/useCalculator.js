"use client";


import {useState} from "react";

const useCalculator = () => {
  const buttons = [
    ["C", "←", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const [typedValue, setTypedValue] = useState("");

  return {buttons, setTypedValue, typedValue};
};

export default useCalculator;
