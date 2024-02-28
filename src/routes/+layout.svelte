<script>
	import '../global.css';
	import { page } from '$app/stores';
</script>

<header>
	<h1>Karts-R-Us</h1>
	<p>Welcome to Karts-R-Us!</p>
</header>
<nav>
	<a href="/" class:active={$page.url.pathname === '/'}> Shop </a>
	<a href="/cart" class:active={$page.url.pathname === '/cart/'}> My Cart </a>
	<a href="/admin" class:active={$page.url.pathname === '/admin/'}> Admin </a>
</nav>

<main>
	<slot />
</main>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		margin: 20px 0;

		h1,
		p {
			margin: 0;
		}
	}
	nav {
		display: flex;
		justify-content: center;
		gap: 24px;
		margin-bottom: 20px;

		a {
			font-size: 18px;
		}
	}
</style>
