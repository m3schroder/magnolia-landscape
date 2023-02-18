<script lang="ts">
	import { currentNav, ackee } from '@lib/store';
	import FormInput from '@ui/FormInput.svelte';
	import { Button, Card, Label, Spinner, Textarea } from 'flowbite-svelte';
	import Drawer from '@ui/Drawer.svelte';
	import { enhance } from '$app/forms';

	export let hidden = true;
	$: loading = false;
	$: requestSent = false;

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

<Drawer wrapping="quote">
	{#if requestSent}
		<div
			class="bg-white border-1 w-fit px-10 h-fit py-5  rounded-lg flex-center  relative !z-50 flex-col"
		>
			<h3 class="text-lg text-gray-700">Request Sent</h3>
			<p class="text-sm text-color">We'll get back to you soon!</p>
		</div>
	{:else}
		<Card
			color="alternative"
			class={`bg-paper relative shadow-neu mb-4 duration-200 border-1 border-secondary-dark !max-w-xl overflow-auto max-h-[85vh] h-fit`}
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
				class={`flex-col justify-center transition-all flex gap-2 `}
				use:enhance={({ data }) => {
					loading = true;
					services.forEach((s) => {
						if (s[1]) data.append('services[]', s[0].toString());
					});
					$ackee?.action('66a59fbe-25af-46fd-a5b9-b42d74bbf598', { key: 'Sent', value: 1 });
					return async ({ result, update }) => {
						loading = false;
						update();
						requestSent = true;
						await setTimeout(() => {
							currentNav.set(undefined);
							requestSent = false;
						}, 2000);
					};
				}}
			>
				<div class="flex justify-between flex-row gap-3 lg:gap-7">
					<FormInput label={'First Name'} id={'first'} />
					<FormInput label={'Last Name'} id={'last'} />
				</div>
				<div class="flex justify-between flex-row gap-3 lg:gap-7">
					<FormInput label={'Phone'} id={'number'} type={'tel'} />
					<FormInput label={'City'} id={'city'} />
				</div>
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
				<Textarea id={'additional'} name="additional" class="overflow-clip" />
				<Button class="mt-7" type="submit">Send Request</Button>
			</form>
		</Card>
	{/if}
</Drawer>
