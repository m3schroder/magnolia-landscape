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

<!-- border-1 border-secondary-dark bg-paper border-opacity-50 shadow-neu -->
<div bind:clientHeight={navHeight} id="navbar" class="mobile-nav lg:desktop-nav">
	<!-- <Button color="alternative" class="w-28" href="tel:615-796-5388">Call</Button> -->
	{#each menu as Item}
		<Button
			pill={true}
			href={Item.href}
			class="w-14 h-14 p-0 overflow-clip drop-shadow-lg transition-colors border-1 border-secondary-dark"
			on:click={() => currentNav.set(selected == Item.name ? undefined : Item.name)}
		>
			{#if Item.name == selected && Item.name != 'call'}
				<ArrowDown />
			{:else}
				<Item.icon />
			{/if}
		</Button>
	{/each}
	<!-- <Button
		class="w-28"
		color="alternative"
		on:click={() => currentNav.set(selected == 'quote' ? undefined : 'quote')}
	>
		{#if 'quote' == selected}
			<ArrowDown />
		{:else}
			Get Quote
		{/if}
	</Button> -->
</div>
