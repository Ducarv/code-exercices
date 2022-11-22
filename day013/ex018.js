const findPrimeNumber = num => {
    if(num < 0) {
        return "(num) must be higher than zero"
    }

    if(num % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

console.log(findPrimeNumber(106));

/*
    <<< EXPLICAÇÃO >>>

    1.  Criamos uma função que tem como parâmetro um numero inteiro positivo,
        que será verificado se é primo ou não;

    2.  Primeiramente fazemos uma condição para validar se o número é mesmo e
        positivo;

    3.  A seguir temos uma condição que verifica se o 'num' tem o resto da visão exata
        diferente de zero, se for igual a zero o número não é primo e retorna 'false',
        se o resto for diferente de zero retorna 'true', pois o numero é primo;
*/