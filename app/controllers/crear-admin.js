import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    guardarAdmin(admin){
      admin.save().then(()=>{
        this.transitionToRoute('listaAdmin')
      })
    }
  }
});
