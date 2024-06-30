import { useEffect, useState } from 'react'
import { useGetCountries } from './useGetCountries';
import { Country } from '../types';

export const useGetRandomCountry = () => {
  const [answer, setAnswer] = useState("")
  const [randomCountry, setRandomCountry] = useState<Country | null>(null);
  const [answerResult, setAnswerResult] = useState<'idle' | 'correct' | 'incorrect'>("idle")

  const { countries } = useGetCountries({ filter: "all", value: "", sortBy: "default"})

  useEffect(() => {
    if (countries.length > 0) {
      setRandomCountry(countries[Math.floor(Math.random() * countries.length)]);
    }
  }, [countries]);

  const handleRandomize = () => {
    setAnswer("")
    setAnswerResult("idle")
    setRandomCountry(countries[Math.floor(Math.random() * countries.length)]);
  };

  return { randomCountry, handleRandomize, answer, setAnswer, answerResult, setAnswerResult }
}