<script>
	import { Card, Button } from 'flowbite-svelte';
	import { currentNav } from '@lib/menuStore';
	export const label = undefined;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Card img={'/logo.jpeg'} class="w-11/12 p-3">
	<h5 class="my-7 text-4xl font-semibold tracking-tight text-color">
		Affordable<br />Hassle Free<br />Quality Driven<br /><strong>Landscaping</strong>
	</h5>
	<Button class="!bg-primary w-2/3" on:click={() => currentNav.update((val) => (val = 'quote'))}>
		Get Free Quote <svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-5 h-5 ml-2"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
			/></svg
		>
	</Button>
</Card>

<section class="flex flex-row gap-5 w-full flex-wrap px-8 justify-around">
	{#each ['Hardscaping', 'Tree Trimming', 'Tree Removal', 'Pressure Washing', 'Sealing', 'Snow Services', 'Landscaping'] as service}
		<Button
			large={true}
			class={`cursor-pointer transition-colors shadow-neu hover:bg-primary px-5 grow py-3 rounded-full bg-secondary text-white`}
			>{service}</Button
		>
	{/each}
</section>
