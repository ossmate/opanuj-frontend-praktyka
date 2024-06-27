
import { CountryCard } from '../components/CountryCard';
import { useGetRandomCountry } from '../hooks/useGetRandomCountry';

export const CountriesGuesser = () => {
  const { randomCountry, handleRandomize, answer, setAnswer, answerResult,setAnswerResult } = useGetRandomCountry()

  const handleCheck = () => {
    if (answer.toLowerCase() !== randomCountry?.name.toLowerCase()) {
      setAnswerResult('incorrect')
      return;
    }

    setAnswerResult('correct')
  }

  return (
    <>
      <button onClick={handleRandomize}>
        Randomize Again
      </button>

      <div className='flex justify-center mt-5'>
        {randomCountry && (
          <CountryCard
            country={randomCountry}
            showName={false}
          />
        )}
      </div>

      <div className='flex flex-col items-center mt-5'>
        <div>
          <label className='mr-5'>
            <input
              type="text"
              value={answer}
              disabled={!randomCountry}
              onChange={(event) => setAnswer(event.target.value)}
            />
          </label>
          <button onClick={handleCheck}>
            Guess
          </button>
        </div>
      </div>

      <div className='mt-4'>
        {answerResult === 'correct' && (
          <p className='text-green-500 font-bold text-xl'>Correct!</p>
        )}

        {answerResult === 'incorrect' && (
          <p className='text-red-500 font-bold text-xl'>Incorrect!</p>
        )}
      </div>
    </>
  )
}
