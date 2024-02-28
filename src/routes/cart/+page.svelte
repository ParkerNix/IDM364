<script lang="ts">
	import Cardlist from '$lib/Cardlist.svelte';

	import BBImg from '$lib/assets/Biddybuggy.png';

	let listItems = [
		{
			itemName: 'Biddybuggy',
			itemDesc: 'A kart modeled after the Biddybud enemy debuting from Super Mario 3D Land.',
			itemPrice: '4.00',
			itemId: 1,
			itemImg: BBImg
		},
		{
			itemName: 'Biddybuggy',
			itemDesc: 'A kart modeled after the Biddybud enemy debuting from Super Mario 3D Land.',
			itemPrice: '4.00',
			itemId: 2,
			itemImg: BBImg
		},
		{
			itemName: 'Biddybuggy',
			itemDesc: 'A kart modeled after the Biddybud enemy debuting from Super Mario 3D Land.',
			itemPrice: '4.00',
			itemId: 3,
			itemImg: BBImg
		}
	];
</script>

<Cardlist itemList={listItems} type={'cart'} />
