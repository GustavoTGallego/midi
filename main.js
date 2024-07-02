function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}

const ListaDeTeclas = document.querySelectorAll('.tecla'); //Pega todos os elemntos com a classe  tecla

for ( let contador = 0; contador < ListaDeTeclas.length; contador++) {
    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//cria um ID personalizado para cada som que vai ser referenciado

    //template string
    tecla.onclick = function() {
        tocaSom(idAudio);
    }   

    tecla.onkeydown = function(evento) {
        if (evento.code === 'space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }    
}