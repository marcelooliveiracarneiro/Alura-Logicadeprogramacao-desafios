
// Sintax Classica
function alterarStatusClassic( index ) {
    let classNameRented = 'dashboard__item__img--rented';
    let classNameReturn = 'dashboard__item__button--return';

    let elementGame = document.getElementById( 'game-'+index );
    let elementItems;

    let elementItemIMG;
    elementItems = elementGame.getElementsByClassName('dashboard__item__img');
    if ((elementItems) && (elementItems.length > 0)) {
        elementItemIMG = elementItems[0];
    }
    let elementItemBTN;
    elementItems = elementGame.getElementsByClassName('dashboard__item__button');
    if ((elementItems) && (elementItems.length > 0)) {
            elementItemBTN = elementItems[0]; 
    }
    if ((elementItemIMG) && (elementItemBTN)) {
        let alugado = (elementItemIMG.classList.contains( classNameRented ));
        if (alugado) {
            elementItemIMG.classList.remove( classNameRented );
            elementItemBTN.classList.remove( classNameReturn );
            elementItemBTN.textContent = 'Alugar';
        } else {
            elementItemIMG.classList.add( classNameRented );
            elementItemBTN.classList.add( classNameReturn );
            elementItemBTN.textContent = 'Devolver'; 
        }
    }

}



function alterarStatus( index ) {
    let classNameRented = 'dashboard__item__img--rented';
    let classNameReturn = 'dashboard__item__button--return';

    let elementGame = document.getElementById( 'game-'+index );
    if (elementGame) {
        let elementImage  = elementGame.querySelector( '.dashboard__item__img' );
        let elementButton = elementGame.querySelector( '.dashboard__item__button' );
        let elementName = elementGame.querySelector( '.dashboard__item__name' );

        if ((elementImage) && (elementButton)) {
            if (elementImage.classList.contains( classNameRented )) {
                if (confirm(`Você realmente que deseja devolver o jogo ${elementName.textContent}?`)) {
                    elementImage.classList.remove( classNameRented );
                    elementButton.classList.remove( classNameReturn );
                    elementButton.textContent = 'Alugar';
                }
            } else {
                elementImage.classList.add( classNameRented );
                elementButton.classList.add( classNameReturn );
                elementButton.textContent = 'Devolver'; 
            }
        }
    }
    rentedGamesCount();
    rentedGamesShow();

}

let rentedGames = 0;

function rentedGamesShow() {
    console.log(`O total de jogos alugados é ${rentedGames}`);
}

function rentedGamesCount() {
    rentedGames = document.querySelectorAll('.dashboard__item__img--rented').length;
}

document.addEventListener('DOMContentLoaded', function() {
    rentedGamesCount();
    rentedGamesShow();
});
