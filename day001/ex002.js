const arr = []; // 1, 3, 5, 7,
let num = 0;

while(arr.length < 10) { // 4
    if(num % 2 !== 0) { // 8
        arr.push(num);
    }
    num++;
}

console.log(arr);


/**
 <<<<< Explicação >>>>>
 1 - Declaramos um vetor sem elementos, uma variavel 'i' para saber quantas vezes ja foi incrementado no array e uma variavel 'num'
     para ir para o proximo numero que será verificado
 2 - Um laço 'while' que irar acontecer até que a quantidade de elementos no array deixe de ser menor que 10
 3 - a condição ira verificar se o resto da divisao do numero 'num' por dois é diferente de zero '0', ou seja, impar
 4 - se a condiçao foi verdadeira iremos adicionar o 'num' na ultima posição do array e incrementar i++
 5 - e iremos incrementar em 'num' mais um, para que possamos trabalhar com o proximo numero
 6 - os passo anteriores aconteceram até que o 'while' seja quebrado
 
 */