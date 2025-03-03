'use strict';

/**
 * ticket controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::ticket.ticket", ({ strapi }) => ({

  getFileTickets: async (ctx, next) => {
    const { id: id } = ctx.params;
    const { query } = ctx;

    if (!query.filters) query.filters = {}
    query.filters.id = { '$eq': id }

    try {
      let myQuery =
        `SELECT
            fileforms.id,
            fileforms.document_id AS idfile,
            fileforms.name AS user,
            fileforms.filestatus AS status,
            fileforms.committee AS req,
            fileforms.created_at AS date,
            fileforms.comment,
            fileforms.tid  AS refid

          FROM "fileforms"

          WHERE fileforms.tid = '${id}'`;
      let deftoken = await strapi.db.connection.context.raw(myQuery);
      ctx.body = { data: deftoken.rows };
    } catch (err) {
      return err;
    }
  },

}));