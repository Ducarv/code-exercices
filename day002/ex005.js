const testArr = 
[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18,
    19, 20
];

function pairElement(arr) {
    let pairNum = 0;
    for(let count = 0; count < arr.length; count++) {
        if(arr[count] % 2 === 0) {
            pairNum++;
        }
    }

    return `This array has ${pairNum} pair numbers`;
}

console.log(pairElement(testArr))

/**
    <<< EXPLICACAO >>>
    1.  Criamos a função 'pairElement()' que recebe o array que será verificado com parametro;
    2.  A primeira linha dentro da função instaciamos a variavel que ira receber a quantidade de
        valores pares do vetor;
    3.  Agora fazemos um laço que se inicia em zero e quebra até que a variável de controle seja
        menor que o comprimento do array
    4.  Dentro do laço temos a condição que verifica se o elemento atual do vetor tem o resto da 
        divisão por dois igual a zero, ou seja, é um numero par. Se a condição for verdaderia incrementamos
        na variavel 'pairNum';
    5.  Por fim retornamos a quantidades de numeros pares dentro do vetor;

 */