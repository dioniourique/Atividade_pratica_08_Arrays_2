// Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

let nomes = [];
for (let i = 0; i < 5; i++) {
  let nome = prompt("Digite um nome:");
  nomes.push(nome);
}

document.write("Nomes digitados: " + nomes.join(", "));
document.write("<br>");
nomes.reverse();
document.write("Nomes na ordem inversa: " + nomes.join(", "));
