import { Product } from './test';

type productData = {
  price: number;
  name: string;
};

const productFactory = ({ name, price }: productData): Product => {
  return new Product(price, name);
};

describe('Product', () => {
  it('', () => {
    const sub = productFactory({ name: 'camiseta', price: 45.7 });
    expect(sub).toHaveProperty('name', 'camiseta');
    expect(sub.price).toBeCloseTo(45.7);
  });
});
