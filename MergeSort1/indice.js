const listaLivros = require('./arrays.js');

let edFolha = listaLivros.edFolha;
let edGalho = listaLivros.edGalho;

let i=0;
let j=0;

let listaFinal=[];
let contador = 0;

while (i<edFolha.length && j<edGalho.length){
    if (edFolha[i].preco<edGalho[j].preco) {
        listaFinal[contador]=edFolha[i];
        i++;
        contador++;
    } else {
        listaFinal[contador]=edGalho[j];
        j++;
        contador++;
    }
}

while(i<edFolha.length){
    listaFinal[contador]=edFolha[i];
    i++;
    contador++;
}
while(j<edGalho.length){
    listaFinal[contador]=edGalho[j];
    j++;
    contador++;
}

console.log(listaFinal);
