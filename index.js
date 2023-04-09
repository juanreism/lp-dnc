var card1 = window.document.getElementById('card1')
var card2 = window.document.getElementById('card2')
var setadireita = window.document.getElementById('seta-direita')
var setaesquerda = window.document.getElementById('seta-esquerda')

function Direita(){
    card1.src = 'card/card-samantha.svg'
    card1.style = " margin-left: 25px"
    card2.style = " margin-right: 75px"
    card2.src ='card/card-leo.svg'    
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function Esquerda(){
    card1.src = 'card/card-bruna.svg'
    card1.style = " margin-left: 75px"
    card2.style = " margin-right: 25px"
    card2.src ='card/card-samantha.svg'    
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}

