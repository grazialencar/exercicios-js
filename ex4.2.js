let veiculo ={
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    disponivel: true
}

console.log(veiculo.marca);
console.log(veiculo.modelo);
console.log(veiculo["ano"]);
console.log(veiculo["disponivel"]);

veiculo.cor = "Prata";
console.log(veiculo.cor);