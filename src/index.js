"use strict";
const bootstrap = require("./bootstrap");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap,
};

/**
 * curl -X GET 'https://data.khmermanna.com/api/posts?sort=DatePublished:desc&pagination%5BpageSize%5D=1&pagination%5Bpage%5D=1&populate=*' \
-H "Authorization: Bearer 995ec933de9e06f4a1fd09b6baebc6485bec69fa930e3eab7bcbfd275aa8090fc8d1268fa8535d6b4b4d731bdd3e1788db9582a6ac942dbb4e022cca4cf8c868a9979e82d97baf18b4df89aacc3b18caf6d04627235c2817610feae0420822178fa7df1bea5f3d033a397f2c435d6944c98fc754d6f4b0343dc3249dd1b42c1f" \
-H "Content-Type: application/json" \
-d '{
  "name": "Developer"
}'
 */
