import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import { computed } from '@ember/object';
export default Controller.extend({
  store: service(),
  listaUnidad: computed(function() {
		return this.get('store').findAll('housing-unit')
	}),
});
