// Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.

var planets = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"]

var nome = prompt("Informe um planeta")

if(planets.includes(nome)) {
    alert("Esse planeta está na lista")
} else
    alert("Esse planeta não está na lista")