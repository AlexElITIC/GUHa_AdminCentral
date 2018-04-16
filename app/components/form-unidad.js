import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';
import { inject as service } from "@ember/service";
export default Component.extend(FindQuery, {
  store: service(),
  listaAdmin: computed(function() {
    let administradoresList = [];

			return this.get('store').findAll('administrator').then((administradores)=>{
					administradores.forEach((administrator)=>{
						administradoresList.pushObject(administrator)
					})
					return administradoresList;
			})
  }),
  actions:{
    probarCoordenadas(){
      var model = this.get('model');
      let latitud = this.get('latitud');
      let longitud = this.get('longitud');

      this.set('model.latitud',latitud);
      this.set('model.longitud',longitud);

    },
    guardarUnidad(unidad){
      console.log(this.get('selectedAdmin'))
      
      unidad.set('admin1',this.get('selectedAdmin'))
      unidad.save().then(()=>{
        this.set('latitud','');
        this.set('longitud','');
        this.sendAction('guardarUnidad',unidad)
      })
    },

}
});
