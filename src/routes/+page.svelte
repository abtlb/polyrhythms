<script lang="ts">
    import * as Tone from "tone";
    import cowbell from "$lib/assets/sounds/cowbell-808.wav";
    import kick from "$lib/assets/sounds/kick-stomp.wav";
    import snare from "$lib/assets/sounds/snare-acoustic02.wav";
    import hollow from "$lib/assets/sounds/perc-hollow.wav";
    import { Pattern } from "./pattern";
    import PatternComponent  from "./pattern.svelte";

    let BPM = 80;
    let isToneStarted = false;
    let patternsNum = $state(0);

    async function startAll() {
        if (!isToneStarted) {
            await Tone.start();
            isToneStarted = true;
        }

        Tone.getTransport().bpm.value = BPM;
        Tone.getTransport().start();
    }

    function stopAll() {
        Tone.getTransport().stop();
        Tone.getTransport().cancel();

    }

    function addNewPattern() {
        patternsNum += 1;
    }

</script>

<div>
    <button onclick={startAll}>Play</button>
</div>
<div>
    <button onclick={stopAll}>Stop</button>
</div>
<div>
    <button onclick={addNewPattern}>
        Add Pattern
    </button>
</div>

{#each Array(patternsNum) as _, i}
    <PatternComponent />
{/each}

<style>
    :global(body) {
        background-color: black;
        color: white;
    }
</style>
