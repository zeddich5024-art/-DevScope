
const API_URL = "https://6af935706d8b86fb22d6dc36.mockapi.io/depots/user";

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

const content = document.querySelector("#content");
const nombrechort = document.querySelector("#nomdrechort");

nombrechort.textContent = shorts.length;

// 4. Création des éléments
const carts = document.createElement("div");
const filterbtn = document.createElement("div");
const filtershort = document.createElement("div");

filtershort.className = "flex justify-between";

const search = document.createElement("input");

search.className = "w-2/5 border-1 text-gray-50 text-lg shadow-xl/30 border-gray-950 bg-gray-950/25 h-10 rounded-lg";
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

        carte.append(linge1, supprimer);

        carts.append(carte);

    });
}

// 10. Affichage initial
content.append(filtershort, carts);

affichershort(shorts);

