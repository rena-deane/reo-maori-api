exports.up = function(knex, Promise) {
    return Promise.all([
      knex.schema.createTableIfNotExists('translations', function (table) {
        table.increments('id').primary()
        table.string('maori')
        table.string('english')
      })
    ])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('translations').then(() => {
    console.log('translations was dropped yo!');
  });
};
