<script>
    import {isOverlayOpen} from "../../stores/OverlayStore";
    import {fade} from "svelte/transition";
</script>                                   

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center 
bg-gray-100 opacity-90 z-10" 
on:click={()=> isOverlayOpen.set(false)}
transition:fade>
    <div class="bg-gray-900 text-white rounded-md px-10 py-10 relative max-w-xl opacity-95" on:click|stopPropagation>
        <button class="absolute top-4 right-4 text-xl text-gray-300 hover:-translate-y-0.5 transition-transform" 
        on:click={()=> isOverlayOpen.set(false)}>&times;</button>
        <slot/>
    </div>
</div>
