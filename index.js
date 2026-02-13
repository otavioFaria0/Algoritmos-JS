const listaLivros = require("./listaLivros.js");
console.log(listaLivros);
console.log("---------------------------");

function buscarMaisBarato(lista){  
    let atual = 0;
    let maisBarato=0;
    let maisCaro=0;  
    for (atual=0; atual < lista.length; atual++) {
        if (lista[atual].preco < lista[maisBarato].preco) {
            maisBarato = atual;
        }       
    }
    console.log("O livro mais barato custa R$ " + lista[maisBarato].preco);
}

function buscarMaisCaro(lista){    
    let atual = 0;
    let maisBarato=0;
    let maisCaro=0;
    for (atual=0; atual < lista.length; atual++) {
        if (lista[atual].preco > lista[maisCaro].preco) {
            maisCaro = atual;
        }       
    }
    console.log("O livro mais caro custa R$ " + lista[maisCaro].preco);
}

function buscar(lista, chave, valor){
    return lista.find((item) => item[chave] === valor) ?? null;
}


function ordenarBanco(lista, propriedade) {
    const copia = [...lista];
    if (propriedade === "titulo") {
        return copia.sort((a , b) => {
            if (a.titulo < b.titulo) return -1;
            if (a.titulo > b.titulo) return 1;
            return 0;
        })
    } else if (propriedade === "preco"){
        return copia.sort((a , b) => {
            if (a.preco < b.preco) return -1;
            if (a.preco > b.preco) return 1;
            return 0;
        })
    } else {
        return ('Nenhum resultado obtido, essa propriedade não esta armazenada.')
    }
}

function filtrarPorPreco(lista, valorMin, valorMax) {
    return lista
        .filter((item)=> item.preco >= valorMin && item.preco <= valorMax)
        .sort((a, b) => a.preco - b.preco);
}

console.log(filtrarPorPreco(listaLivros, 20, 40));



