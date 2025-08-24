<script lang="ts">
    import { Pattern } from "./pattern";
    import { sounds } from "./sounds";
    import type { Sound } from "./sounds";

    let isTriplet: boolean = $state(false);
    let noteType: string = $state('');
    let length: number = $state(0);
    let selectedSoundKey: String|null = $state(null);
</script>

<div>
    <select bind:value={selectedSoundKey}>
        <option value={null}>Select a sound</option>
        {#each Object.entries(sounds) as [key, { name }]}
            <option value={key}>{name}</option>
        {/each}
    </select>
    
    <select>
        <option value={null}>Select a note type</option>
        <option value=4>Quarter Note</option>
        <option value=8>Eighth Note</option>
        <option value=16>Sixteenth Note</option>
        <option value=32>Thirty-Second Note</option>
    </select>
    
    <span>Is note triplet?</span>
    <input type="checkbox" bind:checked={isTriplet} />
    
    <input bind:value={length} type="number" placeholder="Length (in beats)" />
    
    <button>
        Play
    </button>
</div>

<style>
    select {
        color: #000;
    }
</style>