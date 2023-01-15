<script lang="ts">
	import { Button, ButtonGroup, Card } from 'flowbite-svelte';
	import { Envelope, Phone } from 'svelte-heros-v2';
	import Facebook from '@element/Facebook.svelte';
	const cx = 'w-min flex gap-5 items-center !p-2';
</script>

<Card class="w-11/12 mx-auto w-full h-fit" img={'/map.png'}>
	<div class="flex justify-start items-center gap-5 w-full">
		<a href="tel:615-796-5388" class="appearance-none no-underline">
			<Button color="alternative" class={cx} size="md">
				<Phone size="20" class="font-bold" />
			</Button>
		</a>
		<a href="mailto:magnoliavalleylandscape@gmail.com" class="appearance-none no-underline">
			<Button class={cx} size="md" color="alternative">
				<Envelope size="20" class="font-bold" />
			</Button>
			<!-- <span class="shrink text-truncate max-w-2/3">magnoliavalleylandscape@gmail.com</span> -->
		</a>
		<a
			href="https://www.facebook.com/people/Magnolia-Valley-Landscape/100066705797850/"
			class="appearance-none no-underline"
		>
			<Button class={cx} size="md" color="alternative">Facebook</Button>
		</a>
	</div>
</Card>
