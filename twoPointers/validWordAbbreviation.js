/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  let wordIdx = 0;
  let abbrIdx = 0;
  let skipCount = 0;

  while (wordIdx < word.length && abbrIdx < abbr.length) {
      let currChar = abbr[abbrIdx];

      if (currChar >= '0' && currChar <= '9') {
          if (currChar === '0' && skipCount === 0) {
              return false;
          }

          skipCount = skipCount * 10 + Number(currChar);
          abbrIdx++;
      } else {
          wordIdx += skipCount;
          skipCount = 0;

          if (wordIdx >= word.length || word[wordIdx] !== abbr[abbrIdx]) {
              return false;
          }
          wordIdx++;
          abbrIdx++;
      }
  }
  wordIdx += skipCount;
  return wordIdx === word.length && abbrIdx === abbr.length;
};
