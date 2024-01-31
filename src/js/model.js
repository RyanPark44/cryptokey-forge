import { OLD_KEYS_MAX } from "./config.js";

export const state = {
  key: "",
  keyLength: 22,
  characterSet: {
    alphabet: true,
    numbers: true,
    symbols: true,
  },
  oldKeys: [],
};

/**
 * Create an array of allowable characters
 *
 * Return: array of allowable characters
 */
const getAllowedCharacters = function () {
  const allowedChars = [];
  if (state.characterSet.alphabet)
    "abcdefghijklmnpqrstuvwxzy"
      .split("")
      .forEach(
        (char) =>
          allowedChars.push(char) && allowedChars.push(char.toUpperCase()),
      );
  if (state.characterSet.numbers)
    "1234567890".split("").forEach((num) => allowedChars.push(num));
  if (state.characterSet.symbols)
    "!@#$%^&*()[]{}/|".split("").forEach((char) => allowedChars.push(char));
  return allowedChars;
};

/**
 * Generate random string based on state.characterset
 */
export const randomString = function (keyParameters) {
  const { keyLength, ...characterSet } = keyParameters;
  // 1. Set length and allowable characters in state
  state.keyLength = +keyLength;
  state.characterSet = characterSet;
  // 2. Get allowable character array
  const allowedChars = getAllowedCharacters();

  // 3. Generate random key with character set
  const randomKey = [];
  const charSetLength = allowedChars.length;
  for (let i = 0; i < state.keyLength; i++) {
    randomKey.push(allowedChars.at(Math.floor(Math.random() * charSetLength)));
  }

  // 4. Set the current state key
  state.key = randomKey.join("");
};

/**
 *  Update oldKeys Array with current key
 *
 *  Return: NULL
 */
export const updateOldKeyArray = function () {
  if (!state.key) return;
  state.oldKeys.push(state.key);

  if (state.oldKeys.length > OLD_KEYS_MAX) state.oldKeys.shift();
};
