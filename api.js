export async function getUser(recherch){
    const response = await fetch(`https://api.github.com/users/${recherch}`);
    const users= await response.json();
    return users;
} 

export async function getDepots(recherch){
    const response = await fetch(`https://api.github.com/users/${recherch}/repos?per_page=100&page=1`);
    const depots= await response.json();
    return depots;
} 