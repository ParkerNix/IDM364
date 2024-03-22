import { supabase } from '$lib/server/supabase';

import { PUBLIC_SUPABASE_TABLE } from '$env/static/public';
import { json } from '@sveltejs/kit';

export async function POST(event) {
    const formdata = await event.request.formData();
    const id = formdata.get('id');
    const name = formdata.get('name');
    const desc_short = formdata.get('desc_short');
	const res = await supabase.from(PUBLIC_SUPABASE_TABLE)
    .update({ name: name, desc_short: desc_short })
    .eq('id', id)
    .select();

	if (res.status === 200) {
		return json(res.data);
	} else {
		return json('not successful :(');
	}
}