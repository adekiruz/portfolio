<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	// Your custom Skeleton theme:
	import '../theme.postcss';

	import {
		Drawer,
		Modal,
		Toast,
		drawerStore
	} from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';

	function drawerOpen() {
		console.log(drawerStore.open);
		drawerStore.open();
	}
</script>

<Drawer width="w-1/2">
	<Navigation />
</Drawer>

<Modal />
<Toast />

<slot />
