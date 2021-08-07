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

function createMap(){
    // montagem do mapa
    for (let i = 0;i<map.length;i++){
        let line = document.createElement('section')
            line.classList.add('line')
            container.append(line)
        for (let m = 0;m<map[i].length;m++){
            let celula = document.createElement('div')
            celula.dataset = `col ${m} lin{i}`
            celula.id = i*20+m
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