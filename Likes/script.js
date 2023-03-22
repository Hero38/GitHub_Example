var count = 0;
var count2 = 0;
var count3 = 0;

var countElement = document.querySelector(".count");
var countElement2 = document.querySelector(".count2");
var countElement3 = document.querySelector(".count3");

function add1() {
  count++;
  countElement.innerText = count + " like(s)";
}

function add2() {
  count2++;
  countElement2.innerText = count2 + " like(s)";
}

function add3() {
  count3++;
  countElement3.innerText = count3 + " like(s)";
}
