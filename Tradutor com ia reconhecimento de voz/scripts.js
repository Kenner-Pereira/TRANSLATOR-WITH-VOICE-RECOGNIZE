/*    

[ ] Saber quando o botao foi clicado
[ ] Pegar o texto digitado e enviar para servidor traduzir
[ ] Receber texto do servidor traduzido
[ ] Mostrar o texto traduzido na tela
[ ] 
[ ] 


*/  

let inputtexto = document.querySelector(".input-texto")
let traducaoTexto = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")



async function traduzir() {
    



let endereco = "https://api.mymemory.translated.net/get?q="
+ inputtexto.value
+ "&langpair=pt-BR|"
+ idioma.value


let resposta = await fetch(endereco)

let dados = await resposta.json()

traducaoTexto.textContent = dados.responseData.translatedText

console.log(dados)

}

function ouvirVoz () {
    let voz = window.webkitSpeechRecognition

    let reconhecimentoVoz = new voz()

    reconhecimentoVoz.lang = "pt-BR"

    reconhecimentoVoz.onresult = (evento) => {

        let textoTranscricao = evento.results [0][0].transcript
        
        inputtexto.textContent = textoTranscricao

        traduzir()

        

    }

    reconhecimentoVoz.start()


}


console.log(textoTranscricao)



