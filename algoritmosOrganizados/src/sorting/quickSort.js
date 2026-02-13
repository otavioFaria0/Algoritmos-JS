/**
 * Quick Sort.
 * - Escolhe um pivô, particiona o array em menores/maiores e ordena recursivamente.
 * - Complexidade média: O(n log n); pior caso: O(n²) (depende do pivô).
 *
 * Implementação funcional (não altera o original).
 *
 * @template T
 * @param {T[]} input
 * @param {(item: T) => number} [key]
 * @returns {T[]} novo array ordenado
 */
function quickSort(input, key = (x) => x) {
  if (input.length <= 1) return input.slice();

  const arr = input.slice();
  const pivô = arr[Math.floor(arr.length / 2)];
  const p = key(pivô);

  const menores = [];
  const iguais = [];
  const maiores = [];

  for (const item of arr) {
    const k = key(item);
    if (k < p) menores.push(item);
    else if (k > p) maiores.push(item);
    else iguais.push(item);
  }

  return quickSort(menores, key).concat(iguais).concat(quickSort(maiores, key));
}

module.exports = { quickSort };
