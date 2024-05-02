class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  obterDados() {
    console.log(`Produto: ${this.nome}, Preço: ${this.preco}`);
  }
}

class ProdutoFactory{
  criar(tipo){
    let produto;

    if (tipo === 'A') {
      produto = new Produto('Açucar', 10.5);
    } else if (tipo === 'B') {
      produto = new Produto('Sal', 2.5);
    } else if (tipo === 'C') {
      produto = new Produto('Óleo', 12.9);
    }

    return produto;
  }
}

// Exemplo de uso:
const factory = new ProdutoFactory();

const acucar = factory.criar('A')
const sal = factory.criar('B');
const oleo = factory.criar('C');

const feijao = new Produto('Feijão', 8.5);

sal.obterDados();
acucar.obterDados();
oleo.obterDados();
feijao.obterDados();