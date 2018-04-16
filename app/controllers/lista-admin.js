import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import { computed } from '@ember/object';

export default Controller.extend(FindQuery, {
  /*store: service(),
  listaAdmin: computed(function() {
		return this.get('store').findAll('administrator')
	}),*/actions:{  edit(admin){
      this.transitionToRoute('editar-admin',admin.get('id'))
    }}

});
