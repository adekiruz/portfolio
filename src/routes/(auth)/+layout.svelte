<script>
	import Footer from '$lib/components/Footer.svelte';
	import HeaderAuth from '$lib/components/HeaderAuth.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="pageHeader">
		<HeaderAuth />
	</svelte:fragment>

	<!-- content -->
	<div class="container mx-auto p-3">
		<slot />
	</div>

	<!-- footer -->
	<svelte:fragment slot="pageFooter">
		<Footer />
	</svelte:fragment>
</AppShell>
