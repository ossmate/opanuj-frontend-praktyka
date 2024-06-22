import { sum, subtract, multiply, divide } from './calculator/functions';
import { CalculatorButton } from './calculator/CalculatorButton';
import { useCalculator } from './calculator/useCalculator';

const App = () => {
  const { firstInputValue, setFirstInputValue, secondInputValue, setSecondInputValue, handleOperation, error, result } = useCalculator()

  const calculatorOperators =  [{
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
          value={firstInputValue}
          onChange={(e) => setFirstInputValue(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondInputValue}
          onChange={(e) => setSecondInputValue(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {calculatorOperators.map(({ id, label, onClick }) => (
          <CalculatorButton
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
