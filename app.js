var listaDeFilmes = [
    "https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg",
    "https://br.web.img2.acsta.net/c_310_420/pictures/19/12/18/16/25/0588210.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/90/98/20169244.jpg",
    
  ];
  
function Enviar() {
    console.log('adsdasd');
    filme = document.getElementById("filme");
    listaDeFilmes.push(filme.value);
    mostrarFilmes();
    filme.value = '';
    // document.location.reload(true);
}

function mostrarFilmes() {
    filmes = document.getElementById('filmes');
    filmes.innerHTML = ''
    console.log(listaDeFilmes)
    for (var i = 0; i < listaDeFilmes.length; i++) {
        console.log(i)
        filmes.innerHTML += "<img src=" + listaDeFilmes[i] + ">";
    }
}

mostrarFilmes();