import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";


const pb = new PocketBase('https://agence.menigoz.optimiseus.fr:443') as TypedPocketBase;
export default pb;

export async function getAgents() {
    try {
        let agents = await pb.collection("Agent").getFullList();
        return agents;
    } catch (error) {
        console.error("Erreur lors de la récupération des agents :", error);
        return [];
    }
}

export async function setFavori(house: any) {
    await pb.collection('Maison').update(house.id, { favori: !house.favori });
}