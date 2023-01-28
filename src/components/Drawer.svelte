<script lang="ts">
	import { Drawer } from 'flowbite-svelte';
	import { sineInOut } from 'svelte/easing';
	import { currentNav } from '@lib/menuStore';

	export let navHeight: number;
	export let wrapping: string;

	let transitionParamsBottom = {
		y: 300,
		duration: 300,
		easing: sineInOut
	};

	let hidden: boolean = true;
	let backDropHidden: boolean = true;
	currentNav.subscribe((val) => {
		setTimeout(
			() => {
				backDropHidden = hidden;
			},
			hidden ? 10 : 490
		);
		hidden = val === wrapping ? false : true;
	});
</script>

<div
	class={`fixed top-0 left-0 w-full h-full bg-neutral-400 transition-all duration-500 
		${hidden ? 'bg-opacity-0' : 'bg-opacity-75'}
		${backDropHidden ? 'hidden' : 'visible'}
		`}
	on:click={() => currentNav.set(undefined)}
	role={hidden ? 'none' : 'presentation'}
/>
<Drawer
	placement="bottom"
	activateClickOutside={true}
	id="drawer"
	class="!bg-transparent w-fit mx-auto !z-50 mb-9 rounded-t-lg"
	style={`bottom: ${navHeight - 50}px;`}
	backdrop={false}
	bgColor="bg-neutral-400 transition-all opacity-100 duration-500 !z-40"
	width="w-full"
	transitionType="fly"
	transitionParams={transitionParamsBottom}
	bind:hidden
>
	<slot />
</Drawer>
