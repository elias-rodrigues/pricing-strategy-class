import { DiscountStrategy } from '../discount-strategy.interface';
import { PurchaseContext } from '../context';

// A verificação do mês é feita com getMonth(), que retorna 0 para janeiro até 11 para dezembro.
// Aplica 7% de desconto adicional se for eletrônico comprado em novembro.
export class NovemberElectronicsStrategy implements DiscountStrategy {
    applyDiscount(price: number, context: PurchaseContext): number {
        // Apply 7% discount if the product is an electronic and the purchase is in November
        return context && context.category === 'electronics' && context.date.getMonth() === 10
            ? price * 0.93
            : price;
    }
}
