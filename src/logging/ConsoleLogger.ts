import { ILogger } from "../interfaces/ILogger";

export class ConsoleLogger implements ILogger {
    log(message: string): void {
        console.log(`📝 LOG: ${message}`);
    }
}
