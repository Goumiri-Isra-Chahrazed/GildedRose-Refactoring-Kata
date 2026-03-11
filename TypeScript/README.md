# Gilded Rose

This is the Gilded Rose kata in TypeScript.

## Getting started

Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

There are two unit test frameworks to choose from, Jest and Mocha.

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

Mocha

```sh
npm run test:mocha
```
## 🛠 Steps I Took

1. ♻️ Separated the **Item model** from the **GildedRose service** for better project structure.  
2. 🧩 Introduced **helper methods** (`isAgedBrie`, `isBackstage`, `isSulfuras`, `isConjured`, `increaseQuality`, `decreaseQuality`, `isExpired`) to simplify and clarify item update logic.  
3. 🔄 Refactored `updateQuality` to iterate cleanly over all items and delegate updates to the helper methods.  
4. ✨ Added support for **Conjured items**, which degrade in quality twice as fast.  
5. ✅ Ensured **all tests pass**, including Jest snapshot and unit tests.  
6. 🎨 Used **Gitmoji** in commits to clearly indicate the type of changes made (refactoring, features, fixes, improvements).  


## Run the TextTest fixture from the Command-Line

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:
```sh
npx ts-node test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).


## Run the TextTest approval test that comes with this project

There are instructions in the [TextTest Readme](../texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](../texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python


