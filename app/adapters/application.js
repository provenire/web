import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'web/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host:       ENV.apiBase,
  authorizer: ENV.authorizer
});
