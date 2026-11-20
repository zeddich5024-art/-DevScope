import { CACHE_DURATION } from "./config.js";

// 1. Enregistrer les données dans le cache
export function setCache(key,data){
    const cacheData={
        data:data,
        timestamp:Date.now()
    };

    localStorage.setItem(key,JSON.stringify(cacheData));
}

// 2.Verifier le cache est valide
export function isCacheValid(Key){
    const cache =localStorage.getItem(Key);
    
    if(!cache){
        return false;
    }

    const cacheData = JSON.parse(cache);

    const age = Date.now() - cacheData.timestamp;
    return age <CACHE_DURATION;
}

// 3.Lire les donnéer de cache
export function getCache(key){
    if(!isCacheValid(key)){
        return null;
    }
    const cache= JSON.parse(localStorage.getItem(key))
    return cache.data;
}