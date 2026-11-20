import{error} from "./profil.js";

export async function getProfile(recherch){
    try{
        const [responseUser,responseRepos] = await Promise.all([
            fetch(`https://api.github.com/users/${recherch}`),
            fetch(`https://api.github.com/users/${recherch}/repos?per-page=100&page=1`)
        ]);

        if(!responseUser.ok){
            throw new Error (`Erreur ${responseUser.status}`)
        }
        if(!responseRepos.ok){
            throw new Error (`Erreur ${responseRepos.status}`)
        }

        const [users, depote] = await Promise.all([responseUser.json(),responseRepos.json()]);
        
        return {users,depote};

    }catch(err){
         throw err
    }
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