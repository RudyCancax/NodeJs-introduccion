function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multip(a, b) {
    return a * b;
}

function div(a, b) {
    if (b == 0) {
        console.log("No es posible dividir por cero");
        return;
    } else {
        return a / b;
    }
}

exports.suma = suma;

exports.resta = resta;

exports.div = div;

exports.multip = multip;