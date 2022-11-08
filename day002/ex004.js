//Fácil 4. Leia um vetor de 20 posições e em seguida um valor X qualquer. 
//Seu programa devera fazer uma busca do valor de X no vetor lido e 
//informar a posição em que foi encontrado ou se não foi encontrado.

const testArr = 
[
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18,
    19, 20
];

function printElem(arr, element) {
    for(let count = 0; count < arr.length; count++) {
        if(arr[count] === element) {
            console.log(`Element >>> ${arr[count]} -- Position >>> ${count}`);
        } 

        if(arr[count] !== element && count === arr.length - 1) {
            console.log("Element not found")
        }
    }
}

printElem(testArr, 21);

/**
    <<< EXPLICACAO >>>
    1. Temos uma função 'printElem()' com dois parametros, o primeiro recebe o  vetor que sera verificado
       e o elemento que procuramos
    2. A primeira linha passamos uma laco iniciado em '0' e para quando a variavel de controle for menor
       que o comprimento do vetor
    3. Dentro da execucao do laco temos uma condicao que compara o elemento atual e igual ao elemento que
       procuramos, se a condicao for verdadeira imprimimos no console o elemento e a posicao que se encontra
    4. A segunda condicao busca duas confirmacoes, <<primeira>> - analisa se a posicao do array atual e 
       diferente do elemento buscado; <<segunda>> - se a variavel de controle e igual a ultima posicao do
       vetor, se sim e imprimido no console que o elemento nao foi encontrado 

 */