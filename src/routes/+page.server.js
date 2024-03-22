import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const res = await fetch(`/api/allKarts`);
	const data = await res.json();

	if (res.status === 200) {
		return { karts: data };
	} else {
		return {
			status: res.status,
			error: new Error(res.statusText)
		};
	}
}
