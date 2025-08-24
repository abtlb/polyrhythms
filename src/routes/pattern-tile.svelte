<script>
     let { isActive = $bindable() } = $props();
</script>

<button style="--bg-color: {isActive ? 'lightblue' : 'white'}" onclick={() => isActive = !isActive} aria-label="Toggle button">

</button>

<style>
    button {
        background-color: var(--bg-color);
        border: 1px solid #ccc;
        padding: 10px;
        margin: 5px;
        border-radius: 5px;
    }
</style>