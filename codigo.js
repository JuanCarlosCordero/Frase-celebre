const frases = [
  "No hay camino para la verdad, la verdad es el camino. - Mahatma Gandhi",
  "No dejes para mañana lo que puedas hacer hoy. - Benjamin Franklin",
  "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - Nelson Mandela",
  "Si puedes soñarlo, puedes lograrlo. - Walt Disney",
  "La felicidad no es algo hecho. Viene de tus propias acciones. - Dalai Lama",
  "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello. - Charles R. Swindoll",
  "Un hombre no puede hacer nada mejor que comer y beber, y encontrar satisfacción en su trabajo. Esto también lo he visto que es de la mano de Dios. - Eclesiastés 2:24"
];

function mostrarFraseAleatoria() {
  const indice = Math.floor(Math.random() * frases.length);
  const frase = frases[indice];
  document.getElementById("frase").textContent = frase;
}

window.addEventListener("load", mostrarFraseAleatoria);

document.getElementById("nueva-frase").addEventListener("click", mostrarFraseAleatoria);