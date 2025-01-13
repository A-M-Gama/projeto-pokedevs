const listaSelecaoRpgOrdem = document.querySelectorAll(".personagem");

listaSelecaoRpgOrdem.forEach(personagem => {
    personagem.addEventListener("click", () => {
        
        esconderCartaopersonagem();

        const idRpgOrdemSelecionado = mostrarCartaoRpgOrdemSelecionado(personagem);

        desativarpersonagemNaListagem();

        ativarpersonagemNaListagem(idRpgOrdemSelecionado);
    })
})

function ativarpersonagemNaListagem(idRpgOrdemSelecionado) {
    const RpgOrdemSelecionadoNaListagem = document.getElementById(idRpgOrdemSelecionado);
    RpgOrdemSelecionadoNaListagem.classList.add("ativo");
}

function desativarpersonagemNaListagem() {
    const personagemAtivoNaListagem = document.querySelector(".ativo");
    personagemAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoRpgOrdemSelecionado(personagem) {
    const idRpgOrdemSelecionado = personagem.attributes.id.value;
    const idDoCartaopersonagemParaAbrir = "cartao-" + (idRpgOrdemSelecionado);
    const cartaopersonagemParaAbrir = document.getElementById(idDoCartaopersonagemParaAbrir);
    cartaopersonagemParaAbrir.classList.add("aberto");
    return idRpgOrdemSelecionado;
}

function esconderCartaopersonagem() {
    const cartaopersonagemAberto = document.querySelector(".aberto");
    cartaopersonagemAberto.classList.remove("aberto");
}
