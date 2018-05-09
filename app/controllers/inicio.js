import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { inject as service } from "@ember/service";
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
export default Controller.extend(FindQuery, {
  store: service(),
  firebaseApp: service(),
  listaUnidad: computed(function() {
		return this.get('store').findAll('unit')
	}),

  listaUnidades: computed(function () {
    return this.get('store').findAll('unit');
  }),
  selectedUnit: computed(function(){
    if(this.get('model')){
    return this.get('model')}
    else {return null}
  }),
  actions:{

    goDetails(unit){
      this.transitionToRoute('detalles',unit.get('id'))
    },
    edit(unit){
      this.transitionToRoute('editar',unit.get('id'))
    },
    clean(){
      this.set('selectedUnit',undefined);
    }
  },
  listaProductos: computed('name',function() {
    let context = this;
    return new Promise(function (resolve, reject){
    					context.filterContains(context.get('store'), 'unit', { 'nombre':context('name')}, function(unidades){
    						return resolve(unidades)
    	})
    })
  })
});
