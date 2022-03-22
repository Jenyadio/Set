export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Character has already been added');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((item) => this.members.add(item));
  }

  toArray() {
    Array.from(this.members);
  }
}
