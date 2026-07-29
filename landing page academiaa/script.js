const formulario = document.getElementById('leadForm');
const campoNome = document.getElementById('nome');
const campoWhatsapp = document.getElementById('whatsapp');
const mensagemSucesso = document.getElementById('mensagemSucesso');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const nomeDigitado = campoNome.value;
    const whatsappDigitado = campoWhatsapp.value;

    mensagemSucesso.textContent = `Parabéns, ${nomeDigitado}! Seu passe livre foi gerado com sucesso. Enviamos os detalhes para o número ${whatsappDigitado}.`;

    formulario.reset();
});

