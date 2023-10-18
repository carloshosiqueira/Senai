class pessoa {
    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
        this.inss = (this.inss()).toFixed(2);
        this.irrf = (this.irrf().toFixed(2));
        this.salBase = (this.salario - this.inss).toFixed(2);
        this.salLiquido = (this.salBase - this.irrf).toFixed(2);;

    }



    inss() {
        if (this.salario < 1320.01)
            return this.salario * 7.5 / 100;
        else if (this.salario < 2571.30)
            return this.salario * 9 / 100;
        else if (this.salario < 3856.95)
            return this.salario * 12 / 100;
        else if (this.salario < 7507.49)
            return this.salario * 14 / 100;
        else
            return 1051.05;
    }

    irrf() {
        if (this.salario < 1903.99)
            return 0;
        else if (this.salario < 2826.66)
            return this.salario * 7.5 / 100 - 142.8;
        else if (this.salario < 3751.06)
            return this.salario * 15 / 100 - 354.8;
        else if (this.salario < 4664.69)
            return this.salario * 22.5 / 100 - 636.13;
        else
            return this.salario * 27.5 / 100 - 869.36;
    }

    showHTML() {
        let str = `<div class="identificacao"><h2>Nome:</h2><h2>${this.nome}</h2></div><div class="dados"><label>Salário:</label><label>R$ ${this.salario}</label>`;
        str += `<label>INSS:</label><label>R$ ${this.inss}</label><label>Sal.Base:</label><label>R$ ${this.salBase}</label>`
        str += `<label>IRRF:</label><label>R$ ${this.irrf}</label><label>Sal.Liquido:</label><label>R$ ${this.salLiquido}</label></div>`;
        return str;
    }

}

const lista = [];
lista.push(new pessoa('Carlos',2000))

console.table(lista)

const main = document.getElementById('principal');
lista.forEach(funcionario => {
    const card = document.createElement('div')
    card.innerHTML = funcionario.showHTML()
    main.appendChild(card)
    console.log(pessoa)
})

const form = document.getElementById("novaPessoa");
const corpo = document.getElementById("dados");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let Pessoa = new pessoa(form.nome.value,form.salario.value);
    lista.push(Pessoa);
    form.reset();
    atualizaTabela();
});

function atualizaTabela() {
    corpo.innerHTML = "";
    lista.forEach((pessoa) => {
        corpo.innerHTML += pessoa.showHTML();
    });
}