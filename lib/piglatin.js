var vowels = {
	a: true,
	e: true,
	i: true,
	o: true,
	u: true
};

//Limited punctuation to check for
var punctuation = {
	"'": true,
	".": true,
	"!": true,
	"?": true,
	",": true,
	":": true,
	";": true
};

function toPigLatin( input ) {
	var words = input.split(' ');

	words = words.map( function(word){
		var firstLetter = word[0],
				secondLetter = word[1],
				thirdLetter = word[2],
				lastLetter = word[word.length-1],
				capitalize = false,
				tempWord;

		if ( !firstLetter ) { return ''; }

		// Check for trailing punctuation. Only punctuation handling
		// is some trailing word punctuations like .!?,:; -- in these cases,
		// I remove from original word and add back on to new word.
		if ( punctuation[lastLetter] ) {
			word = word.slice(0, -1);
		} else {
			lastLetter = '';
		}

		//Check if word started with capital letter
		if ( firstLetter == firstLetter.toUpperCase() )
			capitalize = true;

		// Translate to piglatin -- handling words that start with
		// 1, 2 or 3 consonants.
		if ( !vowels[ firstLetter.toLowerCase() ] &&
					!vowels[ secondLetter.toLowerCase() ] &&
					!vowels[ thirdLetter.toLowerCase() ]) {
			tempWord = word.slice(3) + '-' + firstLetter +
							secondLetter + thirdLetter+ 'ay';
		}
		else if ( !vowels[ firstLetter.toLowerCase() ] &&
					!vowels[ secondLetter.toLowerCase() ]) {
			tempWord = word.slice(2) + '-' + firstLetter + secondLetter + 'ay';
		}
		else if ( vowels[ firstLetter.toLowerCase() ] ) {
			tempWord = word + '-ay';
		}
		else {
			tempWord = word.slice(1) + '-' + firstLetter + 'ay';
		}

		//Convert word to lower case
		tempWord = tempWord.toLowerCase();

		//If original word was capitalized, then capitalize
		// the first letter of the new word
		if (capitalize)
			tempWord = tempWord.charAt(0).toUpperCase() + tempWord.slice(1);

		// Add punctuation back to end of word, if originally present
		if (lastLetter !== '')
			tempWord = tempWord + lastLetter;

		return tempWord;
	});


	return words.join(' ');
}

module.exports = toPigLatin;
