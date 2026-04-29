/*Menu responsivo*/ 
function showMenuResponsivo(){
            const menuResponsivo = document.querySelector(".menu-responsivo");
            const menuDesktop = document.querySelector(".menu-desktop")
            menuResponsivo.style.display = "flex";
            menuDesktop.style.display = "none";
}
function hideMenuResponsivo(){
            const menuResponsivo = document.querySelector(".menu-responsivo");
            const menuDesktop = document.querySelector(".menu-desktop")
            menuResponsivo.style.display = "none";
            menuDesktop.style.display = "flex";
}

/*botao tema*/
const tema = document.getElementById("theme-toggle");

tema.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const temaAtual = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("tema", temaAtual);
});

window.addEventListener("load", () => {
  const temaSalvo = localStorage.getItem("tema");
   if (temaSalvo === "light") {
    document.body.classList.add("light");
  }
});

/*Validação usuário */
const form = document.getElementById("formularioContato");

function enviarFormulario(){
    alert("Mensagem enviada com sucesso!");
    form.reset()
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome-usuario").value.trim();
    const email = document.getElementById("emailUsuario").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos!");
        return;
    }

    if (!emailValido.test(email)) {
        alert("Digite um email válido!!");
        return;
    }

    enviarFormulario();
});


