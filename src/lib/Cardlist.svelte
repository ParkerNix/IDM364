<script lang="ts">
	import Itemcard from './Itemcard.svelte';

	type itemlist = {
		name: string;
		desc_short: string;
		price: string;
		img: string;
		id: number;
	};

	export let itemList: itemlist[];
	export let type: string;
</script>

<div class="cardlist">
	{#each itemList as item}
		<Itemcard
			itemName={item.name}
			itemDesc={item.desc_short}
			itemPrice={item.price}
			itemImg={item.img}
			itemId={item.id}
			{type}
		/>
	{/each}
</div>

<style lang="scss">
	.cardlist {
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
		justify-content: space-between;
	}
</style>
