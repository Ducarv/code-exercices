//Fácil 6. Leia um vetor de 40 posições e atribua valor 0 para todos os elementos que possuírem valores negativos.

const testArr = 
[
    1, 2, -3, 4, 5, -6, 7, 8, -9, 10,
    11, -12, 13, -14, -15, 16, 17, 18,
    19, -20
];

const changeNegatives = arr => {
    for(let count = 0; count < arr.length; count++) {
        if(arr[count] < 0) {
            arr[count] = 0;
        }
    }

    return arr;
}

console.log(changeNegatives(testArr));
/**
    <<< EXPLICACAO >>>
    1.  A função instanciada 'changeNegatives()' que recebe como parametro o vetor que sera analisado;
    2.  Criamos um laço de repetição que começa em zero e só será quebrado quando a variavel de controle
        deixar de ser menor que o comprimento do vetor;
    3.  Dentro do laço verificamos a condição se o valor atual do vetor é menor que zero, ou seja, um valor
        negativo;
    4.  Se a condição aterior for vedadeira entramos executamos os comandos dentro dela, que no caso é
        passar para o valor atual do vetor o valor de "0";
    5.  Por fim retornamos o vetor modificado;
 
 */