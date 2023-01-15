<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import { Button, Card } from 'flowbite-svelte';
	import Drawer from '@component/Drawer.svelte';

	export let navHeight: number;
	export let hidden = true;
	currentNav.subscribe((val) => {
		hidden = val === 'call' ? false : true;
	});
</script>

<Drawer {navHeight} {hidden}>
	<Card
		color="alternative"
		class="bg-paper shadow-neu mb-4 flex-col flex gap-2 border-1 border-secondary-dark"
	>
		<h3 class="text-color font-normal mx-auto text-lg">Give us a call?</h3>
		<div class="grid grid-cols-2 gap-5">
			<Button href="tel:615-796-5388" class="w-full">Yes</Button>
			<Button color="alternative" on:click={() => currentNav.set(undefined)}>No</Button>
		</div>
	</Card>
</Drawer>
