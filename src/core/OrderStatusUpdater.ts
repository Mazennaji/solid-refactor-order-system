import { StatusUpdateStrategy } from "../interfaces/StatusUpdateStrategy";

export class OrderStatusUpdater {
    constructor(
        private strategies: Map<string, StatusUpdateStrategy>
    ) {}

    updateStatus(
        status: "shipped" | "delivered",
        orderId: string,
        item: string,
        quantity: number
    ): void {
        const strategy = this.strategies.get(status);
        if (!strategy) {
            throw new Error(`No strategy for status: ${status}`);
        }
        strategy.execute(orderId, item, quantity);
    }
}
