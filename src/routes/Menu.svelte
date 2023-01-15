<script lang="ts">
	import Drawer from '@component/Drawer.svelte';
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
		class="bg-paper shadow-neu mb-4 flex-col flex gap-2 border-1 border-secondary-dark"
	>
		<Button class="bg-secondary shadow-neu  my-3">Home</Button>
		<Button class="bg-secondary shadow-neu  my-3">Residential</Button>
		<Button class="bg-secondary shadow-neu  my-3">Commercial</Button>
		<Button class="bg-primary shadow-neu  my-3">Get Quote</Button>
	</Card>
</Drawer>
