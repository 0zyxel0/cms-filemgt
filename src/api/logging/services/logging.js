'use strict';

/**
 * logging service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::logging.logging');
