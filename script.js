
document.getElementById('name').onclick = function () {
  var name = prompt("What's your name?")
  document.getElementById('message').innerHTML = '<p>' + name + '</p>' + '<img src="liar.jpg">'
}

document.getElementById('favorite-color').onclick = function () {
  var color = prompt("What is your favorite color?")
  document.getElementById('colors').innerHTML = '<p>' + color + '</p>' + '<img src="sucks.jpg">'
}

document.getElementById('location').onclick = function () {
  var location = prompt("Where are you located?")
  document.getElementById('locations').innerHTML = '<p>' + location + '</p>' + '<img src="location.jpg">'
}
