<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let services: string[];
	export let title: string;
</script>

<Card class="card flex flex-col text-neutral-700 !bg-blue-200 items-start !px-12 w-fit">
	<h6 class="text-lg lg:text-xl lg:mb-6">{title}</h6>
	<ul class="flex flex-col gap-2 font-light list-disc text-lg">
		{#each services as service}
			<li class="pl-2 mx-5">{service}</li>
		{/each}
	</ul>
</Card>
