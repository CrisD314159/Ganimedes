export const getConvertion = (selection, value) => {
  let result = 0;
  console.log(selection, value);
  if (!isNaN(value) || isHexadecimal(value)) {
    switch (selection) {
      case "Binario a decimal":
        result = binaryToDecimal(value);
        break;
      case "Decimal a binario":
        result = decimalToBinary(value);
        break;
      case "Hexadecimal a decimal":
        result = hexadecimalToDecimal(value);
        break;
      case "Decimal a hexadecimal":
        result = decimalToHexadecimal(value);
        break;
      case "Binario a hexadecimal":
        result = binaryToHexadecimal(value);
        break;
      case "Hexadecimal a binario":
        result = hexadecimalToBinary(value);
        break;
      default:
        break;
    }
  }

  return result;
};

const isHexadecimal = (value) => {
  // Expresión regular para verificar si es un número hexadecimal válido
  const hexadecimalPattern = /^[0-9A-Fa-f]+$/;

  // Comprobar si el número coincide con el patrón hexadecimal
  return hexadecimalPattern.test(value);
};

//Converts a binary number to a decimal number
const binaryToDecimal = (num) => {
  const pattern = /^[01]+$/;
  let value = 0;
  if (pattern.test(num)) {
    value = parseInt(num, 2);
    return value;
  }
  return "No es un número binario";
};

//Converts a decimal number to a binary number
const decimalToBinary = (num) => {
  let binary = (num % 2).toString();
  const pattern = /[a-zA-Z]/;
  if (!pattern.test(num)) {
    for (; num > 1; ) {
      num = parseInt(num / 2);
      binary = (num % 2) + binary;
    }
    return binary;
  }
  return "No es un numero decimal";
};

//Converts a hexadecimal number to decimal number
const hexadecimalToDecimal = (num) => {
  if (isHexadecimal(num)) {
    return parseInt(num, 16);
  }

  return "No es un numero decimal";
};

//Converts a decimal number to a hexadecimal
const decimalToHexadecimal = (num) => {
  const pattern = /[a-zA-Z]/;
  if (!pattern.test(num)) {
    return parseInt(num).toString(16).toUpperCase();
  }
  return "No es un numero decimal";
};

//Converts a binary number to a hexadecimal number
const binaryToHexadecimal = (num) => {
  const pattern = /^[01]+$/;
  if (pattern.test(num)) {
    let value = binaryToDecimal(num);
    return parseInt(value).toString(16).toUpperCase();
  }

  return "No es un número binario";
};

// coverts a hexadecimal number to a binary number
const hexadecimalToBinary = (num) => {
  if (isHexadecimal(num)) {
    let decimal = hexadecimalToDecimal(num);
    return decimalToBinary(decimal);
  }
};
