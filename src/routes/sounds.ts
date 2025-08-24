export interface Sound {
    name: string;
    path: string;
}

export const sounds: Record<string, Sound> = {
    cowbell: {
        name: "Cowbell",
        path: "$lib/assets/sounds/cowbell-808.wav"
    },
    hihat: {
        name: "HiHat",
        path: "$lib/assets/sounds/hihat-acoustic01.wav"
    },
    kick: {
        name: "Kick",
        path: "$lib/assets/sounds/kick-stomp.wav"
    },
    snare: {
        name: "Snare",
        path: "$lib/assets/sounds/snare-acoustic02.wav"
    },
    perc808: {
        name: "808 Percussion",
        path: "$lib/assets/sounds/perc-808.wav"
    },
    percHollow: {
        name: "Hollow Percussion",
        path: "$lib/assets/sounds/perc-hollow.wav"
    },
    percShort: {
        name: "Short Percussion",
        path: "$lib/assets/sounds/perc-short.wav"
    },
    percTambo: {
        name: "Tambourine Percussion",
        path: "$lib/assets/sounds/perc-tambo.wav"
    },
    percTribal: {
        name: "Tribal Percussion",
        path: "$lib/assets/sounds/perc-tribal.wav"
    },
    tom1: {
        name: "Tom 1",
        path: "$lib/assets/sounds/tom-acoustic01.wav"
    },
    rototom: {
        name: "Rototom",
        path: "$lib/assets/sounds/tom-rototom.wav"
    },
    
    
};