import LoggerOutputInterface from "./LoggerOutputInterface";

export default class Logger {
  private logOutput: LoggerOutputInterface | null = null;

  setLogOutput(logOutput: LoggerOutputInterface): void {
    this.logOutput = logOutput;
  }

  debug(message: string): void {
    if (!this.logOutput) {
      throw new Error("No output has been set");
    }

    this.logOutput.print(`[DEBUG]: ${message}`);
  }

  error(message: string): void {
    if (!this.logOutput) {
      throw new Error("No output has been set");
    }

    this.logOutput.print(`[ERROR]: ${message}`);
  }

  info(message: string): void {
    if (!this.logOutput) {
      throw new Error("No output has been set");
    }

    this.logOutput.print(`[INFO]: ${message}`);
  }
}
