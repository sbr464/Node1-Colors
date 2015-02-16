var luminosity = function(r,g,b){

  return 0.2126*r + 0.7152*g + 0.0722*b;
}


var isLight = function(r,g,b){

  if (luminosity(r,g,b) > 155) {
    return 'This is a light color.'; 
  } else {
      return 'This is a dark color.';
    }
}

var darken = function(r,g,b){

var dark_r = r*.80
var dark_g = g*.80
var dark_b = b*.80

return 'Darkened by 20% is: ' + dark_r + ' ' +  dark_g + ' ' + dark_b;

};


module.exports = {
  luminosity: luminosity,
  isLight: isLight,
  darken: darken
};