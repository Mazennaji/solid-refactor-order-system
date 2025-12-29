import { ILogger } from "../interfaces/ILogger";

export class SilentLogger implements ILogger {
    log(message: string): void {
    }
}
