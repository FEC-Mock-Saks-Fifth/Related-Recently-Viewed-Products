const router = require('express').Router();
const dbcontroller = require('../../db/controllers');

router.route('/hunter_all_products')
  .get(dbcontroller.getAll);

router.route('/hunter_related_products')
  .get(dbcontroller.getRelatedProducts);

// the following routes are currently unused:

// router.route('/api/recommended_products')
//   .get(dbcontroller.getRecommended);

// router.route('/api/recently_viewed')
//   .get(dbcontroller.getRecent);

module.exports = router;