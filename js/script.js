// Fonction pour afficher les 10 premiers super-héros de Marvel avec l'aide du fichier JSON
function afficherSuperHeros() {
    fetch("js/script.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);

            function createLi(powers) {
                let liList = "";

                powers.forEach(power => {
                    liList += `<li>${power}</li>`;
                })

                return liList;
            }

            data.forEach(hero => {
                document.getElementById("super-heros").innerHTML +=
                    `<div class="fiche-super-heros rounded-3 m-4 w-25">
                    <div class="d-flex justify-content-center">
                        <img class="bg-light rounded-3 m-4 pt-5 px-5 ps-5" src="data:image/png;base64, ${hero.image}" alt="Super-Héros 1">
                    </div>
                    <p class="text-white m-3"><b>Nom : </b>${hero.name}</p>
                    <p class="text-white m-3"><b>Vrai nom : </b>${hero.realName}</p>
                    <p class="text-white m-3"><b>Super-pouvoirs :</b></p>
                <ul class="list m-3 text-white" id="listPowers">
                    ${createLi(hero.powers)}
                </ul>
                    <p class="text-white m-3"><b>Ville : </b> ${hero.city}</p>
                    <p class="text-white m-3"><b>Date d'apparition : </b>${hero.firstAppearance}</p>
                </div>
                `;
            });
        })
}

// Fonction pour gérer l'affichage des super-pouvoirs
function affichageSuperPouvoirs() {
    fetch("js/script.json")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.forEach(hero => {
                for (let i = 0; i < hero.length; i++) {
                    for (let j = 0; j < hero.powers.length; j++) {
                        document.getElementById("super-heros").innerHTML += `
                <li class="list-item text-white">${hero[i].powers[j]}</li>
                `;
                    }
                }
            })
        })
}
afficherSuperHeros();