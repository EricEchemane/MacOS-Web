<script>
	import { onMount } from 'svelte';
	import { fillSliderTracks } from '$lib/slider';

	onMount(() => {
		fillSliderTracks();
	});
</script>

<br />
<br />
<input type="range" max="10" step=".1" />
