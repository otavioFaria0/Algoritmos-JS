/**
 * Troca dois elementos de posição em um array (swap).
 * @param {any[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

module.exports = { swap };
