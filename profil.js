const params = new URLSearchParams(window.location.search);
const recherch = params.get("users");
const content=document.querySelector("#content");
const Recherch=document.querySelector("#Recherch");
Recherch.value=recherch;
import { getUser,getDepots } from "./api.js";
// import { users } from "./datausers.js";
// import { depote } from "./datarepo.js";
const users=await getUser(recherch);
const depote=await getDepots(recherch)
console.log(users)
console.log(depote);

export function afficherusers(){
    const profil=document.createElement("div");
    profil.className="bg-[#0d1220] mr-2 p-6 border-1 border-gray-800 rounded-2xl shadow-xl w-3/7 h-150 text-center text-white";
    const image=document.createElement("div");
    image.className=" w-32 h-32 mx-auto mb-5 p-[3px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]";
    image.innerHTML=`<img class="rounded-full w-full object-cover border-2 border-[#0d1220] ring-4 " src="${users.avatar_url}" alt="${users.login}">`;

    const nomusers=document.createElement("div");
    nomusers.className="mb-4";
    const nom=document.createElement("p");
    nom.className="text-2xl font-bold capitalize mb-1";
    nom.textContent=users.name;
    const login=document.createElement("p")
    login.className="text-cyan-400 font-semibold text-sm mb-3";
    login.textContent="@" +users.login;
    const Bio=document.createElement("p");
    Bio.className="text-gray-300 text-sm italic";
    Bio.textContent=users.bio;
    nomusers.append(nom,login,Bio)
    const tempmap=document.createElement("div");
    tempmap.className="bg-slate-700/30 rounded-xl p-4 my-5 text-left space-y-2";
    const linge1=document.createElement("div")
    linge1.className="flex items-center gap-2";

    const icons1=document.createElement("span");
    icons1.innerHTML=`<i class="fa-solid fa-map-pin text-red-400"></i>`;
    const map=document.createElement("p")
    map.className="text-gray-300 text-sm font-medium";
    map.textContent=users.location;
    linge1.append(icons1,map);
    const linge2=document.createElement("div");
    linge2.className="flex items-center gap-2";
    const icons2=document.createElement("span");
    icons2.innerHTML=`<i class="fa-solid fa-calendar-days text-gray-50"></i>`
    const temp=document.createElement("p")
    temp.className="text-gray-300 text-sm text-gray-500";
    const date = new Date(users.created_at);
    temp.textContent = "Membre depuis " +
    date.toLocaleDateString("fr-FR", {
        month: "long",
        year: "numeric"
    });
    linge2.append(icons2,temp);
    tempmap.append(linge1,linge2);
    const status=document.createElement("div");
    status.className="grid grid-cols-3 gap-2 my-5";
    const Depots=document.createElement("div");
    Depots.className="bg-slate-700/30 rounded-xl p-3 flex flex-col items-center";
    const nombredepots=document.createElement("p")
    nombredepots.className="text-xl font-bold text-cyan-400";
    nombredepots.textContent=users.public_repos;
    const depot=document.createElement("p");
    depot.className="text-[10px] text-gray-400 font-semibold";
    depot.textContent="DÈPOTS"
    Depots.append(nombredepots,depot);
    const Abonnés=document.createElement("div");
    Abonnés.className="bg-slate-700/30 rounded-xl p-3 flex flex-col items-center";
    const nombreabonnés=document.createElement("p")
    nombreabonnés.className="text-xl font-bold text-pink-400";
    nombreabonnés.textContent=users.followers;
    const abonné=document.createElement("p");
    abonné.className="text-[10px] text-gray-400 font-semibold";
    abonné.textContent="ABONNÈS"
    Abonnés.append(nombreabonnés,abonné)
    const Abonnements=document.createElement("div");
    Abonnements.className="bg-slate-700/30 rounded-xl p-3 flex flex-col items-center";
    const nombreabonnements=document.createElement("p")
    nombreabonnements.className="text-xl font-bold text-purple-400";
    nombreabonnements.textContent=users.following;
    const abonnement=document.createElement("p");
    abonnement.className="text-[10px] text-gray-400 font-semibold";
    abonnement.textContent="ABONNEMENTS";
    Abonnements.append(nombreabonnements,abonnement)
    status.append(Depots,Abonnés,Abonnements)
    const btnajouter=document.createElement("button");
    btnajouter.className=" w-full py-3 my-1 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-bold text-sm shadow-lg shadow-purple-500/20 hover:scale-[1.02] hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer";
    btnajouter.innerHTML=`<i class="fa-regular fa-star"></i> Ajouter à la shortlist` ;

    const voirprofil=document.createElement("div");
    voirprofil.className="block cursor-pointer w-full mt-4 py-3 rounded-xl border border-gray-800 text-cyan-400 text-sm font-semibold hover:bg-slate-800 transition duration-300";
    voirprofil.innerHTML=`Voir le profil original &#8599;`;
    voirprofil.addEventListener("click",()=>{
        window.location.href=`https://github.com/${users.login}`;
    })

    profil.append(image,nomusers,tempmap,status,btnajouter,voirprofil)
    
    const Repos=document.createElement("div"); 
    Repos.className="w-full bg-[#0d1220] p-6 rounded-2xl border border-gray-800 overflow-y-auto h-150 ";
    
    const titre=document.createElement("div");
    titre.className="flex items-center gap-3 mb-6";
    const Dépots=document.createElement("h2");
    Dépots.className="text-2xl font-bold text-white";
    Dépots.textContent="Dépôts";
    const nombDépots=document.createElement("span");
    nombDépots.className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold";
    nombDépots.textContent=depote.length;
    titre.append(Dépots, nombDépots);

    Repos.append(titre, afficherepos());

    content.append(profil, Repos);
}
export function afficherepos() {
    const carts = document.createElement("div");
    carts.className = "grid grid-cols-1 md:grid-cols-2 gap-4";
    depote.forEach(repo => {
        const carte = document.createElement("div");
        carte.className = `bg-slate-800/20 border border-gray-800 rounded-xl p-4 hover:border-cyan-500/50 transition duration-300`;
        const titrerepos = document.createElement("p");
        titrerepos.className = "text-white font-bold text-lg mb-3";
        titrerepos.innerHTML = `<i class="fa-regular fa-square text-cyan-500"></i> ${repo.name}`;
        const description = document.createElement("p");
        description.className = "text-gray-400 text-sm mb-4";
        description.textContent = repo.description || "Aucune description.";
        const tichnolge = document.createElement("div");
        tichnolge.className = "flex items-center gap-4 mb-3";
        const nomtichno = document.createElement("p");
        nomtichno.className = "text-gray-300 text-sm";
        nomtichno.innerHTML = ` <i class="fa-solid fa-circle text-xs"></i> ${repo.language || "Non précisé"} `;
        const iconstichno1 = document.createElement("p");
        iconstichno1.className = "text-yellow-400 text-sm";
        iconstichno1.innerHTML = `<i class="fa-solid fa-star text-xs"></i> ${repo.stargazers_count} `;
        const iconstichno2 = document.createElement("p");
        iconstichno2.className = "text-cyan-400 text-sm";
        iconstichno2.innerHTML = `<i class="fa-solid fa-code-fork text-xs"></i> ${repo.forks_count}`;
        tichnolge.append(nomtichno, iconstichno1, iconstichno2);
        const datemisrepos = document.createElement("p");
        datemisrepos.className = "text-gray-500 text-xs font-medium";
        const dates = new Date(repo.updated_at);
        const today = new Date();
        const difference = today - dates;
        const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
        datemisrepos.textContent = `Mis à jour il y a ${jours} jours`;
        carte.append(titrerepos,description,tichnolge,datemisrepos);
        carts.append(carte);
    });
    return carts;
}
export function error() {
    const erreur = document.createElement("div");
    erreur.className = "w-full min-h-[356px] bg-[#0d1220] border border-gray-800 rounded-[28px] flex flex-col items-center justify-center px-6 py-10";
    const iconerreur = document.createElement("div");
    iconerreur.className = "w-[90px] h-[90px] rounded-full border border-red-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.15)] mb-7";
    const icon = document.createElement("p");
    icon.className = "text-red-500 text-4xl font-light";
    icon.textContent = "!";
    const messageerreur = document.createElement("p");
    messageerreur.className = "text-center text-gray-50 text-2xl font-semibold leading-relaxed";
    messageerreur.innerHTML = `Aucun développeur trouvé. Vérifiez le nom<br> d'utilisateur et réessayez.`;
    iconerreur.appendChild(icon);
    erreur.append(iconerreur,messageerreur);
    content.appendChild(erreur)
}
const analyser=document.querySelector("#Analyser");
const search=document.querySelector("#Recherch")
analyser.addEventListener("click",()=>{
    const Recherch1=search.value.trim();
    window.location.href=`profil.html?users=${encodeURIComponent(Recherch1)}`;
})
afficherusers()