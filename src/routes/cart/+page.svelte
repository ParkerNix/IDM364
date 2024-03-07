<script lang="ts">
	import Cardlist from '$lib/Cardlist.svelte';

	import BBImg from '$lib/assets/Biddybuggy.png';
	import { cart } from '$lib/store';

	let listItems = $cart;
	console.log($cart);
</script>

<Cardlist itemList={listItems} type={'cart'} />
