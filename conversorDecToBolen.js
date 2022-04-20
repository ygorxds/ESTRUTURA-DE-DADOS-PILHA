function dec2Bin(decNumber) {  //Criei a função e o parametro que eu preciso que passem na função é o numero decimal
  var restStack = [], //array de resto 
    rest, //resto
    binaryString = '' //string de binários que foi iniciada como vazio

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2) // ou seja, se decNumber for maior que zero, a variável rest 
    restStack.push(rest)
    decNumber = Math.floor(decNumber / 2)
  }
  while (restStack.length > 0) {
    binaryString += restStack.pop().toString()
  }
  return binaryString
}

console.log(dec2Bin(50))

