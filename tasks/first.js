const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const elements = [];

rl.question('', (n) => {
  const numCount = parseInt(n);

  if (isNaN(numCount)) {
    console.log('Пожалуйста, введите корректное число.');
    rl.close();
    return;
  }

  rl.question('', (input) => {
    elements.push(...input.split(' ').map(Number));

    if (elements.length !== numCount || elements.some(isNaN)) {
      console.log('Пожалуйста, введите корректные элементы.');
    } else {
      console.log('', elements.reverse().join(' '));
    }

    rl.close();
  });
});
