var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getVersion1() {
 return knex.select().table('translations')
}

function getVersion101() {
 return knex.select().table('translations_v101')
}

module.exports = {
  getVersion1: getVersion1,
  getVersion101: getVersion101
}
