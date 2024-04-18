// Exemplo de classe simples e classe estática
class TV{
    constructor(Status){
        this._volume = 0;
        this._on = Status == undefined ? false : true;

    }
    get volume(){
        return this._volume;
    }
    set volume(volume){
        this._volume = volume;
    }
    static ligada(){
        return new TV(true);
    }
    static desligada(){
        return new TV();
    }
}

const tv1 = TV.ligada();
const tv2 = TV.desligada();
tv2.volume = 10;
console.log(tv1);
console.log(tv2);