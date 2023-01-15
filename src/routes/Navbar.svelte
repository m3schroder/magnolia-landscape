<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import { Button } from 'flowbite-svelte';
	import { Bars3, Phone, Envelope, ArrowDown, ChatBubbleBottomCenter } from 'svelte-heros-v2';

	export let navHeight;

	let selected: string | undefined = undefined;
	currentNav.subscribe((val) => (selected = val));

	const menu = [
		{ element: Phone, name: 'call' },
		{ element: Bars3, name: 'menu' },
		{ element: ChatBubbleBottomCenter, name: 'quote' }
	];
	const cx =
		'cursor-pointer shadow-neu transition-all h-12 w-12 backdrop-blue text-neutral-600 p-3 bg-white rounded-full border-1 border-secondary-dark !rounded-full overflow-clip';
</script>

<div
	bind:clientHeight={navHeight}
	id="navbar"
	class="z-40 fixed bottom-0 flex-center h-fit py-3 bg-transparent w-full gap-5"
>
	{#each menu as Item}
		{#if selected === Item.name}
			<Button
				color="alternative"
				pill={true}
				class="w-14 h-14 p-0 overflow-clip"
				on:click={() => currentNav.set(undefined)}
			>
				<ArrowDown class="animation-rotate-180" />
			</Button>
		{:else}
			<Button
				color="alternative"
				pill={true}
				class="w-14 h-14 p-0 overflow-clip"
				on:click={() => currentNav.update((val) => (val = Item.name))}
			>
				<Item.element />
			</Button>
		{/if}
	{/each}
</div>
