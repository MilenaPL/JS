// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
function isPangram(sentence) {
  for (let a = 0; a < englishAlphabet.length; a++) {
    let oneLetter = englishAlphabet[a];
    let lowerSentence = sentence.toLowerCase();
    for (
      let oneLetterInSente = 0;
      oneLetterInSente < sentence.length;
      oneLetterInSente++
    ) {
      if (lowerSentence.indexOf(oneLetter) === -1) {
        return false;
      }
    }
  }
  {
    return true;
  }
}
isPangram("thE five boxing wizards jump quick");
isPangram("The five boxing wizards jump quickly");
isPangram("tWo driven jocks help fax my big quiz");
isPangram("safdsbdgfb");
isPangram("Waxy and quivering, jocks fumble the pizza");
