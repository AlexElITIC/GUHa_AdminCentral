import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import { computed } from '@ember/object';

export default Controller.extend(FindQuery, {
  listaAdmin: computed(function() {
    let AdminList = [];

			return this.get('store').findAll('administrator').then((admins)=>{
					admins.forEach((administrator)=>{
						AdminList.pushObject(administrator)
					})
					return AdminList;
			})
  }),
  selectedAdmin: computed(function(){
    if(this.get('model')){
    return this.get('model')}
    else {return null}
  }),
  actions:{  edit(admin){
      this.transitionToRoute('editar-admin',admin.get('id'))
    },
    clean(){
      this.set('selectedAdmin',undefined);
    }
  }

});
