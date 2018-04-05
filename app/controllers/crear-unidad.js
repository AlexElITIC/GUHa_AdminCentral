import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    guardarUnidad(unidad){
      unidad.save().then(()=>{
        this.transitionToRoute('inicio')
      })
    }
  }
});
