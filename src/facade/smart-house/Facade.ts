import Lamp from "./devices/Lamp";
import SoundSystem from "./devices/SoundSystem";
import Tv from "./devices/Tv";
import House from "./House";
import Room from "./Room";

export default class Facade {
    static startCinemaMode(movie:string) :House {
        const lamp = new Lamp("Movie Lamp");
        lamp.turnOn();
        lamp.changeColor("Azul");
        lamp.changeIntensity(1);

        const soundSystem = new SoundSystem();
        soundSystem.turnOn();
        soundSystem.changeVolume(8);

        const tv = new Tv("Movie TV");
        tv.turnOn()
        tv.play(movie);

        const room = new Room("Movie Room", "Smart Movie Room", [lamp, tv, soundSystem]);

        const house = new House("teste", [room]);

        return house;
        
    }
    
    static finishCinemaMode(house: House) {
        const room = house.getRoom();
        const devices = room[0].getDevices();

        for(let device of devices) {
            device.turnOff();
        }
    }
}