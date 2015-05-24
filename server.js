var express = require( 'express' ),
	app = express(),
	bodyparser = require( 'body-parser' ),
  toPiglatin = require( './lib/piglatin' ),
  toSpoonerism = require( './lib/spoonerism' ),
	path = require( 'path' ),
	publicDirectory = path.join( __dirname, 'public' ),
	port = 3000;


app.use( express.static( publicDirectory ) );
app.use( bodyparser.json() );
app.use( bodyparser.urlencoded( { extended: true } ) );

app.listen(port, function() {
  console.log('app server started on port', port);
});

app.post( '/piglatin', function( req, res ) {
  var piglatin = toPiglatin( req.body.text );
  res.json( { text: piglatin } );

});

app.post( '/spoonerism', function( req, res ) {
  var spoonerism = toSpoonerism( req.body.text );
  res.json( { text: spoonerism } );

});

