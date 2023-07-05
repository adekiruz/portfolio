<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	// Your custom Skeleton theme:
	import '../theme.postcss';

	import { Drawer, Modal, Toast } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<Drawer width="w-1/2">
	<Navigation />
</Drawer>

<Modal />
<Toast />

<slot />
