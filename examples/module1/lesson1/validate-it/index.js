
function validateInputValue() {
  const MINIMUM_INPUT_VALUE = 0;
  const MAXIMUM_INPUT_VALUE = 100;
  const INPUT_VALUE_DIVIDER = 2;

  const validationInput = document.getElementById('validationInput');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  const isInteger = value => value && Number.isInteger(parseFloat(value))
  const isHigherThan = value => value > MINIMUM_INPUT_VALUE;
  const isLowerThan = value => value < MAXIMUM_INPUT_VALUE;
  const isEven = value => value % INPUT_VALUE_DIVIDER === 0;

  validateButton.addEventListener('click', () => {
    if (isInteger(validationInput.value) && isHigherThan(validationInput.value) && isEven(validationInput.value) && isLowerThan(validationInput.value)) {
        result.innerHTML = 'Valid';
    } else {
      result.innerHTML = 'Invalid';
    }
  });

  clearButton.addEventListener('click', () => {
    validationInput.value = '';
    result.innerHTML = '';
  });
}

validateInputValue();
