// Intermediário 13. Faça um procedimento que recebe 3 valores
// inteiros por parâmetro e retorna-os ordenados em ordem crescente.

const sortElements = (a, b, c) => {
    let maior = 0;
    let menor = 0;

    if(a > b && a > c) {
        maior = a;
    } else if(b > a && b > c) {
        maior = b;
    } else { 
        maior = c;
    }
   
    if(a < b && a < c) {
        menor = a;
    } else if(b < a && b < c) {
        menor = b;
    } else {
        menor = c;
    }

    if((a === maior && b === menor) || (a === menor && b === maior)) {
        console.log(menor, c, maior);
    }
    if((a === maior && c === menor) || (a === menor && c === maior)) {
        console.log(menor, b, maior);
    }
    if((b === maior && c === menor) || (b === menor && c === maior)) {
        console.log(menor, a, maior);
    }

}

sortElements(55, 56, 54)

/**
    <<< EXPLICAÇÃO >>>

    obs: Este exercicio é para treinar condições.

    1.  Nós basicamente crimanos uma função onde passamos três parêmetros
        e eles serão verificados em várias condições para descobrir quem
        é o maior e o menor.
    2.  Após decobrir quem são o maior e o menor, basta imprimir no console
        o resultado. 
 */