// Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". Peça novamente para o usuário digitar o nome de uma fruta para ser removida. Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada.

var lista = ["Morango", "Mirtilo", "Framboesa", "Amora"]
alert("Mercado de frutas vermelhas! Frutas disponíveis: " + lista)

while (lista.length >= 1){
    var frutas = prompt("Qual fruta você procura?")
    if (lista.includes(frutas)){
        var pp = lista.indexOf(frutas)
        lista.splice(pp, 1)
        alert("Fruta retirada da lista")
    } else
        alert("Fruta indisponível no nosso mercado")
}

alert("Lista de compras finalizada")