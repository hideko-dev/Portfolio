<script lang="ts">
    import DelayContent from "$lib/components/delay-content.svelte";
</script>

<div class="flex px-10 pr-20 pt-[6.5rem] w-full h-screen font-writer-regular">
    <div>
        <p class="text-[35px] font-googlesans-medium text-blue-500">About</p>
        <div class="mt-1.5 text-primary text-opacity-90">
            <DelayContent delay={0}>
                <p>The entire team is from Japan and is a development team run by creative people.</p>
            </DelayContent>
            <br>
            <DelayContent delay={50}>
                <p>The name of this team is KustomLabs. The first letter of “KustomLabs” combines “Custom,” which means to create freely, and “Kind,” which means various kinds or categories, and adds “Lab” to the end to continue research and development, thus becoming KustomLabs.</p>
            </DelayContent>
            <br>
            <DelayContent delay={100}>
                <p>We do not seek perfection in everything, and the goal of this team is to satisfy the needs of our customers, to be recognized by many people, and to make them smile.</p>
            </DelayContent>
        </div>
    </div>
</div>