function d6() {
  var roll = Math.ceil(Math.random() * 6);
  return roll;
}
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
