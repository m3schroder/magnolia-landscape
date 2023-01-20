<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import { Button } from 'flowbite-svelte';
	import { ArrowSmallRight } from 'svelte-heros-v2';

	let cx = 'w-2/3';
	export { cx as class };
</script>

<Button size="md" class={cx} on:click={() => currentNav.update((val) => (val = 'quote'))}>
	Get Free Quote <ArrowSmallRight class="ml-3" />
</Button>
