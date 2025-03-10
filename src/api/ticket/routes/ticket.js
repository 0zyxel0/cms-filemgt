'use strict';

/**
 * ticket router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::ticket.ticket');

const defaultRouter = createCoreRouter('api::ticket.ticket');
// This will parse the custom
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
        path: '/ticketinfo/:id',
        handler: 'ticket.getTicketDetails',
        config: {
            policies: [],
            middlewares: [],
        },
    },   
];

module.exports = customRouter(defaultRouter, myExtraRoutes);
