const container = document.getElementById('cardsContainer');
const selectAllCards = document.querySelector('.cards-container')

//checa se cards foram carregados, se sim (true), mostrar (grid), se não, esconder (none).
function showCards(status) {
    isLoaded = status;

    if(isLoaded) {
        selectAllCards.style.display = 'grid';
    }
    else {
        selectAllCards.style.display = 'none';
    }
}

async function carregarGatos() {
        container.innerHTML = "<p>Carregando...</p>";
 
        try{
            const resposta = await fetch("https://api.thecatapi.com/v1/images/search?limit=15");
            const gatoData = await resposta.json();
            container.innerHTML=" ";
 
            gatoData.forEach(imagem => {
                const card = document.createElement("div");
                card.classList.add("card");
 
                card.innerHTML=`
                    <img src="${imagem.url}">
                `
                container.appendChild(card);      
            });

            showCards(true);

        } catch(error){
            container.innerHTML='<p>Erro ao carregar os dados dos gatos :(</p>';
            console.error(error);
        }
    }

document.addEventListener("DOMContentLoaded", ()=>{carregarGatos()});
