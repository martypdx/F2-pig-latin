$( 'form' ).on( 'submit', function(){

	var request = {
		text: $( '#toTranslate' ).val(),
		school: 'codefellows',
		fish: [ 'tuna', 'bass', 'salmon' ]
	};

	$.post( 'translate', request, function(response) {

		$("#translated").text( response.piglatin );

    });

	return false;
});
