import { INotifier } from "../interfaces/INotifier";

export class EmailNotifier implements INotifier {
    notify(orderId: string, message: string): void {
        console.log(`📧 Email: Order ${orderId} - ${message}`);
    }
}
