<script lang="ts">
	import { onMount } from 'svelte';
	import { CloseButton, Drawer } from 'flowbite-svelte';
	import { sineInOut } from 'svelte/easing';
	import { currentNav } from '@lib/menuStore';

	export let wrapping: string;

	$: innerWidth = 0;
	onMount(() => {
		function onResize() {
			innerWidth = window.innerWidth;
		}
		onResize();
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	});

	$: transitionParamsBottom = {
		y: innerWidth < 1024 ? 300 : -300,
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
	placement={innerWidth < 1024 ? 'bottom' : 'top'}
	id="drawer"
	class={`lg:mt:20 mb-20 !bg-transparent w-fit mx-auto !z-50 rounded-t-lg position`}
	backdrop={false}
	bgColor="bg-neutral-400 transition-all opacity-100 duration-500 !z-40"
	width="w-full"
	transitionType="fly"
	transitionParams={transitionParamsBottom}
	bind:hidden
>
	<!-- <CloseButton
		class="text-neutral-500 absolute top-5 right-5 lg:top-7 lg:right-8 z-50"
		on:click={() => {
			hidden = true;
			currentNav.set(undefined);
		}}
	/> -->
	<slot />
</Drawer>
