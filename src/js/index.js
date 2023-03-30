const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')
const numImg = imagens.length 
let indiceAtivo = 0 

imagens[indiceAtivo].classList.add('ativa')

function selecionarProximaImagem() {
  indiceAtivo = (indiceAtivo + 1) % numImg 
  atualizarImagemAtiva()
}

function atualizarImagemAtiva() {
  imagens.forEach(imagem => imagem.classList.remove('ativa'))
  botoesCarrossel.forEach(botao => botao.classList.remove('selecionado'))

  imagens[indiceAtivo].classList.add('ativa')
  botoesCarrossel[indiceAtivo].classList.add('selecionado')
}


setInterval(selecionarProximaImagem, 3000)


botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    indiceAtivo = indice
    atualizarImagemAtiva()
  })
})