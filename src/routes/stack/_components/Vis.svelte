<script lang="ts">
    import { VisXYContainer, VisGroupedBar } from "@unovis/svelte";
    
    export let data: Array<any> = []
    export let title: string
    const x = (d: { goal: number; id: number }) => d.id;
    const y = (d: { goal: number; id: number }) => d.goal;
    let goal = 350;
    function handleClick(adjustment: number) {
        goal = Math.max(200, Math.min(400, goal + adjustment));
    }
</script>

<div class="flex items-center justify-center bg-transparent dark:bg-neutral-900 border-[1px] dark:border-neutral-800 rounded-[10px] p-3 w-[13rem] font-body">
    <p class="font-[500] ml-[5px] mr-[1.2rem]">{title}</p>
    <div class="w-[3rem] ml-auto">
        <VisXYContainer {data} height={35}>
            <VisGroupedBar {x} {y} color={"hsl(var(--primary) / 0.1)"} />
        </VisXYContainer>
    </div>
</div>