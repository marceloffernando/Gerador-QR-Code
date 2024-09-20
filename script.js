
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector(".btn");

const qrCodeInput = document.querySelector(".qr-form input");

//EVENTOS
function gerarQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    
    if (!qrCodeInputValue) return;
    
    qrCodeBtn.innerHTML = "gerando...";
}
qrCodeBtn.addEventListener("click", () =>{
    gerarQrCode();
});

 

