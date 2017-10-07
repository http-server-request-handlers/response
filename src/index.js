/* eslint no-invalid-this: off */
/* eslint consistent-this: off */

'use strict';

/**
 * an http.Server request handler that sets default values for the ServerResponse
 *
 * dependencies:
 *
 * - {number} Server.content_type
 * - {Object|undefined} Server.status_code
 *
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 * @param {Function} next
 *
 * @returns {undefined}
 */
function responseRequestHandler( req, res, next ) {
  /**
   * @type {Object}
   *
   * @property {string} content_type
   * @property {number} status_code
   */
  var Server = this;

  if ( Server.debug ) {
    console.log( '[debug]', new Date(), 'responseRequestHandler()' );
  }

  res.statusCode = Server.status_code;
  res.setHeader( 'Content-Type', Server.content_type );

  return next();
}

module.exports = responseRequestHandler;
