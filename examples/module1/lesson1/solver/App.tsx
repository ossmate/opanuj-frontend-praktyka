import React, { memo, useState } from 'react';
import { sum, subtract, multiply, divide } from './functions';
import { late } from 'zod';

  const ActionButton = memo(({ label, onClick }: { label: string, onClick: () => void }) => {
    return (
       <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={onClick}
        >
          {label}
        </button>
    )
  })


const App = () => {
  const [firstValue, setFirstValue] = useState<number>(0);
  const [secondValue, setSecondValue] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>('')

    const handleOperation = (operation: (a: number, b: number) => number) => {
    if (operation === divide && secondValue === 0) {
      setError('Error: Division by zero');
      setResult(0);
    } else {
      setResult(operation(firstValue, secondValue));
      setError('');
    }
  }

  const actions =  [{
    id: 1,
          label: '+',
          onClick: () => handleOperation(sum)
        }, {
          id: 2,
          label: '-',
          onClick: () => handleOperation(subtract)
        }, {
          id: 3,
          label: '*',
          onClick: () => handleOperation(multiply)
        }, {
          id: 4,
          label: '/',
          onClick: () => handleOperation(divide)
        }]

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstValue}
          onChange={(e) => setFirstValue(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondValue}
          onChange={(e) => setSecondValue(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {actions.map(({ id, label, onClick }) => (
          <ActionButton
            key={id}
            label={label}
            onClick={onClick}
          />
        ))}
      </div>
      <div>{error ? error : `Result: ${result}`}</div>
    </div>
  );
};

export default App;
