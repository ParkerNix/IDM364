<script lang="ts">
	import Cardlist from '$lib/Cardlist.svelte';

	import BBImg from '$lib/assets/Biddybuggy.png';

	export let data: any;

	let karts = data.karts;
</script>

<Cardlist itemList={karts} type={'admin'} />
