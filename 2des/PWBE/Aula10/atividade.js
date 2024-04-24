class Ingrediente {
    constructor(descricao) {
        this.descricao = descricao;
    }
}

class Comida {
    constructor(nome, tipo, peso) {
        this.nome = nome != undefined ? nome : 'Essa abominação não tem nome não';
        this.tipo = tipo != undefined ? tipo : "Comida";
        this.peso = peso != undefined ? peso : 0;
    }
}

class Salgada {
    constructor(nome, peso) {
        this.nome = nome != undefined ? nome : 'Salgado sem nome';
        this.tipo = "Salgada";
        this.peso = peso != undefined ? peso : "Tem peso isso aqui não";
    }
}
class Doce {
    constructor(nome, peso) {
        this.nome = nome != undefined ? nome : 'Doce sem nome';
        this.tipo = "Doce" ;
        this.peso = peso != undefined ? peso : "Tem peso isso aqui não";
    }
}


class comidaBuilder {
    constructor(nome, tipo, peso) {
        if (nome != undefined && tipo != undefined && peso != undefined) {
            if (tipo == "Salgada") {
                this.comida = new Salgada(nome, peso);
            }
            else if (tipo == "Doce") {
                this.comida = new Doce(nome, peso);
            }
            else {
                this.comida = new Comida(nome, tipo, peso);
            }
        } else if (nome != undefined && tipo != undefined) {
            if (tipo == "Salgada") {
                this.comida = new Salgada(nome);
            }
            else if (tipo == "Doce") {
                this.comida = new Doce(nome);
            } else {
                this.comida = new Comida();
            }
        }
    }

    addIngrediente(ingrediente) {
        if (this.comida.ingredientes == undefined) {
            this.comida.ingredientes = [];
        }
        this.comida.ingredientes.push(ingrediente);
        return this;
    }

    buiid() {
        return this.comida;
    }
}

const comidas = [
    new comidaBuilder(),
    new comidaBuilder("Arroz", "Salgada", 100),
    new comidaBuilder("Feijão"),
    new comidaBuilder("Brigadeiro", "Doce"),
    new comidaBuilder("Bolo", "Doce", 200),
    new comidaBuilder("Pudim", "Doce", 150),
    new comidaBuilder("Lasanha", "Salgada", 300),
    new comidaBuilder("Pizza", "Salgada", 100),
    new comidaBuilder("Macarrão", "Salgada", 200),
    new comidaBuilder("Salada", "Salgada", 100),
    new comidaBuilder("Sorvete", "Doce"),
    new comidaBuilder()
]

comidas[1].addIngrediente(new Ingrediente("Sal"));
comidas[1].addIngrediente(new Ingrediente("Alho"));
comidas[3].addIngrediente(new Ingrediente("Leite Compensado"));
comidas[3].addIngrediente(new Ingrediente("Chocolate em pó do padre"));

console.log(comidas);
console.table(comidas);
console.log(JSON.stringify(comidas, null,2))