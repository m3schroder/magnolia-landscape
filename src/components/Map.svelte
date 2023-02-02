<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { Envelope, Phone } from 'svelte-heros-v2';
	import ContactList from './ContactList.svelte';
	const cx = 'w-min flex gap-5 items-center !p-2';
</script>

<Card class="map" img={'/map.webp'}>
	<div class="lg:hidden flex justify-start items-center gap-5 w-full">
		<ContactList />
	</div>
</Card>
