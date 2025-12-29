import { INotifier } from "../interfaces/INotifier";

export class PushNotifier implements INotifier {
    notify(orderId: string, message: string): void {
        console.log(`🔔 Push: Order ${orderId} - ${message}`);
    }
}
