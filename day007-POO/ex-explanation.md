## Explicação

1.  Primeiramente criamos uma classe "Planner" onde teremos no contrutor uma 
    variavel "this.plannerArr" que retorna um vetor;

2.  O primeiro método "savePerson" salva uma nova pessoa, o método recebe como 
    parâmetro "name, age, height", e atribui esses parâmetros como valores das 
    chaves do objeto "newPerson", por fim usamos o método "push()" para adicionar
    esse objeto/pessoa na última posição do vetor;

3.  O método "removePerson" recebe como parâmetro o "name", ou seja, o nome da 
    pessoa que desejamos excluir. Primeiramente criamos uma variável de controle
    "count", a mesma ira controlar o laço de repetição que só acontecerá se
    "count" for menor que o comprimento do vetor.
    Dentro do laço temos duas condições, a primeira verifica se o valor "name"
    passado como parâmetro é igual ao valor nome do objeto atual do vetor, se for
    verdade executamaos esse bloco, onde usando o método "splice()" no vetor 
    "plannerArr" removemos o elemento na posição "count". A segunda condição 
    verifica de "count" ja possui o mesmo valor do comprimento do vetor se for 
    verdade retorna que o usuário nao foi encontrado.

4.  O método "findPerson" recebe como parâmetro o "name", ou seja, o nome da 
    pessoa que desejamos encontrar. Primeiramente criamos uma variável de controle
    "count", a mesma ira controlar o laço de repetição que só acontecerá se
    "count" for menor que o comprimento do vetor.
    A primeira condição do laço verifica se o valor "name" passado no parâmetro é
    igual ao nome do objeto atual no vetor, se for verdade retornamos o nome da pessoa
    e a posição que ela está.
    A segunda condição verifica de "count" ja possui o mesmo valor do comprimento do vetor se for verdade retorna que o usuário nao foi encontrado.

5.  "printPlanner" retorna basicamente o vetor com todas as pessoas.

6.  O último método "printPerson" recebe como parâmetro a posição da pessoa que
    procuramos, Primeiramente criamos uma variável de controle
    "count", a mesma ira controlar o laço de repetição que só acontecerá se
    "count" for menor que o comprimento do vetor. O laço de repetição tem como 
    condição se "count" é menor que o comprimento do vetor, se for verdade entramos
    no laço. A primeira condiçã verifica se a "postion" que informamos é igual a
    "count" se for verdade retornamos os dados da pessoa atual no vetor. A segunda
    condição verifica se "count" já possui o valor igual ao comprimento do vetor,
    se sim retornamos que a pessoa não foi encontrada.

7.  Por fim temos alguns exemplos para você praticar.