import cowbellAsset from "$lib/assets/sounds/cowbell-808.wav";
import hihatAsset from "$lib/assets/sounds/hihat-acoustic01.wav";
import kickAsset from "$lib/assets/sounds/kick-stomp.wav";
import snareAsset from "$lib/assets/sounds/snare-acoustic02.wav";
import perc808Asset from "$lib/assets/sounds/perc-808.wav";
import percHollowAsset from "$lib/assets/sounds/perc-hollow.wav";
import percShortAsset from "$lib/assets/sounds/perc-short.wav";
import percTamboAsset from "$lib/assets/sounds/perc-tambo.wav";
import percTribalAsset from "$lib/assets/sounds/perc-tribal.wav";
import tom1Asset from "$lib/assets/sounds/tom-acoustic01.wav";
import rototomAsset from "$lib/assets/sounds/tom-rototom.wav";

export interface Sound {
    name: string;
    path: string;
}

export const sounds: Record<string, Sound> = {
    cowbell: {
        name: "Cowbell",
        path: cowbellAsset
    },
    hihat: {
        name: "HiHat",
        path: hihatAsset
    },
    kick: {
        name: "Kick",
        path: kickAsset
    },
    snare: {
        name: "Snare",
        path: snareAsset
    },
    perc808: {
        name: "808 Percussion",
        path: perc808Asset
    },
    percHollow: {
        name: "Hollow Percussion",
        path: percHollowAsset
    },
    percShort: {
        name: "Short Percussion",
        path: percShortAsset
    },
    percTambo: {
        name: "Tambourine Percussion",
        path: percTamboAsset
    },
    percTribal: {
        name: "Tribal Percussion",
        path: percTribalAsset
    },
    tom1: {
        name: "Tom 1",
        path: tom1Asset
    },
    rototom: {
        name: "Rototom",
        path: rototomAsset
    },
    
    
};