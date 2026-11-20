
const API_URL = "https://6af935706d8b86fb22d6dc36.mockapi.io/depots/user";

export async function updateshort(id, data) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error("Erreur lors de la modification");
    }

    return await response.json();
}
// 1. Récupération des données
export async function getshorts() {
    const response = await fetch(API_URL);
    const shorts = await response.json();
    return shorts;
}

// 2. Suppression
export async function deleteshorts(nam) {
    const res = await fetch(`${API_URL}/${nam}`, {
        method: "DELETE"
    });

    if (!res.ok) {
        throw new Error("Erreur lors de la suppression");
    }

    return await res.json();
}

// 3. Récupération initiale
let shorts = await getshorts();
let shortActif = null;
const content = document.querySelector("#content");
const nombrechort = document.querySelector("#nomdrechort");

nombrechort.textContent = shorts.length;

// 4. Création des éléments
const carts = document.createElement("div");
const filterbtn = document.createElement("div");
const filtershort = document.createElement("div");

filtershort.className = "flex justify-between mb-2";

const search = document.createElement("input");

search.className = "w-2/5 border-1  text-gray-50 text-lg shadow-xl/30 border-gray-400 bg-gray-950/25 h-10 rounded-lg";
search.type = "text";
search.placeholder = "Rechercher un dépôt...";

let langueActive = "Tous";

// 5. Filtrage et recherche
function filtrerRepos() {
    const texte = search.value.trim().toLowerCase();

    const resultat = shorts.filter(short => {

        const correspondLangue =
            langueActive === "Tous" ||
            short.status === langueActive;

        const correspondRecherche =
            (short.name || "").toLowerCase().includes(texte);

        return correspondLangue && correspondRecherche;
    });

    nombrechort.textContent = resultat.length;

    affichershort(resultat);
}

// 6. Boutons de filtrage
const status = [
    "Tous",
    "À contacter",
    "Entretien",
    "Retenu",
    "Refusé"
];

status.forEach(statue => {

    const btn = document.createElement("button");

    btn.textContent = statue;

    btn.className = "px-2 py-1 rounded-lg font-semibold text-gray-400 hover:bg-green-800 cursor-pointer";

    btn.addEventListener("click", () => {
        langueActive = statue;
        filtrerRepos();
    });

    filterbtn.append(btn);
});

// 7. Événement de recherche
search.addEventListener("input", filtrerRepos);

filtershort.append(filterbtn, search);

// 8. Affichage des dépôts
function affichershort(x) {

    carts.innerHTML = "";

    x.forEach(short => {
        console.log(short)
        const carte = document.createElement("div");

        carte.className = "flex justify-between items-center bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4";

        const linge1 = document.createElement("div");

        linge1.className = "flex items-center gap-4";

        const image = document.createElement("div");

        image.className = "w-20 h-20 mx-auto mb-5 p-[3px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400";

        image.innerHTML = `
            <img class="rounded-full w-full object-cover ring-4"
            src="${short.avatar_url}"
            alt="${short.login}">
        `;

        const donner = document.createElement("div");

        const name = document.createElement("p");

        name.className = "text-white font-semibold";

        name.textContent = short.name;

        const loginlanguage = document.createElement("div");

        loginlanguage.className = "flex items-center gap-2";

        const login = document.createElement("p");

        login.className = "text-gray-400 text-sm";

        login.textContent = `@ ${short.login}`;

        const language = document.createElement("p");

        language.className = "text-cyan-400 text-xs bg-cyan-950 px-2 rounded";

        language.textContent = short.language;

        loginlanguage.append(login, language);

        const Note = document.createElement("p");

        Note.className = "text-gray-400 text-sm italic";

        Note.textContent = short.note;

        const date = document.createElement("p");

        date.className = "text-gray-500 text-xs";

        date.textContent = `Ajouté le ${new Date(short.createAt).toLocaleDateString("fr-FR")}`;

        donner.append(name, loginlanguage, Note, date);

        linge1.append(image, donner);
        
        const linge2=document.createElement("div");
        linge2.className="flex gap-4"
        // 9. Bouton supprimer
        const supprimer = document.createElement("button");

        supprimer.className = "px-2 py-1 border border-red-500 text-white font-medium bg-red-500/30 cursor-pointer rounded-lg";

        supprimer.textContent = "Supprimer";

        supprimer.addEventListener("click", async () => {

            try {

                await deleteshorts(short.id);

                shorts = shorts.filter(s => s.id !== short.id);

                nombrechort.textContent = shorts.length;

                filtrerRepos();

            } catch (error) {
                console.error(error);
            }

        });
        
        // 10. status de users

        const status_short=document.createElement("div");
        status_short.className="px-2 py-1 border border-blue-500 text-blue-500 font-medium bg-blue-500/30 rounded-lg";
        status_short.textContent=short.status;
        if(short.status === "Refusé"){
            status_short.className="px-2 py-1 border border-red-500 text-red-500 font-medium bg-red-500/30 rounded-lg";
        }

        // 11. rating de short

        const rating_short=document.createElement("div");
        rating_short.className="text-lg text-yellow-400";
        
        switch(short.rating){
            case 1:
                rating_short.textContent="★☆☆☆☆";
                break;
            case 2:
                rating_short.textContent="★★☆☆☆";
                break;
            case 3:
                rating_short.textContent="★★★☆☆";
                break;
            case 4:
                rating_short.textContent="★★★★☆";
                break;
            case 5:
                rating_short.textContent="★★★★★";
                break;
                        
        }

        // 11. Bouton modifier

        const modifier=document.createElement("button");
        modifier.className="px-2 py-1 border border-green-500 text-white font-medium bg-green-500/30 cursor-pointer rounded-lg"
        modifier.textContent="Modifier";
        modifier.addEventListener("click", () => {
    shortActif = short;

    dialog.showModal();

    modalNom.textContent = short.name;
    modalStatut.value = short.status;
    modalNote.value = short.rating;
    modalCommentaire.value = short.note;
});

        // 12. bouton Annuler
        const btnAnnuler=document.querySelector("#btnAnnuler");
        btnAnnuler.addEventListener("click",()=>{
            dialog.close();
        });
        // 13. Bouton X
        const btnX=document.querySelector("#btnX");
        btnX.addEventListener("click",()=>{
            dialog.close();
        });

        linge2.append(rating_short,status_short,modifier,supprimer)
        carte.append(linge1,linge2);

        carts.append(carte);

    });
}

// 14. Affichage initial
content.append(filtershort, carts);

// 15. de formulaire de modifier
const dialog=document.querySelector("#modalModif");
const Enregistrer = document.querySelector("#formModif");

const modalNom = document.querySelector("#modalNom");
const modalStatut = document.querySelector("#modalStatut");
const modalNote = document.querySelector("#modalNote");
const modalCommentaire = document.querySelector("#modalCommentaire");
Enregistrer.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!shortActif) return;

    const data = {
        ...shortActif,
        status: modalStatut.value,
        rating: Number(modalNote.value),
        note: modalCommentaire.value.trim()
    };

    try {
        const updatedShort = await updateshort(shortActif.id, data);

        shorts = shorts.map(short =>
            short.id === updatedShort.id ? updatedShort : short
        );

        shortActif = null;

        dialog.close();

        filtrerRepos();

    } catch (error) {
        console.error(error);
    }
});
affichershort(shorts);

