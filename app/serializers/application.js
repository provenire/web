import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  attrs: {
    role: { serialize: false },
    uuid: { serialize: false },
    slug: { serialize: false },
    createdAt: { serialize: false },
    updatedAt: { serialize: false }
  }
});
