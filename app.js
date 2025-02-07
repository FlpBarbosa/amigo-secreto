let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    // Verificar se o campo está vazio
    if (nomeAmigo === "") {
        alert("Digite um nome válido!");
        return;
    }

    // Verificar se o nome já está na lista
    if (amigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} já está na lista`);
        return;
    }

    // Adicionar o nome na lista de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de nomes
    inputAmigo.value = "";

    // Atualizar a lista no HTML
    atualizarLista();
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpar conteúdo da lista atual
    listaAmigos.innerHTML = "";

    // Criar elementos para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verificar se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear. Adicione ao menos um.");
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter um nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado no HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
