export const alphabetize = word => {
  if (!word) {
    return false;
  }

  word = word.split("");
  word = word.sort();
  word = word.join("");
  return word;
};

export const anagramGrouper = words => {
  const anagrams = {};
  words.forEach(word => {
    const sortedWord = alphabetize(word);
    if (anagrams[sortedWord]) {
      return anagrams[sortedWord].push(word);
    }
    anagrams[sortedWord] = [word];
  });

  console.log("anagrams", anagrams);

  return anagrams;
};
