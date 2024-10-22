// Máscara do input
$(".phone_with_ddd").mask("(00) 00000-0000");

//Definindo variáveis
let form = document.querySelector("#gerar-link");
let input = document.querySelector("#whatsapp");
let linkGerado = document.querySelector("#link-gerado");
let boxGerado = document.querySelector("#box-gerado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let numeroFormatado = "55" + input.value.replace(/[^\d]/g, "");

  linkGerado.textContent =
    "https://api.whatsapp.com/send?phone=" + numeroFormatado;

  linkGerado.href = "https://api.whatsapp.com/send?phone=" + numeroFormatado;

  form.reset();

  boxGerado.style.opacity = "1";
});
