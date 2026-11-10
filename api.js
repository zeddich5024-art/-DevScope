export async function getUser(recherch){
    const response = await fetch(`https://api.github.com/users/${recherch}`);
    const users= await response.json();
    return users;
} 

