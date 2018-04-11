import Component from '@ember/component';

export default Component.extend({
  actions:{
    probarCoordenadas(){
      var model = this.get('model');
      let latitud = this.get('latitud');
      let longitud = this.get('longitud');

      this.set('model.latitud',latitud);
      this.set('model.longitud',longitud);

    },
    guardarUnidad(unidad){
      unidad.save().then(()=>{
        this.set('latitud','');
        this.set('longitud','');
        this.sendAction('guardarUnidad',unidad)
      })
    }
  }
});
