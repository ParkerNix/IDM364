<script lang="ts">
	import Cardlist from '$lib/Cardlist.svelte';

	import BBImg from '$lib/assets/Biddybuggy.png';

	let listItems = [
		{
			itemName: 'Biddybuggy',
			itemDesc: 'It is modeled after the Biddybud enemy debuting from Super Mario 3D Land. It has a pair of wing-shaped exhaust pipes that move when a boost mushroom is activated or when the vehicle runs over a boost panel.',
			itemPrice: '4.00',
			itemId: 1,
			itemImg: BBImg
		},
		{
			itemName: 'Biddybuggy',
			itemDesc: 'It is modeled after the Biddybud enemy debuting from Super Mario 3D Land. It has a pair of wing-shaped exhaust pipes that move when a boost mushroom is activated or when the vehicle runs over a boost panel.',
			itemPrice: '4.00',
			itemId: 2,
			itemImg: BBImg
		},
		{
			itemName: 'Biddybuggy',
			itemDesc: 'It is modeled after the Biddybud enemy debuting from Super Mario 3D Land. It has a pair of wing-shaped exhaust pipes that move when a boost mushroom is activated or when the vehicle runs over a boost panel.',
			itemPrice: '4.00',
			itemId: 3,
			itemImg: BBImg
		}
	];
</script>

<Cardlist itemList={listItems} type={'admin'} />

