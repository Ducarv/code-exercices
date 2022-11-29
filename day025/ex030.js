const countDown = num => {
    for(let count = num; count >= 0; count--) {
        console.log(count);
    }
}

countDown(54)

/*
    <<< Explicacao >>>

    1.  Criamos uma funcao que recebe por parametro o valor numerico
        de onde sera iniciada a contagem regressiva;

    2.  Entramos em um laco, onde a variavel de controle recebe o valor
        passado por parametro, esse laco vai acontecer ate que a variavel de
        controle deixe de ser maior ou igual a zero e sempre que esse laco
        for executado decrementamos um no valor da variavel de controle;
    
    3.  Imprimimos no console o valor "count" que representa a variavel de
        controle;
*/