import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import { computed } from '@ember/object';

export default Controller.extend({
  /*store: service(),
  listaAdmin: computed(function() {
		return this.get('store').findAll('administrator')
	}),*/actions:{  edit(admin){
      this.transitionToRoute('editar-admin',admin.get('id'))
    }}

});
