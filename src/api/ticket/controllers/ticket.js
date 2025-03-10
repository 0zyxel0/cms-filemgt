'use strict';

/**
 * ticket controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::ticket.ticket", ({ strapi }) => ({

  getTicketDetails: async (ctx, next) => {
    const { id: id } = ctx.params;
    const { query } = ctx;

    if (!query.filters) query.filters = {}
    query.filters.id = { '$eq': id }
    try {
      let myQuery =
        `SELECT
            fileforms.id AS fileid,
            fileforms.document_id AS idfile,
            fileforms.name AS user,
            fileforms.filestatus AS status,
            fileforms.committee AS req,
            fileforms.created_at AS date,
            fileforms.fcolor AS statcolor,
            fileforms.comment,
            fileforms.tid  AS refid,
            array_agg(row_to_json(files.*)) AS mediaimgs

          FROM "fileforms"
          LEFT JOIN "files_related_mph" ON files_related_mph.field = 'form_media'
          LEFT JOIN "files" ON files.id = files_related_mph.file_id
          

          WHERE fileforms.tid = '${id}'
          GROUP BY fileforms.id
          `;
      let deftoken = await strapi.db.connection.context.raw(myQuery);
      ctx.body = { data: deftoken.rows };
    } catch (err) {
      return err;
    }
  },

}));