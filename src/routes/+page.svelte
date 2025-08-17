<script lang="ts">
    import * as Tone from 'tone';

    let BPM = 80;
    let player: Tone.Player;
    let synthA: Tone.FMSynth;
    let loopA: Tone.Loop;
    let loopB: Tone.Loop;

    async function play() {
        await Tone.start();

        player = new Tone.Player(
            "https://tonejs.github.io/audio/berklee/gong_1.mp3"
        ).toDestination();

        if(!synthA) {
            synthA = new Tone.FMSynth().toDestination();
        }

        if(!loopA) {
            //play a note every quarter-note
            loopA = new Tone.Loop((time) => {
                synthA.triggerAttackRelease("C2", "8n", time);
            }, "4n").start(0);
        }

        if(!loopB) {
            loopB = new Tone.Loop((time) => {
                player.start(time);
            }, "16t").start(0);
        }

        // all loops start when the Transport is started
        Tone.getTransport().bpm.value = BPM;
        Tone.getTransport().start();
        // ramp up to 800 bpm over 10 seconds
    }

    function stop() {
        Tone.getTransport().stop();
        Tone.getTransport().cancel();
    }

</script>

<button on:click={play}>Pattern 1</button>
<button on:click={stop}>Stop</button>

<style>

</style>

