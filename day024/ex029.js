const calculateAreaTriangle = (a, b) => {
    const result = (a * b) / 2;
    return result;
}

console.log(calculateArea(2, 3));

/*
    <<< Explicacao >>>
    
    1.  Criamos uma funcao que calculamos a area de um triangulo,
        recebe como parametro dois valores, que podem ser tanto base como altura;

    2.  Fazemos basicamente dentro dessa funcao o calculo: (a * b) / 2

    3.  Por fim retornamos o resultado do calculo anterior;
*/