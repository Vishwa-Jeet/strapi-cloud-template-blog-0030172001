'use strict';

/**
 * books service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::books.book');
