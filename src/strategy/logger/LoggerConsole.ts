import LoggerOutputInterface from "./LoggerOutputInterface";

export default class LogConsole implements LoggerOutputInterface {
  print(message: string): void {
    console.log(`${message}`);
  }
}
