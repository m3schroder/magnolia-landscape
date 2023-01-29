<script lang="ts">
	import { currentNav } from '@lib/menuStore';
	import FormInput from '@ui/FormInput.svelte';
	import { Button, Card, Label, Spinner, Textarea } from 'flowbite-svelte';
	import Drawer from '@ui/Drawer.svelte';
	import { enhance } from '$app/forms';

	export let navHeight: number;
	export let hidden = true;
	$: loading = false;

	currentNav.subscribe((val) => {
		hidden = val === 'quote' ? false : true;
	});

	$: handleService = (i: number) => {
		let update = [...services];
		update[i][1] = !update[i][1];
		services = update;
	};

	$: services = [
		['Hardscaping', false],
		['Tree Trimming', false],
		['Tree Removal', false],
		['Pressure Washing', false],
		['Sealing', false],
		['Snow Services', false],
		['Landscaping', false]
	];
</script>

<Drawer {navHeight} wrapping="quote">
	<Card
		color="alternative"
		class={`bg-paper relative shadow-neu mb-4 duration-200 border-1 border-secondary-dark loading overflow-clip`}
	>
		<div
			class={`w-full transition-[opacity] duration-300 ${
				loading ? 'opacity-100' : 'z-[-1] opacity-0'
			} h-full absolute flex-center backdrop-blur-sm top-0 left-0`}
		>
			<Spinner />
		</div>
		<form
			method="post"
			action="/"
			class={`flex-col transition-all flex gap-2 `}
			use:enhance={({ data }) => {
				loading = true;
				console.log(loading);
				services.forEach((s) => {
					if (s[1]) data.append('services[]', s[0].toString());
				});
				return async ({ result, update }) => {
					loading = false;
					// update();
				};
			}}
		>
			<div class="flex justify-between flex-row gap-3">
				<FormInput label={'First Name'} id={'first'} />
				<FormInput label={'Last Name'} id={'last'} />
			</div>
			<FormInput label={'Phone'} id={'number'} type={'tel'} />
			<FormInput label={'Email'} id={'email'} type={'email'} />
			<Label class="text-neutral-500 mb-1">Select Services</Label>
			<div class="flex flex-row flex-wrap gap-4">
				{#each services as service, i}
					<Button
						pill={true}
						size="xs"
						on:click={() => handleService(i)}
						class={`cursor-pointer transition-colors  grow justify-around text-white ${
							service[1] ? '' : 'bg-secondary'
						}`}>{service[0]}</Button
					>
				{/each}
			</div>
			<Label class="text-neutral-500 mt-3">Additional Info</Label>
			<Textarea id={'additional'} name="additional" />
			<Button class="mt-7" type="submit">Send Quote Request</Button>
		</form>
	</Card>
</Drawer>
