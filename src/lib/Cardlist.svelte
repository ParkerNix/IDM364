<script lang="ts">
	import Itemcard from './Itemcard.svelte';

	type itemlist = {
		name: string;
		desc_short: string;
		desc_long: string;
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
			itemDesc_short={item.desc_short}
			itemDesc_long={item.desc_long}
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
