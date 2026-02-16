/**
 * Merge Sort.
 * - Divide o array ao meio, ordena cada metade e depois intercala (merge).
 * - É um algoritmo de ordenação estável e eficiente.
 * - Tem as mesmas vantagens do Quick Sort, mas é mais fácil de implementar de forma estável.
 * - Complexidade: O(n log n)
 *
 * 
 * 
 * @param {Array} array - Array a ser ordenado.
 * @return {Array} - Array ordenado.
 */
function mergeSort(array) {
  if (array.length <= 1) return array.slice();

  const meio = Math.floor(array.length / 2);
  const esquerda = mergeSort(array.slice(0, meio));
  const direita = mergeSort(array.slice(meio));

  return merge(esquerda, direita);
}


/**
 * Intercala duas listas já ordenadas.
 * - Complexidade: O(n) (onde n é a soma dos tamanhos de a e b).
 *
 * @template T
 * @param {T[]} a
 * @param {T[]} b
 * @returns {T[]} nova lista ordenada (não altera a e b)
 */
function merge(a, b) {
  const out = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) out.push(a[i++]);
    else out.push(b[j++]);
  }

  // concatena o restante
  return out.concat(a.slice(i)).concat(b.slice(j));
}

module.exports = { mergeSort };
