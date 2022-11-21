//  Intermediário 18. Faça um Programa que peça um número inteiro e determine se ele e par ou ímpar. 

const evenOrOdd = num => {
    if(num % 2 === 0) {
        return `${num} is even`;
    } else {
        return `${num} is odd`;
    }
}

console.log(evenOrOdd(5));

/*
    <<< EXPLICAÇÃO >>>

    1.  Criamos uma função que irá verificar se um número é impar ou par,
        recebemos como parâmetro um número inteiro positivo;

    2.  Dentro da função temos um bloco if-else que verifica se o resto da
        divisão de "num" por 2 é igual a zero, se for verdade o numero recebido
        é par, se não é impar;
*/