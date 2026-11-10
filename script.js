const recherch=document.querySelector("#Rechercher");
const btnanalyse=document.querySelector("#Analyser");
const errorserch=document.querySelector("#error")
btnanalyse.addEventListener("click",()=>{
    const Recherch=recherch.value.trim();
    let valide=true;
    const regex=/^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/;
    if(Recherch === "" || Recherch.length<1 || Recherch.length>39){
        errorserch.textContent="Le nom d'utilisateur doit  comporter entre 1 et 39 caractères "
        valide=false;
    }
    else if(!regex.test(Recherch)){
        errorserch.textContent="Le nom d'utilisateur ne doit pas commencer ni se terminer par un tiret (-)";
        valide=false;
    }
    else{
        errorserch.textContent="";
    }
    if(!valide){
        return;
    }
     window.location.href=`profil.html?code=${encodeURIComponent(Recherch)}`;
})