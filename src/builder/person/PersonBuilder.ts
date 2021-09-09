import Address from "./Address";
import Person from "./Person";
import MedicalRecord from "./MedicalRecord";

export default class PersonBuilder {

    private name = "";
    private birthdate = "";
    private street = "";
    private city = "";
    private number = 0;
    private weight = 0;
    private height = 0;
    private bloodType = "";

    constructor() {}

    private addName(name:string): void {
        this.name = name;
    }

    private addBirthdate(birthdate:string): void {
        this.birthdate = birthdate;
    }

    private addStreet(street:string): void {
        this.street = street;
    }

    private addCity(city:string): void {
        this.city = city;
    }

    private addNumber(number:number): void {
        this.number = number;
    }

    private addWeight(weight:number): void {
        this.weight = weight;
    }

    private addHeight(height:number): void {
        this.height = height;
    }

    private addBloodType(bloodType:string): void {
        this.bloodType = bloodType;
    }

    addPersonalInfo(name: string, birthdate: string): PersonBuilder {
        this.addName(name);
        this.addBirthdate(birthdate);

        return this;
    }

    addAddressInfo(street: string, city: string, number: number): PersonBuilder {
        this.addStreet(street);
        this.addCity(city);
        this.addNumber(number);
        
        return this;
    }

    addMedicalRecordInfo(weight:number, height: number, bloodType: string): PersonBuilder {
        this.addWeight(weight);
        this.addHeight(height);
        this.addBloodType(bloodType)

        return this;
    }

    build(): Person {
        const address = new Address(this.street, this.city, this.number);
        const medicalRecord = new MedicalRecord(this.weight, this.height, this.bloodType);

        return new Person(this.name, this.birthdate, address, medicalRecord);
    }
}