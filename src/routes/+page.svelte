<script>
	import { Card, Button } from 'flowbite-svelte';
	import FreeQuote from '@ui/FreeQuote.svelte';
	import { ArrowSmallRight } from 'svelte-heros-v2';
	import links from '$lib/links';
	export const label = undefined;
</script>

<svelte:head>
	<title>Magnolia Valley Landscape</title>
	<meta name="Home page for magnolia valley" />
</svelte:head>

<Card class="card">
	<h5 class="my-7 text-4xl flex flex-col gap-2">
		<h2>Affordable</h2>
		<h2>Hassle free</h2>
		<h2>Quality driven</h2>
		<h1 class="font-bold">Landscaping</h1>
	</h5>
	<FreeQuote />
</Card>

<Card class="flex flex-col w-11/12 card flex-wrap px-8 justify-start">
	<h3 class="w-full text-center header-pb">Services</h3>
	{#each links as link}
		<Button
			color="primary"
			href={link.path}
			size="xs"
			class={`cursor-pointer grow text-sm transition-colors  hover:bg-primary rounded-full bg-secondary text-white`}
			>{link.title}</Button
		>
	{/each}
</Card>

<Card class="card">
	<h3 class="w-full text-center header-pb">Commercial Only Services</h3>
	<p>
		With <strong>hundreds</strong> of satisfied clients, our Commercial maintenance division is top
		of the ine when it comes to <strong>quality</strong> and <strong>responsiveness</strong>.
	</p>
	<p class="mt-3 mb-2">Reach out and let us know how we can help!</p>
	<Button href="/commercial" size="xs" class="w-fit flex-center gap-7"
		>Lean more <ArrowSmallRight /></Button
	>
</Card>
