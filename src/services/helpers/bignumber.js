import BigNumber from 'bignumber.js'

export const isNaN = (value) => new BigNumber(`${value}`).isNaN()

export const isNumber = (value) => !isNaN(value)

export const isInteger = (value) => new BigNumber(`${value}`).isInteger()

export const isPositive = (value) => new BigNumber(`${value}`).isPositive()

export const isNegative = (value) => new BigNumber(`${value}`).isNegative()

export const isZero = (value) => new BigNumber(`${value}`).isZero()

export const countDecimalPlaces = (value) => new BigNumber(`${value}`).dp()

export const convertNumberToString = (value) =>
  new BigNumber(`${value}`).toString()

export const convertStringToNumber = (value) =>
  new BigNumber(`${value}`).toNumber()

export const convertHexToString = (hex) => new BigNumber(`${hex}`).toString()

export const convertStringToHex = (value) =>
  new BigNumber(`${value}`).toString(16)

export const greaterThan = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) === 1

export const greaterThanOrEqual = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) >= 0

export const smallerThan = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) === -1

export const smallerThanOrEqual = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`).comparedTo(new BigNumber(`${numberTwo}`)) <= 0

export const multiply = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`).times(new BigNumber(`${numberTwo}`)).toString()

export const divide = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`)
    .dividedBy(new BigNumber(`${numberTwo}`))
    .toString()

export const floorDivide = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`)
    .dividedToIntegerBy(new BigNumber(`${numberTwo}`))
    .toString()

export const mod = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`).mod(new BigNumber(`${numberTwo}`)).toString()

export const add = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`).plus(new BigNumber(`${numberTwo}`)).toString()

export const subtract = (numberOne, numberTwo) =>
  new BigNumber(`${numberOne}`).minus(new BigNumber(`${numberTwo}`)).toString()

export const convertAmountToRawNumber = (value, decimals = 18) =>
  new BigNumber(`${value}`).times(new BigNumber('10').pow(decimals)).toString()

export const convertAmountFromRawNumber = (value, decimals = 18) =>
  new BigNumber(`${value}`)
    .dividedBy(new BigNumber('10').pow(decimals))
    .toString()

export const handleSignificantDecimals = (value, decimals, buffer) => {
  if (
    !new BigNumber(`${decimals}`).isInteger() ||
    (buffer && !new BigNumber(`${buffer}`).isInteger())
  ) {
    return null
  }
  buffer = buffer ? convertStringToNumber(buffer) : 3
  decimals = convertStringToNumber(decimals)
  const absolute = new BigNumber(`${value}`).abs().toNumber()
  if (smallerThan(absolute, 1)) {
    decimals = value.slice(2).search(/[^0]/g) + buffer
    decimals = decimals < 8 ? decimals : 8
  } else {
    decimals = decimals < buffer ? decimals : buffer
  }
  let result = new BigNumber(`${value}`).toFixed(decimals)
  result = new BigNumber(`${result}`).toString()
  return new BigNumber(`${result}`).dp() <= 2
    ? new BigNumber(`${result}`).toFormat(2)
    : new BigNumber(`${result}`).toFormat()
}
export const formatFixedDecimals = (value, decimals) => {
  const _value = convertNumberToString(value)
  const _decimals = convertStringToNumber(decimals)
  return new BigNumber(new BigNumber(_value).toFixed(_decimals)).toString()
}

export const formatInputDecimals = (inputOne, inputTwo) => {
  const _nativeAmountDecimalPlaces = countDecimalPlaces(inputTwo)
  const decimals =
    _nativeAmountDecimalPlaces > 8 ? _nativeAmountDecimalPlaces : 8
  return new BigNumber(formatFixedDecimals(inputOne, decimals))
    .toFormat()
    .replace(/,/g, '')
}
