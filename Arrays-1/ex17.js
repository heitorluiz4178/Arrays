var notas = [4, 7, 5, 9, 6, 3];

var aprovados = notas.filter(function(nota) {
    return nota >= 6;
});

alert(aprovados);