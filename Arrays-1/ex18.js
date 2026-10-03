let participantes = ["João", "Marina", "Carlos", "Patrícia"];

var posicao = participantes.indexOf("Carlos");

if (posicao != -1) {
    participantes.splice(posicao, 1);
}

alert(participantes);