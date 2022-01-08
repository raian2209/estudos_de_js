function carregar(){
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    //var hora = 20 teste forçado 
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom Dia!
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18){
        // Boa Tarde!
        img.src = 'fototarde.png'
    } else {
        // Boa Noite!
        img.src = 'fotonoite.png'
    }
}