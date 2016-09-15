exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('translations_v101', function (table) {
      table.increments('id').primary()
      table.string('maori')
      table.string('english')
      table.string('maori_sentence')
      table.string('english_sentence')
    })
  ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('translations_v101').then(() => {
    console.log('translations version 1.1 was dropped yo!');
  });
};
