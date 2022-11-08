//Fácil 1. Leia um vetor de 12 posições e em seguida ler também dois valores X e Y quaisquer correspondentes a duas posições no vetor. 
//Ao final seu programa deverá escrever a soma dos valores encontrados nas respectivas posições X e Y.

function lookArr(arr) {
    for(let count = 0; count < arr.length; count++) {
        console.log(`
            ${arr[count]} de posicao ${count} + ${arr[count + 1]} de posicao ${count + 1} = ${arr[count] + arr[count + 1]};
        `);
    }
}

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
lookArr(arrNum);