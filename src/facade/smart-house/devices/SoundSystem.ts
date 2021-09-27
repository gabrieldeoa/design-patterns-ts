import IDevice from "../IDevice";

export default class SoundSystem implements IDevice {

    constructor(private volume: number = 3) {}

    private setVolume(volume: number) {
        this.volume = volume;
    }

    public turnOn() {
        console.log("Sistema de som ligado.");
    }

    public turnOff() {
        console.log("Sistema de som desligado.");
    }

    public changeVolume(volume: number) {
        this.setVolume(volume);
        console.log(`Sistema de som volume ${volume}.`);
    }

}