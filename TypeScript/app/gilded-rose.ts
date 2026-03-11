export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }
 private isAgedBrie(item: Item) {
    return item.name === 'Aged Brie';
  }

  private isBackstage(item: Item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  private isSulfuras(item: Item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }

  private increaseQuality(item: Item, amount = 1) {
    item.quality = Math.min(50, item.quality + amount);
  }

  private decreaseQuality(item: Item, amount = 1) {
    item.quality = Math.max(0, item.quality - amount);
  }
  private updateItem(item: Item) {
  if (this.isSulfuras(item)) return; // Sulfuras never changes

  item.sellIn -= 1; // Every other item decreases sellIn

  if (this.isAgedBrie(item)) {
    this.increaseQuality(item);
    if (item.sellIn < 0) this.increaseQuality(item); // extra increase after sellIn
  }
  else if (this.isBackstage(item)) {
    if (item.sellIn < 0) {
      item.quality = 0; // After concert, quality drops to 0
    } else {
      this.increaseQuality(item);
      if (item.sellIn < 10) this.increaseQuality(item);
      if (item.sellIn < 5) this.increaseQuality(item);
    }
  }
  else {
    this.decreaseQuality(item);
    if (item.sellIn < 0) this.decreaseQuality(item); // degrade faster after sellIn
  }
}
updateQuality() {
  for (const item of this.items) {
    this.updateItem(item);
  }
  return this.items;
}
}
