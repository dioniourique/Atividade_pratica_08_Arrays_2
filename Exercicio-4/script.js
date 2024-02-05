let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numero = prompt("Digite um número:");

let encontrado = false;
for (let i = 0; i < lista.length; i++) {
  if (lista[i] == numero) {
    encontrado = true;
    break;
  }
}

if (encontrado) {
  alert("O número digitado está na lista.");
} else {
  alert("O número digitado não está na lista.");
}
