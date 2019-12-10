const db = require('./dbconnection/index.js');
const Product = require('./dbconnection/Product.js');

const images = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
];
const brands = [
  'Tomberlond',
  'Guqqi',
  'Barenciala',
  'Crogs',
  'Givilchy',
  'Valentenough',
  'Proda',
  'Flemdy',
  'Yoozy',
  'Gole & Chabana'
];

const description = [
  'So Rich Right Now',
  'Very Comfy',
  'Extra Classy',
  'Shouldve Gone to Walmart',
  'Looks Like it Tickles',
  'Bootlike',
  'So Much Money',
  'Only Fivehundred Bucks',
  'Send Me Your Money Instead',
  'LOL',
  'Naahhhhh',
  'EXTREME',
  'Fancy Shoe',
  'Look so Rich',
  'Can You Believe It',
  'Shoe Shoe',
  'Cant Even',
  'Kanye Shoe',
  'Shoe',
  'Lets Get Some Shoe',
  'Baked Beans'
];

const stars = [
  '⭑',
  '⭑⭑',
  '⭑⭑⭑',
  '⭑⭑⭑⭑',
  '⭑⭑⭑⭑⭑'
];

// container for randomly generated product data to be seeded
const data = [];

var generateData = function() {
  for (var i = 0; i < images.length; i++) {
    data.push({
      product_image: images[i],
      product_brand: brands[Math.floor(Math.random() * brands.length)],
      product_description: description[Math.floor(Math.random() * description.length)],
      product_long_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      product_price: Math.floor(Math.random() * 250000) / 100,
      product_rating_num: Math.floor(Math.random() * 150),
      product_rating_avg: stars[Math.floor(Math.random() * stars.length)]
    })
  }
}

const seedDatabase = function() {
  Product.deleteMany({}) // remove is deprecated, use deleteMany or bulkWrite instead
  .then(Product.create(data))
  // .then(db.close());
}

generateData();
// console.log(data);
seedDatabase();