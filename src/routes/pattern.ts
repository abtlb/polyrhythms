import * as Tone from 'tone';

export class Pattern {
    //4n/8n/8t/etc...
    noteType: string;

    //'X' pattern sound
    //'O' silence 
    notes: boolean[];
    length: number;
    soundPath: string;

    player: Tone.Player | null;
    loop: Tone.Loop | null;

    constructor(noteType: string, notes: boolean[], soundPath: string) {
        this.noteType = noteType;
        this.notes = notes;
        this.length = notes.length;
        this.player = null;
        this.loop = null;
        this.soundPath = soundPath;
    }

    async play() {
        if (!this.player) {
            this.player = new Tone.Player(this.soundPath).toDestination();
            await Tone.loaded(); // Wait for audio to load
        }
            this.loop = new Tone.Loop((time) => {
                this.notes.forEach((note, index) => {
                    console.log(`Pattern loop at time: ${time}`);
                    if (note === true) {
                        this.player!.start(time + Tone.Time(this.noteType).toSeconds() * index);

                        setInterval(() => {
                            console.log(`Playing note`);
                        }, time + Tone.Time(this.noteType).toSeconds() * index);
                    }
                });
            }, Tone.Time(this.noteType).toSeconds() * this.length); // Loop duration

        this.loop.start(0);
    }

    toggleMute() {
        if (this.player) {
            this.player.mute = !this.player.mute;
        }
    }

    stop() {
        if(this.loop) {
            this.loop.stop();
            this.loop.dispose();
            this.loop = null;
        }
    }

    dispose() {
        if (this.loop) {
            this.loop.stop();
            this.loop.dispose();
            this.loop = null;
        }
        if (this.player) {
            this.player.dispose();
            this.player = null;
        }
    }
}