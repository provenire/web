import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  attrs: {
    uuid: { serialize: false },
    slug: { serialize: false },
    createdAt: { serialize: false },
    updatedAt: { serialize: false }
  }
});
