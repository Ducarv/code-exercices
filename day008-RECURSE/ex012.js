function countingDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;
    if(nextNumber > 0) {
        countingDown(nextNumber);
    }
}

countingDown(5);

/**
    <<< EXPLANATION >>>
    1.  Criamos uma função "countingDown" que recebe como parâmetro um valor de onde começará a contagem regressiva;
    2.  A instrução de função é imprimir o valor passado como parâmetro no console;
    3.  Instanciamos uma variavel "nextNumber" que será o valor do parametro menos um;
    4.  Temos uma condição que verifica se o próximo numero é maior que zero, ou seja, toda contagem regressiva irá parar
        no um (1);
    5.  Se a condição for verdade chamamos a própria função de maneira recursiva e passamos como argumento o próximo
        valor "nextNumber";
 */
