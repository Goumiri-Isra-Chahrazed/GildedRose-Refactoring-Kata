import { Item } from "@/models/Item";
export { Item } from "@/models/Item";

import {
  isAgedBrie,
  isBackstage,
  isSulfuras,
  isConjured,
  increaseQuality,
  decreaseQuality,
  isExpired
} from '../helpers/gilded-rose.helpers';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }


    /**
 * Updates a single item according to Gilded Rose business rules.
 * Extracted from updateQuality to improve readability and maintainability.
 */
private updateItem(item: Item) {
    if (isSulfuras(item)) return; // Sulfuras never changes

    item.sellIn -= 1; // Every other item decreases sellIn

    if (isAgedBrie(item)) {
      increaseQuality(item);
      if (isExpired(item)) increaseQuality(item);
    } else if (isBackstage(item)) {
      if (isExpired(item)) {
        item.quality = 0; // After concert, quality drops to 0
      } else {
        increaseQuality(item);
        if (item.sellIn < 10) increaseQuality(item);
        if (item.sellIn < 5) increaseQuality(item);
      }
    } else {
      const degradeAmount = isConjured(item) ? 2 : 1;
      decreaseQuality(item, degradeAmount);
      if (isExpired(item)) decreaseQuality(item, degradeAmount);
    }
  }

  updateQuality() {
    for (const item of this.items) {
      this.updateItem(item);
    }
    return this.items;
  }
}
