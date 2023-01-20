<script lang="ts">
	import { Card } from 'flowbite-svelte';

	interface ITier {
		title: string;
		subtitle: string;
		features: string[];
		color?: string | undefined;
	}
	export let tiers: ITier[];
</script>

{#each tiers as tier}
	<Card class={`!${tier.color} card w-full gap-7 px-16 grid-cols-2 grid`}>
		<div class="text-sm">
			<h4 class="!text-lg font-semibold">{tier.title}</h4>
			{@html tier.subtitle}
		</div>
		<ul class="flex justify-center flex-col items-start">
			{#each tier.features as feature}
				<li><strong>+</strong>{feature}</li>
			{/each}
		</ul>
	</Card>
{/each}
