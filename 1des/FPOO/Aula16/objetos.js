//Objeto vazio declarado diretamente
const obj = {};
//Acrescentenado Atributos dinamicamente
obj.nome = ' Bola '
obj.preço = 39.90
obj.qtd = 10

//Objeto cheio com atributos e métodos
const obj2 = {
    //Atributos locais do objeto
    nome: ' Bicicleta ',
    preço: 1219.99,
    qtd: 2,

    //Métodos locais do objeto
    total(){
        return this.preço * this.qtd;
    },

    showHTML: function(){
        let str = `<label>Produto: </label><label> ${this.nome} </label>`;
        str += `<label>Preço: </label><label> R$ ${this.preço} </label>`;
        str += `<label>Quantidade: </label><label> ${this.qtd} </label>`;
        str += `<label>Total: </label><label> R$ ${this.total().toFixed(2)} </label>`;
    return str;
    }
}

const obj3 = {
    nome: ' Camiseta ',
    preço: 59.90,
    qtd: 6,
    
    total: function(){
        return this.preço * this.qtd;
    },

    showHTML: function(){
        let str = `<label>Produto: </label><label>${this.nome}</label>`;
        str += `<label>Preço: </label><label> R$ ${this.preço} </label>`;
        str += `<label>Quantidade: </label><label> ${this.qtd} </label>`;
        str += `<label>Total: </label><label>R$ ${this.total().toFixed(2)}</label>`;
    return str;
    }
}
//Método com function
obj.total = function(){
    return obj.preço * obj.qtd
}
//Método com arrow function
obj.showHTML = () => {
    let str = `<label>Produto: </label><label> ${obj.nome} </label>`;
    str += `<label>Preço: </label><label> R$ ${obj.preço} </label>`;
    str += `<label>Quantidade: </label><label> ${obj.qtd} </label>`;
    str += `<label>Total: </label><label> R$ ${obj.total().toFixed(2)} </label>`;
    return str;
}

//Saída no Console
console.log(obj);
console.log('Valor total = R$'+obj.total().toFixed(2));
console.log(obj2);
console.log('Valor total = R$'+obj2.total().toFixed(2));
console.log(obj3);
console.log('Valor total = R$'+obj3.total().toFixed(2));

//Saída no HTML
const main = document.getElementById('objetos');

const div = document.createElement('div');
main.appendChild(div);
div.innerHTML = obj.showHTML();

const div2 = document.createElement('div');
div2.innerHTML = obj2.showHTML();
main.appendChild(div2);

const div3 = document.createElement('div');
div3.innerHTML = obj3.showHTML();
main.appendChild(div3);