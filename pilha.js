
function Stack() {
  var itens = []

  this.push = function (element) {
    //adiciona um novo elemento a pilha
    itens.push(element)
  }
  this.pop = function () {
    return itens.pop()
  }
  this.peek = function () {
    return itens[itens.length - 1]
  }
  this.isEmpty = function () {
    //verifica se o array está vazio
    return itens.length === 0
  }
  this.clear = function () {
    //limpa a pilha
    itens = []

  }
  this.size = function () {
    return itens.length
  }

  this.print = function () {
    console.log(itens.toString())
  }
}


var pilha = new Stack()

pilha.push("ygor")
pilha.push("Bea")
pilha.push("Bruno")
pilha.push("Olivia")
pilha.push("Zezinho")
pilha.push("Lorena")
pilha.push("Sergio")


pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()
pilha.pop()
pilha.print()


