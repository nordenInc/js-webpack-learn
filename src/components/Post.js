export default class Post {
  constructor(address, item) {
    this.address = address;
    this.item = item;
    this.depatureDate = new Date();
  }

  toString() {
    return `Posting item: ${this.item}, address: ${this.address}, depatureDate: ${this.depatureDate}`;
  }
}
