/**
 * Merge Sort.
 * - Divide o array ao meio, ordena cada metade e depois intercala (merge).
 * - Complexidade: O(n log n)
 *
 * @template T
 * @param {T[]} input
 * @param {(item: T) => number} [key]
 * @returns {T[]} novo array ordenado (não altera o original)
 */
function mergeSort(input, key = (x) => x) {
  if (input.length <= 1) return input.slice();

  const meio = Math.floor(input.length / 2);
  const esquerda = mergeSort(input.slice(0, meio), key);
  const direita = mergeSort(input.slice(meio), key);

  return merge(esquerda, direita, key);
}

/**
 * Intercala duas listas já ordenadas.
 * @template T
 * @param {T[]} a
 * @param {T[]} b
 * @param {(item: T) => number} key
 * @returns {T[]}
 */
function merge(a, b, key) {
  const out = [];
  let i = 0, j = 0;

  while (i < a.length && j < b.length) {
    if (key(a[i]) <= key(b[j])) out.push(a[i++]);
    else out.push(b[j++]);
  }

  // concatena o restante
  return out.concat(a.slice(i)).concat(b.slice(j));
}

module.exports = { mergeSort };
