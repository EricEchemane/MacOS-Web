<script>
	import { listenToDropdown } from '$lib/dropdown';
	import { onMount } from 'svelte';
	onMount(() => {
		listenToDropdown();
	});
</script>

<br />
<br />
<div class="menu-wrapper">
	<div class="menu-label" role="button">File</div>
	<div class="menu-items" role="option">
		<div class="menu-item">About</div>
		<div class="menu-item">Preferences</div>
		<div class="menu-item">Save</div>
		<div class="menu-item">Exit</div>
	</div>
</div>
<div class="menu-wrapper">
	<div class="menu-label" role="button">Edit</div>
	<div class="menu-items" role="option">
		<div class="menu-item">Undo</div>
		<div class="menu-item">Redo</div>
		<div class="menu-item">Cut</div>
		<div class="hr" />
		<div class="menu-item">Redo</div>
		<div class="menu-item">Cut</div>
	</div>
</div>
<br />
<br />
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt reprehenderit alias culpa
	voluptatem? Ipsum distinctio excepturi, est esse similique ea perspiciatis eveniet magnam saepe
	vel tenetur delectus vero praesentium?
</p>
