'use strict';

/**
 * logging router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::logging.logging');
