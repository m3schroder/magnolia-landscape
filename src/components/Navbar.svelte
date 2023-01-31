<script lang="ts">
	import { page } from '$app/stores';
	import { currentNav } from '@lib/menuStore';
	import links from '@lib/links';
	import {
		Button,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		Dropdown,
		DropdownItem,
		Chevron
	} from 'flowbite-svelte';
	import { Bars3, Phone, ArrowDown, ChatBubbleBottomCenter } from 'svelte-heros-v2';

	export let navHeight;
	$: currentRoute = $page.route.id;

	let selected: string | undefined = undefined;
	currentNav.subscribe((val) => (selected = val));

	const menu = [
		{ icon: Phone, name: 'call', href: 'tel:615-796-5388' },
		{ icon: Bars3, name: 'menu' },
		{ icon: ChatBubbleBottomCenter, name: 'quote' }
	];
</script>

<Navbar
	navClass="hidden lg:block lg:absolute rounded-md py-3 px-10 shadow-sm top-0 max-w-screen w-full"
	id="navbar"
>
	<NavBrand href="/" class="h-16">
		<img src="magnolia-logo.png" class="mr-3 !h-full sm:h-9" alt="Magnolia Logo" />
	</NavBrand>
	<NavUl ulClass="flex gap-8 text-md">
		<!-- <NavLi active={currentRoute == '/contact'} href="/contact">About</NavLi> -->
		<NavLi id="nav-menu1" class=" cursor-pointer"><Chevron aligned>Services</Chevron></NavLi>
		<NavLi on:click={() => currentNav.set('quote')} class="cursor-pointer">Get Quote</NavLi>
		<Dropdown triggeredBy="#nav-menu1" class="w-fit z-20 p-2">
			{#each links as Item}
				<DropdownItem
					class={`${currentRoute == '/' + Item.href ? 'text-blue ' : ''} rounded`}
					href={Item.href}>{Item.name}</DropdownItem
				>
			{/each}
		</Dropdown>
	</NavUl>
</Navbar>
<!-- border-1 border-secondary-dark bg-paper border-opacity-50 shadow-neu -->
<div
	bind:clientHeight={navHeight}
	id="navbar"
	class="card z-40 fixed bottom-2 flex-center w-fit gap-5 px-12 !py-2 rounded-xl lg:hidden"
>
	<!-- <Button color="alternative" class="w-28" href="tel:615-796-5388">Call</Button> -->
	{#each menu as Item}
		<Button
			pill={true}
			href={Item.href}
			class="w-14 h-14 p-0 !shadow-2xl transition-colors border-1 border-secondary-dark"
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
