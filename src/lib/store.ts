import { browser } from '$app/environment';
import { writable } from 'svelte/store';

type cart = {
	id: number;
	name: string;
	img: string;
	desc_short: string;
	desc_long: string;
	price: string;
};

let cartLS = null;

if (browser) {
    cartLS = localStorage.getItem('cart')
}

// Set the stored value or a sane default.
export const cart = writable(JSON.parse(cartLS as string) as cart[] || [])

// Anytime the store changes, update the local storage value.
if (browser) {
    cart.subscribe((value) => localStorage.setItem('cart', JSON.stringify(value)))
}
