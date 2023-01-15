<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { Envelope, Phone } from 'svelte-heros-v2';
	import Facebook from '@element/Facebook.svelte';
</script>

<Card class="bg-paper w-11/12 mx-auto w-full h-fit border-secondary border-1" img={'/map.png'}>
	<div class="grid grid-cols-2 gap-5 w-full">
		<Button class="bg-primary w-full" href="tel:615-796-5388">
			<Phone class="w-fit font-bold" />
		</Button>
		<Button class="bg-primary w-full" href="mailto:magnoliavalleylandscape@gmail.com">
			<Envelope class="w-fit" />
		</Button>
	</div>
</Card>
