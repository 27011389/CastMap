<script>
    import {SignIn} from "../../stores/SignIn";
    import {fade} from "svelte/transition";
</script>                                   

<div class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black opacity-90 z-10" on:click={()=> SignIn.set(false)} transition:fade>
    <div class="relative opacity-95" on:click|stopPropagation>
        <button class=" absolute top-80 -right-5   bg-opacity-80 opacity-90 z-10" on:click={()=> SignIn.set(false)}>&times;</button> 
    <slot/>
    </div>
</div>
