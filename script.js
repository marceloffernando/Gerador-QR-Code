document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const qrCodeBtn = document.querySelector(".qr-form button");
    const qrCodeInput = document.querySelector(".qr-form input");
    const qrImg = document.querySelector(".qr-code img")
    
    //EVENTOS
    function gerarQrCode() {
        const qrCodeInputValue = qrCodeInput.value;
        
        if (!qrCodeInputValue) return;
        
        qrCodeBtn.innerHTML = "Gerando QR Code...";

        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

        qrImg.addEventListener("load", () =>{
            container.classList.add("active");
            qrCodeBtn.innerHTML = "QR Code criado";
        });
    }
    qrCodeBtn.addEventListener("click", () =>{
        gerarQrCode();
    });
    
    // ENVIAR COM ENTER
    qrCodeInput.addEventListener("keydown", (e) =>{
        if(e.code === "Enter"){
            gerarQrCode();
        }
    });
    // LIMPAR QR CODE
    qrCodeInput.addEventListener("keyup", () =>{
        if(!qrCodeInput.value){
            container.classList.remove("active");
            qrCodeBtn.innerHTML = "Gerar QR Code";
        }
    })
});
 

