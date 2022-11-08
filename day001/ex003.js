//Fácil 3. Leia um vetor de 16 posições e troque os 8 primeiros valores 
//pelos 8 últimos e vice-e-versa. Escreva ao final o vetor obtido.

function sliceArr(arr) {
    let firstHalf = arr.slice(0, Math.floor(arr.length / 2));
    let secondHalf = arr.slice(arr.length / 2, arr.length);
    const changedArr = [...secondHalf, ...firstHalf];

    return console.log(changedArr);
}

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

sliceArr(testArr)

/*
    <<<< EXPLICACAO >>>>
    1 - A função 'sliceArr()' ira dividir o vetor na metade e trocar as duas metades de lugar
    2 - A primeira linha da funcao pega a primeira metade do vetor, o metodo 'slice()' cortar o vetor
        de uma posicao inicial ate uma final (o fim nao e incluido), nesse caso pegamos a primeira posicao e cortamos ate
        a metade que no caso e representado 'arr.length / 2', a propriedade 'length' pega o tamanho do vetor
        ou a quantidade de elementos que o mesmo tem;
    3 - A segunda linha nos iremos pegar a segunda metade da funcao, usando novamente o metodo slice, a primeira
        posicao que pegaremos e o meio para frente, ou seja, 'arr.length / 2' depois pegaremos ate o final do 
        tamanho do vetor 'arr.length'
    4 - A terceira linha sera onde faremos a inversao de metades desse vetor, onde declaramos uma constante
        que tem como valor um vetor, usamos o 'spread operator' para espalhar os elementos de cada vetor 
        dentro dessa constante fazendo com se tornem um vetor so e nao um vetor com outros dois dentro
*/