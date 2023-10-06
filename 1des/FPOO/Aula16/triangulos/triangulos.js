class triangulo{
    constructor(lado1,lado2,lado3){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }
    tipo(){
        if(this.lado1 != this.lado2 && this.lado1 != this.lado3 && this.lado2 != this.lado3){
            return 'Escaleno';
        }
        else if(this.lado1 == this.lado2 && this.lado1 == this.lado3){
            return 'Equilátero';
        }
        else{
            return 'Isóceles';
        }
    }
    showHTML(){
        let str = `<label>Lado1: </label><label>${this.lado1}</label>`;
        str += `<label>Lado2:</label><label>${this.lado2}</label>`;
        str += `<label>Lado3:</label><label>${this.lado3}</label>`;
        str += `<label>Tipo:</label><label>${this.tipo()}</label>`
        return str;
    }
}

const lista = []
lista.push(new triangulo(10,20,30))
lista.push(new triangulo(10,10,30))
lista.push(new triangulo(10,20,10))
lista.push(new triangulo(30,10,10))
lista.push(new triangulo(20,20,20))

//Mostrar no HTML
const main = document.getElementById('triangulos')
lista.forEach(elemento => {
    const div = document.createElement('div')
    div.innerHTML = elemento.showHTML();
    main.appendChild(div)
});

