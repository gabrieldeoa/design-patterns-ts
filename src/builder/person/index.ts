import PersonBuilder from "./PersonBuilder";

const builder = new PersonBuilder();

const person = builder
  .addPersonalInfo("Jão", "1998-09-16")
  .addAddressInfo("Rua Teste", "Cidade Teste", 69)
  .addMedicalRecordInfo(1.70, 60.0, "A+")
  .build();

console.log(person);