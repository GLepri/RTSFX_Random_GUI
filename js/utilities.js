

// Get URL parameters using jQuery
// usage: var param = GetURLParameter('param_name');

function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}


// Get URL parameters using js
// usage: var param = $_GET('param_name')
// usage: var all_param = $_GET(),
//    param1 = $_GET['param1_name'],
//    param2 = $_GET['param2_name'];

function GetURLParamJS(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;
	}
	return vars;
}


// Parse JavaScript parameters out in an array
// usage:
//  parameters = parseQuery( yourQuery);
//  param1 = parameters['param1']

function parseQuery ( query ) {
   var Params = new Object ();
   if ( ! query ) return Params; // return empty object
   var Pairs = query.split(/[;&]/);
   for ( var i = 0; i < Pairs.length; i++ ) {
      var KeyVal = Pairs[i].split('=');
      if ( ! KeyVal || KeyVal.length != 2 ) continue;
      var key = unescape( KeyVal[0] );
      var val = unescape( KeyVal[1] );
      val = val.replace(/\+/g, ' ');
      Params[key] = val;
   }
   return Params;
}


function EncodeQueryData(data) {
    var ret = [];
    for (var d in data)
        ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    return ret.join("&");
}

var QueryString = function () {
    // This function is anonymous, is executed immediately and the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [
                query_string[pair[0]],
                decodeURIComponent(pair[1])
            ];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();

function getCurrentFileName() {
  var file_name = location.pathname.substring(1);
  // Filter extension
  file_name = patchName.replace(/\.[^/.]+$/, "");
  return file_name;
}
function updateTextInput(inputId, val) {
  document.getElementById(inputId).value=val;
}

// function generateRandomValue(minVal, maxVal) {
//   return Math.random() * (maxVal - minVal) + minVal;
// }
