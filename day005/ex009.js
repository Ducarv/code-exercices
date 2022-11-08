// Fácil 9. Leia um vetor contendo letras de uma frase inclusive os espaços em branco. 
// Retirar os espaços em branco do vetor e depois escreve-los.

const textArr = "Hello world tell me a story";

const removeWhiteSpace = arr => {
    const newString = arr.replace(/\s/g,'');;
    return newString;
}

console.log(removeWhiteSpace(textArr));

/**
    <<< EXPLICACAO >>>
    1.  Criamos uma função "removeWhiteSpace()" com um unico parametro que recebera o vetor que sera verificado
    2.  A primeira linha da funcao criamos uma constante "newString" que recebe o vetor com o metodo "replace"
        com a expressao regular, que ficara no primeiro argumento desse metodo, no qual representa a posicao que
        se deseja realizar a substituicao, e o segundo argumento pelo que sera substituido.
    3.  A expressao significa o seguinte: "\s significa que Encontra correspondência com um único caractere
        de espaço em branco, espaço, tabulação, avanço de página, quebra de linha"; o (g) no final da 
        expressao significa que a expressao sera global, ou seja, a pesquisa ocorrera em todas as instacias.
    4. Por fim será retornada a nova String sem espaços em branco
 */