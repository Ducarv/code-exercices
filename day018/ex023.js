const ageArr = [
    14, 16, 29, 31, 10, 9,
    65, 45, 18, 25, 33, 21,
    20, 13, 10
]

const higherThan18 = ages => {
    let agesHigherThan18 = 0;
    for(let count = 0; count < ages.length; count++) {
        if(ages[count] >= 18) {
            agesHigherThan18++;
        }
    }
    return `The quantity of elements higher than 18 is ${agesHigherThan18}`;
}

console.log(higherThan18(ageArr));

/*
    <<< Explicação >>>

    1.  Criamos uma função que recebe como parâmetro um array com as idades que serão verificadas;

    2.  Primeiramente criamos uma variável que recebera a quantidade de idade que são maiores ou
        iguais a 18;

    3.  Criamos um laço que verifica se o elemento atual é maior ou igual a 18 se for verdade
        incrementamos "+1" na variável que acumula "agesHigherThan18" esse laço só irá se encerrar
        se a variável de controle deixar de ser menor qua o comprimento de elementos do vetor;

    4.  Retornamos o resultado desse procedimentos;
*/