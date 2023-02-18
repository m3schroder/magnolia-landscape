<script lang="ts">
	import * as Icon from 'svelte-awesome-icons';
	const cx = 'w-44 flex gap-5 items-center  !p-4 !bg-sky-600 text-white text-xl';
	import { ackee } from '@lib/store';
</script>

<a
	href="https://www.facebook.com/magnoliavalleylandscapes"
	rel="noopener noreferrer"
	target="_blank"
	class="appearance-none no-underline"
	on:click={() =>
		$ackee?.action('0d2e09d4-c839-424b-abb0-e6686b52a828', { key: 'Facebook Opened', value: 1 })}
>
	<Icon.SquareFacebookBrand class="text-blue text-lg" size={'50'} />
</a>
<a
	href="tel:615-796-5388"
	class="appearance-none no-underline"
	on:click={() =>
		$ackee?.action('0d2e09d4-c839-424b-abb0-e6686b52a828', { key: 'Call Clicked', value: 1 })}
>
	<Icon.SquarePhoneSolid class="text-blue text-lg" size={'50'} />
</a>
<a
	href="mailto:magnoliavalleylandscape@gmail.com"
	class="appearance-none no-underline"
	on:click={() =>
		$ackee?.action('0d2e09d4-c839-424b-abb0-e6686b52a828', { key: 'Mail Opened', value: 1 })}
>
	<Icon.SquareEnvelopeSolid class="text-blue text-lg" size={'50'} />
</a>
