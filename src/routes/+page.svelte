<script lang="ts">
    import * as Tone from "tone";

    const BPM = 80;
    let player: Tone.Player | null;
    let synthA: Tone.FMSynth | null;
    let loopA: Tone.Loop | null;
    let loopB: Tone.Loop | null;
    let isToneStarted = false;

    function startAll() {
        playPattern1();
        playPattern2();
    }

    async function playPattern1() {
        if (!isToneStarted) {
            await Tone.start();
            isToneStarted = true;
        }

        if (!synthA) {
            synthA = new Tone.FMSynth().toDestination();
        }

        if (!loopA) {
            //play a note every quarter-note
            loopA = new Tone.Loop((time) => {
                synthA!.triggerAttackRelease("C2", "32n", time);
            }, "4n").start('0');
        }

        // all loops start when the Transport is started
        Tone.getTransport().bpm.value = BPM;
        Tone.getTransport().start();
        // ramp up to 800 bpm over 10 seconds
    }

    async function playPattern2() {
        if (!isToneStarted) {
            await Tone.start();
        }

        if (!player) {
            player = new Tone.Player(
                "https://tonejs.github.io/audio/berklee/gong_1.mp3",
            ).toDestination();
        }

        if (!loopB) {
            loopB = new Tone.Loop((time) => {
            player!.start(time);
            player!.start(time + Tone.Time("8t").toSeconds() * 2);
            }, "4n").start('0');
        }
    }

    function stopPattern1() {
        if (loopA) {
            loopA.stop();
            loopA.dispose();
            loopA = null;
        }
    }

    function stopPattern2() {
        if (loopB) {
            loopB.stop();
            loopB.dispose();
            loopB = null;
        }
    }

    function stopAll() {
        Tone.getTransport().stop();
        Tone.getTransport().cancel();

        // Dispose of loops so they can be recreated
        if (loopA) {
            loopA.dispose();
            loopA = null;
        }
        if (loopB) {
            loopB.dispose();
            loopB = null;
        }
        if (player) {
            player.dispose();
            player = null;
        }
    }
</script>

<div>
    <button on:click={startAll}>Pattern 1</button>
    <button on:click={stopPattern1}>Stop Pattern 1</button>
</div>
<div>
    <button on:click={playPattern2}>Pattern 2</button>
    <button on:click={stopPattern2}>Stop Pattern 2</button>
</div>

<style>
    :global(body) {
        background-color: black;
    }

    button {
        color: white;
    }
</style>
