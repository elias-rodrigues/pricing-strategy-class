import { DiscountStrategy } from '../discount-strategy.interface';
import { PurchaseContext } from '../context';

export class BulkDiscountStrategy implements DiscountStrategy {
    applyDiscount(price: number, context: PurchaseContext): number {
        let discountedPrice = price * 0.85; // 15% discount

        // Apply additional 5% discount if quantity > 10
        if (context && context.quantity > 10) {
            discountedPrice *= 0.95; // Additional 5% discount
        }

        return discountedPrice;
    }
}