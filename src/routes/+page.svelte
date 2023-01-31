<script>
	import { Card, Button, Hr } from 'flowbite-svelte';
	import FreeQuote from '@ui/FreeQuote.svelte';
	import { ArrowSmallRight } from 'svelte-heros-v2';
	import links from '$lib/links';
	import PageTitle from '@ui/PageTitle.svelte';
	export const label = undefined;
</script>

<svelte:head>
	<title>Magnolia Valley Landscape</title>
	<meta name="Home page for magnolia valley" />
</svelte:head>

<Card img="/dopeyard.jpeg" class="card-image ">
	<h5 class="lg:text-2xl text-xl mt-2 lg:mb-12 mb-5 uppercase flex flex-col gap-2 text-center">
		<h1 class="uppercase lg:text-5xl text-3xl font-bold">Landscaping</h1>
		<Hr divClass="items-start max-w-sm mb-3" />
		<h2>Affordable</h2>
		<h2>Hassle-Free</h2>
		<h2>Quality Driven</h2>
	</h5>
	<div class="w-full flex-center">
		<FreeQuote />
	</div>
</Card>

<Card class="flex flex-col card flex-wrap pb-10 justify-start">
	<h3 class="w-full text-center header-pb">Services</h3>
	{#each links as link}
		<Button
			color="blue"
			href={link.href}
			size="xs"
			class={`cursor-pointer grow text-sm transition-colors  hover:bg-primary rounded-full opacity-70 `}
			>{link.name}</Button
		>
	{/each}
</Card>

<Card class="card">
	<h3 class="w-full text-center header-pb">Commercial Services</h3>
	<p>
		With <strong>hundreds</strong> of satisfied clients, our Commercial maintenance division is top
		of the line when it comes to <strong>quality</strong> and <strong>responsiveness</strong>.
	</p>
	<p class="mt-3 mb-2">Reach out and let us know how we can help!</p>
	<Button href="/commercial" size="xs" class="w-fit px-6 flex-center gap-7"
		>Lean more <ArrowSmallRight /></Button
	>
</Card>
