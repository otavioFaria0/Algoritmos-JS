/**
 * Insertion Sort (ordenação por inserção).
 * - Vai construindo um trecho ordenado à esquerda e inserindo o próximo elemento na posição correta.
 * - Complexidade: O(n²) (mas é ótimo para listas quase ordenadas).
 *
 * @template T
 * @param {T[]} input
 * @param {(item: T) => number} [key]
 * @returns {T[]} novo array ordenado (não altera o original)
 */
function insertionSort(input, key = (x) => x) {
  const arr = input.slice();

  for (let i = 1; i < arr.length; i++) {
    const atual = arr[i];
    let j = i - 1;

    while (j >= 0 && key(arr[j]) > key(atual)) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = atual;
  }

  return arr;
}

module.exports = { insertionSort };
