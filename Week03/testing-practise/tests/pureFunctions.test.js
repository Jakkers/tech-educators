import { test, expect } from "vitest";

import {
  sum,
  subtract,
  isPalindrome,
  isAnagram,
  countLetters,
} from "./pureFunctions.js";

test("add function adds two numbers", () => {
  const result = sum(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});

test("subtract function subtracts two numbers", () => {
  const result = subtract(5, 3);
  const expected = 2;
  expect(result).toBe(expected);
});

test("words are the same reversed", () => {
  const string = "Three";
  const result = isPalindrome("three");
  const expected = "False";
  expect(result).toBe(expected);
});

test("its an anagram", () => {});
