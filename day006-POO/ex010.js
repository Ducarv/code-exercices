class RegisterStudent {
    constructor(subject, name, firstTest, sencondTest, homeWork) {
        this.subject = subject;
        this.name = name;
        this.firstTest = firstTest;
        this.sencondTest = sencondTest;
        this.homeWork = homeWork;
    }

    finalScore() {
        const scoreTotal = (this.firstTest + this.sencondTest + this.homeWork).toFixed(2);
        return scoreTotal;
    }

    finalTest() {
        const total = this.finalScore();
        if(total >= 7) {
            return "You do not do another test";
        } else {
            return "You need another test, because your score is under 7";
        }
    }
}

const newStudent = new RegisterStudent("Math", "Eduardo", 3, 4, 1.5);
console.log((newStudent.finalTest()));

/**
    <<< EXPLANATION >>>
    1.  Criamos uma classe "RegisterStudent" onde nos iremos registrar um estudante em uma disciplina,
        onde recebemos no construtor as propriedades "subject, name, firstTest, secondTest, homeWork";
    2.  O metodo "finalScore()" retorna a pontuação final do aluna, depois da soma das duas provas que
        valem ate 4, e do trabalho que vale ate 2
    3.  O segundo metodo "finalTest()" indica se o aluno esta aprovado ou nao, nos criamos uma constante
        que recebe o valor retornado pelo metodo anterior, apos isso entramos em uma condicao onde o valor de
        "total" sera verificado;
    4.  Por fim nos criamos um novo objeto instaciando a classe "RegisterStudent";
 */