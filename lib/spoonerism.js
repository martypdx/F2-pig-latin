function toSpoonerism( input ) {

  //First, trim any whitespace from both ends of input
  input = input.trim();

  var words = input.split(' ');
  var firstLetter,
        lastLetter,
        tempWord;

  //Only handling 2 and 3 word phrases. If two words, switch first letters
  // of word 1 and 2. If 3 words, switch first letters of word 1 and 3.
  switch(words.length) {
    case 2:
        firstLetter = words[0].charAt(0);
        words[0] = words[1].charAt(0) + words[0].slice(1);
        words[1] = firstLetter + words[1].slice(1);
        break;
    case 3:
        firstLetter = words[0].charAt(0);
        words[0] = words[2].charAt(0) + words[0].slice(1);
        words[2] = firstLetter + words[2].slice(1);
        break;
    default:
        return 'The phase must contain either 2 or 3 words ONLY!';
  }

  return words.join(' ');
}

module.exports = toSpoonerism;
