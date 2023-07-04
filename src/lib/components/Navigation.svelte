<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a on:click={drawerClose} href="/dashboard">Dashboard</a></li>
		<li><a on:click={drawerClose} href="/menu1">Menu Sidebar 1</a></li>
		<li><a on:click={drawerClose} href="/menu2">Menu Sidebar 2</a></li>
		<li><a on:click={drawerClose} href="/menu3">Menu Sidebar 3</a></li>
		<li><a on:click={drawerClose} href="/menu4">Menu Sidebar 4</a></li>
	</ul>
</nav>
