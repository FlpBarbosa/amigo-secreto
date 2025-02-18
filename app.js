let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.some(amigo => amigo.toLowerCase() === nomeAmigo.toLowerCase())) {
        alert(`O nome "${nomeAmigo}" já está na lista.`);
        return;
    }

    amigos.push(nomeAmigo);

    inputAmigo.value = "";

    atualizarLista();
}

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong> 🎉`;
}