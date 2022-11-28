const reverseString = string => {
    let newString = "";
    for(let count = string.length - 1; count >= 0; count--) {
        newString += string[count];
    }
    return newString;
}

console.log(reverseString('Carlos'))

/*
    <<< Explicacao >>>

    1.  Criamos uma funcao que mostra com a string seria escrita se estivesse ao contrario
        ela recebe como parametro o valor string que sera trabalhado;

    2.  Instaciamos uma variavel que ira receber o resultado da string;

    3.  Entramos em laco onde a variavel de controle tem o valor do ultimo indice da string
        (string.length - 1), esse laco acontecera ate que a variavel de controle seja maior
        ou igual a zero, a cada vez que esse laco ocorre decrementamos a variavel de controle;

    4.  O que acontece dentro do laco e o seguinte, a variavel (newString) acumula mais um elemento da
        string de acordo com o indice;

    5.  Por fim retornamos a nova string;
*/