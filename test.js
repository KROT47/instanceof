var Instanceof = require( './index' );

var types = {
	NaN: {
		type: NaN,
		arr: [ NaN ]
	},

	undefined: {
		type: undefined,
		arr: [ undefined ]
	},

	null: {
		type: null,
		arr: [ null ]
	},

	Object: {
		type: Object,
		arr: [ {}, { 1:2, 3:4 }, Object() ]
	},

	Array: {
		type: Array,
		arr: [ [], [ 1, 2, 3 ], Array() ]
	},

	Function: {
		type: Function,
		arr: [ function () {}, function ( a, b, c ) { return a }, Object, Array, Function, Boolean, Number, String, Function( 'a', 'return a' ) ]
	},

	Boolean: {
		type: Boolean,
		arr: [ true, false, Boolean( 444 ) ]
	},

	Number: {
		type: Number,
		arr: [ 123, 123.456, 0, -1, Number( '0' ) ]
	},

	String: {
		type: String,
		arr: [ '', 'hello', '1', '0', 'true', 'false', String( '123' ) ]
	},

	Symbol: {
		type: Symbol,
		arr: [ Symbol( 123 ) ]
	}
};

var arr;

for ( var i in types ) {
	arr = types[ i ].arr;

	// comparing correct values
	// all checks should return true
	for ( var k = arr.length; k--; ) {

		console.assert( Instanceof( arr[ k ], i ), 'Instanceof(', arr[ k ], ',"', i, '") == false' );
		console.assert( Instanceof( arr[ k ], types[ i ].type ), 'Instanceof(', arr[ k ], ',', i, ') == false' );

		// comparing incorrect values
		// all checks should return false
		for ( var j in types ) {
			if ( i != j ) {
				console.assert( !Instanceof( arr[ k ], j ), 'Instanceof(', arr[ k ], ',"', j, '") == true' );
				console.assert( !Instanceof( arr[ k ], types[ j ].type ), 'Instanceof(', arr[ k ], ',', j, ') == true' );
			}
		}
	}
}

console.log( 'all good!' );