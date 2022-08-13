// FILL THIS OUT
const { Item } = require('../class/item.js');

class Food extends Item {
  constructor(name, description) {
    super();
    this.name = name;
    this.description = description;
  }
}

module.exports = {
  Food
};
