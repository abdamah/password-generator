import generator from "generate-password";

import { GenerateParams } from "../types/GenerateParams";

const generatePassword = (params: GenerateParams) => {
  const isAllUnchecked =
    !params.includeUppercase &&
    !params.includeLowercase &&
    !params.includeNumbers &&
    !params.includeSymbols;

  let password = generator.generate({
    length: params.length,
    uppercase: params.includeUppercase,
    lowercase: isAllUnchecked ? true : params.includeLowercase,
    numbers: params.includeNumbers,
    symbols: params.includeSymbols,
  });

  return password;
};

const calculatePoints = (params: GenerateParams) => {
  let points = 0;

  if (params.includeUppercase) points++;
  if (params.includeLowercase) points++;
  if (params.includeNumbers) points++;
  if (params.includeSymbols) points++;

  if (params.length >= 6 && params.length <= 8) {
    points += 1;
  }

  if (params.length >= 9 && params.length <= 11) {
    points += 2;
  }

  if (params.length >= 12 && params.length <= 13) {
    points += 3;
  }

  if (params.length >= 14 && params.length <= 15) {
    points += 4;
  }

  return points;
};

export { generatePassword, calculatePoints };
