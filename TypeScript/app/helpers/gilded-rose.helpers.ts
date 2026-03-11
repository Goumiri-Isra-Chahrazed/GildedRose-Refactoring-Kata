import { Item } from "@/models/Item";

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const CONJURED = 'Conjured';

export function isAgedBrie(item: Item) {
  return item.name === AGED_BRIE;
}

export function isBackstage(item: Item) {
  return item.name === BACKSTAGE;
}

export function isSulfuras(item: Item) {
  return item.name === SULFURAS;
}

export function isConjured(item: Item) {
  return item.name.includes(CONJURED);
}

export function increaseQuality(item: Item, amount = 1) {
  item.quality = Math.min(50, item.quality + amount);
}

export function decreaseQuality(item: Item, amount = 1) {
  item.quality = Math.max(0, item.quality - amount);
}

export function isExpired(item: Item) {
  return item.sellIn < 0;
}
