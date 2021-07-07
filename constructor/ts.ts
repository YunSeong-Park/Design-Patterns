{
  class Car {
    constructor(private model: string, private year: number, private miles: number) {}

    toString() {
      return `${this.model} has done ${this.miles} miles`;
    }
  }
  const civic = new Car("Honda Civic", 2009, 20000);
  const mondeo = new Car("Ford Mondeo", 2010, 5000);

  console.log(civic.toString());
  console.log(mondeo.toString());
}
