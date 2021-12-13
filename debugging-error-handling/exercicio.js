// O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. 
// Caso contrário, um erro será lançado.

function validaArray(array, num) {
  try {
    if (!array && !num)
      throw new ReferenceError('Informe os parâmetros');
  
    if (typeof array !== 'object')
      throw new TypeError('O array precisa ser do tipo object');
  
    if (typeof num !== 'number')
      throw new TypeError('O número precisa ser do tipo number');
  
    if (array.length !== num)
      throw new RangeError('O tamanho do array não corresponde ao valor informado');

    return array;
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log('Este erro é do tipo ReferenceError!');
      console.log(error.message);
    } else if (error instanceof TypeError) {
      console.log('Este erro é do tipo TypeError!');
      console.log(error.message);
    } else if (error instanceof RangeError) {
      console.log('Este erro é do tipo RangeError!');
      console.log(error.message);
    } else {
      console.log(`Tipo de erro não esperado: ${error}`);
    }
  }
}

console.log(validaArray([1,2,3,4,5], 5));