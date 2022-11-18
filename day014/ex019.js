/*
    Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado
    daquele tamanho com asteriscos. Seu programa deve usar laços de repetição
    e funcionar para quadrados com lados de todos os tamanhos entre 1 e 20.

    Por exemplo, para lado igual a 5:
    *****
    *****
    *****
    *****
    *****
*/

const printSquare = size => {
    let square = "";
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            square += "* ";
        }
        square += "\n";
    }
    return square;
}

console.log(printSquare(10));

/*
    <<< EXPLICAÇÃO >>>

    1.  Criamos uma função que recebe como parâmetro um valor numérico que
        representará o tamanho dos lados do quadrado;
    
    2.  Primeiramente instaciamos uma variável "saquare" que inicia-se como
        string vazia, ele recebera o resultado final;

    3.  Iniciamos uma laço maior onde a variável de controle começa em zero
        "i", esse laço será responsável pela altura do quadrado;

    4.  O segundo laço é responsável pela largura/linha, então essa variavel terá
        o tamanho de acordo com o valor passado como argumento, assim a cada volta
        desse laço incrementamos o "*" na variável "square";
    
    5.  A cada giro do laço interior increntamos a expressão regular "\n" que significa
        quebra de linha;
    
    6.  Assim retornamos o quadrado;
*/