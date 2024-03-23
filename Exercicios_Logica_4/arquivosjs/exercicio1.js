// Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles.

var z = 0

var student = []

while (z != "PARE") {
    student.push(" " + prompt("Informe um nome para cadastro"))
    z = prompt("Deseja cadastrar mais alunos? (digite 'PARE' para sair)")
}

alert("Alunos Cadastrados:" + student)