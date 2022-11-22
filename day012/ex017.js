const ageArr = [10, 22, 13, 16, 17, 29, 33, 51, 47, 25];

const avarageAge = ages => {
    let sumAge = 0;
    for(let count = 0; count < ages.length; count++) {
        sumAge += ages[count];
    }

    const avarage = sumAge / ages.length;
    return avarage;
}

console.log(avarageAge(ageArr));

/*
    <<< EXPLICAÇÃO >>>

    1.  Criamos uma função que recebe como parâmetro o array com os valores que iremos verificar;

    2.  A primeira linha da função temos uma variável que irar acumular os valores de cada posição
        do vetor;
    
    3.  Então iniciamos um laço, que irá acontecer até a variável de controle deixar de ser menor
        que o comprimento do vetor, dentro desse laço nós acumulamos os valores dos elementos com a
        variável "sumAge";
    
    4. Por fim calculamos a média e retornamos ela;
*/