<script lang="ts">
	import { Card } from 'flowbite-svelte';

	export let services: string[];
	export let title: string;
</script>

<Card class="action-card">
	<h3 class="text-lg text-white font-semibold text-center">{title}</h3>
	<ul>
		{#each services as service}
			<li>{service}</li>
		{/each}
	</ul>
</Card>
