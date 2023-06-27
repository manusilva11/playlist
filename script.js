let estado =  "pausado"
const musica0 = document.querySelector("#musica0")
const musica1 = document.querySelector("#musica1")
const musica2 = document.querySelector("#musica2")
const musica3 = document.querySelector("#musica3")
const musica4 = document.querySelector("#musica4")
const musica5 = document.querySelector("#musica5")
const musica6 = document.querySelector("#musica6")
const musica7 = document.querySelector("#musica7")
const musica = []

musica.push(musica0);
musica.push(musica1);
musica.push(musica2);
musica.push(musica3);
musica.push(musica4);
musica.push(musica5);
musica.push(musica6);
musica.push(musica7);
let indiceAtual= 0;
function play(){
    musica[indiceAtual].play()
if(musica[indiceAtual].paused){musica[indiceAtual].play()}
else {
    musica[indiceAtual].pausar()
}
    document.querySelector("#pausar").style.display ="none";
    document.querySelector("#play").style.display ="inline";
}
function pausar(){
    musica[indiceAtual].pause();
    document.querySelector("#pausar").style.display ="inline";
    document.querySelector("#play").style.display ="none";
}

function passa(){
    musica[indiceAtual].pause();
    indiceAtual++
    if(indiceAtual>=musica.legth){
        indiceAtual = 0
    }
    musica[indiceAtual].play()
}
function voltar(){
    musica[indiceAtual].pause()
    indiceAtual --
    musica[indiceAtual].play()
}



