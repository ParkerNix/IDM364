<script lang="ts">
	import { cart } from '$lib/store';

	export let itemName: string;
	export let itemDesc_short: string;
	export let itemDesc_long: string;
	export let itemPrice: string;
	export let itemImg: string;
	export let itemId: number;
	export let type: string;

	const addToCart = () => {
		$cart.push({id: itemId, name: itemName, desc_short: itemDesc_short, desc_long: itemDesc_long, price: itemPrice, img: itemImg});
		console.log($cart);
	}
</script>

{#if type === 'admin'}
	<div class="itemcard">
		<div class="itemcard-main">
			<div class="itemcard-content">
				<input class="itemcard-content-heading" placeholder={itemName} />
				<textarea class="itemcard-content-desc" placeholder={itemDesc_short} />
			</div>
			<img src={itemImg} alt={itemName} class="itemcard-img" />
		</div>
		<div class="itemcard-buttons">
			<button>Update</button>
		</div>
	</div>
{:else}
	<div class="itemcard">
		<div class="itemcard-main">
			<div class="itemcard-content">
				<h2 class="itemcard-content-heading">{itemName}</h2>
				<p class="itemcard-content-desc">
					{itemDesc_short}
				</p>
			</div>
			<img alt={itemName} class="itemcard-img" src={itemImg} />
		</div>
		<div class="itemcard-buttons">
			{#if type === 'shop'}
				<button on:click={() => addToCart()}>Add to Cart - {itemPrice} Coins</button>
				<a href={`/details/${itemId}`}>More Details</a>
			{:else if type === 'cart'}
				<button>Remove Item</button>
			{/if}
		</div>
	</div>
{/if}

<style lang="scss">
	.itemcard {
		background-color: #ffffff;
		border-radius: 10px;
		box-shadow: 0 1px 4px #00000025;
		max-width: 400px;

		&-main {
			display: flex;
			justify-content: space-between;
		}

		&-buttons {
			display: flex;
			align-items: center;
			gap: 8px;
			padding: 16px 20px;
		}

		&-content {
			padding: 0 20px;

			&-desc {
				margin: 0;
			}

			&-heading {
				margin: 16px 0;
			}
		}

		&-img {
			height: 100%;
			max-width: 150px;
			border-radius: 10px;
		}
	}
</style>
