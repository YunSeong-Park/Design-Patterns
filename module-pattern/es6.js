class BasketModule {
  #basket = [];
  #doSomethingPrivate() {}
  #doSomeThingElsePrivate() {}

  constructor() {}

  addItem(values) {
    this.#basket.push(values);
  }

  getItemCount() {
    return this.#basket.length;
  }

  doSomething = this.#doSomethingPrivate;

  getTotal() {
    const total = this.#basket.reduce((total, curr) => total + curr.price, 0);
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

console.log(basketModule.basket);

console.log(basketModule);
