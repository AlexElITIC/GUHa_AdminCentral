import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    guardarAdmin(admin){
        this.transitionToRoute('listaAdmin')

    }
  }
});
