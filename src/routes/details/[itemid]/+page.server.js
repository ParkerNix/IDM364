import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const res = await fetch(`/api/singleKart?id=${params.itemid}`);
    const data = await res.json();

	if (res.status === 200) {
		return {kart: data};
	} else {
		return {
            status: res.status, 
            error: new Error(res.statusText),
        };
	}
}
