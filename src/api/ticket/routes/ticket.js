'use strict';

/**
 * ticket router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

const defaultRouter = createCoreRouter('api::ticket.ticket');
const customRouter = (innerRouter, extraRoutes = []) => {
    let routes;
    return {
        get prefix() {
            return innerRouter.prefix;
        },
        get routes() {
            if (!routes) routes = innerRouter.routes.concat(extraRoutes);
            return routes;
        },
    };
};
const myExtraRoutes = [
    {
        method: 'GET',
        path: '/ticketfiles/:id',
        handler: 'ticket.getFileTickets',
        config: {
            policies: [],
            middlewares: [],
        },
    },   
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
