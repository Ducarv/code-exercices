const upperCaseString = str => {
      let newStringResult = str.toUpperCase();
      return newStringResult;                                                                                           
}

console.log(upperCaseString("dudu"));

/*
    <<< Explicacao >>>

    1.  Criamos uma funcao onde recebe uma string como parametro que sera
        manipulada para se tornar maiúscula;

    2.  Instaciamos uma variavel "newStringResult" que retornara o resultado da 
        transformacao, o metodo "toUpperCase()" transforma a string em maiúscula
        e por fim retornamos essa string;
*/