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
		$cart.push({
			id: itemId,
			name: itemName,
			desc_short: itemDesc_short,
			desc_long: itemDesc_long,
			price: itemPrice,
			img: itemImg
		});
		$cart = $cart;
		console.log($cart);
	};
	const removeFromCart = (id: number) => {
		let item = $cart.find(element => element.id === id);
		if (item != undefined) {
			const index = $cart.indexOf(item!);
			console.log(index);
			$cart.splice(index, 1);
			$cart = $cart;
			console.log($cart);
		}
	};

	async function updateKart(event: Event) {
		const form = event.target as HTMLFormElement;
    	const data = new FormData(form);

		await fetch(`/api/editKart`, {
			method: 'POST',
			body: data
		})
	}
</script>

{#if type === 'admin'}
	<div class="itemcard">
		<form method="POST" on:submit|preventDefault={updateKart}>
			<div class="itemcard-main">
				<div class="itemcard-content">
					<input class="itemcard-content-heading" placeholder={itemName} name="name" />
					<textarea class="itemcard-content-desc" placeholder={itemDesc_short} name="desc_short" />
					<input type="hidden" value={itemId} name="id" />
				</div>
				<img src={itemImg} alt={itemName} class="itemcard-img" />
			</div>
			<div class="itemcard-buttons">
				<button type='submit'>Update</button>
			</div>
		</form>
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
				<button on:click={() => removeFromCart(itemId)}>Remove Item - {itemPrice} Coins</button>
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
