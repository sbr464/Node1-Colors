var color = process.argv[2]

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}



var request = require('request');
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {

  if (!error && response.statusCode == 200) {
    
    var colorData = JSON.parse(body);
    
    var resultObject = search(color, colorData);

    console.log('The RGB value of ' + color + ' is: ' + resultObject.rgb.r + ' ' + resultObject.rgb.g + ' ' + resultObject.rgb.b);

  }
})
