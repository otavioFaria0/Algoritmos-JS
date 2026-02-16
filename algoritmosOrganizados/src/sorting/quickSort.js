/**
 * Quick Sort.
 * - Escolhe um pivô, particiona o array em menores/maiores e ordena recursivamente.
 * - Complexidade média: O(n log n); pior caso: O(n²) (depende do pivô).
 *
 * Implementação funcional (não altera o original).
 *
 * @param {Array} array - Array a ser ordenado.
 * @return {Array} - Array ordenado.
 */
function quickSort(array){
  if (array.length < 2) return array;
  else {
    const pivo = array[0];
    const menores = [];
    const maiores = [];
    for (let i=0; i<array.length; i++) {
      if (array[i]<pivo){
        menores[menores.length] = array[i];
      }
      else if (array[i]>pivo){
        maiores[maiores.length] = array[i];
      } 
    }
    return ([...quickSort(menores), pivo, ...quickSort(maiores)]);
  }
}

module.exports = { quickSort };
