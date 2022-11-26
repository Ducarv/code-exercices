const speedConverter = speed => {
    const speedInKm = (speed * 3.6).toFixed(2);
    return `${speed}m/s -> ${speedInKm}km/h`;
}

console.log(speedConverter(43.2))

/*
    <<< Explicacao >>>

    1.  Criamos uma funcao para converter os valores que representam metros por segundo,
        que recebe esse valor por parametro;

    2.  Basta multiplicar o valor por 3,6 e retornar o resultado;
*/