<script lang="ts">
	export let data: any;
</script>

<div class="itemdetailed">
	<img src={data?.kart?.img} alt="Item Name" class="itemdetailed-img" />
	<div class="itemdetailed-content">
		<h2 class="itemdetailed-content-heading">{data?.kart?.name}</h2>
		<p class="itemdetailed-content-desc">
			{data?.kart?.desc_long}
		</p>
		<button>Add to Cart - ${data?.kart?.price}</button>
	</div>
</div>

<style lang="scss">
	.itemdetailed {
		background-color: #ffffff;
		border-radius: 10px;
		box-shadow: 0 1px 4 #000000;
		margin: 0 20px;
		display: flex;
		flex-direction: column;

		&-content {
			padding: 20px;
		}

		&-img {
			height: 300px;
			max-width: 100%;
			border-radius: 10px;
			align-self: center;
		}
	}
</style>
