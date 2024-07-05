function carregar() { //função o carregar la no html vai puxar essa função ou seja o código
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora= data.getHours() //variáveis
   
    msg.innerHTML = `Agora são ${hora} horas.` //mostra mensagem

    if (hora >= 0 && hora <12) { // condições
        //Bom dia
        img.src = 'fotomanha.png.png'
        document.body.style.background = '#f4da84'
    }else if (hora >= 12 && hora <=18){
        //Boa tarde
        img.src = 'fototarde.png.png'
        document.body.style.background = '#7d93af'
    } else {
        //Boa noite
        img.src = 'fotonoite.png.png'
        document.body.style.background = '#3a2949'
    }
}
