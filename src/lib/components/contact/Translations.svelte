<script lang="ts">
    import {Layers} from "radix-icons-svelte";
    import * as Alert from "$lib/components/ui/alert";
</script>

<Alert.Root class="mt-[10px] text-left">
    <Layers class="h-4 w-4"/>
    <Alert.Title>Look here.</Alert.Title>
    <Alert.Description>Japanese or English is supported.</Alert.Description>
</Alert.Root>