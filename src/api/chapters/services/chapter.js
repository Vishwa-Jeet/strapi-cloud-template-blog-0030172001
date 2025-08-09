'use strict';

/**
 * chapters service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chapters.chapter');
