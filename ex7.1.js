// Função A - Tradicional
function calcularArea(base, altura) {
    return (base * altura) / 2;
}

console.log("Função A - Tradicional: " + calcularArea(10, 5)); 

// Arrow Function Função A

const calcularAreaArrow = (base, altura) => (base * altura) / 2;

console.log("Função A - Arrow Function: " + calcularAreaArrow(10, 5));

// Função B - Tradicional
function cumprimentar(nome, periodo) {
    return "Boa " + periodo + ", " + nome + "!";
}

console.log("Função B - Tradicional: " + cumprimentar("Grazielle", "tarde"));

// Arrow Function Função B
const cumprimentarArrow = (nome, periodo) => "Boa " + periodo + ", " + nome + "!";
console.log("Função B - Arrow Function: " + cumprimentarArrow("Grazielle", "noite"));