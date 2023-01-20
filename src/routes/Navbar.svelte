<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import { Button } from 'flowbite-svelte';
	import { Bars3, Phone, Envelope, ArrowDown, ChatBubbleBottomCenter } from 'svelte-heros-v2';

	export let navHeight;

	let selected: string | undefined = undefined;
	currentNav.subscribe((val) => (selected = val));

	const menu = [
		{ icon: Phone, name: 'call', href: 'tel:615-796-5388' },
		{ icon: Bars3, name: 'menu' },
		{ icon: ChatBubbleBottomCenter, name: 'quote' }
	];
</script>

<div
	bind:clientHeight={navHeight}
	id="navbar"
	class="z-40 fixed bottom-0 flex-center h-fit py-3 bg-transparent w-full gap-5"
>
	{#each menu as Item}
		<Button
			color="alternative"
			pill={true}
			href={Item.href}
			class="w-14 h-14 p-0 overflow-clip drop-shadow-lg"
			on:click={() => currentNav.set(selected == Item.name ? undefined : Item.name)}
		>
			{#if Item.name == selected && Item.name != 'call'}
				<ArrowDown />
			{:else}
				<Item.icon />
			{/if}
		</Button>
	{/each}
</div>
