const db = require('./dbconnection/index.js');
const Product = require('./dbconnection/Product.js');

const images = ['https://images.footlocker.com/is/image/EBFL2/A22T4J45_a1?wid=640&hei=640&fmt=png-alpha',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVp_H9O5x3WjxzHAmuiqhbL1DUIbv7DEXGKO8yLz1Y4jB7i89GnPejSmGKUQMy7Bu5ojUMEKPhOsS_25MuxkW3m_AWD8y-Z0yVFyntxrPejGJp90Jf6oUiTw&usqp=CAc',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-kZgePN4rR-R93-O7tva3bcHdi0yJj_8oyehh5e5RuEir8BeDDpq3pfiPZj3THwcfv-IMV4VQf1PiuIbguzf6CfmYZeq9Q66ul0K7t4nF7fAtBQ78TDjvYg&usqp=CAc',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgq18Clx_8hEQfBHFhNdkUNjn8mPttq4jVF5wd3ufLLgoKs0KCVIILwC4QXJZ1yxL8YWAeohmwj_kKJkxhE-iOp-8nmBuTr-8iq_zkfNq-My9XRAv5pFkj&usqp=CAc',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQDlRXtkbvpkRBHXo7RCyQaCHHkqXrKCi7xWQ8jXnZ2xZ3qlfsi5fxyfyUN2jCl8QJEBNhajRTnWeK8ZocMI9piZkZKGSaaz0BsZZpyr2IT6GPEugpb32Y8-A&usqp=CAc',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZJ2YMSHC93JDtNoPWNON3nsMRG6FX717MXENi61SnJ1ya13KkJCXvnH57tgfEePvNPW3IXGFdJc9Qgk0GM-n3Pj7Q1N5SL6IKSIbqc-HpzIEVJHTCuZU2&usqp=CAc',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSRAW-FONyeutmCsWJBE30cehhjkrirR-zy_7AvpDbjRVAznBkKWaWjwudc-cSHhNS9v4dj6kMUaph_WhKAOgf8y2gumvfJY6WZnJ06QgPFfyv8UQiyCqdbqg&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJ-t_2ufs8SMNraiGouPxTxDnwYXUOd_OsKoFh7X-OUOuKr9Zd44Xa7XgNlnWpXOhIQ1iEguJxcErByK6V6riWHkzz--E1Fg5Jhx6Z-ivN2IZWyoN0Ni5tGDs&usqp=CAc',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScBcjPA5jv4bj_3EipOaVS9at9OtI25TfLxM5AJIhrlK-QuN5iQTGprF-U6D7nUfEPiIgTmPWq2UMNvnDVCtDm64aujMHg-e1rOzgKKGvvmG4nUrfOjzbFD-k&usqp=CAc',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT0HEDJoWZImR7cw5ddbzxd8RbhGijGCi0tvXL2BWaaJ1TiU4WLHUSlYie_3wF-cENEfWnR8_QbsL-0T5m27g6GZIejux-ybBIKsNbAm5GOqbjk0kYSqQc2-Q&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbPj9mit1eCb0slGEoyHlgKE-zjcY5Xfux3ofu3NNKD5mGGI5z6EIHh9liQdnLKJAZobqxUGOc-tYm9O5cflSLTxx20WdP8vb6DMa4LUwGN00N9X978LcidA&usqp=CAc',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRccEZ057XnJ_X2h5IzD6e12ua5ZvpWjvrlTOqa3J7slpfxBly6KNsbDSEw8BYvHHRMLFzJ63N3o2CThh9nXq-tPaDOGPoCCKigVFCPX3Qxa_J7D61FqqwPp4g&usqp=CAc',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRccEZ057XnJ_X2h5IzD6e12ua5ZvpWjvrlTOqa3J7slpfxBly6KNsbDSEw8BYvHHRMLFzJ63N3o2CThh9nXq-tPaDOGPoCCKigVFCPX3Qxa_J7D61FqqwPp4g&usqp=CAc',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSTKYKz2NzuaCVZ4fFAzsFQ0SJBJsCYZB_AKw8666YNe9JmoPdOTIJuHsvECHgZN1wOX6BAJUYieaQuYsTb9vm2BF7OhStZz49d3-g3hrQkNUo3Ad7ri0btoA&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ2S_hwYrAQfg39tXujiWR_u4htCo2NqTyxK2mXCGAqlCdrMnqvn9VUhWiG1Wy3SZI83nYX3QKd-izSSYTqefqyA3E_cCY3GpK8mpdeYKqprn5GR-M-CPC0qQ&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ2S_hwYrAQfg39tXujiWR_u4htCo2NqTyxK2mXCGAqlCdrMnqvn9VUhWiG1Wy3SZI83nYX3QKd-izSSYTqefqyA3E_cCY3GpK8mpdeYKqprn5GR-M-CPC0qQ&usqp=CAc',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXkEydNidca4twmCjnFQmJIj0xxbCbj9V1pYjlEzPOge30F_SrhU2CvfdRcl9xsA512KqOnfsC0jac-M_agFZWSIGBLyRZocE6r_VGTExX__fKwhjrFR62IKo&usqp=CAc',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMHP-yVRPSmkuis5ubN0seNa0KSrg9Fi3xUV9UQljFFv3A6kEuoVczyhyb8CY4CC6K-AOuYj267hbhHwtxWaxixTXu0MCVWN2MQed6NgSPWsVECC5pj9fE7w&usqp=CAc',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTMHP-yVRPSmkuis5ubN0seNa0KSrg9Fi3xUV9UQljFFv3A6kEuoVczyhyb8CY4CC6K-AOuYj267hbhHwtxWaxixTXu0MCVWN2MQed6NgSPWsVECC5pj9fE7w&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUbcVvMKyMDIAZbd1BjVe0EQOsHkF4ehMcR1bM6w1RWdZ8FY71bD639NuK6gQvTTSjHO4Sl2Ph7iOPiKHZLv9-m9nm8Qy94KbrI7SzmscGCx4S3VtF1TEPdw&usqp=CAc',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZ_DFjB_fGNPChDChM78gMYOaTT2YZbkUy_oKtQqugkRqGn13-XyCiOwDIkugUqhoLIRfK8esEbFVdDdWRcFgDm3sRvk_M_LwjeAG6QX-vluUCeTQm2hbuVqg&usqp=CAc',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ553pxkGKVmPtXFMIDZ-1Iz8WSMkWdmQGD8xolCX1eWzaK58yFyQSChYET9CSyjeI2dVX2ddGV0wy_2nJm4vfAQGCsaipSqmQ7Y9q6uAWJaLR90yjrWZrkxb4&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTp_-R_QlDzss9s3zyhS9P1upOxt7vWtMCB0xvBOcq9Td9YpAw1QjDfcdeZORwoxESXL3Qws3BBtLIihkdTH3KJFowGX1veQVygOo5MA136YWUQcPu00lbmzpY&usqp=CAc',
'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHDlvToVS9tvDE5yjrx4UqjtdBjbpCsl0noiABYMXfZsRre31MzKQNuk3aKVnxtNWcjJG7_t-wD_GIEByHY3MZFo0kZ9zeeNAAe-AxFnaBXrGrSNLQYOIQaQ&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSqv8M_oTvqJgP3xcqut5ByWWw_Xg_T_tNsQ1f6XvZYPXjA86dHAacv1gs6MoKFt7ltR9WjPhe59nGjEMrU15q7RFqjAwLBwHl7EHaxCpwJXAEs4wZs4mrz&usqp=CAc',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSH9zZFrU5sRLYMCEEHGpcaJwj28elPrWPAfdITVuuFnQW_bfML5jahhkTyBfX0CVLeGPL5mIrFh-VUcP7K-CRXhFJ_ti64EQn_oaeTr2X08KWEdGJ8Ouw-JA&usqp=CAc',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSVRxYys9oRWV1CA1Blkt0m9zXKiE7oI9jlbj7II3KTrHEcI8w96sgYfKB6uQLHjSDp014Qu_X5jmf6jEdZT22TpCfd9EjjM3gb5cvLdPrFnwZC-oMMOpE4&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQVpY8fj_QUSND4kDf1Z7s1KLsCZyzd4dtQOCMAUvhq7S6DgJ5-nTD9VhCoUoXDp9hL9WdBEAp-nL_Q0ChE4HJhFDM-MD1F-BV3o-iwm_k-0Nkzn6-taY5L5w&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT4TajzQqKUdQi8LYVjWa_JKsf8pvBn7nqLQx6ignRh9g7Xhp_q4FlgqwoUoHgOKAdfz2FeRdCnFxl4TayXUgz4FSpDmmkDSQOHS3IEgRtmsf1ryHe0i2LS&usqp=CAc',
'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQBVYl5ltc6_oXXce8ac-DODqW6mH8xsRpvA-cwVqvlC8h1li_TOvz7pqPWZMOt9IO-ZjcMgADD1QZrws1NC72W1CB3yVN2Q5T4Hv2cXPmYd4C0SaDoUR12Zw&usqp=CAc',
'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQvp3gqZdUf8aYwTMQaHgPEB0nmxYNjb8CPqPVkGBT3JT_etu7yTcwSg4De_W-HG4A-Kn12lTbPYqWRcJapIK7MjxaibKitAWEqFwoHiynPx2IOTYOBaTcH&usqp=CAc',
'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTk9Q-bTzaoPhXUbVpO-smP7LShUi6uu743XWPSnDmfPII2ywj4kCmPZpZ02HOtN0GvmMWDMFqhGcfu7-r8alBOkzTFwN7-DVHbQ78QI3pd_DPWF92RCfuN&usqp=CAc'
];
const brands = ['Tomberlond', 'Guqqi', 'Barenciala', 'Crogs', 'Givilchy', 'Valentenough', 'Proda', 'Flemdy', 'Yoozy', 'Gole & Chabana', ];
const description = ['So Rich Right Now', 'Very Comfy', 'Extra Classy', 'Shouldve Gone to Walmart', 'Looks Like it Tickles', 'Bootlike', 'So Much Money', 'Only Fivehundred Bucks', 'Send Me Your Money Instead', 'LOL', 'Naahhhhh', 'EXTREME', 'Fancy Shoe', 'Look so Rich', 'Can You Believe It', 'Shoe Shoe', 'Cant Even', 'Kanye Shoe', 'Shoe', 'Lets Get Some Shoe', 'Baked Beans'];
const prices = [1000.99, 500.50, 250.00, 799.99, 100.00, 899.99, 1200.75, 1500.00, 300.99, 150.00, 675.99, 999.99, 150.00, 180.99, 1234.12, 99.99, 2000.00];
const rating_nums = [1, 5, 11, 15, 77, 23, 9, 8, 66, 2, 3, 4, 6, 7, 10];
const stars = ['⭑', '⭑⭑', '⭑⭑⭑', '⭑⭑⭑⭑', '⭑⭑⭑⭑⭑'];

// container for randomly generated product data to be seeded
const data = [];

var generateData = function() {
  for (var i = 0; i < images.length; i++) {
    data.push({
      product_image: images[i],
      product_brand: brands[Math.floor(Math.random() * brands.length)],
      product_description: description[Math.floor(Math.random() * description.length)],
      product_long_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      product_price: prices[Math.floor(Math.random() * prices.length)],
      product_rating_num: rating_nums[Math.floor(Math.random() * rating_nums.length)],
      product_rating_avg: stars[Math.floor(Math.random() * stars.length)]
    })
  }
}

const seedDatabase = function() {
  Product.remove({}) // remove is deprecated, use deleteMany or bulkWrite instead
  .then(Product.create(data))
  // .then(db.close());
}

generateData();
seedDatabase();