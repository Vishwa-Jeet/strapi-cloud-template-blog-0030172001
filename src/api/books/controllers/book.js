'use strict';

/**
 * books controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::books.book');
