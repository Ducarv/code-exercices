const names = ["Eduardo", "Marcos", "Matheus", "Felipe", "Fernanda"];

const reverseArray = arr => {
    let newNames = [];
    let control = 0;

    for(let count = arr.length - 1; count >= 0; count--) {
        newNames[control] = arr[count];
        control++;
    }

    console.log(names)
    console.log(newNames);
}

reverseArray(names)

/*
    <<< Explicacao >>>

    1.  Criamos uma funcao onde vamos inverter a ondem de uma lista de nomes,
        essa funcao recebe como parametro o vetor que sera verificado;

    2.  Primeiramente criamos duas variavel, a primeira recebera a nova lista
        organanizada e a segunda ira controlar os indices desse vetor;

    3.  Entramos em um laco onde a variavel de controle tem como valor inicial 
        o ultimo indice o vetor recebido como parametro, esse laco acontecera
        ate que a variavel de controle deixe de ser maior ou igual a zero;

    4.  Debtro desse laco iremos atribuir desde a primeira posicao do vetor novo
        os valores das ultimas posicoes do vetor recebido no parametro, e incrementar
        mais um na variavel de controle do novo vetor;
*/