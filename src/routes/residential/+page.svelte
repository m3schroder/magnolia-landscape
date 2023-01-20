<script lang="ts">
	import FreeQuote from '@ui/FreeQuote.svelte';
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
	import Tiers from './Tiers.svelte';

	const tiers = [
		{
			title: 'Basic',
			subtitle: 'Weekly <br/>or<br/> Bi-Weekly',
			features: ['Mowing & Edging', 'Weed Eating', 'Blowing']
		},
		{
			title: 'Bronze',
			subtitle: 'Everything in Basic',
			features: ['Weed Control'],
			color: 'bg-orange-100'
		},
		{
			title: 'Silver',
			subtitle: 'Everything in Bronze',
			features: ['Yearly Mulch', 'Yearly Trim'],
			color: 'bg-neutral-100'
		},
		{
			title: 'Gold',
			subtitle: 'Everything in Silver',
			features: ['7 Turf Treatments', 'Aeration & Overseed'],
			color: 'bg-amber-100'
		}
	];
</script>

<PageTitle title="Residential Packages" />
<ul class="text-center text-gray-700 text-xl flex flex-col gap-5">
	<li>No Contracts</li>
	<li>Easy Monthly Payments</li>
	<li>Cancel Anytime</li>
</ul>

<h2><strong class="text-xl">Get a quote back in 24 hours!</strong></h2>

<section class="flex w-full  flex-col w-screen items-center gap-3 justify-center bg-blue">
	<h3>Packages</h3>
	<Tiers {tiers} />
</section>

<FreeQuote />

<style>
	h4 {
		font-weight: 600;
		text-align: center;
		font-size: 1.2em !important;
	}
</style>
