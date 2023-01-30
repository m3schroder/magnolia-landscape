<script lang="ts">
	import { Hr } from 'flowbite-svelte';

	export let title: string;
	export let message: string | undefined = undefined;
</script>

<div class="w-11/12 max-w-sm flex-center flex-col gap-5 lg:gap-10">
	<h1 class="text-color font-light text-xl lg:text-xl">{title}</h1>
	<Hr hrClass="w-2/3 max-w-xs lg:max-w-lg" />
</div>
{#if message}
	<h3 class="w-2/3 max-w-sm lg:max-w-xl text-2xl text-center text-color">{message}</h3>
{/if}
