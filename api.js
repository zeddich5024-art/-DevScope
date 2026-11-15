import{error,languageplus} from "./profil.js";
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
export async function postusers(recherch){
    const users=await getUser(recherch);
    const depote=await getDepots(recherch);
    const shoruser={
        login:users.login,
        name:users.name,
        avatar_url:users.avatar_url,
        html_url:users.html_url,
        language:languageplus(depote),
        status:"À contacter",
        rating:5,
        note:"Aunune note",
        createAt:new Date().toISOString()
    }
        const res=await fetch(API_URL,{
            method:'POST',
            headers:{'Content-Type':'application/JSON'},
            body:JSON.stringify(shoruser)
        })
}