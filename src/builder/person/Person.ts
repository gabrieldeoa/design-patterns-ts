import Address from "./Address";
import MedicalRecord from "./MedicalRecord";

export default class Person {
    private name: string;
    private birthdate: string;
    private address: Address | null = null;
    private medicalRecord: MedicalRecord | null = null;

    constructor(
        name: string,
        birthdate: string,
        address: Address,
        medicalRecord: MedicalRecord | null,
    ) {
        this.name = name;
        this.birthdate = birthdate;
        this.address = address;
        this.medicalRecord = medicalRecord;
    }
  
  }