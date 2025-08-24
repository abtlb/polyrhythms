<script lang="ts">
    import { Pattern } from "./pattern";
    import { sounds } from "./sounds";
    import type { Sound } from "./sounds";
    import PatternTile from "./pattern-tile.svelte";

    let isTriplet: boolean = $state(false);
    let noteType: string = $state('4');
    let length: number = $state(0);
    let notes: boolean[] = $state([false, false, false, false]);
    let selectedSoundPath: string = $state(sounds.kick.path);

    $effect(() => {
        if (length > notes.length) {
            notes = [...notes, ...Array(length - notes.length).fill(false)];
        }
        else if (length < notes.length) {
            notes = notes.slice(0, length);
        }
    });

    const pattern: Pattern = $derived(new Pattern(noteType.concat(isTriplet? 't' : 'n'), notes, selectedSoundPath));

    export function stop() {
        pattern.stop();
    };
</script>

<div>
    <select bind:value={selectedSoundPath}>
        <option value={null}>Select a sound</option>
        {#each Object.entries(sounds) as [key, { name, path}]}
            <option value={path}>{name}</option>
        {/each}
    </select>

    <select bind:value={noteType}>
        <option value={null}>Select a note type</option>
        <option value=4>Quarter Note</option>
        <option value=8>Eighth Note</option>
        <option value=16>Sixteenth Note</option>
        <option value=32>Thirty-Second Note</option>
    </select>
    
    <span>Is note triplet?</span>
    <input type="checkbox" bind:checked={isTriplet} />
    
    <input bind:value={length} type="number" placeholder="Length (in beats)"/>

    <button onclick={() => pattern.play()}>
        Play
    </button>

    <button onclick={() => pattern.toggleMute()}>
        Toggle
    </button>

    <div>
        {#each Array(length) as _, i}
            <PatternTile bind:isActive={notes[i]} />
        {/each}
    </div>

</div>

<style>
    select, input {
        color: #000;
    }
</style>