import LoggerOutputInterface from "./LoggerOutputInterface";

export default class LogFile implements LoggerOutputInterface {
  constructor(private filename: string) {}

  print(message: string): void {
    console.log(`${message} in file ${this.filename}`);
  }
}
