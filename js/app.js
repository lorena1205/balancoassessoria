
const abrirDepoimento = (depoimento) => {
    // Esconder todos os depoimentos e remover a classe 'active' dos botões
    $(".depoimento").addClass('hidden').css('opacity', '0');
    $(".btn-social").removeClass('active');

    // Mostrar o depoimento selecionado e adicionar a classe 'active' ao botão correspondente
    $("#depoimento-" + depoimento).removeClass('hidden').css('opacity', '1');
    $("#btnDepoimento-" + depoimento).addClass('active');
};

    $(document).ready(function () {
        cardapio.eventos.init();
    });
    
    var CELULAR_EMPRESA = '5521984435443';
    
    function abrirModal() {
        document.getElementById("modalContato").style.display = "flex";
    }
    
    function fecharModal() {
        document.getElementById("modalContato").style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == document.getElementById("modalContato")) {
            fecharModal();
        }
    }
    
    // Enviar o formulário e gerar o link do WhatsApp
    document.getElementById("formContato").onsubmit = function(event) {
        event.preventDefault(); // Prevenir o envio real do formulário
    
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;
        const interesse = document.getElementById("interesse").value;
    
        let mensagem = `Olá! Gostaria de receber mais informações.\n`;
        mensagem += `\n*Nome:* ${nome}`;
        mensagem += `\n*Telefone:* ${telefone}`;
        mensagem += `\n*Email:* ${email}`;
        mensagem += `\n*Interesse:* ${interesse === "mei" ? "Sou MEI" : interesse === "empresario" ? "Sou empresário" : "Sou pessoa física"}`;
    
        const mensagemCodificada = encodeURIComponent(mensagem);
        const urlWhatsApp = `https://wa.me/${CELULAR_EMPRESA}?text=${mensagemCodificada}`;
    
        window.open(urlWhatsApp, '_blank'); // Abrir o link do WhatsApp em nova aba
        fecharModal(); // Fechar o modal após enviar
    };

