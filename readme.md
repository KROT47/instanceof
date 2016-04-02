# Instanceof

Checks if variable is instance of some constructor.  

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
```