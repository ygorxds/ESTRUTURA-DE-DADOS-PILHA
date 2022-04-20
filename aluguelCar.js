
function Stack() {
  const car = []

  this.push = function (element) {
    //adiciona um modelo na pilha
    car.push(element)

  }

  this.pop = function () {
    //remove modelo da pilha
    return car.pop()

  }

  this.peek = function () {
    //diz o tamanho do array
    return car[car.length - 1]
  }

  this.isEmpty = function () {
    return car.length === 0

  }

  this.clear = function () {
    car = []


  }

  const carCreate = new Stack()


  carCreate.push("Corsa");
  carCreate.push("Civic");
  carCreate.push("Fusca");
  carCreate.push("Versa");
  carCreate.push("320i")
  carCreate.push("Celta")
  console.log(car)


}