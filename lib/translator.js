var vowels = {
	a: true,
	e: true,
	i: true,
	o: true,
	u: true
};

function translate( input ) {
	var words = input.split(' ');

	words = words.map( function(word){
		var firstLetter = word[0];
		if ( !firstLetter ) { return ''; }

		if ( vowels[ firstLetter.toLowerCase() ] ) {
			return word + '-ay';
		}
		else {
			return word.slice(1) + '-' + firstLetter + 'ay';
		}
	});

	return words.join(' ');
}

module.exports = translate;
