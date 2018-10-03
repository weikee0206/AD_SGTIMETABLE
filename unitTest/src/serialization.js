function Serialization() {
}


Serialization.prototype.convert = function(moduleCode) {
  output = moduleCode.replace(/\s+/g,""); //delete blank
  output = output.replace(/[&\|\\\*^%$#@\-]/g,"");//delete
  output = output.toUpperCase(); //upperCase
  return output;
};


