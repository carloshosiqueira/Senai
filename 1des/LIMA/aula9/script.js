//let - variável local
//var - variável global
//const - variável constante

// const obj = [
//     {
//         Name: 'Lucas',
//         Age:20,
//         Country: 'Brazil'
//     },
//     {
//         Name: 'João',
//         Age: 30,
//         Country: 'Brazil'
//     },
//     {
//         Name: 'Pedro',
//         Age: 40,
//         Country: 'Brazil'
//     }
// ]

// console.log(obj);
// console.warn('AVISO');
// console.error('ERRO');
// console.table(obj);

//Operados aritiméticos

// + soma
// - subtração
// * multiplicação
// / Divisão
// ** potenciação
// %resto da divisão

// Operadoes de comparação

// > maior que
// < menor que
// >= maior ou igual que
// <= menor ou igual que
// = Atribuição
// == Igualdade (valor)
//  != Diferente (valor)
// === Igualdade (valor e tipo)
// !== Diferente (valor e tipo)


// 1-Desenvolva um programa que leia três variáveis (a, b, c) e resolva a expressão: ( a + b ) / c.

// var a = 5
// var b = 10
// var c = 15

// console.log((a + b) / c);

//2-Desenvolva um programa que leia a velocidade de um carro (km/h) e a distância a ser percorrida (km) por ele. 
//Calcule e apresente na tela, quanto tempo (horas) será necessário para o carro percorrer a distância informada.

// var velocidade = 100
// var distancia = 200

// console.log (distancia / velocidade)


//3- Desenvolva um programa que leia o nome e o salário de uma pessoa, depois leia o valor do índice percentual (%) 
//de reajuste do salário. Calcule e apresente na tela, o valor do novo salário e o nome da pessoa.


    // var nome ='Carlos'
    // var salario = 1320
    // var reajuste = 10
    // var novoSalario = salario + (salario * reajuste / 100)

    // console.log (nome + ' - Novo Salário: ' + novoSalario)

    // var data = new Date();

    // var dia = data.getDate();
    // var mes = data.getMonth() + 1;
    // var ano = data.getFullYear();

    // var anoCompleto = dia + '/' + mes + '/' + ano;
    // var anoCompleto = `${dia}/${mes}/${ano}`;

    // var hora = data.getHours();
    // var min = data.getMinutes();

    // var horaCompleta = `${hora}:${min}`

    // console.log(anoCompleto, horaCompleta);

    // Math.ceil() - arredonda para cima
    //Math.Floor() - arredonda para baixo
    //Math.Round() - arredonda para o mais proximo

    // var n = '10'
    
    // Number.parseInt(); - Converte para inteiro

    // console.log(n, Number.parseFloat(n))

    // if(){

    // }else if(){

    // }else{

    // }

    // condiçao ? true : false; - if ternario

    // switch(){
    //     case 1:
    //         break;
    //     default:
    //         break;
    // }

    // for(let i = 0; i < 10; i++){
    //     console.log(i);
    // }

    // while(){

    // }

    // do{

    // }while();

    //  var lista ='a b c d e'. split(' ')

    // for(let i = 0; i < lista.length; i++) {
    //     console.log(lista[i]);
    // }

    // lista.forEach(item => {
    //     console.log(item);
    // })

    // for(let item of lista){
    //     console.log(item);
    // }

    //function nome(){

    // }

    // nome(); - Executa a função nome


    //Exercicios lista if

    //1 Desenvolva um programa que leia o preço de um produto e se o preço for maior do que 1000 reais aplique um desconto de 8%. Mostre o preço final.

    // var preco = 1100;
    // var novoPreco;

    // function calcularSalario(){
    //    novoPreco = preco * 0.92;
    // }

    // if(preco > 1000){
    //     calcularSalario();
    //     console.log(novoPreco);
    // }

    //2- Desenvolva um programa que leia o salário de um funcionário e o número de filhos. Se o salário for menor do que 2000 o funcionário receberá 
    //um salário família equivalente a 45 reais por filho. Apresente o salário final.

    // var salario = 1300;
    // var filhos = 5
    // var novoSalario

    // function salarioFamilia(){
    //     novoSalario = salario + (filhos * 45);
    // }

    // if(salario < 2000){
    //     salarioFamilia();
    //     console.log(novoSalario)
    // }

    //Exercicios lista de laços

    //1 - Faça um programa que escreva na tela os numerais de 1 a 20

//     function crescente(){
//         for (var i = 1; i <= 20; i++){
//             console.log(i)
//         }
// }
//    crescente();

    //2 - Faça um programa que escreva na tela os numerais de 20 a 1

    // function decrescente(){
    //     for (var i = 20; i >= 1; i--){
    //         console.log(i)
    //     }
    // }
    // decrescente();
