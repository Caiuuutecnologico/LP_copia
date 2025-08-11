document.addEventListener("DOMContentLoaded", function () {
    utmcount();

    async function utmcount() {
        let contagens = document.querySelectorAll(".contagem");
        const plataformaOrder = ["facebook", "linkedin", "instagram", "youtube", "spotify"];

        try {
            const resposta = await fetch('https://lp-copia-back.onrender.com/contagem');
            const result = await resposta.json();

            const acessosMap = {};
            result.forEach(item => {
                acessosMap[item.plataformas] = item.acessos;
            });

            contagens.forEach((contagem, index) => {
                const plataforma = plataformaOrder[index];
                contagem.innerHTML = acessosMap[plataforma] || 0;
            });
        } catch (erro) {
            console.error("Problemas com o banco de dados", erro);
        }
    }
});
