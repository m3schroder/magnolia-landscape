<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { Envelope, Phone } from 'svelte-heros-v2';
	import ContactList from './ContactList.svelte';
	const cx = 'w-min flex gap-5 items-center !p-2';
	import image from '../static/map.webp?w=900';
</script>

<Card class="map w-11/12" img={image}>
	<div class="lg:hidden flex justify-start items-center gap-5 w-full">
		<ContactList />
	</div>
</Card>
