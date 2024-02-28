<script lang="ts">
	import Itemcard from './Itemcard.svelte';

	type itemlist = {
		itemName: string;
		itemDesc: string;
		itemPrice: string;
		itemImg: string;
		itemId: number;
	};

	export let itemList: itemlist[];
	export let type: string;
</script>

<div class="cardlist">
	{#each itemList as item}
		<Itemcard
			itemName={item.itemName}
			itemDesc={item.itemDesc}
			itemPrice={item.itemPrice}
			itemImg={item.itemImg}
			itemId={item.itemId}
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
