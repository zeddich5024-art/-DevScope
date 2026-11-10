const params = new URLSearchParams(window.location.search);
const recherch = params.get("code");

const Recherch=document.querySelector("#Recherch");
Recherch.value=recherch;
import { getUser } from "./api.js";
console.log(getUser(recherch));