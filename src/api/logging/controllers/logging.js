'use strict';

/**
 * logging controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::logging.logging');
