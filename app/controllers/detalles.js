import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    edit(unit){
      this.transitionToRoute('editar',unit.get('id'))
    },
    borrarUnidad(unit){
      unit.destroyRecord().then(() => {
        this.transitionToRoute('inicio')
      });
    }
  }
});
