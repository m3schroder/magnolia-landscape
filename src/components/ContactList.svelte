<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import { Envelope, Phone } from 'svelte-heros-v2';
	const cx = 'w-min flex gap-5 items-center !p-4 !bg-blue text-white';
</script>

<a href="tel:615-796-5388" class="appearance-none no-underline">
	<Button class={cx} size="md">
		<Phone size="24" class="font-bold" />
	</Button>
</a>
<a href="mailto:magnoliavalleylandscape@gmail.com" class="appearance-none no-underline">
	<Button class={cx} size="md">
		<Envelope size="24" class="font-bold" />
	</Button>
	<!-- <span class="shrink text-truncate max-w-2/3">magnoliavalleylandscape@gmail.com</span> -->
</a>
<a
	href="https://www.facebook.com/people/Magnolia-Valley-Landscape/100066705797850/"
	class="appearance-none no-underline"
>
	<Button class={cx + ' text-lg'} size="md">Facebook</Button>
</a>
