<script lang="ts">
	import { Drawer } from 'flowbite-svelte';
	import { sineInOut } from 'svelte/easing';

	export let navHeight: number;
	export let hidden: boolean;
	let transitionParamsBottom = {
		y: 300,
		duration: 300,
		easing: sineInOut
	};
</script>

<Drawer
	placement="bottom"
	activateClickOutside={true}
	id="drawer"
	class="!bg-transparent w-fit mx-auto !z-50 mb-9 rounded-t-lg"
	style={`bottom: ${navHeight - 60}px;`}
	backdrop={true}
	bgColor="bg-neutral-400 transition-all opacity-100 duration-500"
	width="w-full"
	transitionType="fly"
	transitionParams={transitionParamsBottom}
	bind:hidden
>
	<slot />
</Drawer>
