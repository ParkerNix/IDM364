import { supabase } from '$lib/server/supabase';

import { PUBLIC_SUPABASE_TABLE } from '$env/static/public';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const res = await supabase
		.from(PUBLIC_SUPABASE_TABLE)
		.select('*')
		.eq('id', url.searchParams.get('id'))
		.single();

	if (res.status === 200) {
		return json(res.data);
	} else {
		return json(res.error);
	}
}
