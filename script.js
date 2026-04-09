
const facil = document.getElementById("facil")
const medio = document.getElementById("medio")
const dificil = document.getElementById("dificil")
const tabuleiro = document.getElementById("tabuleiro")


facil.addEventListener("click", () =>{
    const blocos = document.querySelectorAll(".bloco")
    blocos.forEach(bloco => bloco.remove())
    iniciar(3, 3, 165)
})

medio.addEventListener("click", () =>{
    const blocos = document.querySelectorAll(".bloco")
    blocos.forEach(bloco => bloco.remove())
    iniciar(4, 4, 123.5)
})

dificil.addEventListener("click", () =>{
    const blocos = document.querySelectorAll(".bloco")
    blocos.forEach(bloco => bloco.remove())
    iniciar(5, 5, 98.9)
})






function iniciar(colunas, linhas, tamanho){
    let contador = 1
    for(let y = 0; y < colunas; y++){
        for(let x = 0; x < linhas; x++){
            const div = document.createElement("div")
            div.innerHTML = `<div>${contador}</div>`
            div.classList.add("bloco")
            div.style.width = `${tamanho}px`
            div.style.height = `${tamanho}px`
            tabuleiro.appendChild(div)
            contador++
        }
    }
    embaralhar(colunas, linhas)
}


function embaralhar(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}
function iniciar(colunas, linhas, tamanho, a){
    let valores = []

    for (let i = 1; i <= colunas * linhas; i++) {
        valores.push(i)
    }

    embaralhar(valores)

    let index = 0

    for(let y = 0; y < colunas; y++){
        for(let x = 0; x < linhas; x++){
            const div = document.createElement("div")
            div.innerHTML = `<div>${valores[index]}</div>`
            div.classList.add("bloco")
            div.style.width = `${tamanho}px`
            div.style.height = `${tamanho}px`
            tabuleiro.appendChild(div)
            index++
        }
    }
}





