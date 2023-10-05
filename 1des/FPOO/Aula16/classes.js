//Criar objetos a partir de uma classe
class Coisa{
    constructor(nome,preço,qtd){
    this.nome = nome;
    this.preço = preço;
    this.qtd = qtd;
    }
    total(){
        return this.preço * this.qtd
    }
    showHTML(){
        let str = `<label>Produto: </label><label> ${this.nome} </label>`;
        str += `<label>Preço: </label><label> R$ ${this.preço} </label>`;
        str += `<label>Quantidade: </label><label> ${this.qtd} </label>`;
        str += `<label>Total: </label><label> R$ ${this.total().toFixed(2)} </label>`;
        return str;
    }
}
//Criar instâncias desta classe em uma lista
const lista = [];
lista.push(new Coisa('Cadeira', 149.90, 6));
lista.push(new Coisa('Mesa', 349.90, 1));
lista.push(new Coisa('Caneta', 2.99, 50));
lista.push(new Coisa('Sofá',1200.00 , 1));
lista.push(new Coisa('Poltrona do papai',5500.00 , 1));

//Mostrar no console
console.table(lista);

//Mostrar no HTML
const main = document.getElementById('objetos');
lista.forEach(obj =>{
    const div = document.createElement('div');
    div.innerHTML = obj.showHTML();
    main.appendChild(div);
})
