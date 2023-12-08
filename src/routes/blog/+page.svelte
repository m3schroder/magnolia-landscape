<script lang="ts">
	import PageTitle from '@ui/PageTitle.svelte';
	import { Card } from 'flowbite-svelte';
	import type { PageServerLoad } from '../$types';
	export let data;
</script>

<PageTitle title="Blog Posts" />
<Card class="card">
	<ul class="links">
		{#each data.posts as post}
			<li class="">
				<a href={`blog/${post.slug}`}>{post.title}</a>
			</li>
		{/each}
	</ul>
</Card>
