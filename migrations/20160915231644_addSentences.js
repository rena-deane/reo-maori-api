exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.table('translations', function (table) {
        table.string('maori_sentence')
        table.string('english_sentence')
      })
    ])
};

exports.down = function(knex, Promise) {
  return knex.schema.table('translations', function (table) {
  table.dropColumn('maori_sentence');
  table.dropColumn('english_sentence');
  });
};