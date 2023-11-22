// //Herança
// // Na herança uma classe extende os atributos e métodos de outra classe

class Marca {
    constructor(nome){
        this.nome = nome;
    }

    FalarMarca(){
        return `Eu sou o carro da marca ${this.nome}`;
    }
}

class Modelo extends Marca {
    constructor(marca,modelo){
        super(marca);
        this.modelo = modelo;
    }

    FalarModelo(){
        return `${this.FalarMarca()} e sou o modelo ${this.modelo}`;
    }
}

carro1 = new Modelo("Peugeot", "206 Quiksilver");

console.table(carro1);

//Agregação

// O objeto-todo (neste exemplo, a estante) precisa de uma complementação das informações contidas em um ou mais objetos de 
//outra classe conhecidos como objeto-parte (livros, decorações, etc)

// se o objeto-todo for destruido, os objetos-parte ainda existirão

class estante {
    constructor() {
        this.decoracoes = []; //Criando um lugar para colocar as decorações
        this.livros = []; //Criando um lugar para colocar os livros
    }

    //Método para pegar os livros e colocar na estante
    addLivro(livro) {
        this.livros.push(livro)
    }

    //Método para pegar as decorações e colocar na estante
    addDecoracao(decoracao) {
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

let livro1 = new livro('Star Wars 1');
let livro2 = new livro('Star Wars 2');
let decoracao1 = new decoracao('Planta');
let decoracao2 = new decoracao('Quadro');

let minhaEstante = new estante();
minhaEstante.addLivro(livro1);
minhaEstante.addLivro(livro2);
minhaEstante.addDecoracao(decoracao1);
minhaEstante.addDecoracao(decoracao2);

//Mostrando a Estante com os livros e decorações
console.table(minhaEstante);

minhaEstante = 0

//Após esvaziar a estante, os livros e decorações ainda existem
console.log(`Estante: ${minhaEstante}\n1° Livro: ${livro1.titulo}\n2° Livro: ${livro2.titulo}\n----------------------\n1ª Decoração: ${decoracao1.tipo}\n2ª Decoração: ${decoracao2.tipo}`)


//Composição
//Na composição, diferente da agregação, quando o objeto-todo é destruido, suas partes também são

class Casa{
    constructor(endereco){
        this.endereco = endereco;
    }
}

let quarto = tamanho => `${tamanho}`;
let cozinha = tipo => `${tipo}`;
let banheiro = tamanho => `${tamanho}`;

let minhaCasa = new Casa('Laranjeiras'); //Objeto-Todo
minhaCasa.cozinha =  cozinha('moderno');// Objeto-Parte
minhaCasa.quarto = quarto('pequeno');// Objeto-Parte
minhaCasa.banheiro = banheiro('grande');// Objeto-Parte
console.table(minhaCasa);
//Até aqui, temos uma casa com 1 quarto, 1 cozinha, 1 banheiro e 1 endereço

//Agora, ao apagar-mos o conteudo de "minhaCasa", apagaremos todo o resto

minhaCasa = null
console.log(minhaCasa.cozinha)

//Podemos ver que a cozinha, o quarto e o banheiro se foram, por isso deu erro dizendo
//"Cannot read properties of null"          sendo "null" vazio ou seja, não existe