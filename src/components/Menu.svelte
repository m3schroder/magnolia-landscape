<script lang="ts">
	import Drawer from '@ui/Drawer.svelte';
	import { currentNav } from '@lib/menuStore';
	import { Button, Card } from 'flowbite-svelte';
	import links from '$lib/links';
</script>

<Drawer wrapping="menu">
	<Card
		color="alternative"
		class="bg-paper shadow-neu mb-4 flex-col flex w-72 gap-2 border-1 border-secondary-dark"
	>
		{#each links.sort() as link}
			<Button
				class="font-light text-color"
				color="alternative"
				href={link.href}
				on:click={() => currentNav.update((val) => (val = undefined))}>{link.name}</Button
			>
		{/each}
		<Button href="/" on:click={() => currentNav.update((val) => (val = undefined))}>Home</Button>
		<Button on:click={() => currentNav.update((val) => (val = 'quote'))}>Get Quote</Button>
	</Card>
</Drawer>
