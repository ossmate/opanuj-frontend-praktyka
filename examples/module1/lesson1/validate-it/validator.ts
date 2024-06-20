import { INVALID_VALUE_MESSAGE, INVALID_VALUE_TYPE, VALID_VALUE_MESSAGE } from "./constants";
import { isEven, isHigherThan, isInteger, isLowerThan } from "./methods";

export const validator = (value: string) => {
  const validators = [
    isEven, isLowerThan, isHigherThan
  ]

  if (isInteger(Number(value))) {
    return INVALID_VALUE_TYPE
  }

  const valueMeetAllValidatorsCondition = validators.every(validator => validator(Number(value)))

  if (!valueMeetAllValidatorsCondition) {
    return INVALID_VALUE_MESSAGE;
  }

  return VALID_VALUE_MESSAGE;
}