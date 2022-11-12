//Calcular a soma dos dígitos de um número. Dado um número qualquer, calcule a soma dos dígitos:

function sumOfDigits(num) {
    if(num === 0) {
        return 0;
    }

    return num % 10 + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(428));

/*
    <<< EXPLANATION >>>
    1.  O "( num%10 )" retorna o resto da divisão de num por 10, por exemplo:
        324 / 10 = 32 e resta 4 portanto 324 % 10 = 4

    2.  O "Math.floor(num/10)" retorna a parte inteira de num dividido por 10:
        324 / 10 = 32,40 portando 32 é a parte inteira.

    3.  O "if(num==0)" é a condição que interrompe a chamada da função.
*/