<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let services: string[];
	export let title: string;
</script>

<Card class="card flex flex-col text-color !bg-gray-50 items-start !px-12 w-fit">
	<h6 class="text-lg lg:text-xl w-full text-center lg:mb-6">{title}</h6>
	<ul class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 font-light text-sm">
		{#each services as service}
			<li class="mx-2 bg-paper px-3 rounded-lg py-4">{service}</li>
		{/each}
	</ul>
</Card>
