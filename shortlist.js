const API_URL="https://6af935706d8b86fb22d6dc36.mockapi.io/depots/user";
export async function getshorts(){
    const response = await fetch(API_URL);
    const shorts= await response.json();
    return shorts;
}

const shorts=await getshorts();
console.log(shorts)
const content=document.querySelector("#content");
const nombrechort=document.querySelector("#nomdrechort");
nombrechort.textContent=shorts.length;
function affichershort(){
    content.innerHTML="";
    shorts.forEach(short=>{
        const carte=document.createElement("div");
        carte.className="flex justify-between items-center bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4";
        const linge1=document.createElement("div");
        linge1.className="flex items-center gap-4";
        const image=document.createElement("div");
        image.className=" w-20 h-20 mx-auto mb-5 p-[3px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 ";
        image.innerHTML=`<img class="rounded-full w-full object-cover  ring-4 " src="${short.avatar_url}" alt="${short.login}">`;

        const donner=document.createElement("div");
        
        const name=document.createElement("p");
        name.className="text-white font-semibold";
        name.textContent=short.name;
        const loginlanguage=document.createElement("div");
        loginlanguage.className="flex items-center gap-2";
        const login=document.createElement("p");
        login.className="text-gray-400 text-sm";
        login.textContent=`@ ${short.login}`;
        const language=document.createElement("p");
        language.className="text-cyan-400 text-xs bg-cyan-950 px-2 rounded";
        language.textContent=short.language
        loginlanguage.append(login,language)
        const Note=document.createElement("p");
        Note.className="text-gray-400 text-sm italic";
        Note.textContent=short.note;
        const date=document.createElement("p");
        date.className="text-gray-500 text-xs";
        date.textContent=`Àjouté le ${new Date(short.createAt).toLocaleDateString("en-US")}`;
        donner.append(name,loginlanguage,Note,date)
        linge1.append(image,donner)
        const supprimer=document.createElement("div");
        supprimer.className="px-2 py-1 border-1 border-red-500 text-white font-meduim bg-red-500/30 cursor-pointer rounded-lg";
        supprimer.textContent="supprimer"
        supprimer.addEventListener("click",()=>{

        })
        carte.append(linge1,supprimer)
        content.append(carte)
    })
}
affichershort();