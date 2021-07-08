{
  class MySingleton {
    // Instance stores a reference to the Singleton
    static _instance: MySingleton;

    constructor() {
      if (!MySingleton._instance) {
        MySingleton._instance = this;
      }
      return MySingleton._instance;
    }

    private privateMethod() {
      console.log("I am private");
    }

    private privateVariable = "Im also private";

    private privateRandomNumber = Math.random();

    publicMethod() {
      console.log("the public can see me!");
    }
    publicProperty = "I am also public";

    getRandomNumber() {
      return this.privateRandomNumber;
    }
  }

  class MyBadSingleton {
    static _instance: MyBadSingleton;

    constructor() {
      MyBadSingleton._instance = this;
      return MyBadSingleton._instance;
    }

    private privateRandomNumber = Math.random();

    getRandomNumber() {
      return this.privateRandomNumber;
    }
  }

  const sington1 = new MySingleton();
  const sington2 = new MySingleton();

  console.log(sington1.getRandomNumber() === sington2.getRandomNumber());

  const sington3 = new MyBadSingleton();
  const sington4 = new MyBadSingleton();

  console.log(sington3.getRandomNumber() === sington4.getRandomNumber());
}
