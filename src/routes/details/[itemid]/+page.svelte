<script lang="ts" context="module">
	import BBImg from '$lib/assets/Biddybuggy.png';

	let listItems = [
		{
			itemName: 'Biddybuggy',
			itemDesc:
				'It is modeled after the Biddybud enemy debuting from Super Mario 3D Land. It has a pair of wing-shaped exhaust pipes that move when a boost mushroom is activated or when the vehicle runs over a boost panel.',
			itemPrice: '4.00',
			itemId: 1,
			itemImg: BBImg
		}
	];

	let currentitem: any = {
		itemName: 'Biddybuggy',
		itemDesc:
			'It is modeled after the Biddybud enemy debuting from Super Mario 3D Land. It has a pair of wing-shaped exhaust pipes that move when a boost mushroom is activated or when the vehicle runs over a boost panel.',
		itemPrice: '4.00',
		itemId: 1,
		itemImg: BBImg
	};

	// const { itemid } = page.params;

	// console.log(itemid);

	// currentitem = listItems.find(element => element.itemId === itemid);
</script>

<div class="itemdetailed">
	<img src={currentitem.itemImg} alt="Item Name" class="itemdetailed-img" />
	<div class="itemdetailed-content">
		<h2 class="itemdetailed-content-heading">{currentitem.itemName}</h2>
		<p class="itemdetailed-content-desc">
			{currentitem.itemDesc}
		</p>
		<button>Add to Cart - ${currentitem.itemPrice}</button>
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
