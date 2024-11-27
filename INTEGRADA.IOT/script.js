// Função para alterar a cor de fundo da seção "Sobre Mim"
function alterarFundo() {
    var secaoSobreMim = document.querySelector("#pagina-pessoal");
    secaoSobreMim.style.backgroundColor = secaoSobreMim.style.backgroundColor === "lightblue" ? "#f9f9f9" : "black";
    alert("A cor de fundo foi alterada!");
}