// Intermediário 7. Leia dois vetores de 20 posições e calcule um terceiro vetor contendo, 
// nas posições pares os valores do primeiro e nas posições impares os valores do segundo.

const firstArr = [7, 17, 27, 37, 47, 57];
const secondArr = [9, 19, 29, 39, 49, 59];

const mixArr = (arr1, arr2) => {
    const finalArr = [];
    let count = 0;
    let controlFirstArrIndex = 0;
    let controSecondArrIndex = 0;

    while(count < arr1.length + arr2.length) {
        if(count % 2 === 0) {
            finalArr[count] = arr1[controSecondArrIndex];
            controlFirstArrIndex++;
        } else {
            finalArr[count] = arr2[controSecondArrIndex];
            controSecondArrIndex++;
        }

        count++;
    }

    return finalArr;
}

console.log(mixArr(firstArr, secondArr));

/**
    <<< EXPLICACAO >>>
    1.  Criamos uma função com os dois vetores como parametros que serão analisados;
    2.  Instaciamos uma constante que receba os valores dos dois vetores e sera o vetor final;
    3.  Instaciamos uma varial que será a de controle do laço que vira em seguida;
    4.  Criamos duas variaveis que serão para controlar os indices dos vetores passados com argumentos;
    5.  Agora criamos o laco que ira acontecer até que a variavel "count" seja menor que o comprimento
        dos dois vetores somados, já que sabemos o vetor final será a mescla dos dois vetores então
        logicamente ele terá o tamanho dos dois vetores somados;
    6.  Dentro do laço temos um bloco de condição, que verifica se a varial de controle é par, se for verdade
        pegamos a o elemento/posicao atual do vetor final e atribuimos a ele o elemento atual do primeiro vetor
        que é controlado pela sua propria variavel de controle e por fim incrementamos "+1" nessa variavel. 
        Se a variavel "count" for impar fazemos os passoas anteriores só que ao contrario;
    7.  Depois que os blocos da condições forem concluidos incrementamos "+1" na variavel de controle "count"
    8.  Retornamos o array final;
 */