import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { inject as service } from "@ember/service";
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
export default Controller.extend(FindQuery, {
  store: service(),
  listaUnidad: computed(function() {
		return this.get('store').findAll('housing-unit')
	}),
  actions:{
    goDetails(unit){
      this.transitionToRoute('detalles',unit.get('id'))
    },
    edit(unit){
      this.transitionToRoute('editar',unit.get('id'))
    }
  },
  listaProductos: computed('name',function() {
    let context = this;
    return new Promise(function (resolve, reject){
    					context.filterContains(context.get('store'), 'housing-unit', { 'nombre':context('name')}, function(unidades){
    						//console.log(mprima[0])
    						return resolve(unidades)
    	})
    })
  })
});
