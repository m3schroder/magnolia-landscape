<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import { Bars3, Phone, Envelope, ArrowDown } from 'svelte-heros-v2';

	export let navHeight;

	let selected: string | undefined = undefined;
	currentNav.subscribe((val) => (selected = val));

	const menu = [
		{ element: Phone, name: 'call' },
		{ element: Bars3, name: 'menu' },
		{ element: Envelope, name: 'quote' }
	];
</script>

<div
	bind:clientHeight={navHeight}
	id="navbar"
	class="z-40 relative flex-center bg-white border-t-1 border-secondary-dark w-full gap-5"
>
	{#each menu as Item}
		{#if selected === Item.name}
			<ArrowDown
				on:click={() => currentNav.set(undefined)}
				size={'30'}
				class="cursor-pointer active:-translate-y-4 shadow-neu transition-all h-14 w-14 text-neutral-600 p-3 bg-white rounded-full border-1 border-secondary-dark -translate-y-5 !rounded-full overflow-clip"
			/>
		{:else}
			<Item.element
				on:click={() => currentNav.update((val) => (val = Item.name))}
				size={'30'}
				class="cursor-pointer active:-translate-y-4 shadow-neu transition-all h-14 w-14 text-neutral-600 p-3 bg-white rounded-full border-1 border-secondary-dark -translate-y-5 !rounded-full overflow-clip"
			/>
		{/if}
	{/each}
</div>
