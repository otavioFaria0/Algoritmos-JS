/**
 * Busca Binária (Binary Search).
 * - Requer array previamente ordenado pela mesma chave.
 * - Divide o espaço de busca ao meio a cada passo, descartando metade dos elementos.
 * - Complexidade: O(log n) (excelente para grandes listas ordenadas).
 *
 * @template T
 * @param {T[]} arr
 * @param {number} alvo
 * @returns {number} índice do elemento encontrado ou -1
 */
function binarySearch(arr, alvo) {
  let esquerda = 0;
  let direita = arr.length - 1;

  while (esquerda <= direita) {
    const meio = Math.floor((esquerda + direita) / 2);
    const atual = arr[meio];

    if (atual === alvo) return meio;
    if (alvo < atual) direita = meio - 1;
    else esquerda = meio + 1;
  }

  return -1;
}

module.exports = { binarySearch };
