import { validator } from "./validator";

function main() {
  const validationInput: HTMLInputElement = document.querySelector('#validationInput')!;
  const validateButton: HTMLElement = document.getElementById('validateButton')!;
  const clearButton: HTMLElement = document.getElementById('clearButton')!;
  const result: HTMLElement = document.getElementById('result')!;

  validateButton?.addEventListener('click', () => {
    const resultMessage = validator(validationInput.value)
    result.innerHTML = resultMessage;
  });

  clearButton.addEventListener('click', () => {
    validationInput.value = '';
    result.innerHTML = '';
  });
}

main();
