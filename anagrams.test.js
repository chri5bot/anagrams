import { alphabetize, anagramGrouper } from "./anagrams";

test("validates if alphabetize function send paramether", () => {
  const word = "hey";

  let result = true;

  if (!alphabetize(word)) {
    result = false;
  }

  const expected = true;

  expect(result).toBe(expected);
});

test("validates if alphabetize function dont send paramether", () => {
  let result = true;

  if (!alphabetize()) {
    result = false;
  }

  const expected = false;

  expect(result).toBe(expected);
});

test("test alphabetize functionality", () => {
  const word = "hey";

  const result = alphabetize(word);

  const expected = "ehy";

  expect(result).toBe(expected);
});

test("test anagrams grouper", () => {
  const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

  const result = anagramGrouper(words);

  const expected = {
    aet: ["eat", "tea", "ate"],
    ant: ["tan", "nat"],
    abt: ["bat"]
  };

  expect(result).toMatchObject(expected);
});
