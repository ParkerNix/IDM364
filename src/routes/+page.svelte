<script lang="ts">
	import Cardlist from '$lib/Cardlist.svelte';

	import BBImg from '$lib/assets/Biddybuggy.png';

	export let data;

	let listItems = data.karts;
</script>

<Cardlist itemList={listItems} type={'shop'} />
