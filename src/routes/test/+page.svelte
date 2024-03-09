<script lang="ts">
    import io from 'socket.io-client'
    import {onDestroy} from "svelte";
    const socket = io("http://localhost:2001")

    let value = ""

    socket.removeAllListeners('edit')

    function sendPacket() {
        socket.emit("edit", value)
    }
</script>

<div class="flex items-center justify-center h-screen">
    <input type="text" bind:value>
    <button on:click={sendPacket}>Submit</button>
</div>