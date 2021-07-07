{
  type item = {
    item: string;
    price: number;
  };

  class BasketModule {
    private basket: item[] = [];
    private doSomethingPrivate() {}
    private doSomeThingElsePrivate() {}

    constructor() {}

    addItem(values: item): void {
      this.basket.push(values);
    }

    getItemCount(): number {
      return this.basket.length;
    }

    doSomething = this.doSomethingPrivate;

    getTotal(): number {
      const total = this.basket.reduce((total, curr) => total + curr.price, 0);
      return total;
    }
  }

  const basketModule = new BasketModule();

  basketModule.addItem({
    item: "bread",
    price: 0.5,
  });

  basketModule.addItem({
    item: "butter",
    price: 0.3,
  });

  // Outputs: 2
  console.log(basketModule.getItemCount());

  // Outputs: 0.8
  console.log(basketModule.getTotal());

  // However, the following will not work:

  // console.log(basketModule.basket);

  console.log(basketModule);
}
