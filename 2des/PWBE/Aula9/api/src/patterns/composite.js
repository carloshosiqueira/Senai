const compositeClientes = (lista) => {
    const listaComposta = [];
    let cpf = 0
    lista.forEach(c => {
        if(cpf !== c.cpf){
            //Cria uma lista de telefones
            c.telefones = [];
            //Adiciona o telefone na lista
            c.telefones.push(c.telefone);
            //Apaga o telefone
            delete c.telefone 
            listaComposta.push(c)
            cpf = c.cpf
        } else {
            listaComposta[listaComposta.length - 1]. telefones.push(c.telefone);
        }
    });
    return listaComposta;
}

module.exports = {
    compositeClientes
}