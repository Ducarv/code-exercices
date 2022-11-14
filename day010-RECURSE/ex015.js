// Função de Fibonacci, Fibonacci é uma sequência numérica em que
// cada número seguinte é somado aos dois números anteriores, começando por 0.
// Formula: Fn = (Fn - 1) + (Fn - 2)

const fibonacci = num => {
    if(num <= 1) {
        return 1;
    }

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(4));

/**
    <<< EXPLICAÇÃO >>>

    1.  Criamos uma função que recebe um valor numérico com parâmetro;

    2.  Primeiramente temos uma condição para que essa função seja executada,
        é que o número do parâmetro não seja menor ou igual a um;
    
    3.  Se a condição for falsa executamos o resto da função, onde retornamos
        a soma dos dois ultimos números
 */