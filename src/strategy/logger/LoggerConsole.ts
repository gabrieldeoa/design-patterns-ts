import LoggerOutputInterface from "./LoggerOutputInterface";

export default class LoggerConsole implements LoggerOutputInterface {
  print(message: string): void {
    console.log(`${message}`);
  }
}
