// Intermediário 31- Faça um programa que receba várias idades e que calcule e mostre
// a média das idades digitadas. Finalize digitando idade igual a zero.  

const agesArr = [15, 12, 23, 21, 22, 35, 41, 56];

const ageAvarage = ages => {
    let agesSum = 0;
    for(let count = 0; count < ages.length; count++) {
        agesSum += ages[count];
    }
    const avarage = (agesSum / ages.length).toFixed(1);

    return avarage;
}

console.log(ageAvarage(agesArr));

/*
    <<< Explicação >>>

    1.  Criamos uma função que será responsavel por retorna a média das idades recebidas em um vetor;

    2.  Primeiramente criamos uma variavel que recebera o valor acumulado da somas de todas as idades
        do vetor;
    
    3.  No laço de repetição iniciamos o controle em zero e esse laço só ira para quando a variavel
        de controle deixar de ser menor que o comprimento do array, quando entramos nesse laço
        adicionamos elemento por elemento a variavel que criamos anteriormente;
    
    4.  Quando saimos do laço calculamos a média, que é a soma dos valores dos elementos dividido pelo
        comprimento do vetor;
    
    5.  Assim retornamos a média de idades;
*/