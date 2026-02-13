const { swap } = require('../utils/swap');

/**
 * Selection Sort (ordenação por seleção).
 * - A cada passo encontra o menor elemento no trecho [i..fim] e coloca em i.
 * - Complexidade: O(n²)
 *
 * @template T
 * @param {T[]} input
 * @param {(item: T) => number} [key] Função para extrair a chave numérica (ex.: item.preco)
 * @returns {T[]} novo array ordenado (não altera o original)
 */
function selectionSort(input, key = (x) => x) {
  const arr = input.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    let menor = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (key(arr[j]) < key(arr[menor])) menor = j;
    }
    if (menor !== i) swap(arr, i, menor);
  }

  return arr;
}

module.exports = { selectionSort };
