export interface IInventoryManager {
    reduceStock(item: string, quantity: number): void;
}
