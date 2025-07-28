document.addEventListener("DOMContentLoaded", function () {
    let modal = document.querySelector('.modal');
    let modal2 = document.querySelector('.modal2');

utmVerify();


//FUNÇÃO DE VERIFICAÇÃO DE UTM
    function utmVerify() {
    // CAPTURA OS PARAMETROS UTM
    let urlParams = new URLSearchParams(window.location.search);
    let utmSource = urlParams.get('utm_source') || '';
    let utmMedium = urlParams.get('utm_medium') || '';
    let utmCampaign = urlParams.get('utm_campaign') || '';

    // ARMAZENA OS PARAMETROS NO LOCAL STORAGE
    localStorage.setItem('utm_source', utmSource);
    localStorage.setItem('utm_medium', utmMedium);
    localStorage.setItem('utm_campaign', utmCampaign);

        console.log('UTMs:', {utmSource, utmMedium, utmCampaign});

    let url = `https://script.google.com/macros/s/AKfycbwN-zomoCQ7AWruKsBLXnR-jaJfmNx3SPyO3EhUz1C-wTmk7ZOhCuIHZ4K_EeZItQrEiw/exec`
    + `?utmSource=${encodeURIComponent(utmSource)}`
    + `&utmMedium=${encodeURIComponent(utmMedium)}`
    + `&utmCampaign=${encodeURIComponent(utmCampaign)}`

    let img = new Image();
    img.src = url;
}
    
// MODAL DE DEMONSTRAÇÃO
    function abrirModal() {
        modal.showModal();
    }

    function fecharModal() {
        modal.close();
    }

    // EXPOR AS FUNÇÕES NO ESCOPO GLOBAL
    window.abrirModal = abrirModal;
    window.fecharModal = fecharModal;


// MODAL DE COMPRA    
    function abrirModal2() {
        modal2.showModal();
    }

    function fecharModal2() {
        modal2.close();
    }

    // Expor as funções no escopo global
    window.abrirModal2 = abrirModal2;
    window.fecharModal2 = fecharModal2;

    // Se precisar inicializar algo já aqui
});

// FUNÇÃO PRA ABRIR POPUP
function abrirPopupErro(tag1, elemento, tag2) {
    let popup = document.querySelector(tag1);
    popup.style.display = "flex";
    if (elemento == "empresa") {
        document.querySelector(tag2).textContent = `Erro: insira uma ${elemento}`;
    } else if (elemento == "cnpj" || elemento == "email" || elemento == "whatsapp") {
        document.querySelector(tag2).textContent = `Erro: insira um ${elemento} válido`;
    } else if (elemento == "agenda") {
        document.querySelector(tag2).textContent = `Erro: preencha um dos campos da ${elemento}`;
    } else if (elemento == "proposta") {
        document.querySelector(tag2).textContent = `Erro: preencha um dos campos da ${elemento}`;
    } else {
        document.querySelector(tag2).textContent = `Erro: insira um ${elemento}`;
    }
    setTimeout(function() { popup.style.display = "none"; }, 2000);
}


// FUNÇÃO PARA ENVIAR OS DADOS DA DEMONSTRAÇÃO
function enviar(event) {
    event.preventDefault();

    let nome = document.getElementById('1').value;
    let empresa = document.getElementById('2').value;
    let cnpj = document.getElementById('3').value;
    let cargo = document.getElementById('4').value;
    let email = document.getElementById('5').value;
    let zap = document.getElementById('6').value;
    let agenda = document.querySelectorAll('input[name="agenda"]:checked');

    let cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let zapRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/;

    if (nome === "") { abrirPopupErro(".popup", "nome", ".popup-content"); return; }
    if (empresa === "") { abrirPopupErro(".popup", "empresa", ".popup-content"); return; }
    if (cnpj === "" || !cnpjRegex.test(cnpj)) { abrirPopupErro(".popup", "cnpj", ".popup-content"); return; }
    if (cargo === "") { abrirPopupErro(".popup", "cargo", ".popup-content"); return; }
    if (email === "" || !emailRegex.test(email)) { abrirPopupErro(".popup", "email", ".popup-content"); return; }
    if (zap === "" || !zapRegex.test(zap)) { abrirPopupErro(".popup", "whatsapp", ".popup-content"); return; }
    if (agenda.length === 0) { abrirPopupErro(".popup", "agenda", ".popup-content"); return; }

    let agendaSelecionado = '';
    for (let i = 0; i < agenda.length; i++) {
        if (agenda[i].checked) {
            agendaSelecionado = agenda[i].value;
            break;
        }
    }

    let dataHora = new Date().toLocaleString();

    let url = `https://script.google.com/macros/s/AKfycbwZ_55tVd63SBw8YSuSfyP2fH1nPB9VBz5I6tbyjQJU3rW0IcPcUvfyV2fWmwmSsxyNmw/exec`
        + `?nome=${encodeURIComponent(nome)}`
        + `&empresa=${encodeURIComponent(empresa)}`
        + `&cnpj=${encodeURIComponent(cnpj)}`
        + `&cargo=${encodeURIComponent(cargo)}`
        + `&email=${encodeURIComponent(email)}`
        + `&zap=${encodeURIComponent(zap)}`
        + `&agenda=${encodeURIComponent(agendaSelecionado)}`
        + `&dataHora=${encodeURIComponent(dataHora)}`;

    const win = window.open(url, '_blank');
if (win) {
  win.blur();
  window.focus();
}

    fecharModal();
    document.querySelector('.modal .formulario').reset();
    }   



// FUNÇÃO PARA ENVIAR OS DADOS DE COMPRA
function comprar(event) {
    event.preventDefault();

    // VALORES DO HTML COLOCADOS EM VARIÁVEIS JS    
    let nome2 = document.getElementById('11').value;
    let empresa2 = document.getElementById('12').value;
    let cnpj2 = document.getElementById('13').value;
    let cargo2 = document.getElementById('14').value;
    let email2 = document.getElementById('15').value;
    let zap2 = document.getElementById('16').value;
    let proposta = document.querySelectorAll('input[name="proposta"]:checked');

    let cnpj2Regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    let email2Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let zap2Regex = /^\(\d{2}\) 9\d{4}-\d{4}$/;



    // IFS PARA BLOQUEAR DADOS INVÁLIDOS    
    if (nome2 === "") { abrirPopupErro(".popup-2", "nome", ".popup-content-2"); return; }
    if (empresa2 === "") { abrirPopupErro(".popup-2", "empresa", ".popup-content-2"); return; }
    if (cnpj2 === "" || !cnpj2Regex.test(cnpj2)) { abrirPopupErro(".popup-2", "cnpj", ".popup-content-2"); return; }
    if (cargo2 === "") { abrirPopupErro(".popup-2", "cargo", ".popup-content-2"); return; }
    if (email2 === "" || !email2Regex.test(email2)) { abrirPopupErro(".popup-2", "email", ".popup-content-2"); return; }
    if (zap2 === "" || !zap2Regex.test(zap2)) { abrirPopupErro(".popup-2", "whatsapp", ".popup-content-2"); return; }
    if (proposta.length === 0) { abrirPopupErro(".popup-2", "proposta", ".popup-content-2"); return; }


        let propostaSelecionado = '';

        for (let i = 0; i < proposta.length; i++) {
            if (proposta[i].checked) {
                propostaSelecionado = proposta[i].value;
                break;
            }
        }


    let dataHora = new Date().toLocaleString();    

    let url = `https://script.google.com/macros/s/AKfycbzOslYPeLFh-GCxrw6xCvTegSUvTcDYbtJIQpa6TViuY4a_PhNOgdm45Lppe0LxJAkQoA/exec`
        + `?nome=${encodeURIComponent(nome2)}`
        + `&empresa=${encodeURIComponent(empresa2)}`
        + `&cnpj=${encodeURIComponent(cnpj2)}`
        + `&cargo=${encodeURIComponent(cargo2)}`
        + `&email=${encodeURIComponent(email2)}`
        + `&zap=${encodeURIComponent(zap2)}`
        + `&proposta=${encodeURIComponent(propostaSelecionado)}`
        + `&dataHora=${encodeURIComponent(dataHora)}`;

    const win = window.open(url, '_blank');
if (win) {
  win.blur();
  window.focus();
}

    fecharModal2();
    document.querySelector('.modal2 .formulario').reset();
    }

