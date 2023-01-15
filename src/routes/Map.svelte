<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { Envelope, Phone } from 'svelte-heros-v2';
	import Facebook from '@element/Facebook.svelte';

	const cx = 'no-wrap flex flex-row gap-3 px-5 py-1 rounded-full hover:bg-primary w-fit';
</script>

<Card class="bg-paper mx-auto w-full h-fit border-secondary border-1" img={'/map.png'}>
	<div class="flex flex-col gap-5 w-full">
		<a href="tel:615-796-5388" class={cx}>
			<Phone class="w-fit font-bold" />
			<p class="no-wrap">615 663 5650</p>
		</a>
		<a href="mailto:magnoliavalleylandscape@gmail.com" class={cx}>
			<Envelope class="w-fit" />
			<p class="no-wrap">magnoliavalleylandscape@gmail.com</p>
		</a>
	</div>
</Card>
