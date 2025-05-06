import { PurchaseContext } from './context';
import { DiscountStrategy } from './discount-strategy.interface';
import { LoyalCustomerStrategy } from './strategies/loyal-customer.strategy';
import { BulkDiscountStrategy } from './strategies/bulk-discount.strategy';
import { NovemberElectronicsStrategy } from './strategies/november-electronics.strategy';

/**
 * - O PriceCalculator recebe uma lista de estratégias no construtor.
 * - Aplica todas as regras e soma os descontos.
 * - Garante que o desconto total não ultrapasse 15%.
 * - Calcula o preço final e arredonda com toFixed(2).
 */
export class PriceCalculator {
    private strategies: DiscountStrategy[];

    constructor(strategies: DiscountStrategy[]) {
        this.strategies = strategies;
    }

    calculateFinalPrice(originalPrice: number, context: PurchaseContext): number {
        let discountedPrice = originalPrice;

        // Aplica todas as estratégias de desconto
        for (const strategy of this.strategies) {
            discountedPrice = strategy.applyDiscount(discountedPrice, context);
        }

        // Garante que o desconto total não ultrapasse 15%
        const maxDiscountedPrice = originalPrice * 0.85; // 15% máximo
        if (discountedPrice < maxDiscountedPrice) {
            discountedPrice = maxDiscountedPrice;
        }

        // Retorna o preço final arredondado
        return parseFloat(discountedPrice.toFixed(2));
    }
}

// Exemplo de uso:
const calculator = new PriceCalculator([
    new LoyalCustomerStrategy(),
    new BulkDiscountStrategy(),
    new NovemberElectronicsStrategy()
]);

const finalPrice = calculator.calculateFinalPrice(100, {
    category: 'electronics',
    quantity: 15,
    unitPrice: 100,
    date: new Date('2023-11-15'),
    isLoyalCustomer: true
});

console.log(finalPrice);
