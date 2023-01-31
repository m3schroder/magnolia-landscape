<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let services: string[];
	export let title: string;
</script>

<Card
	class="card flex flex-col text-white lg:!max-w-none lg:rounded-none lg:!w-screen border-0 shadow-none !bg-gray-50 lg:!bg-blue-100 text-color items-center !px-0 w-full"
>
	<h6 class="text-lg lg:text-xl w-full text-center lg:mb-6">{title}</h6>
	<ul class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 font-light w-2/3 lg:w-full text-sm">
		{#each services as service}
			<li
				class="mx-2 lg:border-1 lg:border-gray-200 bg-blue-400 lg:text-color text-white w-full lg:bg-white lg:min-w-lg lg:!py-5 flex-center text-center px-3 rounded-lg py-4"
			>
				{service}
			</li>
		{/each}
	</ul>
</Card>
