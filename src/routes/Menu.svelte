<script lang="ts">
	import Drawer from '@ui/Drawer.svelte';
	import { currentNav } from '@lib/menuStore';
	import { Button, Card } from 'flowbite-svelte';

	export let navHeight: number;
	export let hidden = true;
	currentNav.subscribe((val) => {
		hidden = val === 'menu' ? false : true;
	});
</script>

<Drawer {navHeight} {hidden}>
	<Card
		color="alternative"
		class="bg-paper shadow-neu mb-4 flex-col flex w-72 gap-2 border-1 border-secondary-dark"
	>
		<Button
			color="alternative"
			href="/"
			on:click={() => currentNav.update((val) => (val = undefined))}>Home</Button
		>
		<Button
			color="alternative"
			href="/residential"
			on:click={() => currentNav.update((val) => (val = undefined))}>Residential</Button
		>
		<Button
			color="alternative"
			href="/commercial"
			on:click={() => currentNav.update((val) => (val = undefined))}>Commercial</Button
		>
		<Button on:click={() => currentNav.update((val) => (val = 'quote'))}>Get Quote</Button>
	</Card>
</Drawer>
