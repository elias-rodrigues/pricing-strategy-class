import { PriceCalculator } from '../src/pricing/price-calculator';

describe('PriceCalculator', () => {
    it('should apply loyal customer discount', () => {
        const price = PriceCalculator.calculatePrice('loyal-customer', 100);
        expect(price).toBe(90);
    });

    it('should apply bulk discount', () => {
        const price = PriceCalculator.calculatePrice('bulk-discount', 100);
        expect(price).toBe(85);
    });

    it('should apply November electronics discount', () => {
        const price = PriceCalculator.calculatePrice('november-electronics', 100);
        expect(price).toBe(80);
    });

    it('should throw an error for invalid strategy', () => {
        expect(() => PriceCalculator.calculatePrice('invalid-strategy', 100)).toThrowError('Invalid strategy type');
    });
});
