
const facil = document.getElementById("facil")
const medio = document.getElementById("medio")
const dificil = document.getElementById("dificil")
const tabuleiro = document.getElementById("tabuleiro")


facil.addEventListener("click", () => {
    tabuleiro.style.gridTemplateColumns = 'repeat(3, 1fr)';   /* 3 colunas iguais */
    iniciar(3, 165)
})

medio.addEventListener("click", () => {
    tabuleiro.style.gridTemplateColumns = 'repeat(4, 1fr)';   /* 4 colunas iguais */
    iniciar(4, 124)
})

dificil.addEventListener("click", () => {
    tabuleiro.style.gridTemplateColumns = 'repeat(5, 1fr)';   /* 5 colunas iguais */
    iniciar(5, 99)
})


function iniciar(espaco, tamanho) {
    tabuleiro.innerHTML = ""                                   // Deleta os blocos
    let valores = []
    for (let i = 1; i <= espaco * espaco; i++) {
        valores.push(i)
    }

    embaralhar(valores)

    let index = 0
    for (let y = 0; y < espaco; y++) {
        for (let x = 0; x < espaco; x++) {
            const div = document.createElement("div")
            if (valores[index] === espaco * espaco) {
                div.innerHTML = `<div></div>`
                div.classList.add("vazio")
            } else {
                div.innerHTML = `<div>${valores[index]}</div>`
                div.classList.add("bloco")
            }
            div.style.width = `${tamanho}px`
            div.style.height = `${tamanho}px`
            tabuleiro.appendChild(div)
            index++
        }
    }
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
    }
}


tabuleiro.addEventListener("click", (e) => {
    const bloco = e.target.closest(".bloco")
    if (!bloco) return
    const vazio = document.querySelector(".vazio")
    const blocoRect = bloco.getBoundingClientRect()
    const vazioRect = vazio.getBoundingClientRect()
    const dx = Math.abs(blocoRect.left - vazioRect.left)
    const dy = Math.abs(blocoRect.top - vazioRect.top)
    const tolerancia = 5

    if (
        (dx < tolerancia && Math.abs(dy - blocoRect.height) < tolerancia) ||
        (dy < tolerancia && Math.abs(dx - blocoRect.width) < tolerancia)
    ) {
        const temp = bloco.innerHTML
        bloco.innerHTML = vazio.innerHTML
        vazio.innerHTML = temp
        bloco.classList.remove("bloco")
        bloco.classList.add("vazio")
        vazio.classList.remove("vazio")
        vazio.classList.add("bloco")
    }
    verificarVitoria()
})


function verificarVitoria() {
    const blocos = document.querySelectorAll("#tabuleiro > div")
    let correto = true

    blocos.forEach((bloco, index) => {
        const valor = bloco.textContent.trim()

        if (index === blocos.length - 1) {
            // último deve ser vazio
            if (!bloco.classList.contains("vazio")) {
                correto = false
            }
        } else {
            if (parseInt(valor) !== index + 1) {
                correto = false
            }
        }
    })

    if (correto) {
        mostrarPopup()
    }
}

function mostrarPopup() {
    document.getElementById("popup").style.display = "flex"
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none"
}

