<script lang="ts">
    function getYear(): number {
        const date = new Date()
        return date.getFullYear()
    }
</script>

<div class="w-full justify-center items-center flex font-writer-regular text-[12px] h-8 text-primary text-opacity-40">
    <p>© {getYear()} Hideko. All Rights Reserved.</p>
</div>