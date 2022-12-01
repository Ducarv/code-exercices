const circleCalc = r => {
    let PI = 3.14;
    const area = PI * (r ** 2);
    const perimeter = 2 * PI * r;

    return `Area: ${area} | Perimeter: ${perimeter}`;
}

console.log(circleCalc(3));

/*
    <<< Explicacao >>>

    1.  Criamos uma funcao que ira calcular a area e o perimetro
        de um circulo, recebe o valor do raio por parametro;

    2.  Primeiramente instanciamos uma variavel com o valor de Pi;

    3.  Criamos duas constantes uma recebe o calculo responsavel pela
        area e outra responsavel pelo perimetro;

    4.  Por fim retornamos ambos os valores da area e do perimetro;
*/