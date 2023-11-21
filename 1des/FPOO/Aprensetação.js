//Herança
class cavalo {
    constructor(idade) {
        this.idade = idade;
    }
}

class cor extends cavalo {
    constructor(idade, cor) {
        super(idade); //super é utilizado para pegar os parametros da classe que está apos o "extends"
        this.cor = cor;
    }
}

const cavalo1 = new cor(1, 'preto');
console.table(cavalo1);
//Até aqui foi o conceito básico de herança, porém se precisar-mos de mais informações teremos de usar a "Cadeia de heranças"

//O javascript só deixa usar o "extends" para uma única classe, por isso ao adicionar mais informações deveremos usar o extend na classe com mais informações e repetir o processo,
//como apresenado a seguir

class altura extends cor { //A classe cor já tem o parâmetro idade e cor, por isso usamos ele aqui ao inves da classe idade, que só tem o parâmetro da idade
    constructor(idade, cor, altura) {
        super(idade, cor);
        this.altura = altura;
    }
}

const cavalo2 = new altura(2, 'zebrado', '1.8m');

console.table(cavalo2);



//Agregação

class estante {
    constructor() {
        this.decoracoes = [];
        this.livros = []
    }

    addLivro() {
        this.livros.push(livro)
    }

    addDecoracao() {
        this.decoracoes.push(decoracao);
    }
}

class decoracao {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class livro {
    constructor(titulo) {
        this.titulo = titulo;
    }
}

const livro1 = new livro('Star Wars 1');
const livro2 = new livro('Star Wars 2');
const decoracao1 = new decoracao('Planta');
const decoracao2 = new decoracao('Quadro');

const minhaEstante = new estante();
minhaEstante.addLivro(livro1);
minhaEstante.addLivro(livro2);
minhaEstante.addDecoracao(decoracao1);
minhaEstante.addDecoracao(decoracao2);

console.table(minhaEstante.livros, minhaEstante.decoracoes);
console.log(minhaEstante.livros, minhaEstante.decoracoes);