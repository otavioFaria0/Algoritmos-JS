const { livros } = require('../src/data/livros');
const { mergeSort } = require('../src/sorting/mergeSort');

const ordenados = mergeSort(livros, (l) => l.preco);
console.log('Merge Sort (por preço):');
console.table(ordenados);
