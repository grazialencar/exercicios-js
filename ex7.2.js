// Parte A - Escopo
let app = "MinhaApp";

function iniciarApp() {
    let versao = "1.0";
    console.log("Dentro da function " + app + " versão " + versao);
}

iniciarApp();


console.log("Fora da function" + app);
//console.log("Fora da function" + versao); // Aqui a gera erro, porque a variável versao só existe dentro da função iniciarApp


//  Parte B - Callback
function executarTarefa(nometarefa, callback) {
    console.log("Iniciando: " + nometarefa);
    callback();
}

executarTarefa("Leitura de documentos", () => console.log("Tarefa concluída!"));

// Parte C - Async
async function buscarPerfil() {
    return "Perfil carregado: Usuário Padrão";
}

buscarPerfil().then(console.log);
