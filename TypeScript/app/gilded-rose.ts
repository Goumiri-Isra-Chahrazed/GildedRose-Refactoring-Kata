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
updateQuality() {
  for (const item of this.items) {
    if (this.isSulfuras(item)) continue;

    if (this.isAgedBrie(item)) {
      this.increaseQuality(item);
    } else if (this.isBackstage(item)) {
      this.increaseQuality(item);
      if (item.sellIn < 11) this.increaseQuality(item);
      if (item.sellIn < 6) this.increaseQuality(item);
    } else {
      this.decreaseQuality(item);
    }

    item.sellIn -= 1;

    if (item.sellIn < 0) {
      if (this.isAgedBrie(item)) {
        this.increaseQuality(item);
      } else if (this.isBackstage(item)) {
        item.quality = 0;
      } else {
        this.decreaseQuality(item);
      }
    }
  }

  return this.items;
}
}
