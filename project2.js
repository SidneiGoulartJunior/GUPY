/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

const numberCheck = 12;

const fibonacci = (num) => {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

let found = false;
for (let i = 0; i <= numberCheck; i++) {
  if (fibonacci(i) === numberCheck) {
    found = true;
    break;
  }
}

if (found) {
  console.log(`${numberCheck} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numberCheck} não pertence à sequência de Fibonacci.`);
}

/*Resposta terminal: 12 não pertence à sequência de Fibonacci.*/