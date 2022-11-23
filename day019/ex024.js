const people = [
    {name: "Eduardo", age: 18, weight: 76},
    {name: "Carlos", age: 15, weight: 68},
    {name: "José", age: 28, weight: 87},
    {name: "Matheus", age: 33, weight: 65},
    {name: "Vitor", age: 56, weight: 80},
    {name: "Sabrynna", age: 25, weight: 53},
    {name: "Lucas", age: 61, weight: 92},
    {name: "João", age: 30, weight: 63},
    {name: "Maria", age: 45, weight: 62},
    {name: "Julia", age: 37, weight: 55},
    {name: "Rosa", age: 12, weight: 60},
]

const higherThanFifty = arr => {
    let agesHigherThanFifty = 0;
    for(let count = 0; count < arr.length; count++) {
        if(arr[count].age >= 50) {
            agesHigherThanFifty++;
        }
    }
    return `Ages higher than fifty: ${agesHigherThanFifty}`;
}

console.log(higherThanFifty(people));

const avarageHeight = arr => {
    let personAge = 0;
    let agesSum = 0;

    for(let count = 0; count < arr.length; count++) {
        if(arr[count].age >= 10 && arr[count].age <= 20) {
            personAge++;
            agesSum += arr[count].age;
        }
    }

    const avarage = (agesSum / personAge).toFixed(1);
    return avarage;
}

console.log(avarageHeight(people));

/*
    <<< Explicação >>>

    1.  A primeira função verifica as idades maiores que 50, essa função recebe um vetor
        com as informações;
    2.  Criamos um laço que é executado até a variável de controle deixar de ser menor que
        o comprimento do vetor, quando se entra na condição do laço verificamos se a 
        idade é maior e igual a 50;

    3.  A segunda função retorna a media das idades de pessoas com idades entre 10 e 20;

    4.  Criamos duas variável uma recebe a quantidade de pessoas com a idade entre 10 e 20,
        a segunda é a soma das idades dessas pessoas;

    5.  Criamos um laço e dentro desse laço verificamos a condição se a idade da pessoa
        atual está entre 10 e 20 anos, se for verdade incrementamos "persoAge" e acumulamos
        "agesSum";
    
    6.  Por fim retornamos a média dessas idades;
*/