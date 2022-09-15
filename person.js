class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `teste ${this.name}!`;
  }
}

module.exports = {
  Person,
};
