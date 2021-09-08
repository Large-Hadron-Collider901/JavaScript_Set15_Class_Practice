// #### Phone Class
// Create a Phone class with attributes
// phoneName, storageLimit, isAndroid,
//screenSize, and hasHeadPhoneJack.
// Create a function that prints each attribute.
// Create an object of the class in your main function.

class Phone {
  // Create a Phone class
  // requires 'constructor' method
  constructor(
    phoneName,
    storageLimit,
    isAndroid,
    screenSize,
    hasHeadPhoneJack
  ) {
    this.phoneName = phoneName;
    this.storageLimit = storageLimit;
    this.isAndroid = isAndroid;
    this.screenSize = screenSize;
    this.hasHeadPhoneJack = hasHeadPhoneJack;
  }
}

function main() {
  let phone1 = new Phone("LG Revolve", "32GB", "true", "4.93in", "true");
  console.log(
    ` Phone1 Name: ${phone1.phoneName} Storage Limit: ${phone1.storageLimit} Is Android: ${phone1.isAndroid} Screen Size: ${phone1.screenSize} Has Head Phone Jack: ${phone1.hasHeadPhoneJack}`
  );
}

main();
