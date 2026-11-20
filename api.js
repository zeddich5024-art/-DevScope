import{error} from "./profil.js";
export async function getUser(recherch){
    try{
    const response = await fetch(`https://api.github.com/users/${recherch}`);
    if(!response.ok) throw new Error (`Erreur ${response.status}`)
    const users= await response.json();
    return users;
    
    }catch(err){
        error();
    }
} 

export async function getDepots(recherch){
    const response = await fetch(`https://api.github.com/users/${recherch}/repos?per_page=100&page=1`);
    const depots= await response.json();
    return depots;
} 

const API_URL="https://6af935706d8b86fb22d6dc36.mockapi.io/depots/user";
export async function postusers(shoruser){
    
        const res=await fetch(API_URL,{
            method:'POST',
            headers:{'Content-Type':'application/JSON'},
            body:JSON.stringify(shoruser)
        })
        location.reload();
        
}
export async function getshorts(){
    const response = await fetch(API_URL);
    const shorts= await response.json();
    return shorts;
}
export async function updateshort(id, data) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
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