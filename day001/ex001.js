function lookArr(arr) {
    for(let count = 0; count < arr.length; count++) {
        console.log(`
            ${arr[count]} de posicao ${count} + ${arr[count + 1]} de posicao ${count + 1} = ${arr[count] + arr[count + 1]};
        `);
    }
}

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
lookArr(arrNum);