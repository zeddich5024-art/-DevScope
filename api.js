import{error,afficherusers} from "./profil.js";
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


export async function postusers(recherch){
    const users=getUser(recherch);
    const repo=getDepots(recherch);
    const shoruser={
        login:users.login,
        name:users.name,
        avatar_url:users.avatar_url,
        html_url:users.html_url,
        language:repo.language,
        
    }
}