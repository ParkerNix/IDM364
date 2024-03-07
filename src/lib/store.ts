import { writable } from "svelte/store";

type cart = {
    id: number,
    name: string,
    img: string,
    desc_short: string,
    desc_long: string,
    price: string,
}

export const cart = writable([] as cart[]);