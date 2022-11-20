//  Fácil 13 – Faça um Programa que leia um número e exiba o dia correspondente da semana.
// (1- Domingo , 2- Segunda, etc.) se digitar outro valor deve aparecer “valor inválido)

const dayOfWeek = day => {
    let dayName = "";
    switch(day) {
        case 1: {
            dayName = "Monday";
            return dayName;
        }
        case 2: {
            dayName = "Tuesday";
            return dayName;
        }
        case 3: {
            dayName = "Wednesday";
            return dayName;
        }
        case 4: {
            dayName = "Thursday";
            return dayName;
        }
        case 5: {
            dayName = "Friday";
            return dayName;
        }
        case 6: {
            dayName = "Saturday";
            return dayName;
        }
        case 7: {
            dayName = "sunday";
            return dayName;
        }
        default: {
            return "The value not exist";
        }
    }
}

console.log(dayOfWeek(3));

/*
    <<< EXPLICAÇÃO >>>

    1.  Criamos uma função que recebe por parâmetro um valor numério
        que representará algum dia da semana;
    
    2.  Instaciamos uma variável para receber a string do dia em questão;

    3.  Por fim entramos em um estrutura switch-case que vai verificar qual 
        o valor do argumento e retornar o valor certo;
*/