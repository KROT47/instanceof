

/* --------------------------------- Module Exports --------------------------------- */

module.exports = Instanceof;

module.exports.getType = GetType;


/* --------------------------------- Instanceof --------------------------------- */

function Instanceof( obj, types ) {

	if ( obj && typeof obj.valueOf === 'function' ) obj = obj.valueOf();

	if ( Array.isArray( types ) ) {
		for ( var i = types.length; i--; ) if ( _Instanceof( obj, types[i] ) ) return true;
	} else {
		return _Instanceof( obj, types )
	}

	return false;
}


/* --------------------------------- GetType --------------------------------- */

function GetType( obj ) {

	if ( obj && typeof obj.valueOf === 'function' ) obj = obj.valueOf();

	var type = typeof obj;

	switch ( type ) {

		case 'number': return isNaN( obj ) ? 'NaN' : type;

		case 'object': return Array.isArray( obj ) ? 'array' : ( obj === null ? 'null' : type );

		default: return type;
	}

}


/* --------------------------------- _Instanceof --------------------------------- */

function _Instanceof( obj, type ) {

	switch ( typeof type ) {
		case 'number':
			if ( isNaN( type ) ) type = 'nan';
			else throw Error( 'type must be function, string, object or NaN' );
		break;

		case 'string':
			type = type.toLowerCase();
		break;
	}

	switch ( type ) {

		case 'nan': return typeof obj == 'number' && isNaN( obj );

		case Object:
		case 'object': return !Array.isArray( obj ) && obj !== null && typeof obj == 'object';

		case Array:
		case 'array': return Array.isArray( obj );

		case String:
		case 'string': return typeof obj == 'string';

		case Number:
		case 'number': return typeof obj == 'number' && !isNaN( obj );

		case Boolean:
		case 'boolean': return typeof obj == 'boolean';

		case Function:
		case 'function': return typeof obj == 'function';

		case null:
		case 'null': return obj === null;

		case undefined:
		case 'undefined': return obj === undefined;

		case Symbol:
		case 'symbol': return typeof obj == 'symbol';

		default: return obj instanceof type;
	}
}

try { Symbol } catch (e) { Symbol = 555 }
