<script>
	import { Card, Button, Hr } from 'flowbite-svelte';
	import FreeQuote from '@ui/FreeQuote.svelte';
	import { ArrowSmallRight } from 'svelte-heros-v2';
	import links from '$lib/links';
	export const label = undefined;
	import greatLawn from '../static/greatlawn.webp?w=1200';
</script>

<svelte:head>
	<title>Magnolia Valley Landscape</title>
	<meta name="Home page for magnolia valley" />
	<link rel="preload" as="image" href={'/great lawn.webp'} />
</svelte:head>

<Card img={greatLawn} class="card-image object-contain">
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

<Card
	class="flex flex-col card lg:shadow-none flex-wrap pb-10 justify-start lg:!max-w-none lg:!w-screen lg:rounded-none lg:bg-blue-100 lg:items-center"
>
	<h3 class="w-full text-center header-pb">Services</h3>
	{#each links as link}
		<Button
			href={link.href}
			size="sm"
			class={`cursor-pointer group grow text-sm transition-colors lg:py-4 lg:bg-white lg:hover:bg-neutral-50 lg:border-1 lg:border-gray-200 lg:text-color rounded-full lg:max-w-lg lg:w-full `}
			><span class="lg:w-40">{link.name}</span>
			<ArrowSmallRight
				class="group-active:translate-x-0 hidden lg:block group-hover:translate-x-3 transition-transform duration-200"
			/>
		</Button>
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
