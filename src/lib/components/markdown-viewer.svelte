<script lang="ts">
    import { marked } from "marked";
    export let body: string = ``;
</script>

<div class="md font-inter-variable font-[400]">
    {@html marked(body, { breaks: true })}
</div>

<style>
    :global(.md div) {
        outline: none;
        border: none;
    }
    :global(.md h1) {
        font-size: 30px;
        font-weight: 700;
        line-height: 1;
        padding-block: 4px;
    }
    :global(.md h2) {
        font-size: 25px;
        font-weight: 700;
        line-height: 1;
        padding-block: 4px;
    }
    :global(.md h3) {
        font-size: 20px;
        font-weight: 700;
    }
    :global(.md h4) {
        font-size: 18px;
        font-weight: 700;
    }

    :global(.md img[src]) {
        border-radius: 5px;
        margin-block: 5px;
    }

    :global(.md pre) {
        background: var(--prime);
        border: 1px solid var(--prime2);
        margin-block: 5px;
        padding: 10px;
        padding-inline: 18px;
        border-radius: 8px;
        position: relative;
    }
    :global(.md pre):before {
        position: absolute;
        content: attr(data-language);
        right: 0;
        top: 0;
        font-size: 13px;
        font-weight: 600;
        padding-inline: 7px;
        color: var(--prime3);
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }
    :global(.md p code) {
        background: var(--prime);
        border: 1px solid var(--prime2);
        font-family: "Inter Variable", sans-serif;
        padding-inline: 8px;
        padding-block: 2px;
        border-radius: 5px;
        font-size: 14px;
        margin-inline: 1px;
        margin-block: 10px;
    }
    :global(.md ul li) {
        position: relative;
        display: flex;
    }
    :global(.md ul li):before {
        content: "";
        color: transparent;
        width: 15px;
        height: 20px;
    }
    :global(.md hr) {
        border: none;
        margin-block: 8px;
        height: 2px;
        border-radius: 100px;
        background: var(--prime2);
    }
    :global(.md ul li):after {
        position: absolute;
        content: "";
        left: 0;
        top: 40%;
        width: 5px;
        height: 5px;
        border-radius: 100px;
        background-color: var(--prime3);
    }
    :global(.md table) {
        background: var(--prime4);
        border-radius: 6px;
        margin-block: 5px;
        border-spacing: 0;
        border-collapse: separate;
        border: 1px solid var(--prime2);
        overflow: hidden;
    }
    :global(.md tbody) {
        border-radius: 5px;
    }
    :global(.md th) {
        border-left: 1px solid var(--prime2);
        padding-inline: 10px;
        padding-block: 3px;
        min-width: 100px;
        max-width: 25rem;
        background: var(--prime)
    }
    :global(.md th:first-child) {
        border-left: none;
    }
    :global(.md td) {
        border-top: 1px solid var(--prime2);
        border-left: 1px solid var(--prime2);
        padding-inline: 10px;
        padding-block: 2px;
        max-width: 25rem;
    }
    :global(.md td:first-child) {
        border-left: none;
    }
    :global(.md blockquote) {
        background: var(--prime);
        padding-left: 1rem;
        padding-block: 4px;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        position: relative;
        height: max-content;
        font-size: 15px;
    }
    :global(.md blockquote):before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        border-radius: 10px;
        background: var(--prime3);
    }
</style>