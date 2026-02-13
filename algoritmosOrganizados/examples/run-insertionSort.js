const { livros } = require('../src/data/livros');
const { insertionSort } = require('../src/sorting/insertionSort');

const ordenados = insertionSort(livros, (l) => l.preco);
console.log('Insertion Sort (por preço):');
console.table(ordenados);
