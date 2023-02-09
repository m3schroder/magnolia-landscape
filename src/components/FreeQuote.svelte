<script lang="ts">
	import { currentNav } from '@lib/store';
	import { Button } from 'flowbite-svelte';
	import { ArrowSmallRight } from 'svelte-heros-v2';

	// let cx = ;
	export { cx as class };
</script>

<Button
	class={'w-2/3 lg:w-fit font-light uppercase transition-colors lg:py-3 lg:px-12 duration-150 lg:text-xl text-white'}
	on:click={() => currentNav.update((val) => (val = 'quote'))}
>
	Free Quote
</Button>
