const livros = require('./listaLivros');
const menorValor = require('./menorValor');

//Selection Sort é um metodo em que seleciona o menor valor e o coloca na primeira posicao, depois ele seleciona o menor valor da segunda posicao e coloca na segunda posicao e assim por diante
for (let atual = 0; atual < livros.length - 1; atual++) {
  let menor = menorValor(livros, atual)

  let livroAtual = livros[atual];
  let livroMenorPreco = livros[menor];

  livros[atual] = livroMenorPreco
  livros[menor] = livroAtual
}

console.log(livros)