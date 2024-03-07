import { supabase } from '$lib/server/supabase';

import { PUBLIC_SUPABASE_TABLE } from '$env/static/public';
import { json } from '@sveltejs/kit';

export async function GET() {
	const res = await supabase.from(PUBLIC_SUPABASE_TABLE).select('*');

	if (res.status === 200) {
		return json(res.data);
	} else {
		return {
			status: res.status,
			error: new Error(`No karts were found :(`)
		};
	}
}
