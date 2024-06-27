import { useState } from 'react';
import { CountryCard } from '../components/CountryCard';
import { useGetRandomCountry } from '../hooks/useGetRandomCountry';

export const CountriesGuesser = () => {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const { randomCountry, handleRandomize, answer, setAnswer, answerResult, setAnswerResult } = useGetRandomCountry();

  const handleCheck = () => {
    if (answer.toLowerCase() !== randomCountry?.name.toLowerCase()) {
      setAnswerResult('incorrect');
      return;
    }

    setAnswerResult('correct');
  };

  const isCorrectAnswer = answerResult === 'correct';
  const isIncorrectAnswer = answerResult === 'incorrect';

  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-between w-full max-w-4xl mt-5'>
        <button
          onClick={() => {
            handleRandomize()
            setShowCorrectAnswer(false)
          }}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700'
        >
          Randomize Again
        </button>

        <div className='flex justify-center'>
          {randomCountry && (
            <CountryCard
              country={randomCountry}
              showName={false}
            />
          )}
        </div>

        <div className='flex flex-col items-start mt-5'>
          <div className='flex items-center'>
            <input
              type="text"
              value={answer}
              disabled={!randomCountry}
              onChange={(event) => setAnswer(event.target.value)}
              className='border p-2 rounded mr-2'
            />
            <button
              onClick={handleCheck}
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
            >
              Submit
            </button>
          </div>

          <div className='mt-4'>
            {isCorrectAnswer && (
              <p className='text-green-500 font-bold text-xl'>Correct!</p>
            )}

            {isIncorrectAnswer && (
              <p className='text-red-500 font-bold text-xl'>Incorrect!</p>
            )}
          </div>
        </div>
      </div>

      <div className='mt-4 flex flex-col items-start'>
        {isIncorrectAnswer && (
          <button
            onClick={() => setShowCorrectAnswer(current => !current)}
            className='px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700'
          >
            Show Correct Answer
          </button>
        )}

        {showCorrectAnswer && (
          <div className='mt-2'>
            <p className='font-bold'>Correct answer:</p>
            <p className='text-green-500 font-bold text-xl'>{randomCountry?.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}
