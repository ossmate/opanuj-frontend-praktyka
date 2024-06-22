import { useState } from 'react';
import { divide } from './functions';

export const useCalculator = () => {
  const [firstInputValue, setFirstInputValue] = useState<number>(0);
  const [secondInputValue, setSecondInputValue] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const handleOperation = (operation: (a: number, b: number) => number) => {
    if (operation === divide && secondInputValue === 0) {
      setError('Error: Division by zero');
      setResult(0);
    } else {
      setResult( operation(firstInputValue, secondInputValue));
      setError('');
    }
  };

  return { firstInputValue, setFirstInputValue, secondInputValue, setSecondInputValue, result, error, handleOperation };
};
