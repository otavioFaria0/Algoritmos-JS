/**
 * Busca Binária (Binary Search).
 * - Requer array previamente ordenado pela mesma chave.
 * - Complexidade: O(log n)
 *
 * @template T
 * @param {T[]} arr
 * @param {number} alvo
 * @param {(item: T) => number} [key]
 * @returns {number} índice do elemento encontrado ou -1
 */
function binarySearch(arr, alvo, key = (x) => x) {
  let esquerda = 0;
  let direita = arr.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);
    const atual = key(arr[meio]);

    if (atual === alvo) return meio;
    if (alvo < atual) direita = meio - 1;
    else esquerda = meio + 1;
  }

  return -1;
}

module.exports = { binarySearch };
