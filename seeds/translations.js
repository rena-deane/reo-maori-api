exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('translations').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('translations').insert({id: 1, maori: 'kia ora', english: 'hello'}),
        knex('translations').insert({id: 2, maori: 'awhina', english: 'help'}),
        knex('translations').insert({id: 3, maori: 'aroha', english: 'love'}),
        knex('translations').insert({id: 4, maori: 'manaaki', english: 'care'}),
        knex('translations').insert({id: 5, maori: 'tautoko', english: 'support'}),
        knex('translations').insert({id: 6, maori: 'technology', english: 'hangarau'})
      ]);
    });
};
