<script>
	import { Card, Button } from 'flowbite-svelte';
	import { currentNav } from '@lib/menuStore';
	import { ArrowSmallRight } from 'svelte-heros-v2';
	export const label = undefined;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Card img={'/logo.jpeg'} class="card">
	<h5 class="my-7 text-4xl flex flex-col gap-2">
		<h2>Affordable</h2>
		<h2>Hassle free</h2>
		<h2>Quality driven</h2>
		<h1 class="font-bold">Landscaping</h1>
	</h5>
	<Button size="md" class="w-2/3" on:click={() => currentNav.update((val) => (val = 'quote'))}
		>Get Free Quote <ArrowSmallRight /></Button
	>
</Card>

<Card class="flex flex-col w-11/12 card flex-wrap px-8 justify-start">
	<h3 class="w-full text-center header-pb">Services</h3>
	{#each ['Package Deals', 'Irrigation', 'Landscape Design & Installation', 'Pressure Washing', 'Hardscaping', 'Snow Services', 'Grading & Drainage Solutions', 'Pave Sealing'] as service}
		<Button
			color="primary"
			size="xs"
			class={`cursor-pointer grow text-sm transition-colors  hover:bg-primary rounded-full bg-secondary text-white`}
			>{service}</Button
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
