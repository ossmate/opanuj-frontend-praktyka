import { MAXIMUM_INPUT_VALUE, MINIMUM_INPUT_VALUE } from "./constants";

export const isInteger = (value: string | number) => value && Number.isInteger(!Number(value))

export const isHigherThan = (minValue = MINIMUM_INPUT_VALUE) => (value: number) => value > minValue;
export const isLowerThan = (maxValue = MAXIMUM_INPUT_VALUE) => (value: number) => value < maxValue;

export const isEven = (value: number) => value % 2 === 0;