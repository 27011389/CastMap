<script>
	import { LogIn } from '../../stores/LogIn'
	import { fade } from 'svelte/transition'
	let close = ""
</script>

<div
	class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black opacity-90 z-10"
	on:click={(close) => LogIn.set(false)}
	transition:fade
>
	<div class="relative opacity-95" on:click|stopPropagation>
		<button class=" absolute top-80 -right-5   bg-opacity-80 opacity-90 z-10" on:click={()=> LogIn.set(false)}>&times;</button> 
		<slot />
	</div>
</div>
