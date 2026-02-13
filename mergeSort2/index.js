const listaLivros = require('./array');

function ordena(lista1, lista2){
    let listaOrdenada=[];
    i=0;
    j=0;

    while (i<lista1.length && j<lista2.length){
        if (lista1[i].preco<lista2[j].preco){
            listaOrdenada.push(lista1[i]);
            i++;
        } else{
            listaOrdenada.push(lista2[j]);
            j++;
        }
    }

   return listaOrdenada.concat(i<lista1.length? lista1.slice(i) : lista2.slice(j));
}

//Merge Sort, ordena um array dividindo ele em duas partes e depois juntando as duas partes ordenadas repetindo o processo.
function mergeSort(arr) {
    if (arr.length >1){
        const meio= Math.floor(arr.length/2);
        const parte1=mergeSort(arr.slice(0,meio));
        const parte2=mergeSort(arr.slice(meio,arr.length));
        arr = ordena(parte1, parte2);
    }
    return arr;
}

console.log(mergeSort(listaLivros));