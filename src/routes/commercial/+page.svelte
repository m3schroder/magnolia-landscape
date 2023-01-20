<script lang="ts">
	import FreeQuote from '@ui/FreeQuote.svelte';
	import { Card } from 'flowbite-svelte';
	import { Li, Heading, List } from 'flowbite-svelte';
</script>

<h2>Commercial Services</h2>

<Card class="card">
	<p>
		<strong>The one stop shop for all of your commercial landscape maintenance</strong>
		We have experts for all of your commercial property needs.
	</p>
	<p>
		At <strong>Magnolia Valley Landscape</strong>, we let the work we do speak for itself. With
		<strong>hundreds</strong>
		of satisfied clients, our Commercial maintenance devision is top of the line when it comes to
		<strong>quality</strong>
		and <strong>responsiveness</strong>
	</p>
</Card>
<Card class="!bg-blue-100 px-6 py-3 w-fit">
	<Heading
		tag="h2"
		customSize="text-lg font-semibold"
		class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
	>
		We Take Care Of:
	</Heading>
	<List tag="ul" class="space-y-1">
		{#each ['Weekly Maintenance', 'Full Irrigation maintenance', 'Landscape design and installation', 'Customized Turf Treatments', 'Trim/Prune', 'Power washing and Building washing', 'Snow Removal', 'Tree removal and Tree care', 'Mulching', 'Hardscaping', 'And MORE'] as item}
			<Li>{item}</Li>
		{/each}
	</List>
</Card>

<FreeQuote class={'w-1/3'} />
<Card class="card">
	<h3 class="text-center w-full header-pb">Process</h3>
	<p class="text-start p-2">
		On day one of choosing us, you will be paired with a magnolia valley trained property manager
		who is an expert in your property whether that be a corporate campus, retail location,
		apartment, HOA, retirement community, office building, or industrial property. You will have a
		direct line of contact with your magnolia valley expert property manager and he will be
		inspecting your property each week to ensure your commercial location is receiving top notch
		care.
	</p>
</Card>
<Card class="card">
	<p>
		Our uniformed commercial crews are backed with years of experience and are not allowed within
		our commercial division until they have proved to be experts in the landscape field.
	</p>
	<p>
		We cover all of your properties needs , we have designed our commercial division with one goal
		in mind. That's to be a one stop shop for all of our clients and future clients.
	</p>
	<p>
		<strong>
			Give us a call to get your commercial property back where it needs be with a team that cares.
			Our commercial clients put their trust in us to handle everything from A to Z.
		</strong>
	</p>
</Card>
