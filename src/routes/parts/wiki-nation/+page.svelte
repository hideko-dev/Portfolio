<script lang="ts">
    let top = 6
    let selected = 0
    $: if(selected === 0) {
        top = 6
    } else if(selected === 1) {
        top = 26
    } else if(selected === 2) {
        top = 45
    }
</script>

<div class="h-screen w-full flex items-center justify-center">
    <div class="bg-primary bg-opacity-5 border-primary border-opacity-5 border-[1px] px-3 pr-4 py-2 rounded-[10px]">
        <div class="pl-3 relative">
            <div class="transition-all duration-300 absolute left-0 w-1.5 h-1.5 rounded-full bg-blue-500" style="top: {top}px;"/>
            <p on:click={() => selected = 0} class="transition-all duration-200 cursor-pointer {selected === 0 ? 'text-blue-400' : 'text-primary'} hover:text-blue-400">Studio</p>
            <p on:click={() => selected = 1} class="transition-all duration-200 cursor-pointer {selected === 1 ? 'text-blue-400' : 'text-primary'} hover:text-blue-400">Entertainment</p>
            <p on:click={() => selected = 2} class="transition-all duration-200 cursor-pointer {selected === 2 ? 'text-blue-400' : 'text-primary'} hover:text-blue-400">Music</p>
        </div>
    </div>
</div>