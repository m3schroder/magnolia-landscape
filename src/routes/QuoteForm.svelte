<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import FormInput from '@element/FormInput.svelte';
	import { Button, Card, Label, Textarea } from 'flowbite-svelte';
	import Drawer from '@component/Drawer.svelte';

	export let navHeight: number;
	export let hidden = true;

	currentNav.subscribe((val) => {
		hidden = val === 'quote' ? false : true;
	});

	let selectedServices: string[] = [];
	const handleService = (service: string) => {
		if (selectedServices.includes(service))
			selectedServices = selectedServices.filter((x) => x !== service);
		else {
			selectedServices.push(service);
			selectedServices = selectedServices;
		}
	};
</script>

<Drawer {navHeight} {hidden}>
	<Card
		color="alternative"
		class="bg-paper shadow-neu mb-4 flex-col flex gap-2 border-1 border-secondary-dark"
	>
		<div class="flex justify-between flex-row gap-3">
			<FormInput label={'First Name'} />
			<FormInput label={'Last Name'} />
		</div>
		<FormInput label={'Phone'} />
		<FormInput label={'Email'} />
		<Label class="text-neutral-500 mb-1">Select Services</Label>
		<div class="flex flex-row flex-wrap gap-4">
			{#each ['Landscaping', 'Hardscaping', 'Tree Trimming', 'Tree Removal', 'Pressure Washing', 'Sealing', 'Snow Services'] as service}
				<Button
					large={true}
					on:click={() => handleService(service)}
					class={`cursor-pointer transition-colors shadow-neu hover:bg-primary px-3 py-1 rounded-full bg-secondary text-white ${
						selectedServices.includes(service) ? 'bg-primary' : ''
					}`}>{service}</Button
				>
			{/each}
		</div>
		<Label class="text-neutral-500 mt-3">Additional Info</Label>
		<Textarea />
		<Button class="bg-primary shadow-neu  my-3">Get Quote</Button>
	</Card>
</Drawer>
