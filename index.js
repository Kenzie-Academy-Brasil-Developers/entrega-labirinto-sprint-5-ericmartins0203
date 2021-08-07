const container = document.querySelector('.container')
const botao = document.querySelector('button')
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
let allDivs = ''
let matrix = []
let eixoY = []
let player = ''
let start = ''
let position = ''

function createMap(){
    // montagem do mapa
    for (let i = 0;i<map.length;i++){
        let line = document.createElement('section')
            line.classList.add('line')
            container.append(line)
        for (let m = 0;m<map[i].length;m++){
            let celula = document.createElement('div')
            celula.id = i*map[0].length+m
            if (map[i][m]=== 'W'){
                celula.classList.add('wall')
            }
            else if(map[i][m]=== ' '){
                celula.classList.add('way')
            }
            else if(map[i][m]=== 'S'){
                celula.classList.add('start')
            }
            else if(map[i][m]=== 'F'){
                celula.classList.add('finish')
            }
            line.append(celula)
        }
    }

    //hidden button
    botao.classList.add('hidden')

    //posição inicial
    player = document.createElement('div')
    start = document.querySelector('.start')
    player.id = 'box'
    start.append(player)
}

    //movimentação, verificação de validade da movimentação e parabenização
document.addEventListener('keydown', (event) => {
    position = document.querySelector('#box').parentElement
    position = Number(position.id)
    const keyName = event.key
    if(position%21===0 && keyName==="ArrowLeft"){
        return 
    }
    if (keyName === "ArrowUp"){
        position -=21
    }
    if (keyName === "ArrowDown"){
        position +=21
    }
    if (keyName === "ArrowLeft"){
        position -=1
    }
    if (keyName === "ArrowRight"){
        position +=1
    }
    position = String(position)

    let next = document.getElementById(position)
    
    if (next.classList.value === 'way'){
        next.append(player)
    }
    if (next.classList.value === 'finish'){
        next.append(player)
        let congrats = document.createElement('p')
        congrats.innerText = 'Parabéns, você chegou até o final do labirinto!'
        congrats.classList.add('congrats')
        container.append(congrats)
    }
    return
  });
