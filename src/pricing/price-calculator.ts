import { PricingContext } from './context';
import { LoyalCustomerStrategy } from './strategies/loyal-customer.strategy';
import { BulkDiscountStrategy } from './strategies/bulk-discount.strategy';
import { NovemberElectronicsStrategy } from './strategies/november-electronics.strategy';

export class PriceCalculator {
    static calculatePrice(strategyType: string, originalPrice: number): number {
        let strategy;

        switch (strategyType) {
            case 'loyal-customer':
                strategy = new LoyalCustomerStrategy();
                break;
            case 'bulk-discount':
                strategy = new BulkDiscountStrategy();
                break;
            case 'november-electronics':
                strategy = new NovemberElectronicsStrategy();
                break;
            default:
                throw new Error('Invalid strategy type');
        }

        const context = new PricingContext(strategy);
        return context.calculatePrice(originalPrice);
    }
}
