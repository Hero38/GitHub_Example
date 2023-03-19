for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 != 0) {
    i++;
    console.log('"Fizz"');
  }
  if (i % 5 == 0 && i % 3 != 0) {
    i++;
    console.log('"Buzz"');
  }
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('"FizzBuzz"');
  } else {
    console.log(i);
  }
}
