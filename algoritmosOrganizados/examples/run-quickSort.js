const { livros } = require('../src/data/livros');
const { quickSort } = require('../src/sorting/quickSort');

const ordenados = quickSort(livros, (l) => l.preco);
console.log('Quick Sort (por preço):');
console.table(ordenados);
