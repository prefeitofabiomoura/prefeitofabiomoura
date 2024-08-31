const candidateList = [
    {
        "image": "./assets/images/prefeito-01-min.png",
        "name": "FÁBIO MOURA",
        "num": [4,5],
        "candidate": "Prefeito"
    },
    {
        "image": "./assets/images/VEREADORES/BICUDO.jpg",
        "name": "BICUDO",
        "num": [4,5,5,5,5],
        "candidate": "Vereador(a)"
    },
    {
        "image": "./assets/images/VEREADORES/BRUNA-DE-TONY.jpg",
        "name": "BRUNA DE TONY",
        "num": [4,5,1,2,3],
        "candidate": "Vereador(a)"
    },
    {
        "image": "./assets/images/VEREADORES/DEDE-DO-BAIXIO.jpg",
        "name": "DEDE DO BAIXIO",
        "num": [4,5,2,2,2],
        "candidate": "Vereador(a)"
    },
    {
        "image": "./assets/images/VEREADORES/FELIPE-BERNARDO.jpg",
        "name": "FELIPE BERNARDO",
        "num": [4,5,1,1,1],
        "candidate": "Vereador(a)"
    },
    {
        "image": "./assets/images/VEREADORES/GALEGA-DE-TOTA.jpeg",
        "name": "GALEGA DE TOTA",
        "num": [4,5,9,9,9],
        "candidate": "Vereador(a)"
    },
    {
        "image": "./assets/images/VEREADORES/GESSICA-SOUZA.jpg",
        "name": "GESSICA SOUZA",
        "num": [4,5,0,0,0],
        "candidate": "Vereador(a)"
    },
    {
        "image": "./assets/images/VEREADORES/JOSEILTON-DO-SEIXOS.jpg",
        "name": "JOSEILTON DO SEIXOS",
        "num": [4,5,7,7,7],
        "candidate": "Vereador(a)"
    },
    {
        "image": "./assets/images/VEREADORES/POLLYANNA.jpg",
        "name": "POLLYANNA",
        "num": [4,5,7,8,9],
        "candidate": "Vereador(a)"
    },
    {
        "image": "./assets/images/VEREADORES/ROZINHA-SOARES.jpg",
        "name": "ROZINHA SOARES",
        "num": [4,5,6,6,6],
        "candidate": "Vereador(a)"
    }
];

// main.js

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
  showInAppInstallPromotion();
});

installButton.addEventListener("click", async () => {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    disableInAppInstallPrompt();
  });
  
  function disableInAppInstallPrompt() {
    installPrompt = null;
    installButton.setAttribute("hidden", "");
  }


const candidates = document.getElementById("candidates");

const loadCandidate = () => {
    candidateList.map((item) => {
        const numFinal = item.num.map(item => `<span>${item}</span>`).toString();

        return candidates.innerHTML += `
        <div class="card-saint">
            <div class="data-candidate">
                <div class="photo">
                    <img src="${item.image}" alt="Foto do Candidato">
                </div>
                <div class="data">
                    <div class="d-flex flex-column gap-2">
                        <div class="data-title">
                            ${item.name} <small> ${item.candidate}</small>
                        </div>
                        <div class="data-number">
                           ${numFinal.replaceAll(',', '')}
                        </div>
                        <div class="data-confirm">
                            <button class="btn btn-success">CONFIRMAR</button>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-2">
                        <div class="data-cnpj">
                            <small>Coligação A FORÇA DO TRABALHO (PSB - PSD) <br> CNPJ:
                                56.627.450/0001-63</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `});
}

loadCandidate();