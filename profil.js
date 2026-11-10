const params = new URLSearchParams(window.location.search);
const recherch = params.get("code");
const content=document.querySelector("#content");
const Recherch=document.querySelector("#Recherch");
Recherch.value=recherch;
import { getUser } from "./api.js";
import { users } from "./datausers.js";
import { repos } from "./datarepo.js";
console.log(getUser(recherch));
function afficherusers(){
    const profil=document.createElement("div");
    profil.className="";
    const image=document.createElement("div");
    image.className="";
    const nomusers=document.createElement("div");
    nomusers.className="";
    
}