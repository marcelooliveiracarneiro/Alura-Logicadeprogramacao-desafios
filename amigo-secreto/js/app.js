let listaAmigos = [];
let listaSorteio = [];
let numeroMinimo = 3;

reiniciar();

function adicionar() {
    let elementAmigo = document.querySelector('#nome-amigo');
    let amigoNome = elementAmigo.value;

    if ((!amigoNome) || (amigoNome.length < 0)) {
        alert('Nome do amigo deve ser informado');
        return;
    }

    amigoNome = String(amigoNome).toLowerCase().capitalizeFirstLetter();
    if (listaAmigos.includes(amigoNome)) {
        alert('Nome do amigo já está na lista');
    }

    listaAmigos.push( amigoNome );
    elementAmigo.value = '';

    atualizarAmigos();
}

function sortear() {
    /*
    if (listaAmigos.length == 0) {
        alert('Nenhum amigo incluído'); 
        return;
    }
    */
    if (listaAmigos.length < numeroMinimo) {
        alert(`Mínimo de ${numeroMinimo} amigos para sorteio`); 
        return;
    }

    listaSorteio = listaAmigos.slice(); 
    listaSorteio.shuffle();
    let elementListaSorteio = document.querySelector('#lista-sorteio');
    elementListaSorteio.innerHTML = '';
    for (let index = 0; index < listaAmigos.length; index++) {
        elementListaSorteio.innerHTML += listaAmigos[index] + ' --> '+ listaSorteio[index] +'<br>';
    }
}

function reiniciar() {
    listaAmigos = [];
    atualizarAmigos();
    atualizarSorteio();
}

function atualizarAmigos() {
    let elementListaAmigos = document.querySelector('#lista-amigos');
    if (elementListaAmigos) {
        elementListaAmigos.innerHTML = '';
        for (let index = 0; index < listaAmigos.length; index++) {
            let elementAmigo = document.createElement('p');
            elementAmigo.textContent = listaAmigos[index];
            elementAmigo.addEventListener('click', function() {
                excluirAmigo(index);
            }); 
            elementListaAmigos.appendChild(elementAmigo);
        }
    }
}

function atualizarSorteio() {
    document.querySelector('#lista-sorteio').innerHTML = '';
}

function excluirAmigo( index ) {
    listaAmigos.splice(index, 1);
    atualizarAmigos();
    atualizarSorteio();
}

Array.prototype.shuffle = function() {

    let indice = this.length;
    
    while(indice) {

        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [this[indice], this[indiceAleatorio]] = 
            [this[indiceAleatorio], this[indice]];
    }

    return this;
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}