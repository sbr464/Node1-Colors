var colorutil = require ('./colorutil.js');

var r = process.argv[2]

var g = process.argv[3]

var b = process.argv[4]

console.log('The luminosity of ' + r, g, b + ' is: ' + colorutil.luminosity(r,g,b));

console.log(colorutil.isLight(r,g,b));

console.log(colorutil.darken(r,g,b));

