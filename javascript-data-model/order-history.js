var orderHistory = [
  {
    orderNumber: 11439416898772232,
    orderDate: "08/04/2020",
    currency: "dollars",
    listedPrice: 31.55,
    totalPrice: 34.00,
    productType: "book",
    productName: "JavaScript for impatient programmers",
    productMaker: "Rauschmayer, Dr. Axel",
    shipTo: "JS Masher",
    deliveryStatus: "Delivered",
    deliveryDate: "08/08/2020",
    returnable: true,
    endOfReturnWindow: "09/07/2020",
  },
  {
    orderNumber: 13456845136215618,
    orderDate: "07/19/2020",
    currency: "dollars",
    listedPrice: 41.33,
    totalPrice: 44.53,
    productType: "book",
    productName: "The Timeless Way of Building",
    productMaker: "Alexander, Christopher",
    shipTo: "JS Masher",
    deliveryStatus: "Handed directly to resident",
    deliveryDate: "07/20/2020",
    returnable: true,
    endOfReturnWindow: "08/19/2020",
  },
  {
    orderNumber: 11439416898775641,
    orderDate: "07/04/2020",
    currency: "dollars",
    listedPrice: 15.98,
    totalPrice: 17.22,
    productType: "gaming accessory",
    productName: "Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube adapter",
    productMaker: "Nintendo",
    shipTo: "JS Masher",
    deliveryStatus: "Handed directly to resident",
    deliveryDate: "07/07/2020",
    returnable: true,
    endOfReturnWindow: "08/05/2020",
  },
  {
    orderNumber: 11439416898778888,
    orderDate: "07/03/2020",
    currency: "dollars",
    listedPrice: [94.95, 33.99],
    totalPrice: 138.93,
    productType: ["gaming accessory","book"],
    productName: ["GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)","JavaScript for impatient programmers"],
    productMaker: ["Nintendo","Faroult, Stephane"],
    shipTo: "JS Masher",
    deliveryStatus: "Delivered",
    deliveryDate: "07/05/2020",
    returnable: [true, true],
    endOfReturnWindow: ["08/04/2020", "08/04/2020"],
  }
];

//tests
console.log("obj 1:", orderHistory[0])
console.log("obj 2:", orderHistory[1])
console.log("obj 3:", orderHistory[2])
console.log("obj 4:", orderHistory[3])
