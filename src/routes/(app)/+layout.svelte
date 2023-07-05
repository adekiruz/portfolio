<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../../app.postcss';

	// Your custom Skeleton theme:
	import '../../theme.postcss';

	import { AppShell, Drawer, Modal, Toast } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Drawer width="w-1/2">
	<Navigation />
</Drawer>

<Modal />
<Toast />

<AppShell
	slotSidebarLeft="w-0 md:w-52 bg-surface-500/10 animate-fade-right animate-once animate-ease-in-out"
>
	<svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment>
	<!-- header -->
	<svelte:fragment slot="pageHeader">
		<Header />
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
