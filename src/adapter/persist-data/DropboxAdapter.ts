import IDataPersistence from "./IDataPersistence";

export default class DropBoxAdapter implements IDataPersistence {

    /*
    * Aqui teriamos a implentação com a comunicação com a api do Dropbox
    * e/ou pacote de terceiro que faz isso
    */
    record(file: string): void {
        console.log(`Gravando o arquivo ${file} no Dropbox`);
    };

    read(filename: string): string {
        console.log(`Retornando o arquivo ${filename} do dropbox`);
        return "Arquivo";
    };
  }