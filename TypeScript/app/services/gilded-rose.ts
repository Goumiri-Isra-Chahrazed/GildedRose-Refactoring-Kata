import { Item } from "@/models/Item";
export { Item } from "@/models/Item";
const AGED_BRIE = 'Aged Brie';
const BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
 private isAgedBrie(item: Item) {
    return item.name === AGED_BRIE;
  }

  private isBackstage(item: Item) {
    return item.name === BACKSTAGE;
  }

  private isSulfuras(item: Item) {
    return item.name === SULFURAS;
  }

  private increaseQuality(item: Item, amount = 1) {
    item.quality = Math.min(50, item.quality + amount);
  }

  private decreaseQuality(item: Item, amount = 1) {
    item.quality = Math.max(0, item.quality - amount);
  }
private isExpired(item: Item): boolean {
  return item.sellIn < 0;
}
  /**
 * Updates a single item according to Gilded Rose business rules.
 * Extracted from updateQuality to improve readability and maintainability.
 */
  private updateItem(item: Item) {
  if (this.isSulfuras(item)) return; // Sulfuras never changes

  item.sellIn -= 1; // Every other item decreases sellIn

  if (this.isAgedBrie(item)) {
    this.increaseQuality(item);
    if (this.isExpired(item)) this.increaseQuality(item); // extra increase after sellIn
  }
  else if (this.isBackstage(item)) {
    if (this.isExpired(item)) {
      item.quality = 0; // After concert, quality drops to 0
    } else {
      this.increaseQuality(item);
      if (item.sellIn < 10) this.increaseQuality(item);
      if (item.sellIn < 5) this.increaseQuality(item);
    }
  }
  else {
    this.decreaseQuality(item);
    if (this.isExpired(item)) this.decreaseQuality(item); // degrade faster after sellIn
  }
}
updateQuality() {
  for (const item of this.items) {
    this.updateItem(item);
  }
  return this.items;
}
}
