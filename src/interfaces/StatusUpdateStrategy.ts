export interface StatusUpdateStrategy {
    execute(orderId: string, item: string, quantity: number): void;
}
