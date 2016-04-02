

/* --------------------------------- Module Exports --------------------------------- */

module.exports = Instanceof;


/* --------------------------------- Instanceof --------------------------------- */

function Instanceof( obj, types ) {
	if ( Array.isArray( types ) ) {
		for ( var i = types.length; i--; ) if ( _Instanceof( obj, types[i] ) ) return true;
	} else {
		return _Instanceof( obj, types )
	}

	return false;
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
            
		case 'nan':
			return typeof obj == 'number' && isNaN( obj )
		break;
        
        case Object:
		case 'object':
			return !Array.isArray( obj ) && obj !== null && typeof obj == 'object'
		break;

		case Array:
		case 'array':
			return Array.isArray( obj )
		break;

		case String:
		case 'string':
			return typeof obj == 'string'
		break;

		case Number:
		case 'number':
			return typeof obj == 'number' && !isNaN( obj )
		break;

		case Boolean:
		case 'boolean':
			return typeof obj == 'boolean'
		break;

		case Function:
		case 'function':
			return typeof obj == 'function'
		break;

		case null:
		case 'null':
			return obj === null
		break;
        
        case undefined:
		case 'undefined':
			return obj === undefined
		break;
        
        case Symbol:
		case 'symbol':
			return typeof obj == 'symbol'
		break;
		
		default:
			return obj instanceof type;
	}
}

try { Symbol } catch (e) { Symbol = 555 }