class Carro{
    constructor(modelo, marca, ano){
        this.modelo = modelo == undefined ? '' : modelo;
        this.marca = marca == undefined ? '' : marca;
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class Argo{
    constructor(ano){
        this.modelo = "Argo";
        this.marca = "Fiat";
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class Gol{
    constructor(ano){
        this.modelo = "Gol";
        this.marca = "Vw";
        this.ano = ano == undefined ? new Date().getFullYear() : ano;
    }
}

class Turbo{
    constructor(marca){
        this.marca = marca == undefined ? "Genérica" : marca;
    }
}

//Classe builder - complexa
class carroBuilder{
    constructor(modelo, marca, ano){
        if(modelo && marca && ano){
            if(modelo == "Argo"){
                this.carro = new Argo(ano);
            } else if(modelo == "Gol"){
                this.carro = new Gol(ano); 
            } else {
                this.carro = new Carro(modelo, marca, ano);
            }
        } else if(modelo && marca) {
            if(modelo == "Argo"){
                this.carro = new Argo();
            } else if(modelo == "Gol"){
                this.carro = new Gol();
            } else {
                this.carro = new Carro(modelo, marca);
            }
        } else {
            this.carro = new Carro()
        }
    }
    setTurbo(turbo){
        this.carro.turbo = new Turbo(turbo);
    }

    build() {
        return this.carro;
    }
}

//Criando um carro com o Builder
const carro1 = new carroBuilder('Argo', "Fiat", 2020);
const carro2 = new carroBuilder('Gol', "Vw");
carro2.setTurbo('Garrett');
const carro3 = new carroBuilder('Onix', "Chevrolet");
const carro4 = new carroBuilder();

const carros = [
    carro1.build(),
    carro2.build(),
    carro3.build(),
    carro4.build()
]

console.log(carros)