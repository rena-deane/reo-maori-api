exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('translations_v101').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('translations_v101').insert({id: 1, maori: 'kia ora', english: 'hello', maori_sentence: 'Kia ora.  Kei te aha? {dialect: Ngati Porou}', english_sentence: 'Hello, how are you?'}),
        knex('translations_v101').insert({id: 2, maori: 'awhina', english: 'help', maori_sentence: 'Āwhina katoa atu mātau i ō mātau mātua ki te parau, ki te rumaki i ngā kai (HP 1991:14).', english_sentence: 'We all helped our parents plough and plant the crops.'}),
        knex('translations_v101').insert({id: 3, maori: 'awhiawhi', english: 'to embrace', maori_sentence: 'I reira a Ira e whanga mai ana. Ka awhiawhi māua i a māua, kātahi ka piki ki runga o te takahī (HP 1991:253).', english_sentence: ' Ira was there waiting. We embraced each other, then got into the taxi.'}),
        knex('translations_v101').insert({id: 4, maori: 'tiaki', english: 'to guard', maori_sentence: 'I tētahi pō, ka whakaritea ko au tētahi o ngā hēteri tiaki i ngā herehere (HP 1991:113).', english_sentence: 'One night I was appointed to be one of the sentries guarding the prisoners.'}),
        knex('translations_v101').insert({id: 5, maori: 'tautoko', english: 'support', maori_sentence: 'Nā Pei Te Hurinui i whakatūturu tana tautoko i a Korokī (TTR 1998:87).', english_sentence: 'Pei Te Hurinui assured Korokī of his support.'}),
        knex('translations_v101').insert({id: 6, maori: 'technology', english: 'hangarau', maori_sentence: 'Kua angitū ētahi kamupene nā te arotahi ki te kiritaki, te nanao ki ngā hangarau hōu, te whakangao moni ki ngā mahi rangahau, te hanga rautaki hokohoko hoki (Te Ara 2015).', english_sentence: 'By targeting particular clients, using new technology, investing in research, and marketing carefully, some companies have been successful.'})
      ]);
    });
};
