var precos = [100, 50, 200];

var descontos = precos.map(function(preco) {
    return preco * 0.90;
});

alert(descontos);