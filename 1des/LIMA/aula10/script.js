// var nome = document.getElementById('nome')
// var resultado = document.getElementById('resultado')

// function buscarElemento(){
//     // let nome = document.getElementById('nome')

//     resultado.innerHTML = nome.value
// }

//1- Desenvolva um programa que leia três variáveis (a, b, c) e resolva a expressão: ( a + b ) / c.

    

    var resultado1 = document.getElementById('resultado1')

    function calcular(){
        let  a = Number.parseFloat(document.getElementById('a').value);
        let  b = Number.parseFloat(document.getElementById('b').value);
        let  c = Number.parseFloat(document.getElementById('c').value);

        var conta1 = 'O resultado da conta (a + b) / c é ' + (a + b) / c
        console.log(conta1)
        
        resultado1.innerHTML = conta1
    }

//2- Desenvolva um programa que leia a velocidade de um carro (km/h) e a distância a ser percorrida (km) por ele.
//Calcule e apresente na tela, quanto tempo (horas) será necessário para o carro percorrer a distância informada.

    var resultado2 = document.getElementById('resultado2')

    function calcularTempo1(){
        let velocidade = Number.parseFloat(document.getElementById('velocidade').value)
        let distancia = Number.parseFloat(document.getElementById('distancia').value)

        let conta2 = distancia / velocidade
        console.log(conta2)

        resultado2.innerHTML =`${conta2.toFixed(2)} horas`
    }

    //3- Desenvolva um programa que leia o nome e o salário de uma pessoa, depois leia o valor do índice percentual (%) 
    //de reajuste do salário. Calcule e apresente na tela, o valor do novo salário e o nome da pessoa.

    var resultado3 = document.getElementById('resultado3')

    function calcularReajuste(){
        let nome = document.getElementById('nome').value
        let salario = Number.parseInt(document.getElementById('salario').value)
        let reajuste = Number.parseInt(document.getElementById('reajuste').value)

        let novoSalario = salario + (salario * reajuste / 100)
        console.log(nome, salario, novoSalario)

        resultado3.innerHTML = nome + ' tem um salário de R$ ' + novoSalario.toFixed(2) + ' após o reajuste de ' + reajuste + '%' 
    }

    //4- Desenvolva um programa que leia o nome de um time de futebol, o número de vitórias e o número de empates. O programa 
    //deverá calcular e apresentar na tela, o nome do time e o total de pontos. Lembrando que a vitória vale 3 pontos e o empate vale 1 ponto.

    var resultado4 = document.getElementById('resultado4')

    function calcularPontos(){
        let time = document.getElementById('time').value
        let vitorias =Number.parseInt(document.getElementById('vitorias').value)
        let empates = Number.parseInt(document.getElementById('empates').value)

        let pontos = vitorias * 3 + empates
        console.log(time,vitorias,empates,pontos)

        resultado4.innerHTML = `O time ${time} tem um total de ${pontos} pontos, com ${vitorias} vitórias e ${empates} empates.`
    }

    //5- Desenvolva um programa que leia um número ”n” inteiro, positivo e diferente de zero e apresente na tela: n – 1, e também n + 1.


    var resultado5 = document.getElementById('resultado5')

    function calcularSequencia(){
        let n = Number.parseInt(document.getElementById('n').value)
        let antecessor
        let sucessor

        if(n > 0 ){
            antecessor = n - 1
            sucessor = n + 1
            resultado5.innerHTML = `A sequência fica ${antecessor} ${n} ${sucessor}`
        }else{
            resultado5.innerHTML = `Coloque um valor maior que 0 para n`
        }
        console.log(antecessor, n, sucessor)
    }

    //6- Sabendo-se que a velocidade de cruzeiro de um avião 747-300 é de 900 km/h, faça um programa que leia uma distância (km), calcule
    //e apresente na tela, quanto tempo (horas) será necessário para um 747-300 sobrevoar a distância informada.

    var resultado6 = document.getElementById('resultado6')
    
  

    function calcularTempo2(){
        let velocidade = 900
        let distancia2 = Number.parseInt(document.getElementById('distancia2').value)

        let conta3 = distancia2 / velocidade
        console.log(velocidade,distancia2,conta3)

        resultado6.innerHTML = conta3 + ' Horas'
    }

    //7- Um caminhão consegue transportar 18 toneladas de laranjas em uma viagem que faz entre a fazenda e a fábrica de suco de laranja. Um alqueire de
    //terra produz em média 250 toneladas de laranjas. Faça um programa que leia quantos caminhões e quantos alqueires uma fazenda produtora de laranjas
    //possui, calcule e apresente na tela quantas viagens de caminhão serão necessárias para transportar toda a colheita de laranjas.

        var resultado7 = document.getElementById('resultado7')

        function viagens(){
            let caminhao = Number.parseInt(document.getElementById('caminhao').value)
            let alqueire = Number.parseInt(document.getElementById('alqueire').value)

            let viagens = Math.ceil((alqueire * 250) / (caminhao * 18))
            console.log(caminhao, alqueire, viagens)

            resultado7.innerHTML = `São necessárias: ${viagens} viagens`

        }

        //Desenvolva um programa que leia o raio (cm) e a altura (cm) de um cilindro. Calcule e mostre a área (cm2) e o volume (cm3) do cilindro.

        var resultado8 = document.getElementById('resultado8')

        

        function calcularCilindro(){
            let raio = Number.parseFloat(document.getElementById('raio').value)
            let altura = Number.parseFloat(document.getElementById('altura').value)
            let pi = 3.1415
            let area = 2 * pi * raio * (raio + altura);
            let volume = pi*raio*raio*altura

            resultado8.innerHTML = `O cilindro tem uma área de ${area.toFixed(2)}cm³ e um volume de ${volume.toFixed(2)}cm³`
        }
        
        //9- Desenvolva um programa que leia o nome e o preço de uma mercadoria. O programa deverá calcular um aumento de 5% no preço da mercadoria e mostrar
        //o nome da mercadoria e o seu novo preço.

        var resultado9 = document.getElementById('resultado9')

        function calcularAumento(){
            let nome2 = document.getElementById('nome2').value
            let preco = Number.parseFloat(document.getElementById('preco').value)

            let novoPreco = preco + (preco * 5 /100)
            console.log(nome2,preco,novoPreco)

            resultado9.innerHTML = `O produto "${nome2}" teve um aumento de 5% e de ${preco} agora custa ${novoPreco}`
        }

        //10- Desenvolva um programa que leia o nome de uma cidade, o número total de eleitores e o número total de votos apurados na última eleição.
        //O programa deverá calcular e exibir a porcentagem de participação dos eleitores desta cidade na última eleição.

        var resultado10 = document.getElementById('resultado10')

        function calcularPorcentagem(){
            let cidade = document.getElementById('cidade').value
            let eleitores = Number.parseInt(document.getElementById('eleitores').value)
            let votos = Number.parseInt(document.getElementById('votos').value)

            let participacao = votos / eleitores * 100
            console.log(cidade,eleitores,votos,participacao)

            resultado10.innerHTML = 'A cidade ' + cidade + ' teve uma participação de ' + participacao.toFixed(2) + '% dos votos'
        }