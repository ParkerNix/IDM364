<script lang="ts">
	import Cardlist from '$lib/Cardlist.svelte';

	import { afterUpdate } from 'svelte';
	import { cart } from '$lib/store';
</script>

{#if $cart.length != 0}
	<Cardlist itemList={$cart} type={'cart'} />
{:else}
	<div class="empty-cart">
		<h2>Nothing yet!</h2>
		<p>You have nothing in your cart. Get shopping!</p>
	</div>
{/if}
