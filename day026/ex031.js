const reverseNumber = num => {
    let numToString = "" + num;
    let reverseNumber = "";

    for(let count = numToString.length - 1; count >= 0; count--) {
        reverseNumber += numToString[count];
    }

    let finalResultNum = Number(reverseNumber);

    return finalResultNum;
}

console.log(reverseNumber(987));

/*
    <<< Explicacao >>>

    1.  Criamos uma funcao que ira retornar um numero de tras para frente,
        recebe um valor numerico por parametro que sera trabalhado;

    2.  A variavel "numToString" converte para um string o valor do parametro;

    3.  Entramos em laco em que a variavel de controle tem como valor o ultimo
        indice da string e esse laco acontece ate que a variavel deixe de ser
        maior ou igual a zero, a cada execucao de laco decrementamos um sobre 
        a variavel de controle;

    4.  Dentro do laco vamos acumulando os valores de tras para frente dos valores
        numericos que foram convertidos para strings, onde temos a possibilidade
        de trabalhar com indices;

    5.  Antes de retornarmos o resultado final convertemos novamente para numero;
*/