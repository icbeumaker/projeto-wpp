// Máscara do input
$(".phone_with_ddd").mask("(00) 00000-0000");

//Definindo variáveis
let form = document.querySelector("#gerar-link");
let input = document.querySelector("#whatsapp");
let mensagem = document.querySelector("#mensagem");
let linkGerado = document.querySelector("#link-gerado");
let boxGerado = document.querySelector("#box-gerado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let numeroFormatado = "55" + input.value.replace(/[^\d]/g, "");

  let mensagemFormatada = "";

  if (mensagem.value.trim() !== "") {
    mensagemFormatada = encodeURIComponent(mensagem.value.trim());
  }

  linkGerado.textContent =
    "https://api.whatsapp.com/send?phone=" +
    numeroFormatado +
    (mensagemFormatada ? "&text=" + mensagemFormatada : "");

  linkGerado.href =
    "https://api.whatsapp.com/send?phone=" +
    numeroFormatado +
    (mensagemFormatada ? "&text=" + mensagemFormatada : "");

  form.reset();

  boxGerado.style.opacity = "1";
});
