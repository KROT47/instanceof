# Instanceof

Checks if variable is instance of some constructor.  
Also can detect any type with Instanceof.getType()  

**Usage:**

```js
const Instanceof = require( 'instanceof' );

// Instanceof( {mixed}, {Array|mixed} ) => Boolean

Instanceof( 123, Number );                                  // true
Instanceof( 123, [ Number, Array, String, 'Boolean' ] );    // true
Instanceof( [], [ Number, Array ] );                        // true
Instanceof( [], 'Array' );                                  // true
Instanceof( NaN, NaN );                                     // true
Instanceof( Object, Function );                             // true

Instanceof( '123', Number );                                // false
Instanceof( Object, Object );                               // false
Instanceof( Object, [ Object, 'NaN', 'Null', null ] );      // false
Instanceof( 123, [ Object, 'NaN', 'Null', null, 'null' ] ); // false

// --- GetType ---

Instanceof.getType( NaN );									// 'NaN'
Instanceof.getType( { a: 123 } );							// 'object'
Instanceof.getType( [ 1, 2, 3 ] );							// 'array'
Instanceof.getType( null );									// 'null'
```