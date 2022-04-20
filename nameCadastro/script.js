
function Stack(create, delet) {

  const names = []
  const nome = document.getElementById("nome").value
  const res = document.getElementById("res")


  this.push = function (Element) {
    names.push(nome)
  }
  this.pop = function () {
    return names.pop()
  }
  this.response = function () {
    console.log('names')
  }

  function create() {
    this.push()
    this.response
  }
  function delet() {
    this.pop()
    this.response
  }

}