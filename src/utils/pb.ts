import PocketBase from 'pocketbase';
import type { TypedPocketBase } from "./pocketbase-types";


const pb = new PocketBase('https://puma.toto.optimiseus.fr/') as TypedPocketBase;
export default pb;