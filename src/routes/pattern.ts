import * as Tone from 'tone';

export class Pattern {
    noteType: string;
    notes: boolean[];
    length: number;
    soundPath: string;
    player: Tone.Player | null;
    loop: Tone.Loop | null;
    currentStep: number;

    constructor(noteType: string, notes: boolean[], soundPath: string) {
        this.noteType = noteType;
        this.notes = notes;
        this.length = notes.length;
        this.player = null;
        this.loop = null;
        this.soundPath = soundPath;
        this.currentStep = 0;
    }

    async play() {
        if (!this.player) {
            this.player = new Tone.Player(this.soundPath).toDestination();
            await Tone.loaded();
        }

        if (!this.loop) {
            this.loop = new Tone.Loop((time) => {
                // Play current step if it's true
                if (this.notes[this.currentStep] === true) {
                    this.player!.start(time);
                }
                
                // Move to next step
                this.currentStep = (this.currentStep + 1) % this.length;
            }, this.noteType) // Use noteType directly, not calculated duration
            .start(0);
        }
    }

    stop() {
        if (this.loop) {
            this.loop.stop();
            this.loop.dispose();
            this.loop = null;
        }
        if (this.player) {
            this.player.dispose();
            this.player = null;
        }
        this.currentStep = 0;
    }
}