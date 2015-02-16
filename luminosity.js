#!/usr/bin/env node

var r = process.argv[2]

var g = process.argv[3]

var b = process.argv[4]

var luminosity = function(r,g,b){

  return 0.2126*r + 0.7152*g + 0.0722*b;

}


console.log('The luminosity of ' + r, g, b + ' is: ' + luminosity(r,g,b));


var isLight = function(){

  if (luminosity(r,g,b) > 155) {
    console.log('This is a light color.')
  } else {
      console.log('This is a dark color.')
    }
}

isLight();

