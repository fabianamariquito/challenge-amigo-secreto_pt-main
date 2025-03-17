//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];


//Implementa uma função para agregar amigos

function adicionarAmigo() {
    
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    // Verifica se o nome não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome");
        return;
    }

    // Verifica se o nome já está na lista
    if (amigos.includes(nome)) {
    alert(`${nome} já está na lista`);
    return;
    }

    // Adiciona o nome na lista de amigos
    amigos.push(nome);
    nomeInput.value = "";  // Limpa o campo de entrada

    atualizarLista(); // Atualiza a lista
}


//Implementa uma função para atualizar a lista de amigos

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  // Limpa a lista antes de adicionar os novos nomes

    // Adiciona cada nome à lista no HTML
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); 
        li.textContent = amigos[i]; 
        listaAmigos.appendChild(li); 
      }
}


// Implementa uma função para sortear os amigos

function sortearAmigo() {
    // Verifica se há nomes suficientes para sortear
    if (amigos.length < 1) {
        alert("Por favor, adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Sorteia um nome aleatório
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome sorteado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: ${sorteado}`;
}