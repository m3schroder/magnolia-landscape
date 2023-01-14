<script>
	import { Button } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<!-- <picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture> -->
		</span>

		to your new<br />SvelteKit app
		<Button>Hello</Button>
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>
</section>
