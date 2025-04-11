function fiveRandomNumbers(max, min = 0) {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const currentRandomNumber = randomNumber;
    numbers.push(currentRandomNumber);
  }
  return numbers;
}

console.log(fiveRandomNumbers(99));
