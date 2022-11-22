const multiplyNum = (a, b) => {
    if(a * b === 0) {
        return 0;
    }

    console.log(`${a} x ${b} = ${a * b}`);
    
    let firstNextNum = a - 1;
    let secondNextNum = b - 1;

    return multiplyNum(firstNextNum, secondNextNum);
}

multiplyNum(10, 10);

/**
    <<< EXPLICAÇÃO >>>

    1.  Criamos uma função que recebe dois parâmetros, que nesse caso serão os dois valores que serão
        multiplicados;
    
    2.  O primeiro bloco de comando dessa função é uma condição de parada pois só queremos valores não-negativos,
        nesse caso se o resultado da multiplicação do primeiro valor (a) entre o segundo valor (b) é igual a zero,
        se for verdade retornamos zero e a execução da função acaba;
    
    3.  Se no caso a condição anterior não for atendida seguimos em frente com a função, agora imprimimos no console
        o resultado da multiplicação entre os dois valores;

    4.  Criamos duas variáveis que irão ter como valor um número inferior a cada um dos parâmetros, 
        ex: "a = 5 | firstNextNum = 4", "b = 9 | secondNextNum = 8"
    
    5.  Por fim retornamos a função mas com os parâmetros tendo os valores das variáveis;
 */ 