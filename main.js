function tocaSom(idElementoaudio) {
const elemento = document.querySelector(inEletoaudio);
if (elemento & & elemento.localname==='audio'){
        elemento.play ();
}else{
        console.log("elemento não encontrado invalid")
}
}
const listaDeTeclas=document.querySelectorAll(".tecla");




for(let contador=0;contador<listaDeteclas.length;contador++){
    const tecla=listaDeTeclas[contador];
    const efeito= tecla.classList[1];
    const idAudio ='#som_${efeito}';
    tecla.onclick=function() 
        tocaSom(idAudio);
}

    tecla.onkeydown=function(evento){
        if(eventio.code==='space')
        tecla.classList.add('ativa')
    }
  
tecla.onkeydown=function(evento){
    if(evento.code==='enter'){
    tecla.classList.add('ativa');
    }

