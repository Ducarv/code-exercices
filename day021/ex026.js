const triangle = height => {
    let line = "";
    for(let i = 1; i <= height; i++) {
        for(let j = 1; j <= i; j++) {
            line += "*";
        }
        line += "\n"
    }
    return line;
}

console.log(triangle(5))

/*
    <<< Explicacao >>>

    1.  Criamos uma funcao que recebe o parametro que representa o altura do triangulo;

    2.  Instaciamos uma variavel qua vai armazenar todo o triangulo desenhado;

    3.  Fazemos uma laco maior que irar acabar quando a variavel de controle deixar de 
        ser menor ou igual ao valor passado como argumento, enquanto esse laco aprovar 
        a condicao executamos ele;
        
    4.  Dentro do laco maior temos outro laco que verifica se a variavel de controle se
        a variavel de controle e menor ou igual a variavel de controle do laco maior,
        se for verdade  acumulamos um valor string na variavel "line";

    5.  No final da execucao do laco maior adicionamos no final da linha, uma quebra.
*/