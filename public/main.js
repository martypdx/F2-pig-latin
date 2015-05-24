$( '#pig-form' ).on( 'submit', function(){

	var request = {
		text: $( '#toPiglatin' ).val()
	};

	$.post( 'piglatin', request, function(response) {

		$("#pigResult").text( response.text );

    });

	return false;
});


$( '#spoon-form' ).on( 'submit', function(){

  var request = {
    text: $( '#toSpoon' ).val()
  };

  $.post( 'spoonerism', request, function(response) {

    $("#spoonResult").text( response.text );

    });

  return false;
});

