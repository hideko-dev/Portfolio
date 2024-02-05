<script lang="ts">
    import { Check, CaretSort } from "radix-icons-svelte";
    import * as Command from "$lib/components/ui/command";
    import * as Popover from "$lib/components/ui/popover";
    import { Button } from "$lib/components/ui/button";
    import { value } from "$lib/stacks";
    import { cn } from "$lib/utils";
    import { tick } from "svelte";

    const frameworks = [
        {
            value: "language",
            label: "Languages"
        },
        {
            value: "technology",
            label: "Technology"
        },
        {
            value: "frontend",
            label: "Frontend"
        },
        {
            value: "backend",
            label: "Backend"
        },
        {
            value: "database",
            label: "Database"
        },
    ];

    let open = false;

    $: selectedValue =
        frameworks.find((f) => f.value === $value)?.label ?? "Select a type...";

    function closeAndFocusTrigger(triggerId: string) {
        open = false;
        tick().then(() => {
            document.getElementById(triggerId)?.focus();
        });
    }
</script>

<Popover.Root bind:open let:ids>
    <div class="mt-3">
        <Popover.Trigger asChild let:builder>
            <Button
                    builders={[builder]}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    class="w-[200px] justify-between"
            >
                {selectedValue}
                <CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </Popover.Trigger>
        <Popover.Content class="w-[200px] p-0">
            <Command.Root>
                <Command.Input placeholder="Search type..." class="h-9" />
                <Command.Empty>No framework found.</Command.Empty>
                <Command.Group>
                    {#each frameworks as framework}
                        <Command.Item
                                value={framework.value}
                                onSelect={(currentValue) => {
              value.set(currentValue);
              closeAndFocusTrigger(ids.trigger)
            }} >
                            <Check class={cn("mr-2 h-4 w-4", $value !== framework.value && "text-transparent" )}/>
                            {framework.label}
                        </Command.Item>
                    {/each}
                </Command.Group>
            </Command.Root>
        </Popover.Content>
    </div>
</Popover.Root>