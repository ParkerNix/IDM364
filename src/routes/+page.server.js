import { supabase } from "$lib/server/supabase";

import { PUBLIC_SUPABASE_TABLE } from '$env/static/public';

export async function load() {
	const { data } = await supabase.from(PUBLIC_SUPABASE_TABLE).select('*');
	return {
		karts: data ?? []
	};
}
