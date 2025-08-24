import { Pattern } from "./pattern";
import * as Tone from 'tone';

export class MultiPattern {
    patterns: Pattern[];

    constructor() {
        this.patterns = [];
    }

    addPattern(pattern: Pattern) {
        this.patterns.push(pattern);
    }

    async play() {
        await Tone.start();
        this.patterns.forEach(pattern => pattern.play());
    }
}
